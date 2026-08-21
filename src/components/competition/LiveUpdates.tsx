"use client";

import { motion } from "framer-motion";
import { competition } from "@/config/competition";

export function LiveUpdates() {
  return (
    <section id="updates" className="bg-[#D6E8EB] text-[#141010] py-14 border-b border-[#BED6DA]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= NEW UPDATES ================= */}
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3F9142] animate-pulse" />
            <h3 className="font-serif italic text-xl sm:text-2xl font-bold text-[#141010]">
              New updates
            </h3>
          </div>

          <div className="space-y-6">
            {competition.liveFeed.newUpdates.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline pb-6 border-b border-[#BED6DA] last:border-none"
              >
                <div className="md:col-span-3 font-mono font-bold text-sm tracking-wider uppercase text-[#141010]">
                  {item.date}
                </div>
                <div className="md:col-span-9 text-sm sm:text-base text-[#222728] leading-relaxed">
                  <span>{item.text} </span>
                  {item.linkText && (
                    <a
                      href={item.linkUrl}
                      className="font-semibold text-[#8B2635] hover:underline inline-flex items-center ml-1"
                    >
                      {item.linkText}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= UPCOMING MILESTONES ================= */}
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#933D3D]" />
            <h3 className="font-serif italic text-xl sm:text-2xl font-bold text-[#141010]">
              Upcoming
            </h3>
          </div>

          <div className="space-y-6">
            {competition.liveFeed.upcoming.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline pb-6 border-b border-[#BED6DA] last:border-none"
              >
                <div className="md:col-span-3 font-mono font-bold text-sm tracking-wider uppercase text-[#141010]">
                  {item.date}
                </div>
                <div className="md:col-span-9 text-sm sm:text-base text-[#222728] leading-relaxed">
                  {item.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
