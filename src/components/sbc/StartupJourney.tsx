"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { sbcConfig } from "@/config/sbc";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function StartupJourney() {
  const { journeyStages } = sbcConfig;

  return (
    <section id="journey" className="py-24 sm:py-36 bg-[#F9F6F0] text-[#141010] border-b border-[#E6DEC8]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B2635] mb-2 block font-semibold">
              The Venture Creation Engine
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#141010] mb-6">
              IDEA → BUILD → TEST → SCALE
            </h2>
            <p className="text-base sm:text-xl text-[#5C4D3E] font-light leading-relaxed">
              The 12-week SBC sprint takes your team through four rigorous transformation phases.
            </p>
          </motion.div>
        </div>

        {/* Alternating Journey Stages */}
        <div className="space-y-32 sm:space-y-40">
          {journeyStages.map((stage, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={stage.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Visual Half */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative w-full aspect-[4/3] border-2 border-[#D5C2A5] shadow-xl overflow-hidden bg-zinc-900 group">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#141010]/90 backdrop-blur-md text-[#F9F6F0] px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider border border-white/20">
                      {stage.badgeText}
                    </div>
                  </div>
                </motion.div>

                {/* Narrative Half */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B2635]">
                    {stage.phase}
                  </span>

                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141010] leading-tight">
                    {stage.title}
                  </h3>

                  <p className="font-serif italic text-base sm:text-lg text-[#8B2635] font-medium">
                    "{stage.subtitle}"
                  </p>

                  <p className="text-sm sm:text-base text-[#4D3F33] leading-relaxed font-light">
                    {stage.description}
                  </p>

                  <div className="pt-4 border-t border-[#E3D4BD] space-y-3">
                    {stage.bulletPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#2D221A]">
                        <CheckCircle2 size={16} className="text-[#8B2635] mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
