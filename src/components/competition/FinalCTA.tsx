"use client";

import { motion } from "framer-motion";
import { competition } from "@/config/competition";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="register" className="py-28 sm:py-36 bg-[#8B2635] text-[#FAF4E8] text-center relative overflow-hidden">
      {/* Background Graphic */}
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
            <Sparkles size={14} />
            <span>REGISTRATIONS CLOSING SOON</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Ready to rewire <br className="hidden sm:block" />Indian commerce?
          </h2>

          <p className="text-base sm:text-xl text-[#FCE6B8] font-light max-w-xl mb-10 leading-relaxed">
            Form your team of 1 to 3 students. Pick from 30 opportunity spaces or propose your own. Compete for ₹20 Lakh in prizes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#FAF4E8] hover:bg-white text-[#8B2635] font-bold text-sm uppercase tracking-wider px-10 py-4 shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>Register Your Team</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#case"
              className="w-full sm:w-auto border border-[#FAF4E8]/40 hover:border-[#FAF4E8] text-white font-medium text-sm uppercase tracking-wider px-8 py-4 transition-colors"
            >
              Review The Problem Statement
            </a>
          </div>

          <p className="text-xs font-mono text-[#FCE6B8]/70 mt-8">
            Open to all college students across India • Zero registration fees
          </p>
        </motion.div>
      </div>
    </section>
  );
}
