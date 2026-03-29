"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Project, ProjectMedia } from "./types";

interface ProjectMediaCarouselProps {
    project: Project;
}

export function ProjectMediaCarousel({ project }: ProjectMediaCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
    });
    const [overlayEmblaRef, overlayEmblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [overlayStartIndex, setOverlayStartIndex] = useState(0);
    const [overlaySelectedIndex, setOverlaySelectedIndex] = useState(0);
    const [overlayScrollSnaps, setOverlayScrollSnaps] = useState<number[]>([]);
    const [overlayCanScrollPrev, setOverlayCanScrollPrev] = useState(false);
    const [overlayCanScrollNext, setOverlayCanScrollNext] = useState(false);
    const overlayPanelRef = useRef<HTMLDivElement>(null);

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

    const onOverlaySelect = useCallback(() => {
        if (!overlayEmblaApi) return;
        setOverlaySelectedIndex(overlayEmblaApi.selectedScrollSnap());
        setOverlayCanScrollPrev(overlayEmblaApi.canScrollPrev());
        setOverlayCanScrollNext(overlayEmblaApi.canScrollNext());
    }, [overlayEmblaApi]);

    const onOverlayReInit = useCallback(() => {
        if (!overlayEmblaApi) return;
        setOverlayScrollSnaps(overlayEmblaApi.scrollSnapList());
        onOverlaySelect();
    }, [overlayEmblaApi, onOverlaySelect]);

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

    useEffect(() => {
        if (!overlayEmblaApi) return;

        overlayEmblaApi.on("select", onOverlaySelect);
        overlayEmblaApi.on("reInit", onOverlayReInit);
        overlayEmblaApi.reInit();

        return () => {
            overlayEmblaApi.off("select", onOverlaySelect);
            overlayEmblaApi.off("reInit", onOverlayReInit);
        };
    }, [overlayEmblaApi, onOverlaySelect, onOverlayReInit]);

    useEffect(() => {
        if (!isOverlayOpen || !overlayEmblaApi) return;

        const timer = window.setTimeout(() => {
            overlayEmblaApi.reInit();
            overlayEmblaApi.scrollTo(overlayStartIndex, true);
        }, 0);

        return () => window.clearTimeout(timer);
    }, [isOverlayOpen, overlayEmblaApi, overlayStartIndex]);

    useEffect(() => {
        if (!isOverlayOpen) return;
        overlayPanelRef.current?.focus();
    }, [isOverlayOpen]);

    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi],
    );

    const scrollOverlayTo = useCallback(
        (index: number) => overlayEmblaApi?.scrollTo(index),
        [overlayEmblaApi],
    );

    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext();
    }, [emblaApi]);

    const scrollOverlayPrev = useCallback(() => {
        overlayEmblaApi?.scrollPrev();
    }, [overlayEmblaApi]);

    const scrollOverlayNext = useCallback(() => {
        overlayEmblaApi?.scrollNext();
    }, [overlayEmblaApi]);

    const openOverlay = useCallback((index: number) => {
        setOverlayStartIndex(index);
        setIsOverlayOpen(true);
    }, []);

    const closeOverlay = useCallback(() => {
        setIsOverlayOpen(false);
    }, []);

    const handleCarouselClick = useCallback(
        (e: React.MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.closest(
                    "button, a, input, textarea, select, label, pre, code, [data-no-overlay-open]",
                )
            ) {
                return;
            }
            openOverlay(selectedIndex);
        },
        [openOverlay, selectedIndex],
    );

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
        [scrollPrev, scrollNext],
    );

    const handleOverlayKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                e.preventDefault();
                scrollOverlayPrev();
            } else if (e.key === "ArrowRight") {
                e.preventDefault();
                scrollOverlayNext();
            } else if (e.key === "Escape") {
                e.preventDefault();
                closeOverlay();
            }
        },
        [scrollOverlayPrev, scrollOverlayNext, closeOverlay],
    );

    // Prepare slides: media slides only (images, code, video)
    const slides = project.media.filter((m) => m.type !== "overview");

    // Don't render carousel if there are no media slides
    if (slides.length === 0) {
        return null;
    }

    const overlayLinks = [
        { label: "GitHub", href: project.links.github },
        { label: "Paper", href: project.links.paper },
        { label: "Demo", href: project.links.demo },
        { label: "HuggingFace", href: project.links.huggingface },
        { label: "Proposal", href: project.links.proposal },
        { label: "Slides", href: project.links.slides },
    ].filter((link): link is { label: string; href: string } =>
        Boolean(link.href),
    );

    const renderSlide = (
        slide: ProjectMedia,
        index: number,
        mode: "card" | "overlay" = "card",
    ) => {
        if (slide.type === "image") {
            if (mode === "overlay") {
                return (
                    <div
                        key={`image-${index}`}
                        className="relative h-full w-full flex items-center justify-center bg-background"
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt || project.title}
                            fill
                            className="object-contain p-4 md:p-6"
                            sizes="(max-width: 768px) 100vw, 80vw"
                            unoptimized
                        />
                    </div>
                );
            }

            return (
                <div key={`image-${index}`} className="w-full">
                    <div className="relative w-full h-[200px] md:h-[240px] flex items-center justify-center bg-background">
                        <Image
                            src={slide.src}
                            alt={slide.alt || project.title}
                            fill
                            className="object-contain p-3 md:p-4"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                            unoptimized
                        />
                    </div>
                </div>
            );
        }

        if (slide.type === "code") {
            return (
                <div
                    key={`code-${index}`}
                    className={`w-full overflow-auto bg-gray-900 dark:bg-gray-950 p-3 md:p-4 ${
                        mode === "overlay" ? "h-full" : "h-[240px] md:h-[280px]"
                    }`}
                >
                    <div className="mb-2 text-xs text-gray-400 font-mono">
                        {slide.language}
                    </div>
                    <pre className="text-xs text-gray-100 font-mono overflow-x-auto">
                        <code data-no-overlay-open>{slide.code}</code>
                    </pre>
                </div>
            );
        }

        if (slide.type === "video") {
            return (
                <div
                    key={`video-${index}`}
                    className={`relative w-full flex items-center justify-center bg-background ${
                        mode === "overlay" ? "h-full" : "h-[200px] md:h-[240px]"
                    }`}
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
            <div
                className="overflow-hidden rounded-t-lg cursor-zoom-in"
                ref={emblaRef}
                onClick={handleCarouselClick}
            >
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
                        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card/90 backdrop-blur-sm border border-secondary/20 text-text-primary hover:bg-card hover:text-primary transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 cursor-grab ${
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
                        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card/90 backdrop-blur-sm border border-secondary/20 text-text-primary hover:bg-card hover:text-primary transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 cursor-grab ${
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
                            aria-current={
                                index === selectedIndex ? "true" : "false"
                            }
                        />
                    ))}
                </div>
            )}

            {isOverlayOpen && (
                <div
                    className="fixed inset-0 z-50 bg-transparent px-4 py-6 md:px-10 md:py-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${project.title} enlarged media carousel`}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) closeOverlay();
                    }}
                >
                    <div
                        ref={overlayPanelRef}
                        className="relative mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-card shadow-2xl"
                        onKeyDown={handleOverlayKeyDown}
                        tabIndex={-1}
                    >
                        <button
                            type="button"
                            onClick={closeOverlay}
                            className="absolute right-3 top-3 z-20 rounded-full bg-black/60 px-3 py-1 text-sm text-white hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                            aria-label="Close enlarged carousel"
                        >
                            Close
                        </button>

                        <div className="relative flex min-h-0 flex-[0_0_70%] flex-col rounded-t-2xl">
                            <div
                                className="min-h-0 flex-1 overflow-hidden"
                                ref={overlayEmblaRef}
                            >
                                <div className="flex h-full">
                                    {slides.map((slide, index) => (
                                        <div
                                            key={`overlay-${index}`}
                                            className="flex-[0_0_100%] min-w-0"
                                            role="group"
                                            aria-roledescription="slide"
                                            aria-label={`Slide ${index + 1} of ${slides.length}`}
                                        >
                                            {renderSlide(
                                                slide,
                                                index,
                                                "overlay",
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {(overlayCanScrollPrev || overlayCanScrollNext) && (
                                <>
                                    <button
                                        onClick={scrollOverlayPrev}
                                        disabled={!overlayCanScrollPrev}
                                        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-card/95 p-3 text-text-primary shadow-lg transition-opacity hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:cursor-not-allowed disabled:opacity-30"
                                        aria-label="Previous slide"
                                    >
                                        <svg
                                            className="h-6 w-6"
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
                                        onClick={scrollOverlayNext}
                                        disabled={!overlayCanScrollNext}
                                        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-card/95 p-3 text-text-primary shadow-lg transition-opacity hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:cursor-not-allowed disabled:opacity-30"
                                        aria-label="Next slide"
                                    >
                                        <svg
                                            className="h-6 w-6"
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

                            {overlayScrollSnaps.length > 1 && (
                                <div className="flex shrink-0 justify-center gap-2 py-4">
                                    {overlayScrollSnaps.map((_, index) => (
                                        <button
                                            key={`overlay-dot-${index}`}
                                            onClick={() =>
                                                scrollOverlayTo(index)
                                            }
                                            className={`h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                                                index === overlaySelectedIndex
                                                    ? "w-8 bg-primary"
                                                    : "w-2 bg-secondary/30 hover:bg-secondary/50"
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                            aria-current={
                                                index === overlaySelectedIndex
                                                    ? "true"
                                                    : "false"
                                            }
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="min-h-0 flex-[0_0_30%] border-t border-secondary/20 px-5 py-4 md:px-6 md:py-5 text-text-primary">
                            <div className="themed-scrollbar h-full overflow-y-auto pr-1">
                                <h3 className="text-lg md:text-2xl font-bold text-primary">
                                    {project.title}
                                </h3>
                                <p className="mt-2 text-sm md:text-base text-text-muted">
                                    {project.description}
                                </p>
                                <p className="mt-3 text-xs md:text-sm text-text-muted">
                                    Research Leads: {project.leads.join(", ")}
                                </p>
                                {project.advisor && (
                                    <p className="text-xs md:text-sm text-text-muted">
                                        Advising Professor: {project.advisor}
                                    </p>
                                )}
                                {project.tags.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-secondary/50 bg-secondary/10 px-3 py-1 text-xs text-secondary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                {overlayLinks.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-2 pb-1">
                                        {overlayLinks.map((link) => (
                                            <a
                                                key={link.label}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center rounded-md border border-secondary/30 px-4 py-2 text-sm font-medium text-secondary transition-colors hover:bg-secondary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
