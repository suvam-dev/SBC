"use client";

import { motion } from "framer-motion";
import { competition } from "@/config/competition";
import { Building, Truck, Mic, CreditCard, Landmark } from "lucide-react";

export function Partners() {
  const icons = [Landmark, Truck, Mic, CreditCard, Building];

  return (
    <section id="partners" className="py-24 sm:py-32 bg-[#FAF4E8] text-[#141010] border-b border-[#E6DBCA]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B2635] mb-2 block">
              Infrastructure & Ecosystem
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#141010] mb-3">
              Supported by India's Rails
            </h2>
            <p className="text-xs sm:text-sm text-[#5A493B] font-light max-w-lg mx-auto">
              Teams get access to technical mentorship, proprietary sandbox APIs, and direct feedback from the engineers building India's commerce rails.
            </p>
          </motion.div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {competition.partnerTiers.rails.map((partner, idx) => {
            const IconComp = icons[idx + 1] || Building;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FAF0DC] border border-[#DFCBB0] p-6 text-center flex flex-col items-center justify-between"
              >
                <div className="w-10 h-10 bg-[#FAF4E8] border border-[#D5C2A5] flex items-center justify-center text-[#8B2635] mb-3">
                  <IconComp size={18} />
                </div>
                <div className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#141010] mb-1">
                  {partner.name}
                </div>
                <span className="text-[10px] font-mono text-[#7D6A58] uppercase tracking-widest">
                  {partner.role}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
