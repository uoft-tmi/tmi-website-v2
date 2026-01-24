"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Project, ProjectMedia } from "./types";

interface ProjectMediaCarouselProps {
  project: Project;
}

export function ProjectMediaCarousel({ project }: ProjectMediaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const onReInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);
    
    // Trigger initial setup via reInit event
    emblaApi.reInit();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi, onSelect, onReInit]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  // Prepare slides: overview slide + media slides
  const slides: (ProjectMedia | { type: "overview" })[] = [
    { type: "overview" },
    ...project.media.filter((m) => m.type !== "overview"),
  ];

  const renderSlide = (slide: ProjectMedia | { type: "overview" }, index: number) => {
    if (slide.type === "overview") {
      return (
        <div
          key="overview"
          className="flex flex-col justify-center p-4 md:p-6 min-h-[160px] md:min-h-[180px]"
        >
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-text-muted line-clamp-3 mb-3">
            {project.description}
          </p>
          <p className="text-xs text-text-muted">
            Research Leads: {project.leads.join(", ")}
          </p>
        </div>
      );
    }

    if (slide.type === "image") {
      return (
        <div
          key={`image-${index}`}
          className="relative w-full h-[200px] md:h-[240px] flex items-center justify-center bg-background"
        >
          <Image
            src={slide.src}
            alt={slide.alt || project.title}
            fill
            className="object-contain p-3 md:p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
            unoptimized
          />
        </div>
      );
    }

    if (slide.type === "code") {
      return (
        <div
          key={`code-${index}`}
          className="w-full h-[240px] md:h-[280px] overflow-auto bg-gray-900 dark:bg-gray-950 p-3 md:p-4"
        >
          <div className="mb-2 text-xs text-gray-400 font-mono">
            {slide.language}
          </div>
          <pre className="text-xs text-gray-100 font-mono overflow-x-auto">
            <code>{slide.code}</code>
          </pre>
        </div>
      );
    }

    if (slide.type === "video") {
      return (
        <div
          key={`video-${index}`}
          className="relative w-full h-[200px] md:h-[240px] flex items-center justify-center bg-background"
        >
          <video
            src={slide.src}
            controls
            className="max-w-full max-h-full"
            aria-label={`Video for ${project.title}`}
          />
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={`Carousel for ${project.title}`}
    >
      <div className="overflow-hidden rounded-t-lg" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${slides.length}`}
            >
              {renderSlide(slide, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Arrow Buttons */}
      {(canScrollPrev || canScrollNext) && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card/90 backdrop-blur-sm border border-secondary/20 text-text-primary hover:bg-card hover:text-primary transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
              isHovered && canScrollPrev
                ? "opacity-100"
                : "opacity-0 md:opacity-0"
            } disabled:opacity-30 disabled:cursor-not-allowed`}
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card/90 backdrop-blur-sm border border-secondary/20 text-text-primary hover:bg-card hover:text-primary transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
              isHovered && canScrollNext
                ? "opacity-100"
                : "opacity-0 md:opacity-0"
            } disabled:opacity-30 disabled:cursor-not-allowed`}
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-2 py-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                index === selectedIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-secondary/30 hover:bg-secondary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selectedIndex ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
}

