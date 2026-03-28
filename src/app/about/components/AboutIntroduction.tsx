"use client";

import { motion } from "framer-motion";

export default function AboutIntroduction() {
  return (
    <section className="w-full bg-background py-16 md:py-24 flex flex-col items-center">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-8 md:mb-12 text-center">
        About Us
      </h1>

      <div className="w-full max-w-6xl px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}

          className="bg-card p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-secondary/20 dark:border-secondary/30 relative overflow-hidden"
        >
          {/* Accent Dot */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10 w-3 h-3 bg-primary rounded-full" />


          <div className="max-w-5xl mx-auto">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4 md:mb-6">
              Our Mission
            </h2>

            {/* Main Text */}
            <p className="text-xl md:text-4xl font-semibold text-text-primary leading-tight mb-6 md:mb-10">
              Advancing the frontier of <span className="text-secondary">Safe</span> and <span className="text-primary">Trustworthy</span> artificial intelligence.
            </p>

            {/* Body Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-text-muted leading-relaxed text-base md:text-xl">
              <p>
                The Trustworthy Machine Intelligence Club is a student-led research collective dedicated to
                understanding the technical and ethical safeguards of modern AI. We bridge the gap between
                theoretical machine learning and real-world reliability.
              </p>
              <p>
                Through our reading groups, research projects, and industry partnerships, we provide
                students with the tools to build systems that are not just powerful, but provably robust
                and aligned with human values.
              </p>
            </div>

            <div className="mt-10 md:mt-16 w-24 md:w-32 h-1 md:h-1.5 bg-secondary rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
