"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Scientific Integrity",
    description: "We prioritize rigorous methodology and peer-reviewed standards in all our research and projects.",
    color: "#0AABBE", 
  },
  {
    title: "Proactive Safety",
    description: "We believe AI safety isn't an afterthought—it must be baked into the architecture from day one.",
    color: "#FF5E38", 
  },
  {
    title: "Open Collaboration",
    description: "Innovation thrives in the open. We share our findings and tools to help the broader community grow.",
    color: "#0AABBE", 
  },
];

export default function AboutValues() {
  return (
    <section className="w-full bg-[#FBFAF9] py-12 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0AABBE] mb-8 md:mb-12 uppercase tracking-tighter text-center px-4">
        Our Values
      </h2>

      {/* Grid */}
      <div className="w-full max-w-7xl px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}

            className="bg-[#FBFBF9] p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden flex flex-col h-full"
          >

            <div 
              className="w-3 h-3 rounded-full mb-6" 
              style={{ backgroundColor: value.color }}
            />

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-[#000000] mb-4">
              {value.title}
            </h3>

            {/* Description */}
            <p className="text-[rgba(0,0,0,0.7)] leading-relaxed text-base md:text-lg flex-grow">
              {value.description}
            </p>

            <div 
              className="mt-6 md:mt-8 w-12 h-1 rounded-full" 
              style={{ backgroundColor: value.color }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}