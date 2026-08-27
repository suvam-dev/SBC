"use client";

import { motion } from "framer-motion";
import { competition } from "@/config/competition";
import { CheckCircle2, Compass, Terminal, ArrowRight } from "lucide-react";

export function TracksSection() {
  return (
    <section id="tracks" className="py-24 sm:py-32 bg-[#FAF4E8] text-[#141010] border-b border-[#E6DBCA]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B2635] mb-2 block">
              Dual Track Architecture
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#141010] mb-4">
              Two pathways to the Grand Finale.
            </h2>
            <p className="text-base sm:text-lg text-[#5A493B] font-light leading-relaxed">
              Whether you are an analytical business strategist or an engineer deploying agentic workflows, there is an official track tailored to your core strengths.
            </p>
          </motion.div>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {competition.tracks.map((track, idx) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`p-8 sm:p-10 border relative flex flex-col justify-between ${
                idx === 0 
                  ? "bg-[#FAF0DC] border-[#D8C7AF]" 
                  : "bg-[#EAE4DC] border-[#CEBFAB]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="bg-[#8B2635] text-[#FAF4E8] text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1">
                    {track.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#141010] text-[#FAF4E8] flex items-center justify-center">
                    {idx === 0 ? <Compass size={18} /> : <Terminal size={18} />}
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141010] mb-2">
                  {track.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#7D6B5A] mb-8 italic">
                  {track.tagline}
                </p>

                <ul className="space-y-4 mb-10">
                  {track.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-[#2E241D] leading-relaxed">
                      <CheckCircle2 size={16} className="text-[#8B2635] mt-1 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#D0BFAB]">
                <a
                  href={`/register?track=${track.id}`}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-wider text-[#8B2635] hover:text-[#141010] transition-colors"
                >
                  <span>Register for {idx === 0 ? "Track A" : "Track B"}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
