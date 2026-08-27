"use client";

import { motion } from "framer-motion";
import { competition } from "@/config/competition";
import { Award, Compass, Globe, Sparkles } from "lucide-react";

export function AboutSBC() {
  const { aboutEcell } = competition;

  return (
    <section id="about-ecell" className="py-24 sm:py-32 bg-[#1A1414] text-[#FAF4E8] border-b border-[#2E2424]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#F0C987] mb-3 block">
                The Organizing Body
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                {aboutEcell.heading}
              </h2>
              <p className="text-base sm:text-lg font-serif italic text-[#E5D2BA] mb-6">
                {aboutEcell.subheading}
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#D4C5B3] font-light mb-10">
                {aboutEcell.description}
              </p>

              {/* Stats Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10">
                {aboutEcell.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F89B29]">
                      {stat.number}
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono text-[#B3A18F] uppercase mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Vintage Institutional Seal */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border-2 border-dashed border-[#8B2635] bg-[#231A1A] p-6 flex flex-col items-center justify-center text-center relative shadow-2xl"
            >
              <div className="w-60 h-60 rounded-full border border-[#8B2635]/40 flex flex-col items-center justify-center p-4">
                <span className="text-[9px] font-mono text-[#F0C987] uppercase tracking-widest mb-1">
                  ESTD. 2006
                </span>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white leading-tight">
                  E-CELL<br />IIT KHARAGPUR
                </h3>
                <span className="text-[10px] font-serif italic text-[#D4C5B3] mt-2">
                  Knowledge • Innovation • Enterprise
                </span>
                <div className="mt-3 flex items-center gap-1.5 text-[#F89B29]">
                  <Sparkles size={14} />
                  <span className="text-[9px] font-mono uppercase tracking-wider">ANNUAL FLAGSHIP</span>
                  <Sparkles size={14} />
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
