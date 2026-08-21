"use client";

import { motion } from "framer-motion";
import { competition } from "@/config/competition";

export function JudgingCriteria() {
  return (
    <section id="judging" className="py-24 sm:py-32 bg-[#EFE5D3] text-[#141010] border-b border-[#D5C4AC]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B2635] mb-2 block">
              Evaluation Matrix
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141010] mb-4">
              How will your case be evaluated?
            </h2>
            <p className="text-sm sm:text-base text-[#5A493B] font-light max-w-xl mx-auto">
              Our jury of founders, venture capitalists, and industry product leaders will evaluate each submission across five distinct parameters.
            </p>
          </motion.div>
        </div>

        {/* Criteria List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competition.judgingCriteria.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#FAF4E8] border border-[#D5C2A5] p-6 sm:p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-4 pb-2 border-b border-[#E6D7C3]">
                  <span className="font-serif text-3xl font-bold text-[#8B2635]">
                    {item.weight}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A6A5A]">
                    WEIGHTAGE
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#141010] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4E3E32] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
