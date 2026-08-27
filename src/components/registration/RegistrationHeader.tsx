"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles, HelpCircle } from "lucide-react";
import { competition } from "@/config/competition";

export function RegistrationHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#141010] text-[#FAF4E8] border-b border-[#2A2424]">
      {/* Main Top Navigation */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        
        {/* Left: Brand & Back Link */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#B3A89B] hover:text-[#FAF4E8] transition-colors py-1 px-2.5 border border-white/10 hover:border-white/30"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back to</span> Overview
          </Link>

          <div className="h-5 w-[1px] bg-[#2E2626] hidden sm:block" />

          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 bg-[#8B2635] flex items-center justify-center font-display text-white text-lg tracking-wider">
              K
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-lg sm:text-xl tracking-wider uppercase text-white font-bold">
                {competition.organization}
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest text-[#B3A89B] uppercase font-mono hidden md:inline">
                ENTRY DOSSIER 2026
              </span>
            </div>
          </Link>
        </div>

        {/* Right: Status Badges & Help */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-[#261E1E] border border-[#3E2E2E] px-3 py-1 text-[11px] font-mono text-[#FCE6B8]">
            <Sparkles size={13} className="text-[#F89B29]" />
            <span>₹0 ENTRY FEE • OPEN TO ALL INDIA</span>
          </div>

          <a
            href="#faq"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#B3A89B] hover:text-[#FAF4E8] py-1 px-2.5 transition-colors"
          >
            <HelpCircle size={14} />
            <span className="hidden sm:inline">Need Help?</span>
          </a>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="bg-[#1C1616] border-t border-[#2E2626] overflow-hidden py-1 text-[11px] font-mono tracking-wider text-[#C2B7A8]">
        <div className="animate-ticker flex items-center gap-10 whitespace-nowrap">
          {[
            { phase: "PHASE II", text: "TEAM REGISTRATION OPEN NOW", status: "ACTIVE" },
            { phase: "TEAM COMPOSITION", text: "1 TO 3 STUDENTS (CROSS-COLLEGE ALLOWED)", status: "VERIFIED" },
            { phase: "TRACKS", text: "TRACK A (NO-CODE STRATEGY) & TRACK B (AI AGENTS)", status: "OPEN" },
            { phase: "PRIZE POOL", text: "₹20 LAKH IN CASH & INCUBATION ACCESS", status: "GUARANTEED" },
            { phase: "PHASE III ASSEMBLY", text: "SUBMISSIONS OPEN 31 AUGUST", status: "UPCOMING" },
            { phase: "PHASE II", text: "TEAM REGISTRATION OPEN NOW", status: "ACTIVE" },
            { phase: "TEAM COMPOSITION", text: "1 TO 3 STUDENTS (CROSS-COLLEGE ALLOWED)", status: "VERIFIED" },
            { phase: "TRACKS", text: "TRACK A (NO-CODE STRATEGY) & TRACK B (AI AGENTS)", status: "OPEN" },
            { phase: "PRIZE POOL", text: "₹20 LAKH IN CASH & INCUBATION ACCESS", status: "GUARANTEED" },
          ].map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-2.5">
              <span className="text-[#8B2635] font-bold">•</span>
              <span className="text-[#FAF4E8] font-semibold">{item.phase}:</span>
              <span>{item.text}</span>
              <span className="px-1.5 py-0.2 bg-[#8B2635]/30 border border-[#8B2635]/60 text-[#FCE6B8] text-[9px] font-bold">
                [{item.status}]
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
