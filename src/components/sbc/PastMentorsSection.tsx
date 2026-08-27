"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { sbcConfig, Mentor } from "@/config/sbc";
import { UserPlus, Sparkles, ArrowUpRight, GraduationCap, Building2 } from "lucide-react";
import { LinkedInIcon } from "./Icons";
import { MentorApplicationModal } from "./MentorApplicationModal";

export function PastMentorsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const sectors = ["All", "SaaS", "Deeptech / AI-ML", "Consumer", "Fintech", "Healthcare"];

  const filteredMentors =
    selectedFilter === "All"
      ? sbcConfig.pastMentors
      : sbcConfig.pastMentors.filter((m) =>
          m.sectorTag.toLowerCase().includes(selectedFilter.toLowerCase())
        );

  return (
    <section id="mentors" className="py-20 sm:py-32 bg-[#FAF4E8] text-[#141010] border-b border-[#DECBB4] relative">
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-40" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b-2 border-[#DECBB4] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FAF0DC] border border-[#DECBB4] px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#8B2635] mb-3">
              <Sparkles size={13} className="text-[#F89B29]" />
              <span>SECTION 3 • ALUMNI MENTORSHIP NETWORK</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#141010] leading-none mb-3">
              Past Mentors
            </h2>

            <p className="text-sm sm:text-base text-[#5C4C3E] max-w-2xl font-light leading-relaxed">
              Distinguished IIT Kharagpur alumni founders, active venture capital investors, and seasoned industry leaders who mentor student startups in the Startup Bootcamp cohort.
            </p>
          </div>

          {/* Button: Apply as a Mentor */}
          <div className="shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#8B2635] hover:bg-[#A32E40] text-white px-7 py-3.5 text-xs font-mono uppercase font-bold tracking-wider inline-flex items-center gap-2.5 transition-all shadow-[4px_4px_0px_0px_#141010] hover:shadow-[2px_2px_0px_0px_#141010] active:translate-x-[2px] active:translate-y-[2px]"
            >
              <UserPlus size={16} />
              <span>Apply as a Mentor</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs font-mono uppercase font-bold text-[#78695C] mr-2">
            Filter Domain:
          </span>
          {sectors.map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedFilter(sec)}
              className={`text-xs px-3.5 py-1.5 font-mono font-semibold transition-all border ${
                selectedFilter === sec
                  ? "bg-[#141010] text-[#FAF4E8] border-[#141010]"
                  : "bg-[#FAF0DC] text-[#5C4C3E] border-[#DECBB4] hover:border-[#141010]"
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMentors.map((mentor, idx) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="bg-[#FFFDF9] border-2 border-[#141010] shadow-[5px_5px_0px_0px_#141010] overflow-hidden flex flex-col justify-between group hover:border-[#8B2635] transition-colors"
            >
              <div>
                {/* Photo with Overlay & Domain Tag */}
                <div className="relative aspect-[4/3] w-full bg-[#FAF0DC] overflow-hidden border-b border-[#DECBB4]">
                  <Image
                    src={mentor.photoUrl}
                    alt={mentor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 right-3 bg-[#141010]/85 backdrop-blur-sm text-[#FCE6B8] px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider">
                    {mentor.sectorTag}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  
                  {/* Name & LinkedIn Icon */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-xl font-bold text-[#141010] leading-tight">
                      {mentor.name}
                    </h3>
                    
                    {/* LinkedIn icon linking to profile */}
                    <a
                      href={mentor.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8B2635] hover:text-[#141010] p-1.5 transition-colors shrink-0 bg-[#FAF0DC] border border-[#DECBB4] flex items-center justify-center"
                      title={`${mentor.name}'s LinkedIn Profile`}
                      aria-label={`${mentor.name} LinkedIn Profile`}
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Designation and Organisation */}
                  <div className="text-xs text-[#4A3B2F] space-y-0.5">
                    <span className="font-semibold block text-[#141010]">
                      {mentor.designation}
                    </span>
                    <span className="text-[#78695C] block">
                      {mentor.organization}
                    </span>
                  </div>

                  {/* Batch and Department (IIT Kharagpur alumnus) */}
                  <div className="bg-[#FAF4E8] border border-[#DECBB4] p-2.5 rounded-none text-[11px] font-mono text-[#8B2635] flex items-start gap-2">
                    <GraduationCap size={15} className="shrink-0 mt-0.5 text-[#8B2635]" />
                    <span className="leading-tight">
                      {mentor.batchAndDept} <strong className="block text-[#141010] text-[10px] uppercase font-bold mt-0.5">• IIT Kharagpur Alumnus</strong>
                    </span>
                  </div>

                  {/* Bio brief */}
                  {mentor.bio && (
                    <p className="text-xs text-[#5C4C3E] font-light leading-relaxed pt-1">
                      {mentor.bio}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5 pt-2 border-t border-[#DECBB4] flex items-center justify-between text-[10px] font-mono text-[#78695C]">
                <span>SBC MENTOR</span>
                <span className="text-[#8B2635] font-bold">1-ON-1 ROUNDS</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout to Alumni & Mentors */}
        <div className="mt-16 bg-[#FAF0DC] border-2 border-[#141010] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[5px_5px_0px_0px_#141010]">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-2xl font-bold text-[#141010]">
              Are you an IIT KGP Alumnus or Founder?
            </h4>
            <p className="text-xs sm:text-sm text-[#5C4C3E]">
              Share your insights and guide ambitious student ventures through two structured rounds of 1-on-1 mentorship.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#141010] hover:bg-[#2B2323] text-white px-6 py-3 text-xs font-mono uppercase font-bold tracking-wider inline-flex items-center gap-2 transition-colors shrink-0"
          >
            <UserPlus size={14} />
            <span>Apply as a Mentor</span>
          </button>
        </div>

      </div>

      {/* Mentor Application Modal */}
      <MentorApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
