"use client";

import { motion } from "framer-motion";
import { sbcConfig } from "@/config/sbc";
import { CheckCircle2, ArrowRight, Sparkles, Award, Target, Landmark, ShieldCheck, Flame, Compass } from "lucide-react";

export function AboutSection() {
  const { aboutSection } = sbcConfig;

  return (
    <section id="about" className="py-20 sm:py-32 bg-[#FAF0DC] text-[#141010] border-b border-[#DECBB4] relative overflow-hidden">
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-40" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FAF4E8] border border-[#DECBB4] px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#8B2635] mb-6">
          <Sparkles size={13} className="text-[#F89B29]" />
          <span>SECTION 2 • ABOUT THE PROGRAMME</span>
        </div>

        {/* Heading */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#141010] mb-6 leading-[1.05]">
            {aboutSection.heading}
          </h2>

          {/* Exact Narrative Text */}
          <div className="bg-[#FFFDF9] border-2 border-[#141010] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#141010] space-y-4">
            <p className="font-serif text-lg sm:text-2xl text-[#141010] leading-relaxed font-medium">
              "{aboutSection.officialDescription}"
            </p>
            <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#8B2635] border-t border-[#DECBB4]">
              <span className="uppercase font-bold tracking-wider">— Entrepreneurship Cell, IIT Kharagpur</span>
              <span className="font-bold">COHORT 9.0 (2026)</span>
            </div>
          </div>
        </div>

        {/* Key Numerical Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {aboutSection.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#FAF4E8] border border-[#DECBB4] p-5 text-center flex flex-col justify-center"
            >
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#8B2635] block">
                {stat.value}
              </span>
              <span className="font-mono text-xs font-bold text-[#141010] uppercase mt-1">
                {stat.label}
              </span>
              <span className="font-mono text-[10px] text-[#78695C] uppercase mt-0.5">
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>

        {/* The 3 Core Stages / Pillars Breakdown */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B2635] font-bold block mb-2">
              The Mentorship & Pitching Architecture
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#141010]">
              From Raw Hypothesis to Live VC Pitch
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutSection.pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#FFFDF9] border-2 border-[#141010] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#141010] flex flex-col justify-between relative group hover:border-[#8B2635] transition-colors"
              >
                {/* Step badge */}
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-[#DECBB4] pb-3">
                    <span className="bg-[#141010] text-[#FAF4E8] px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider">
                      {pillar.step}
                    </span>
                    <span className="text-[10px] font-mono text-[#8B2635] font-bold uppercase">
                      {pillar.badge}
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl font-bold text-[#141010] mb-3 leading-snug">
                    {pillar.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#5C4C3E] leading-relaxed font-light mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 border-t border-[#DECBB4] pt-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8B2635] font-bold block">
                      Core Focus:
                    </span>
                    {pillar.keyTakeaways.map((item, kIdx) => (
                      <div key={kIdx} className="flex items-start gap-2 text-xs text-[#2D221A]">
                        <CheckCircle2 size={14} className="text-[#8B2635] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DECBB4] flex items-center justify-between text-[11px] font-mono text-[#78695C]">
                  <span className="font-semibold">{pillar.format}</span>
                  <span className="text-[#8B2635] font-bold">STAGE 0{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-[#141010] text-[#FAF4E8] p-8 sm:p-10 border border-[#2E2626] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
              ARE YOU BUILDING THE NEXT BIG STARTUP?
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Get Paired with Top Mentors & Pitch Before VCs.
            </h4>
            <p className="text-xs sm:text-sm text-[#C8BFB3] max-w-xl font-light">
              Cohort 9.0 gives you the strategy feedback and investor access to compress months of iteration into weeks.
            </p>
          </div>

          <a
            href="#register"
            className="bg-[#8B2635] hover:bg-[#A32E40] text-white px-8 py-3.5 text-xs font-mono uppercase font-bold tracking-widest transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>Register Your Startup</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
