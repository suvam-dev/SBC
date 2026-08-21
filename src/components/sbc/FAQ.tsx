"use client";

import { useState } from "react";
import { sbcConfig } from "@/config/sbc";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#FAF4E8] text-[#141010] border-b border-[#E6DBCA]">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#8B2635] mb-2 block font-semibold">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#141010]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {sbcConfig.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#FAF0DC] border border-[#DFCBB0] transition-colors"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="font-serif text-lg sm:text-xl font-bold text-[#141010]">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#8B2635] transition-transform duration-300 shrink-0 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-[#4E3E32] leading-relaxed font-light border-t border-[#DFCBB0] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
