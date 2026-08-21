"use client";

import { motion } from "framer-motion";
import { sbcConfig } from "@/config/sbc";
import { Cpu, CreditCard, Zap, ArrowRight, Check } from "lucide-react";

export function TracksSection() {
  const icons = [Cpu, CreditCard, Zap];

  return (
    <section id="tracks" className="py-24 sm:py-32 bg-[#121214] text-[#F9F6F0] border-b border-[#2A2A2E]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#F0C987] mb-2 block">
              Focus Areas
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              Cohort Acceleration Tracks
            </h2>
            <p className="text-sm sm:text-base text-[#B3A89B] font-light leading-relaxed">
              Every track provides domain-specific infrastructure, dedicated EIRs, and seed investor syndicates.
            </p>
          </motion.div>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sbcConfig.tracks.map((track, idx) => {
            const IconComp = icons[idx] || Cpu;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#1C1B1E] border border-[#2E2B2D] p-8 flex flex-col justify-between hover:border-[#8B2635] transition-colors group"
              >
                <div>
                  <div className="w-12 h-12 bg-[#262428] border border-[#3E3A42] flex items-center justify-center text-[#F89B29] mb-6 group-hover:bg-[#8B2635] group-hover:text-white transition-colors">
                    <IconComp size={22} />
                  </div>

                  <span className="text-[10px] font-mono text-[#F0C987] uppercase tracking-widest block mb-2">
                    TRACK 0{idx + 1}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-snug">
                    {track.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#C4B9AD] leading-relaxed font-light mb-8">
                    {track.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A89A8A] block mb-1">
                    TRACK PERKS:
                  </span>
                  <p className="text-xs font-mono text-[#E5D7C5]">
                    {track.perks}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
