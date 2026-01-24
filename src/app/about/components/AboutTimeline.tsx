"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timeline = [
  {
    year: 2021,
    title: "Founded",
    description: "The club was founded with the goal of promoting trustworthy AI research.",
  },
  {
    year: 2022,
    title: "First Projects",
    description: "Launched our first student-led research and reading groups.",
  },
  {
    year: 2023,
    title: "Campus Recognition",
    description: "Recognized as an official student organization and hosted public talks.",
  },
  {
    year: 2024,
    title: "Expansion",
    description: "Grew to multiple teams focusing on ethics, safety, and ML robustness.",
  },
  {
    year: 2025,
    title: "Present Day",
    description: "Continuing to scale events, research, and industry collaboration.",
  },
];


export default function AboutTimeline() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full py-20 md:py-32 bg-[#FBFAF9] overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0AABBE] text-center mb-16 md:mb-32">
        Our History
      </h2>

      <div className="relative max-w-6xl mx-auto px-4 md:px-12">
        
        {/* DESKTOP VIEW */}
        <div className="hidden md:flex h-16 rounded-2xl bg-[#FBFBF9] border border-slate-200 shadow-sm items-center justify-between px-12 relative">
          {timeline.map((item, i) => {
            const isTop = i % 2 === 0;
            const isTeal = i % 2 === 0;
            const themeBg = isTeal ? "bg-[#0891B2]" : "bg-[#FF5E38]";
            const hoverBg = isTeal ? "hover:bg-[#0892A5]" : "hover:bg-[#E65230]";
            const arrowColor = isTeal 
              ? (isTop ? "border-t-[#0891B2]" : "border-b-[#0891B2]") 
              : (isTop ? "border-t-[#FF5E38]" : "border-b-[#FF5E38]");

            return (
              <div key={item.year} className="relative flex flex-col items-center">
                <span className="font-bold text-slate-700 tracking-wide">
                  {item.year}
                </span>

                <button
                  onClick={() => setActive(item.year)}
                  className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap group"
                  style={{ [isTop ? "bottom" : "top"]: "60px" }}
                >
                  <div className={`relative px-5 py-2 rounded-xl text-sm font-medium text-white shadow-md transition-all duration-200 group-hover:scale-105 ${themeBg} ${hoverBg}`}>
                    {item.title}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-transparent transition-colors duration-200
                        ${isTop 
                          ? `top-full border-t-8 ${arrowColor} group-hover:border-t-[#0892A5] group-hover:${isTeal ? 'border-t-[#0892A5]' : 'border-t-[#E65230]'}` 
                          : `bottom-full border-b-8 ${arrowColor} group-hover:${isTeal ? 'border-b-[#0892A5]' : 'border-b-[#E65230]'}`
                        }`}
                    />
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* =========================================
            MOBILE VIEW (Vertical) 
            Visible only on small screens (md:hidden)
           ========================================= */}
        <div className="md:hidden relative border-l-2 border-slate-200 ml-4 space-y-10 pb-12">
          {timeline.map((item, i) => {
            const isTeal = i % 2 === 0;
            const themeBg = isTeal ? "bg-[#0891B2]" : "bg-[#FF5E38]";
            const hoverBg = isTeal ? "hover:bg-[#0892A5]" : "hover:bg-[#E65230]";
            const arrowColorMobile = isTeal ? "border-r-[#0891B2]" : "border-r-[#FF5E38]";

            return (
              <div key={item.year} className="relative pl-8">
                {/* Dot on the vertical line */}
                <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-[#FBFAF9] ${themeBg}`} />

                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold text-slate-400 mb-2">
                    {item.year}
                  </span>

                  <button
                    onClick={() => setActive(item.year)}
                    className="group text-left"
                  >
                    <div className={`relative px-5 py-3 rounded-xl text-sm font-medium text-white shadow-md transition-all duration-200 active:scale-95 ${themeBg} ${hoverBg}`}>
                      {item.title}

                      {/* Left-pointing Arrow for mobile */}
                      <span
                        className={`absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent transition-colors duration-200
                          ${arrowColorMobile} group-hover:${isTeal ? 'border-r-[#0892A5]' : 'border-r-[#E65230]'}`}
                      />
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <AnimatePresence>
        {active !== null && (
          <ExpandedCard
            item={timeline.find((t) => t.year === active)!}
            themeColor={timeline.findIndex(t => t.year === active) % 2 === 0 ? "text-[#0891B2]" : "text-[#FF5E38]"}
            buttonColor={timeline.findIndex(t => t.year === active) % 2 === 0 ? "bg-[#0891B2] hover:bg-[#0892A5]" : "bg-[#FF5E38] hover:bg-[#E65230]"}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ExpandedCard({
  item,
  onClose,
  themeColor,
  buttonColor
}: {
  item: { year: number; title: string; description: string };
  onClose: () => void;
  themeColor: string;
  buttonColor: string;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-lg w-full p-8 rounded-3xl shadow-2xl border border-slate-100"
        initial={{ scale: 0.8, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 30 }}
      >
        <h3 className={`text-2xl font-bold mb-2 ${themeColor}`}>
          {item.year}
        </h3>
        <h4 className="font-semibold text-slate-800 mb-4">
          {item.title}
        </h4>
        <p className="text-slate-600 leading-relaxed">
          {item.description}
        </p>

        <button
          onClick={onClose}
          className={`mt-6 px-6 py-2 rounded-lg text-white font-medium transition-colors ${buttonColor}`}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}