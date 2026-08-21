"use client";

import { motion } from "framer-motion";
import { competition } from "@/config/competition";
import { Trophy, Award, Medal, Sparkles } from "lucide-react";

export function PrizePool() {
  const icons = [Trophy, Award, Medal, Sparkles];

  return (
    <section id="prizes" className="py-24 sm:py-32 bg-[#1A1414] text-[#FAF4E8] relative overflow-hidden border-b border-[#2E2424]">
      {/* Background Graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[25rem] font-display font-bold text-white/[0.02] pointer-events-none select-none">
        ₹20L
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#F0C987] mb-3 block">
              National Honors & Grants
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
              {competition.prizePool}
            </h2>
            <p className="text-sm sm:text-base text-[#D4C5B3] font-light max-w-xl mx-auto">
              {competition.prizePoolSubtext}
            </p>
          </motion.div>
        </div>

        {/* Prizes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competition.prizes.map((prize, idx) => {
            const IconComponent = icons[idx] || Trophy;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-6 sm:p-8 border relative flex flex-col justify-between ${
                  idx === 0
                    ? "bg-[#2D1B1B] border-[#933D3D] shadow-xl ring-1 ring-[#933D3D]"
                    : "bg-[#221C1C] border-[#3D3232]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                      idx === 0 ? "text-[#FCE6B8]" : "text-[#B3A18F]"
                    }`}>
                      {prize.place}
                    </span>
                    <IconComponent size={20} className={idx === 0 ? "text-[#F89B29]" : "text-[#8E7E6E]"} />
                  </div>

                  <div className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                    {prize.amount}
                  </div>
                </div>

                <p className="text-xs font-mono text-[#B8A896] leading-relaxed pt-4 border-t border-white/10">
                  {prize.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
