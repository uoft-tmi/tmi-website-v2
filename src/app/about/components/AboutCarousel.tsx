"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Joeun",
    role: "Co-President",
    imageUrl: "/images/people/joeun.jpeg",
    bio: "Swimming, kickboxing, travelling",
  },
  {
    name: "Steven",
    role: "Co-President",
    imageUrl: "/images/people/steven.jpeg",
    bio: "I'm a big map nerd lol",
  },
  {
    name: "Anthony",
    role: "VP Webmaster",
    imageUrl: "/images/people/anthony.jpeg",
    bio: "I run and eat too much",
  },
  {
    name: "Lillian",
    role: "VP Finance",
    imageUrl: "/images/people/lillian.jpeg",
    bio: "Violin, golf, archery",
  },
  {
    name: "Kera",
    role: "VP Learnings",
    imageUrl: "/images/people/kera.png",
    bio: "piano, reading",
  },
  {
    name: "Christina",
    role: "Project Lead: Context-Based Captioning",
    imageUrl: "/images/people/christina.png",
    bio: "Human-centric AI, ML for Privacy/Defense",
  },
  {
    name: "Clementine",
    role: "Project Lead: LLM Social Simulation",
    imageUrl: "/images/people/clementine.jpeg",
    bio: "I have a dog and I play badminton",
  },
  {
    name: "Seoyun",
    role: "Project Lead: Machine Unlearning",
    imageUrl: "/images/people/seoyun.jpeg",
    bio: "Reading, Crocheting/Knitting, Watching anime",
  },
  {
    name: "Yiping",
    role: "Project Lead: Explainable Cencorship",
    imageUrl: "/images/people/yiping.jpeg",
    bio: "I like playing tetris!!!",
  },
];

export default function AboutCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setIndex((prev) => (prev + 1) % teamMembers.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") next();
      else if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  const leftIndex = (index - 1 + teamMembers.length) % teamMembers.length;
  const rightIndex = (index + 1) % teamMembers.length;

  const cardTransition = { type: "spring", stiffness: 300, damping: 30 } as const;

  return (
    <main className="min-h-dvh w-full flex items-center justify-center bg-background overflow-hidden">
      <section className="w-full max-w-6xl px-4 md:px-6 py-12 md:py-16 text-center">

        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-8 md:mb-12 uppercase tracking-tighter">
          Meet the Executive Team
        </h1>

        <div className="relative flex items-center justify-center gap-2 md:gap-8 h-[520px]">

          <button
            onClick={prev}
            className="z-50 p-2 md:p-3 rounded-full bg-white dark:bg-card shadow-lg border border-secondary/20 dark:border-secondary/30 hover:scale-110 active:scale-95 transition-transform"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div className="relative flex items-center justify-center w-full max-w-5xl">
            <AnimatePresence initial={false} mode="popLayout">
              {/* CENTER CARD */}
              <motion.div
                key={`center-${index}`}
                initial={{ x: direction > 0 ? 400 : -400, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: direction > 0 ? -400 : 400, opacity: 0, scale: 0.8 }}
                transition={cardTransition}
                className="absolute z-30 w-full max-w-[300px] md:max-w-sm h-[500px] p-6 md:p-8 rounded-3xl shadow-2xl border border-secondary/20 dark:border-secondary/30 bg-card flex flex-col items-center"
              >
                <div className="relative aspect-[3/4] w-48 mb-6 overflow-hidden rounded-2xl ring-4 ring-white shadow-inner">
                  <Image
                    src={teamMembers[index].imageUrl}
                    alt={teamMembers[index].name}
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="192px"
                  />
                </div>
                <h2 className="text-2xl font-bold text-text-primary">{teamMembers[index].name}</h2>
                <p className="text-secondary font-bold tracking-widest uppercase text-xs mt-1">{teamMembers[index].role}</p>

                <div className="w-10 h-1 bg-primary mx-auto rounded-full mt-2" />

                <p className="pt-4 text-text-muted text-sm leading-relaxed italic">Fun fact/hobby: {teamMembers[index].bio}</p>
              </motion.div>

              {/* LEFT CARD */}
              <motion.div
                key={`left-${leftIndex}`}
                initial={{ x: direction > 0 ? -800 : 0, opacity: 0, scale: 0.7 }}
                animate={{ x: -380, opacity: 0.4, scale: 0.75 }}
                exit={{ x: direction > 0 ? 0 : -800, opacity: 0, scale: 0.7 }}
                transition={cardTransition}
                className="hidden md:block absolute w-64 h-80 border-2 border-secondary/20 dark:border-secondary/30 rounded-3xl overflow-hidden cursor-pointer shadow-lg bg-white dark:bg-card"
                style={{ filter: "grayscale(70%) brightness(0.9)" }}
                onClick={prev}
                whileHover={{ scale: 0.78, opacity: 0.5, filter: "grayscale(50%) brightness(1)" }}
              >
                <Image src={teamMembers[leftIndex].imageUrl} alt={teamMembers[leftIndex].name} fill className="object-cover object-top" sizes="256px" />
              </motion.div>

              {/* RIGHT CARD */}
              <motion.div
                key={`right-${rightIndex}`}
                initial={{ x: direction > 0 ? 0 : 800, opacity: 0, scale: 0.7 }}
                animate={{ x: 380, opacity: 0.4, scale: 0.75 }}
                exit={{ x: direction > 0 ? 800 : 0, opacity: 0, scale: 0.7 }}
                transition={cardTransition}
                className="hidden md:block absolute w-64 h-80 border-2 border-secondary/20 dark:border-secondary/30 rounded-3xl overflow-hidden cursor-pointer shadow-lg bg-white dark:bg-card"
                style={{ filter: "grayscale(70%) brightness(0.9)" }}
                onClick={next}
                whileHover={{ scale: 0.78, opacity: 0.5, filter: "grayscale(50%) brightness(1)" }}
              >
                <Image src={teamMembers[rightIndex].imageUrl} alt={teamMembers[rightIndex].name} fill className="object-cover object-top" sizes="256px" />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="z-50 p-2 md:p-3 rounded-full bg-white dark:bg-card shadow-lg border border-secondary/20 dark:border-secondary/30 hover:scale-110 active:scale-95 transition-transform"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {teamMembers.map((_, i) => (
            <div
              key={i}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? "w-10 bg-secondary" : "w-2.5 bg-secondary/30"}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
