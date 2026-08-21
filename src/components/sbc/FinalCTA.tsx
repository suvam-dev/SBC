"use client";

import { motion } from "framer-motion";
import { sbcConfig } from "@/config/sbc";
import { ArrowRight, Flame, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="apply" className="py-28 sm:py-36 bg-[#8B2635] text-[#FAF4E8] text-center relative overflow-hidden">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 paper-texture opacity-10 pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF4E8]/10 border border-[#FAF4E8]/20 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FCE6B8] mb-6">
            <Flame size={14} className="text-[#F89B29]" />
            <span>STARTUP BOOTCAMP 2026 COHORT</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Build your venture <br className="hidden sm:block" />at IIT Kharagpur.
          </h2>

          <p className="text-base sm:text-xl text-[#FCE6B8] font-light max-w-xl mb-10 leading-relaxed">
            12 weeks. Zero equity taken. Direct mentorship from marquee founders and access to ₹50 Lakhs+ in grants and incubation.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#FAF4E8] hover:bg-white text-[#8B2635] font-bold text-sm font-mono uppercase tracking-widest px-10 py-4 shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>Submit Founder Application</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#journey"
              className="w-full sm:w-auto border border-[#FAF4E8]/40 hover:border-[#FAF4E8] text-white font-medium text-xs font-mono uppercase tracking-widest px-8 py-4 transition-colors"
            >
              Review Cohort Phases
            </a>
          </div>

          <p className="text-xs font-mono text-[#FCE6B8]/70 mt-8">
            Open to student teams across India • Zero application fee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
