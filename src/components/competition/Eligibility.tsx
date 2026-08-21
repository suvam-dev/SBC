"use client";

import { motion } from "framer-motion";
import { competition } from "@/config/competition";
import { Users, GraduationCap, Sparkles, FileCode } from "lucide-react";

export function Eligibility() {
  const icons = [GraduationCap, Users, FileCode, Sparkles];

  return (
    <section id="eligibility" className="py-24 sm:py-32 bg-[#FAF4E8] text-[#141010] border-b border-[#E6DBCA]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-32"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B2635] mb-2 block">
                Participation Rules
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#141010] mb-4">
                Who can enter the competition?
              </h2>
              <p className="text-sm sm:text-base text-[#5A493B] font-light leading-relaxed">
                We believe that the next breakthrough in Indian commerce can come from any classroom, discipline, or year of study.
              </p>
            </motion.div>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {competition.eligibility.map((item, idx) => {
              const IconComponent = icons[idx] || Users;
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
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#141010] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4E3E32] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="text-[10px] font-mono text-[#8B2635] uppercase font-bold mt-4 pt-3 border-t border-[#DFCBB0]">
                    CRITERION 0{idx + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
