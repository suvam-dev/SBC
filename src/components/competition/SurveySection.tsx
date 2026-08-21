"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { competition } from "@/config/competition";
import { MessageSquarePlus, Send, Check } from "lucide-react";

export function SurveySection() {
  const { surveySection } = competition;
  const [submitted, setSubmitted] = useState(false);
  const [problemText, setProblemText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (problemText.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setProblemText("");
      }, 4000);
    }
  };

  return (
    <section id="survey" className="py-24 sm:py-32 bg-[#EFE5D3] text-[#141010] border-b border-[#D5C4AC]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FAF4E8] border-2 border-[#D5C2A5] p-8 sm:p-12 shadow-md relative overflow-hidden">
          
          {/* Subtle Stamp in corner */}
          <div className="absolute top-4 right-4 hidden sm:block">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#8B2635] text-[#8B2635] flex flex-col items-center justify-center rotate-12 select-none opacity-80">
              <span className="text-[8px] font-mono uppercase">ALL-INDIA</span>
              <span className="font-display text-sm font-bold">POLL 2026</span>
              <span className="text-[7px] font-mono">IIT KGP</span>
            </div>
          </div>

          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B2635] mb-2 block font-semibold">
              {surveySection.kicker}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141010] mb-4">
              {surveySection.heading}
            </h3>
            <p className="text-sm sm:text-base text-[#5A493B] font-light leading-relaxed mb-8">
              {surveySection.description}
            </p>

            {/* Interactive Survey Submission Box */}
            <form onSubmit={handleSubmit} className="mb-10">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={problemText}
                  onChange={(e) => setProblemText(e.target.value)}
                  placeholder="e.g. Booking train tatkal tickets, filing GST for small vendors..."
                  className="flex-1 bg-[#FFFDF9] border border-[#C5B499] px-4 py-3 text-sm text-[#141010] placeholder-[#8A7969] focus:outline-none focus:border-[#8B2635] font-sans"
                  disabled={submitted}
                />
                <button
                  type="submit"
                  disabled={submitted}
                  className="bg-[#8B2635] hover:bg-[#731E2B] text-white px-6 py-3 text-xs font-mono uppercase font-bold tracking-wider transition-colors flex items-center justify-center gap-2 shrink-0"
                >
                  {submitted ? (
                    <>
                      <Check size={16} />
                      <span>Recorded!</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Friction</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>
              {submitted && (
                <p className="text-xs font-mono text-[#3F9142] mt-2 font-medium">
                  ✓ Thank you! Your submission has been anonymously clustered into the student problem bank.
                </p>
              )}
            </form>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#DECDB7]">
              {surveySection.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#8B2635]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-[#736353] uppercase mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
