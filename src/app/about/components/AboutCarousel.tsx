"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


const vps = [
  {
    name: "VP1",
    role: "President",
    imageUrl: "https://shapes.inc/api/public/avatar/milkywaycookie-wvzv",
    bio: "Current President of the Trustworthy Machine Intelligence Club.",
  },
  {
    name: "VP2",
    role: "Vice President",
    imageUrl: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5JTIwaW4lMjBzdWl0fGVufDB8fDB8fHww",
    bio: "Assisting the President in all duties and responsibilities.",
  },
  {
    name: "VP3",
    role: "Vice President",
    imageUrl: "https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=",
    bio: "Supporting the President and Vice President 1.",
  },
  {
    name: "VP4",
    role: "President",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvEZFi-87iu4RSUyE_76vygxlnFUDUPIRGw&s",
    bio: "Current President of the Trustworthy Machine Intelligence Club.",
  },
  {
    name: "VP5",
    role: "Vice President",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQetD2RUB6Kz51fklbnoSBYErOAu6oWs_Qu9g&s",
    bio: "Assisting the President in all duties and responsibilities.",
  },
  {
    name: "VP6",
    role: "Vice President",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBOjJWhTw4pgoUA0vz9FiRZYRaiE4RVxvEQ&s",
    bio: "Supporting the President and Vice President 1.",
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
    setIndex((prev) => (prev + 1) % vps.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setIndex((prev) => (prev - 1 + vps.length) % vps.length);
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

  const leftIndex = (index - 1 + vps.length) % vps.length;
  const rightIndex = (index + 1) % vps.length;

  const cardTransition = { type: "spring", stiffness: 300, damping: 30 } as const;

  return (
    <main className="min-h-dvh w-full flex items-center justify-center bg-[#FBFAF9] overflow-hidden">
      <section className="w-full max-w-6xl px-4 md:px-6 py-12 md:py-16 text-center">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0AABBE] mb-8 md:mb-12 uppercase tracking-tighter">
          Meet the Executive Team
        </h1>

        <div className="relative flex items-center justify-center gap-2 md:gap-8 h-[520px]">
          
          <button
            onClick={prev}
            className="z-50 p-2 md:p-3 rounded-full bg-white shadow-lg border hover:scale-110 active:scale-95 transition-transform"
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
                className="absolute z-30 w-full max-w-[300px] md:max-w-sm h-[500px] p-6 md:p-8 rounded-3xl shadow-2xl border border-slate-100 bg-[#FBFBF9] flex flex-col items-center"
              >
                <div className="w-56 h-60 mb-6 overflow-hidden rounded-2xl ring-4 ring-white shadow-inner">
                  <img 
                    src={vps[index].imageUrl} 
                    className="w-full h-full object-cover object-top" 
                    alt={vps[index].name} 
                  />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{vps[index].name}</h2>
                <p className="text-cyan-600 font-bold tracking-widest uppercase text-xs mt-1">{vps[index].role}</p>
                
                <div className="w-10 h-1 bg-[#FF5E38] mx-auto rounded-full mt-2" />
                
                <p className="pt-4 text-slate-600 text-sm leading-relaxed italic">{vps[index].bio}</p>
              </motion.div>

              {/* LEFT CARD */}
              <motion.div
                key={`left-${leftIndex}`}
                initial={{ x: direction > 0 ? -800 : 0, opacity: 0, scale: 0.7 }}
                animate={{ x: -380, opacity: 0.4, scale: 0.75 }}
                exit={{ x: direction > 0 ? 0 : -800, opacity: 0, scale: 0.7 }}
                transition={cardTransition}
                className="hidden md:block absolute w-64 h-80 border-2 border-slate-200 rounded-3xl overflow-hidden cursor-pointer shadow-lg bg-white"
                style={{ filter: "grayscale(70%) brightness(0.9)" }}
                onClick={prev}
                whileHover={{ scale: 0.78, opacity: 0.5, filter: "grayscale(50%) brightness(1)" }}
              >
                <img src={vps[leftIndex].imageUrl} className="w-full h-full object-cover" alt={vps[leftIndex].name} />
              </motion.div>

              {/* RIGHT CARD */}
              <motion.div
                key={`right-${rightIndex}`}
                initial={{ x: direction > 0 ? 0 : 800, opacity: 0, scale: 0.7 }}
                animate={{ x: 380, opacity: 0.4, scale: 0.75 }}
                exit={{ x: direction > 0 ? 800 : 0, opacity: 0, scale: 0.7 }}
                transition={cardTransition}
                className="hidden md:block absolute w-64 h-80 border-2 border-slate-200 rounded-3xl overflow-hidden cursor-pointer shadow-lg bg-white"
                style={{ filter: "grayscale(70%) brightness(0.9)" }}
                onClick={next}
                whileHover={{ scale: 0.78, opacity: 0.5, filter: "grayscale(50%) brightness(1)" }}
              >
                <img src={vps[rightIndex].imageUrl} className="w-full h-full object-cover" alt="" />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="z-50 p-2 md:p-3 rounded-full bg-white shadow-lg border hover:scale-110 active:scale-95 transition-transform"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {vps.map((_, i) => (
            <div 
              key={i} 
              className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? "w-10 bg-[#0AABBE]" : "w-2.5 bg-slate-300"}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}