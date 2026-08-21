"use client";

import { motion } from "framer-motion";
import { sbcConfig } from "@/config/sbc";

export function Timeline() {
  return (
    <section id="timeline" className="py-24 sm:py-32 bg-[#EFE5D3] text-[#141010] border-b border-[#D5C4AC]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Title */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-32"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B2635] mb-2 block font-semibold">
                Cohort Milestones
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#141010] mb-4">
                The 12-Week Roadmap
              </h2>
              <p className="text-sm sm:text-base text-[#5A493B] font-light leading-relaxed">
                From initial thesis submission to live Demo Day pitching before 50+ institutional VCs at the IIT Kharagpur campus.
              </p>
            </motion.div>
          </div>

          {/* Right Timeline Feed */}
          <div className="lg:col-span-8">
            <div className="relative border-l-2 border-[#D5C2A5] ml-4 sm:ml-0 space-y-10">
              {sbcConfig.timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-8 sm:pl-10 group"
                >
                  {/* Dot */}
                  <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-[#FAF4E8] border-2 border-[#8B2635] group-hover:bg-[#8B2635] transition-colors" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                    <span className="font-mono text-sm font-bold text-[#8B2635] uppercase tracking-wider min-w-[90px]">
                      {item.date}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#141010]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#544437] font-light leading-relaxed sm:pl-[114px]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
