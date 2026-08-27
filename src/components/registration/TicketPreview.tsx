"use client";

import { motion } from "framer-motion";
import { Sparkles, QrCode, ShieldCheck, Users, Trophy, Layers } from "lucide-react";
import { competition } from "@/config/competition";

export interface FormDataState {
  track: "strategy" | "builder";
  teamName: string;
  tagline: string;
  leadName: string;
  leadEmail: string;
  leadPhone: string;
  leadCollege: string;
  leadDegree: string;
  leadYear: string;
  leadCity: string;
  leadSocial: string;
  teamSize: 1 | 2 | 3;
  members: Array<{
    name: string;
    email: string;
    phone: string;
    college: string;
    degree: string;
    role: string;
  }>;
  opportunitySpaceId: string;
  customOpportunity: string;
  problemThesis: string;
  selectedRails: string[];
  referralSource: string;
  agreedToTerms: boolean;
  studentVerified: boolean;
}

interface TicketPreviewProps {
  formData: FormDataState;
  currentStep: number;
}

export function TicketPreview({ formData, currentStep }: TicketPreviewProps) {
  const selectedOpp = competition.opportunitySpaces?.find(
    (o) => o.id === formData.opportunitySpaceId
  );

  const displayOppTitle =
    formData.opportunitySpaceId === "custom-problem" && formData.customOpportunity
      ? formData.customOpportunity
      : selectedOpp?.title || "No Opportunity Space Selected Yet";

  const isComplete =
    formData.teamName.trim().length > 0 &&
    formData.leadName.trim().length > 0 &&
    formData.leadCollege.trim().length > 0;

  return (
    <div className="space-y-6 max-h-[calc(100vh-7rem)] overflow-y-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      
      {/* Visual Live Dossier Badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8B2635] animate-ping" />
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#8B2635]">
            LIVE CANDIDACY PASS PREVIEW
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#78695C] bg-[#FAF0DC] px-2.5 py-0.5 border border-[#DECBB5]">
          STEP {currentStep} / 4
        </span>
      </div>

      {/* The Vintage Ticket / Admit Card Component */}
      <motion.div
        layout
        className="relative bg-[#FFFDF9] text-[#141010] border-2 border-[#141010] shadow-[6px_6px_0px_0px_#141010] overflow-hidden transition-all"
      >
        {/* Top Header Strip with Perforated Tear Line */}
        <div className="bg-[#141010] text-[#FAF4E8] px-5 py-3 flex items-center justify-between border-b border-[#141010]">
          <div className="flex items-center gap-2">
            <span className="font-display text-base tracking-widest text-[#F89B29]">
              {competition.organization}
            </span>
            <span className="text-[9px] font-mono text-[#C5B8A8] tracking-widest uppercase">
              • IIT KHARAGPUR
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest bg-[#8B2635] text-white px-2 py-0.5 font-bold">
            OFFICIAL ADMIT CARD
          </span>
        </div>

        {/* Decorative Perforation Marks */}
        <div className="w-full border-b-2 border-dashed border-[#D5C2A5] relative">
          <div className="absolute -left-3 -top-2 w-4 h-4 rounded-full bg-[#FAF4E8] border border-[#141010]" />
          <div className="absolute -right-3 -top-2 w-4 h-4 rounded-full bg-[#FAF4E8] border border-[#141010]" />
        </div>

        {/* Main Ticket Body */}
        <div className="p-6 space-y-5 bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EC]">
          
          {/* Track Banner */}
          <div className="flex items-center justify-between gap-2 border-b border-[#E8DCcb] pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#78695C] block">
                COMPETITION TRACK
              </span>
              <h4 className="font-serif text-lg font-bold text-[#141010] leading-tight mt-0.5">
                {formData.track === "strategy"
                  ? "Track A: Product & Business Strategy"
                  : "Track B: Builder & AI Agent Track"}
              </h4>
            </div>
            <span
              className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 shrink-0 ${
                formData.track === "strategy"
                  ? "bg-[#FAF0DC] text-[#8B2635] border border-[#DFC8A8]"
                  : "bg-[#D6E8EB] text-[#183153] border border-[#ABCBD2]"
              }`}
            >
              {formData.track === "strategy" ? "NO CODE" : "AI AGENTS"}
            </span>
          </div>

          {/* Team Details Section */}
          <div className="space-y-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#78695C] block">
                REGISTERED TEAM NAME
              </span>
              <div className="font-display text-2xl tracking-wide uppercase text-[#8B2635] font-bold truncate">
                {formData.teamName.trim() ? formData.teamName : "YOUR TEAM NAME"}
              </div>
              {formData.tagline.trim() && (
                <p className="text-xs text-[#54463A] italic font-serif mt-0.5 line-clamp-1">
                  &ldquo;{formData.tagline}&rdquo;
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#78695C] block">
                  TEAM LEAD
                </span>
                <span className="text-xs font-semibold text-[#141010] block truncate">
                  {formData.leadName.trim() ? formData.leadName : "Candidate Lead"}
                </span>
                <span className="text-[10px] text-[#6E5E50] font-mono block truncate">
                  {formData.leadCollege.trim() ? formData.leadCollege : "Institute / University"}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#78695C] block">
                  TEAM COMPOSITION
                </span>
                <div className="inline-flex items-center gap-1 bg-[#141010] text-[#FAF4E8] px-2 py-0.5 text-[10px] font-mono font-bold mt-0.5">
                  <Users size={11} className="text-[#F89B29]" />
                  <span>
                    {formData.teamSize === 1
                      ? "SOLO (1 MEMBER)"
                      : formData.teamSize === 2
                      ? "DUO (2 MEMBERS)"
                      : "TRIO (3 MEMBERS)"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Opportunity Space */}
          <div className="bg-[#FAF0DC]/70 border border-[#DFCBB2] p-3 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#8B2635] font-bold">
                PROBLEM STACK SELECTED
              </span>
              <Layers size={12} className="text-[#8B2635]" />
            </div>
            <p className="text-xs font-serif font-bold text-[#141010] line-clamp-2">
              {displayOppTitle}
            </p>
          </div>

          {/* Target Infrastructure Rails */}
          {formData.selectedRails.length > 0 && (
            <div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#78695C] block mb-1.5">
                ACTIVE COMMERCE RAILS
              </span>
              <div className="flex flex-wrap gap-1.5">
                {formData.selectedRails.map((rail, idx) => (
                  <span
                    key={idx}
                    className="bg-[#EFE5D3] text-[#3D3025] text-[10px] font-mono px-2 py-0.5 border border-[#DECBB4]"
                  >
                    • {rail}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Ink Stamp Seal & Barcode Footer */}
          <div className="pt-4 border-t border-dashed border-[#D5C2A5] flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#78695C] block">
                CANDIDACY PASS ID
              </span>
              <span className="font-mono text-xs font-bold text-[#141010] tracking-wider block">
                TGR-2026-{formData.track === "strategy" ? "STRAT" : "BUILD"}-
                {Math.abs(
                  (formData.teamName || "SBC").split("").reduce((a, b) => {
                    a = (a << 5) - a + b.charCodeAt(0);
                    return a & a;
                  }, 0)
                )
                  .toString()
                  .slice(0, 4)
                  .padEnd(4, "8")}
              </span>
              <div className="flex gap-0.5 items-end h-6 opacity-70">
                <div className="w-1 bg-[#141010] h-full" />
                <div className="w-0.5 bg-[#141010] h-full" />
                <div className="w-1.5 bg-[#141010] h-full" />
                <div className="w-0.5 bg-[#141010] h-full" />
                <div className="w-2 bg-[#141010] h-full" />
                <div className="w-1 bg-[#141010] h-full" />
                <div className="w-0.5 bg-[#141010] h-full" />
                <div className="w-1 bg-[#141010] h-full" />
                <div className="w-2 bg-[#141010] h-full" />
                <div className="w-0.5 bg-[#141010] h-full" />
                <div className="w-1 bg-[#141010] h-full" />
              </div>
            </div>

            {/* Vintage Circular Seal */}
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#8B2635] flex flex-col items-center justify-center text-center p-1.5 rotate-[-8deg] select-none text-[#8B2635]">
              <ShieldCheck size={16} />
              <span className="text-[8px] font-mono font-bold uppercase leading-none mt-0.5">
                IIT KHARAGPUR
              </span>
              <span className="text-[7px] font-mono tracking-tighter uppercase">
                COHORT 2026
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="bg-[#FAF0DC] px-4 py-2 border-t border-[#DECBB2] flex items-center justify-between text-[10px] font-mono text-[#5C4C3F]">
          <span>PRIZE POOL: ₹20 LAKH</span>
          <span className="font-bold text-[#8B2635]">FREE REGISTRATION (₹0)</span>
        </div>
      </motion.div>

      {/* Quick Perks & Rules Card */}
      <div className="bg-[#FAF0DC] border border-[#DECBB2] p-4 text-xs text-[#4A3D31] space-y-2.5">
        <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-[#141010] flex items-center gap-1.5">
          <Trophy size={14} className="text-[#8B2635]" />
          <span>What Happens After Registration?</span>
        </h5>
        <ul className="space-y-1.5 font-sans text-[11px] leading-relaxed text-[#5C4C3E]">
          <li className="flex items-start gap-1.5">
            <span className="text-[#8B2635] font-bold font-mono">01.</span>
            <span>Receive your official Team Candidacy Kit via email.</span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="text-[#8B2635] font-bold font-mono">02.</span>
            <span>Get direct access to the 30 Opportunity Spaces & consumer datasets.</span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="text-[#8B2635] font-bold font-mono">03.</span>
            <span>Submit your 6-slide Strategy Deck or Agent Prototype before 31 Aug.</span>
          </li>
        </ul>
      </div>

    </div>
  );
}
