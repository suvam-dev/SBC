"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Building2, Flame } from "lucide-react";
import { sbcConfig } from "@/config/sbc";

export function Hero() {
  const { hero } = sbcConfig;

  return (
    <section className="relative bg-[#121214] text-[#F9F6F0] pt-12 pb-24 border-b border-[#2A2A2E] overflow-hidden">
      {/* Background Subtle Noise Texture */}
      <div className="absolute inset-0 paper-texture opacity-5 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="max-w-4xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-[#1E1C1A] border border-[#3E3426] text-[#F0C987] px-3.5 py-1 text-xs font-mono font-bold tracking-wider uppercase mb-6">
              <Flame size={14} className="text-[#F89B29]" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] leading-[0.95] tracking-tight text-white mb-6">
              Ideas become <br />
              <span className="italic text-[#E5D4BA] font-light">ventures.</span>
            </h1>

            <p className="text-lg sm:text-2xl text-[#C8BFB3] font-light leading-relaxed max-w-2xl mb-8">
              {hero.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={sbcConfig.applyUrl}
                className="bg-[#8B2635] hover:bg-[#A32E40] text-white text-xs font-mono font-bold uppercase tracking-widest px-8 py-4 shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Apply for Cohort '26</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#journey"
                className="border border-[#4A443E] hover:border-white text-[#E5DFD7] text-xs font-mono font-bold uppercase tracking-widest px-8 py-4 transition-colors text-center"
              >
                Explore The 12-Week Journey
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual Display with Floating Metaphor Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative w-full aspect-[16/9] max-h-[640px] border border-[#2E2C2A] overflow-hidden shadow-2xl bg-zinc-950 mb-16"
        >
          <Image
            src={hero.image}
            alt="Student founders assembling a prototype in IIT Kharagpur workshop"
            fill
            className="object-cover object-center scale-100 hover:scale-105 transition-transform duration-1000"
            priority
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-80" />

          {/* Bottom Floating Stats Strip */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-[#121214]/90 backdrop-blur-md border-t border-[#2E2C2A] grid grid-cols-2 sm:grid-cols-4 gap-6">
            {hero.stats.map((stat, idx) => (
              <div key={idx} className="border-l border-[#3E3830] pl-4 sm:pl-6">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F89B29]">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-[#A89E92] uppercase mt-0.5 tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Manifesto Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-6">
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F0C987] block mb-2">
              The SBC Manifesto
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              A relentless loop of hypothesis & execution.
            </h3>
          </div>
          <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-[#D4C8BC] font-light leading-relaxed">
            {hero.manifesto.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
