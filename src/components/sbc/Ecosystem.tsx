"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { sbcConfig } from "@/config/sbc";
import { Landmark, Shield, Users, Award } from "lucide-react";

export function Ecosystem() {
  const { ecosystem } = sbcConfig;
  const icons = [Landmark, Award, Users, Shield];

  return (
    <section id="ecosystem" className="py-24 sm:py-36 bg-[#F9F6F0] text-[#141010] border-b border-[#E6DEC8]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B2635] mb-2 block font-semibold">
              Institutional Launchpad
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#141010] mb-4">
              {ecosystem.title}
            </h2>
            <p className="text-base sm:text-xl font-serif italic text-[#8B2635] mb-6">
              {ecosystem.subtitle}
            </p>
            <p className="text-sm sm:text-base text-[#5C4D3E] font-light leading-relaxed">
              {ecosystem.description}
            </p>
          </motion.div>
        </div>

        {/* Campus Visual Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[16/9] max-h-[520px] border-2 border-[#D5C2A5] shadow-xl overflow-hidden mb-16 bg-zinc-900"
        >
          <Image
            src={ecosystem.image}
            alt="IIT Kharagpur Historic Campus and Technology Ecosystem"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-baseline justify-between gap-2 text-white">
            <span className="font-serif italic text-lg sm:text-xl">
              India's first IIT • Founded in 1951 • 2,100-acre Innovation Hub
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#F0C987]">
              SCIENCE & TECHNOLOGY ENTREPRENEURS PARK (STEP)
            </span>
          </div>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystem.pillars.map((pillar, idx) => {
            const IconComp = icons[idx] || Landmark;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FAF0DC] border border-[#DFCBB0] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-[#FAF4E8] border border-[#D5C2A5] flex items-center justify-center text-[#8B2635] mb-4">
                    <IconComp size={18} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#141010] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E3E32] leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
                <span className="text-[9px] font-mono text-[#8B2635] uppercase font-bold tracking-wider mt-4 pt-3 border-t border-[#DFCBB0]">
                  PILLAR 0{idx + 1}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
