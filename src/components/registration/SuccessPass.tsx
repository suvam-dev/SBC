"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  Printer,
  Copy,
  Check,
  Share2,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Layers,
  Sparkles,
  Users,
  MessageSquare,
  FileText,
  Building2
} from "lucide-react";
import { FormDataState } from "./TicketPreview";
import { competition } from "@/config/competition";

interface SuccessPassProps {
  formData: FormDataState;
  regId: string;
  onReset: () => void;
}

export function SuccessPass({ formData, regId, onReset }: SuccessPassProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(regId);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const selectedOpp = competition.opportunitySpaces?.find(
    (o) => o.id === formData.opportunitySpaceId
  );
  const displayOppTitle =
    formData.opportunitySpaceId === "custom-problem" && formData.customOpportunity
      ? formData.customOpportunity
      : selectedOpp?.title || "Standard Problem Track";

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      
      {/* Top Congratulatory Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 bg-[#FAF0DC] border border-[#DFC8A8] px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#8B2635] mb-4">
          <Sparkles size={14} className="text-[#F89B29]" />
          <span>STAGE II REGISTRATION CONFIRMED</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141010] mb-3">
          Your Candidacy Dossier is Verified.
        </h1>

        <p className="text-sm sm:text-base text-[#5C4C3E] max-w-xl mx-auto leading-relaxed">
          Welcome to <span className="font-semibold text-[#141010]">The Great Rewiring 2026</span>. Your team has been registered with SBC E-Cell, IIT Kharagpur. Save or print your official Entry Pass below.
        </p>
      </motion.div>

      {/* The Printable Official Entry Pass */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="bg-[#FFFDF9] border-4 border-[#141010] shadow-[12px_12px_0px_0px_#141010] overflow-hidden mb-10 print:shadow-none print:border-2"
        id="printable-admit-card"
      >
        {/* Pass Top Bar */}
        <div className="bg-[#141010] text-[#FAF4E8] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-b-2 border-[#141010]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#8B2635] flex items-center justify-center font-display text-white text-xl">
              K
            </div>
            <div>
              <div className="font-display text-lg tracking-wider text-[#F89B29] leading-none">
                {competition.organization} • {competition.institution}
              </div>
              <div className="text-[10px] font-mono text-[#B8A898] uppercase tracking-widest mt-0.5">
                {competition.name} • ADMIT DOSSIER 2026
              </div>
            </div>
          </div>

          <div className="text-right flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase bg-[#8B2635] text-white px-3 py-1 font-bold">
              OFFICIAL ENTRY PASS
            </span>
          </div>
        </div>

        {/* Perforated Divider */}
        <div className="w-full border-b-2 border-dashed border-[#D5C2A5] relative bg-[#FAF4E8] py-0.5">
          <div className="absolute -left-4 -top-2 w-6 h-6 rounded-full bg-[#FAF4E8] border-2 border-[#141010]" />
          <div className="absolute -right-4 -top-2 w-6 h-6 rounded-full bg-[#FAF4E8] border-2 border-[#141010]" />
        </div>

        {/* Pass Main Grid */}
        <div className="p-6 sm:p-10 space-y-8 bg-[#FFFDF9]">
          
          {/* Top Row: Reg ID & Track */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-6 border-b border-[#EADFCF]">
            <div className="md:col-span-8 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#78695C] block">
                REGISTERED TEAM NAME
              </span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-[#8B2635] font-bold">
                {formData.teamName}
              </h2>
              {formData.tagline && (
                <p className="text-xs sm:text-sm italic font-serif text-[#54463A]">
                  &ldquo;{formData.tagline}&rdquo;
                </p>
              )}
            </div>

            <div className="md:col-span-4 bg-[#FAF0DC] border border-[#DFCBB2] p-4 text-center space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#78695C] block">
                CANDIDACY REGISTRATION ID
              </span>
              <div className="font-mono text-base sm:text-lg font-bold text-[#141010] tracking-wider">
                {regId}
              </div>
              <span className="inline-block bg-[#8B2635] text-white text-[9px] font-mono uppercase px-2 py-0.5 font-semibold">
                STAGE II CLEARED
              </span>
            </div>
          </div>

          {/* Middle Row: Track & Problem Space */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-[#EADFCF]">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#78695C] block">
                COMPETITION TRACK
              </span>
              <div className="font-serif text-lg font-bold text-[#141010]">
                {formData.track === "strategy"
                  ? "Track A: Product & Business Strategy"
                  : "Track B: Builder & AI Agent Track"}
              </div>
              <span
                className={`inline-block text-[10px] font-mono uppercase font-bold px-2 py-0.5 ${
                  formData.track === "strategy"
                    ? "bg-[#FAF0DC] text-[#8B2635] border border-[#DECBB4]"
                    : "bg-[#D6E8EB] text-[#183153] border border-[#ABCBD2]"
                }`}
              >
                {formData.track === "strategy" ? "NO CODE REQUIRED" : "LOW-CODE / AGENTIC"}
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#78695C] block">
                TARGET PROBLEM STACK
              </span>
              <div className="font-serif text-lg font-bold text-[#141010]">
                {displayOppTitle}
              </div>
              <p className="text-xs text-[#5C4C3E] line-clamp-2">
                {formData.problemThesis || "Comprehensive thesis submitted in registration dossier."}
              </p>
            </div>
          </div>

          {/* Members Table */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#78695C] block mb-3">
              ROSTERED CANDIDATES ({formData.teamSize} MEMBER{formData.teamSize > 1 ? "S" : ""})
            </span>

            <div className="border border-[#D5C2A5] overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-[#FAF0DC] text-[#141010] border-b border-[#D5C2A5] font-mono uppercase text-[10px]">
                  <tr>
                    <th className="p-2.5">Member</th>
                    <th className="p-2.5">Role</th>
                    <th className="p-2.5">Institution</th>
                    <th className="p-2.5">Degree / Year</th>
                    <th className="p-2.5">Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EADFCF]">
                  <tr>
                    <td className="p-2.5 font-bold text-[#141010]">{formData.leadName} (Lead)</td>
                    <td className="p-2.5 font-mono text-[#8B2635]">Team Lead</td>
                    <td className="p-2.5 text-[#3E3228]">{formData.leadCollege}</td>
                    <td className="p-2.5 text-[#6E5E50]">{formData.leadDegree} ({formData.leadYear})</td>
                    <td className="p-2.5 font-mono text-[#5C4C3E]">{formData.leadEmail}</td>
                  </tr>
                  {formData.members.slice(0, formData.teamSize - 1).map((m, idx) => (
                    <tr key={idx}>
                      <td className="p-2.5 font-bold text-[#141010]">{m.name || `Member ${idx + 2}`}</td>
                      <td className="p-2.5 font-mono text-[#8B2635]">{m.role || "Co-Strategist"}</td>
                      <td className="p-2.5 text-[#3E3228]">{m.college || formData.leadCollege}</td>
                      <td className="p-2.5 text-[#6E5E50]">{m.degree || "B.Tech"}</td>
                      <td className="p-2.5 font-mono text-[#5C4C3E]">{m.email || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Seal, Barcode & Verification Sign-off */}
          <div className="pt-6 border-t-2 border-dashed border-[#D5C2A5] flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-[10px] font-mono uppercase text-[#78695C] block">
                REGISTRATION TIMESTAMP: {new Date().toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
              </span>
              <div className="flex gap-1 items-end h-8 justify-center sm:justify-start">
                <div className="w-1.5 bg-[#141010] h-full" />
                <div className="w-0.5 bg-[#141010] h-full" />
                <div className="w-2 bg-[#141010] h-full" />
                <div className="w-1 bg-[#141010] h-full" />
                <div className="w-3 bg-[#141010] h-full" />
                <div className="w-0.5 bg-[#141010] h-full" />
                <div className="w-1.5 bg-[#141010] h-full" />
                <div className="w-2.5 bg-[#141010] h-full" />
                <div className="w-0.5 bg-[#141010] h-full" />
                <div className="w-2 bg-[#141010] h-full" />
              </div>
              <span className="text-[9px] font-mono text-[#78695C] block">
                OFFICIAL DIGITAL RECORD • E-CELL IIT KGP
              </span>
            </div>

            {/* Ink Stamp */}
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#8B2635] flex flex-col items-center justify-center text-center p-2 rotate-[-5deg] text-[#8B2635]">
              <ShieldCheck size={20} />
              <span className="text-[9px] font-mono font-bold uppercase mt-1">
                AUTHENTICATED
              </span>
              <span className="text-[7px] font-mono">
                IIT KHARAGPUR
              </span>
            </div>

          </div>

        </div>

        {/* Pass Bottom Bar */}
        <div className="bg-[#FAF0DC] px-6 py-2.5 border-t border-[#DECBB2] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#5C4C3E] gap-2">
          <span>PRIZE POOL: ₹20 LAKH IN CASH & INCUBATION ACCESS</span>
          <span className="font-bold text-[#8B2635]">NO FEES CHARGED • ₹0 ENTRY</span>
        </div>
      </motion.div>

      {/* Action Buttons Bar */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-14 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-[#141010] hover:bg-[#2A2424] text-white px-6 py-3 text-xs font-mono uppercase font-bold tracking-wider transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
        >
          <Printer size={15} />
          <span>Print / Save Pass</span>
        </button>

        <button
          onClick={handleCopy}
          className="bg-[#FFFDF9] hover:bg-white text-[#141010] border-2 border-[#141010] px-6 py-3 text-xs font-mono uppercase font-bold tracking-wider transition-all flex items-center gap-2 shadow-[3px_3px_0px_0px_#141010]"
        >
          {copied ? (
            <>
              <Check size={15} className="text-emerald-600" />
              <span>Copied ID!</span>
            </>
          ) : (
            <>
              <Copy size={15} />
              <span>Copy Team ID</span>
            </>
          )}
        </button>

        <Link
          href="/"
          className="bg-[#8B2635] hover:bg-[#731E2B] text-white px-6 py-3 text-xs font-mono uppercase font-bold tracking-wider transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
        >
          <span>Explore Problem Cases</span>
          <ArrowRight size={15} />
        </Link>
      </div>

      {/* Next Steps Roadmap */}
      <div className="bg-[#FAF0DC] border-2 border-[#D5C2A5] p-6 sm:p-8 space-y-6 print:hidden">
        <div className="flex items-center gap-2 border-b border-[#DFC8A8] pb-4">
          <Calendar size={18} className="text-[#8B2635]" />
          <h3 className="font-serif text-xl font-bold text-[#141010]">
            What Your Team Needs to Do Next:
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#5C4C3E]">
          <div className="space-y-2 bg-[#FFFDF9] p-4 border border-[#DECBB4]">
            <div className="font-mono text-sm font-bold text-[#8B2635]">
              STEP 01 • 25 AUGUST
            </div>
            <h4 className="font-serif text-base font-bold text-[#141010]">
              Access Curated Opportunity Stacks
            </h4>
            <p className="leading-relaxed font-sans">
              Around 30 verified consumer problem cases with primary Bharat user evidence will be released directly to your team portal.
            </p>
          </div>

          <div className="space-y-2 bg-[#FFFDF9] p-4 border border-[#DECBB4]">
            <div className="font-mono text-sm font-bold text-[#8B2635]">
              STEP 02 • 31 AUGUST
            </div>
            <h4 className="font-serif text-base font-bold text-[#141010]">
              Submit 6-Slide Strategy Memo
            </h4>
            <p className="leading-relaxed font-sans">
              Submit your team&apos;s product teardown, consumer insight, unit economics, or agent prototype architecture before the Phase III deadline.
            </p>
          </div>

          <div className="space-y-2 bg-[#FFFDF9] p-4 border border-[#DECBB4]">
            <div className="font-mono text-sm font-bold text-[#8B2635]">
              STEP 03 • 10 OCTOBER
            </div>
            <h4 className="font-serif text-base font-bold text-[#141010]">
              National Finale at IIT Kharagpur
            </h4>
            <p className="leading-relaxed font-sans">
              Top 20 shortlisted teams pitch live in person before venture capitalists, founders, and infrastructure rail partners at the IIT KGP campus.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-[#DECBB4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#78695C]">
          <span>Need to update roster or query details?</span>
          <a
            href={`mailto:${competition.socials.email}?subject=Registration%20Inquiry%20${regId}`}
            className="text-[#8B2635] font-bold hover:underline"
          >
            Email Support Desk: {competition.socials.email}
          </a>
        </div>
      </div>

    </div>
  );
}
