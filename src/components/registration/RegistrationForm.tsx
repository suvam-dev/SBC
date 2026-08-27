"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Terminal,
  Users,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Layers,
  Building2,
  FileCheck2,
  HelpCircle,
  Wand2
} from "lucide-react";
import { FormDataState } from "./TicketPreview";
import { competition } from "@/config/competition";

interface RegistrationFormProps {
  formData: FormDataState;
  setFormData: React.Dispatch<React.SetStateAction<FormDataState>>;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  onSubmitSuccess: (regId: string) => void;
}

const DEGREES = [
  "B.Tech / B.E.",
  "Dual Degree (B.Tech + M.Tech)",
  "MBA / PGDM",
  "M.Tech / M.S.",
  "B.Des / M.Des",
  "B.Sc / M.Sc",
  "B.Com / BBA / Economics",
  "Ph.D / Research Scholar",
  "Other Undergraduate / Postgraduate"
];

const YEARS = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
  "5th Year / Dual",
  "Postgraduate / Ph.D"
];

const ROLES = [
  "Lead Strategist & Product Manager",
  "AI & Full-Stack Engineer",
  "UI/UX & Design Architect",
  "Financial Analyst & Unit Economics",
  "User Research & Operations Lead"
];

const RAILS_LIST = [
  "Voice & Regional Dialect Interface",
  "Payments, UPI & Escrow Rails",
  "Logistics & Physical Fulfillment",
  "Identity, KYC & Document Intelligence",
  "Agent Tool-Calling & Memory Store"
];

export function RegistrationForm({
  formData,
  setFormData,
  currentStep,
  setCurrentStep,
  onSubmitSuccess
}: RegistrationFormProps) {
  const searchParams = useSearchParams();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync track if query param exists
  useEffect(() => {
    const trackParam = searchParams.get("track");
    if (trackParam === "builder" || trackParam === "strategy") {
      setFormData((prev) => ({ ...prev, track: trackParam }));
    }
  }, [searchParams, setFormData]);

  const updateLeadField = (field: keyof FormDataState, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const updateMemberField = (index: number, field: string, value: string) => {
    setFormData((prev) => {
      const updatedMembers = [...prev.members];
      updatedMembers[index] = { ...updatedMembers[index], [field]: value };
      return { ...prev, members: updatedMembers };
    });
  };

  const toggleRail = (rail: string) => {
    setFormData((prev) => {
      const exists = prev.selectedRails.includes(rail);
      const selectedRails = exists
        ? prev.selectedRails.filter((r) => r !== rail)
        : [...prev.selectedRails, rail];
      return { ...prev, selectedRails };
    });
  };

  const fillSampleData = () => {
    setFormData({
      track: "strategy",
      teamName: "Vanguard Strategy",
      tagline: "Rewiring Bharat's informal bookkeeping for 40M kirana stores.",
      leadName: "Aarav Sharma",
      leadEmail: "aarav.sharma@iitkgp.ac.in",
      leadPhone: "+91 98765 43210",
      leadCollege: "IIT Kharagpur",
      leadDegree: "Dual Degree (B.Tech + M.Tech)",
      leadYear: "4th Year",
      leadCity: "Kharagpur, West Bengal",
      leadSocial: "https://linkedin.com/in/aaravsharma",
      teamSize: 3,
      members: [
        {
          name: "Rhea Sen",
          email: "rhea.sen@iima.ac.in",
          phone: "+91 98123 45678",
          college: "IIM Ahmedabad",
          degree: "MBA / PGDM",
          role: "Lead Strategist & Product Manager"
        },
        {
          name: "Karan Verma",
          email: "karan.v@bits-pilani.ac.in",
          phone: "+91 97654 32109",
          college: "BITS Pilani",
          degree: "B.Tech / B.E.",
          role: "AI & Full-Stack Engineer"
        }
      ],
      opportunitySpaceId: "whatsapp-filing",
      customOpportunity: "",
      problemThesis:
        "Indian micro-merchants store vital invoices, tax memos, and receipts across unorganized WhatsApp chats. We are designing an agentic ledger interface that extracts line items without requiring a cumbersome standalone app.",
      selectedRails: [
        "Voice & Regional Dialect Interface",
        "Payments, UPI & Escrow Rails",
        "Identity, KYC & Document Intelligence"
      ],
      referralSource: "E-Cell IIT Kharagpur Official Channel",
      agreedToTerms: true,
      studentVerified: true
    });
    setErrors({});
  };

  // Step Validation
  const validateStep = (step: number): boolean => {
    const errs: Record<string, string> = {};

    if (step === 1) {
      if (!formData.teamName.trim()) errs.teamName = "Team name is required.";
      if (!formData.leadName.trim()) errs.leadName = "Team lead full name is required.";
      if (!formData.leadEmail.trim() || !formData.leadEmail.includes("@")) {
        errs.leadEmail = "A valid student/institutional email is required.";
      }
      if (!formData.leadPhone.trim() || formData.leadPhone.length < 8) {
        errs.leadPhone = "Valid WhatsApp contact number is required.";
      }
      if (!formData.leadCollege.trim()) errs.leadCollege = "College/Institute name is required.";
    }

    if (step === 2) {
      if (formData.teamSize >= 2) {
        const m1 = formData.members[0];
        if (!m1?.name?.trim()) errs.m1_name = "Member 2 full name is required.";
        if (!m1?.email?.trim() || !m1.email.includes("@")) {
          errs.m1_email = "Member 2 valid email is required.";
        }
      }
      if (formData.teamSize === 3) {
        const m2 = formData.members[1];
        if (!m2?.name?.trim()) errs.m2_name = "Member 3 full name is required.";
        if (!m2?.email?.trim() || !m2.email.includes("@")) {
          errs.m2_email = "Member 3 valid email is required.";
        }
      }
    }

    if (step === 3) {
      if (!formData.opportunitySpaceId) {
        errs.opportunitySpaceId = "Please select one of the opportunity challenge spaces.";
      }
      if (formData.opportunitySpaceId === "custom-problem" && !formData.customOpportunity.trim()) {
        errs.customOpportunity = "Please describe your custom problem friction.";
      }
      if (formData.selectedRails.length === 0) {
        errs.selectedRails = "Please select at least one commerce / agentic rail.";
      }
    }

    if (step === 4) {
      if (!formData.studentVerified) {
        errs.studentVerified = "You must certify that all members are currently enrolled students.";
      }
      if (!formData.agreedToTerms) {
        errs.agreedToTerms = "You must agree to the competition rules and original work declaration.";
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(Math.min(currentStep + 1, 4));
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setCurrentStep(Math.max(currentStep - 1, 1));
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedCode = `TGR-2026-KGP-${Math.floor(1000 + Math.random() * 9000)}`;
      setIsSubmitting(false);
      onSubmitSuccess(generatedCode);
    }, 1200);
  };

  return (
    <div className="bg-[#FAF4E8] border-2 border-[#141010] shadow-[6px_6px_0px_0px_#141010] p-6 sm:p-10 relative">
      
      {/* Top Controls: Step Indicator & Demo Auto-Fill */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-[#D5C2A5] pb-6 mb-8">
        
        {/* Step Numbers */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto w-full sm:w-auto">
          {[
            { num: 1, title: "Track & Identity" },
            { num: 2, title: "Team Members" },
            { num: 3, title: "Opportunity Space" },
            { num: 4, title: "Review & Submit" }
          ].map((s) => (
            <button
              key={s.num}
              type="button"
              onClick={() => {
                if (s.num < currentStep || validateStep(currentStep)) {
                  setCurrentStep(s.num);
                }
              }}
              className={`flex items-center gap-1.5 py-1 px-2.5 text-xs font-mono transition-all uppercase ${
                currentStep === s.num
                  ? "bg-[#141010] text-[#FAF4E8] font-bold"
                  : currentStep > s.num
                  ? "bg-[#EFE5D3] text-[#141010] font-semibold border border-[#D5C2A5]"
                  : "text-[#8A7969] hover:text-[#141010]"
              }`}
            >
              <span>0{s.num}.</span>
              <span className="hidden md:inline">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Quick Demo Fill Button */}
        <button
          type="button"
          onClick={fillSampleData}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8B2635] hover:text-[#141010] underline tracking-wider self-end sm:self-auto cursor-pointer"
        >
          <Wand2 size={13} />
          <span>Fill Sample Data</span>
        </button>
      </div>

      {/* Main Form Formats */}
      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          
          {/* ================= STEP 1: TRACK & IDENTITY ================= */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8B2635] font-bold block mb-1">
                  STAGE II • STEP 01 / 04
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#141010]">
                  Select Track & Establish Team Identity
                </h2>
                <p className="text-xs sm:text-sm text-[#5C4C3E] mt-1 font-light">
                  Choose the competition pathway that aligns with your skillset, and provide your team credentials.
                </p>
              </div>

              {/* Track Selection Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Track A */}
                <div
                  onClick={() => updateLeadField("track", "strategy")}
                  className={`p-5 border-2 cursor-pointer transition-all relative ${
                    formData.track === "strategy"
                      ? "bg-[#FAF0DC] border-[#8B2635] shadow-[4px_4px_0px_0px_#8B2635]"
                      : "bg-[#FFFDF9] border-[#D5C2A5] hover:border-[#141010]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#8B2635] text-white text-[10px] font-mono uppercase font-bold px-2 py-0.5">
                      NO CODE REQUIRED
                    </span>
                    <Compass size={18} className={formData.track === "strategy" ? "text-[#8B2635]" : "text-[#78695C]"} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#141010] mb-1">
                    Track A: Product & Business Strategy
                  </h3>
                  <p className="text-xs text-[#5C4C3E] leading-relaxed">
                    Focus on user insight teardowns, market viability, unit economics (CAC/LTV), and go-to-market strategies for Bharat.
                  </p>
                </div>

                {/* Track B */}
                <div
                  onClick={() => updateLeadField("track", "builder")}
                  className={`p-5 border-2 cursor-pointer transition-all relative ${
                    formData.track === "builder"
                      ? "bg-[#D6E8EB]/50 border-[#183153] shadow-[4px_4px_0px_0px_#183153]"
                      : "bg-[#FFFDF9] border-[#D5C2A5] hover:border-[#141010]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#183153] text-white text-[10px] font-mono uppercase font-bold px-2 py-0.5">
                      LOW-CODE / AGENTIC
                    </span>
                    <Terminal size={18} className={formData.track === "builder" ? "text-[#183153]" : "text-[#78695C]"} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#141010] mb-1">
                    Track B: Builder & AI Agent Track
                  </h3>
                  <p className="text-xs text-[#5C4C3E] leading-relaxed">
                    Build functional agent workflows or prototypes with memory, voice, payment or logistics rail integrations.
                  </p>
                </div>

              </div>

              {/* Team Name & Tagline */}
              <div className="space-y-4 pt-4 border-t border-[#DECBB4]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#141010] mb-1">
                      Team Name *
                    </label>
                    <input
                      type="text"
                      value={formData.teamName}
                      onChange={(e) => updateLeadField("teamName", e.target.value)}
                      placeholder="e.g. Indic Agents, The Rewirers"
                      className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3.5 py-2.5 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                    />
                    {errors.teamName && (
                      <p className="text-xs font-mono text-[#8B2635] mt-1">{errors.teamName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#141010] mb-1">
                      Team One-Line Elevator Pitch
                    </label>
                    <input
                      type="text"
                      value={formData.tagline}
                      onChange={(e) => updateLeadField("tagline", e.target.value)}
                      placeholder="e.g. Automating mandi logistics in regional voice"
                      className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3.5 py-2.5 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                    />
                  </div>
                </div>
              </div>

              {/* Team Lead Section */}
              <div className="space-y-4 pt-4 border-t border-[#DECBB4]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase font-bold bg-[#141010] text-white px-2 py-0.5">
                    PRIMARY CANDIDATE
                  </span>
                  <span className="text-xs font-mono text-[#78695C] uppercase tracking-wider">
                    Team Lead / Primary Contact
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.leadName}
                      onChange={(e) => updateLeadField("leadName", e.target.value)}
                      placeholder="e.g. Aarav Sharma"
                      className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                    />
                    {errors.leadName && (
                      <p className="text-xs font-mono text-[#8B2635] mt-1">{errors.leadName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                      Student / College Email *
                    </label>
                    <input
                      type="email"
                      value={formData.leadEmail}
                      onChange={(e) => updateLeadField("leadEmail", e.target.value)}
                      placeholder="e.g. student@iitkgp.ac.in"
                      className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                    />
                    {errors.leadEmail && (
                      <p className="text-xs font-mono text-[#8B2635] mt-1">{errors.leadEmail}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.leadPhone}
                      onChange={(e) => updateLeadField("leadPhone", e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                    />
                    {errors.leadPhone && (
                      <p className="text-xs font-mono text-[#8B2635] mt-1">{errors.leadPhone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                      College / University *
                    </label>
                    <input
                      type="text"
                      value={formData.leadCollege}
                      onChange={(e) => updateLeadField("leadCollege", e.target.value)}
                      placeholder="e.g. IIT Kharagpur, IIM Ahmedabad, BITS"
                      className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                    />
                    {errors.leadCollege && (
                      <p className="text-xs font-mono text-[#8B2635] mt-1">{errors.leadCollege}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                      Degree Program
                    </label>
                    <select
                      value={formData.leadDegree}
                      onChange={(e) => updateLeadField("leadDegree", e.target.value)}
                      className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] focus:outline-none focus:border-[#8B2635]"
                    >
                      {DEGREES.map((d, idx) => (
                        <option key={idx} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                      Year of Study
                    </label>
                    <select
                      value={formData.leadYear}
                      onChange={(e) => updateLeadField("leadYear", e.target.value)}
                      className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] focus:outline-none focus:border-[#8B2635]"
                    >
                      {YEARS.map((y, idx) => (
                        <option key={idx} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                      City & State
                    </label>
                    <input
                      type="text"
                      value={formData.leadCity}
                      onChange={(e) => updateLeadField("leadCity", e.target.value)}
                      placeholder="e.g. Kolkata, West Bengal"
                      className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                      LinkedIn / Portfolio / GitHub
                    </label>
                    <input
                      type="text"
                      value={formData.leadSocial}
                      onChange={(e) => updateLeadField("leadSocial", e.target.value)}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                    />
                  </div>
                </div>
              </div>

            </motion.div>
          )}


          {/* ================= STEP 2: TEAM MEMBERS (1 TO 3) ================= */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8B2635] font-bold block mb-1">
                  STAGE II • STEP 02 / 04
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#141010]">
                  Team Size & Member Roster
                </h2>
                <p className="text-xs sm:text-sm text-[#5C4C3E] mt-1 font-light">
                  Teams can have 1, 2, or 3 members. Cross-college and cross-discipline teams are warmly encouraged!
                </p>
              </div>

              {/* Team Size Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase font-bold text-[#141010]">
                  Select Team Composition
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { count: 1, label: "Solo Founder", sub: "1 Member" },
                    { count: 2, label: "Duo Team", sub: "2 Members" },
                    { count: 3, label: "Full Trio", sub: "3 Members" }
                  ].map((item) => (
                    <button
                      key={item.count}
                      type="button"
                      onClick={() => updateLeadField("teamSize", item.count as 1 | 2 | 3)}
                      className={`p-3 text-center border-2 transition-all cursor-pointer ${
                        formData.teamSize === item.count
                          ? "bg-[#FAF0DC] border-[#8B2635] shadow-[3px_3px_0px_0px_#8B2635]"
                          : "bg-[#FFFDF9] border-[#D5C2A5] hover:border-[#141010]"
                      }`}
                    >
                      <div className="font-display text-xl uppercase tracking-wider text-[#141010]">
                        {item.count} Member{item.count > 1 ? "s" : ""}
                      </div>
                      <div className="text-[10px] font-mono text-[#78695C] uppercase">
                        {item.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary of Lead */}
              <div className="bg-[#FAF0DC]/60 border border-[#DFC8A8] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8B2635] text-white flex items-center justify-center font-display text-sm">
                    01
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#78695C] block">
                      TEAM LEAD (CONFIRMED)
                    </span>
                    <span className="text-sm font-bold text-[#141010]">
                      {formData.leadName || "Lead Candidate"}
                    </span>
                    <span className="text-xs text-[#5C4C3E] block font-mono">
                      {formData.leadEmail || "email@domain.com"} • {formData.leadCollege || "Institute"}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="text-xs font-mono text-[#8B2635] hover:underline"
                >
                  Edit Lead
                </button>
              </div>

              {/* Additional Member 2 */}
              {formData.teamSize >= 2 && (
                <div className="p-5 border-2 border-[#D5C2A5] bg-[#FFFDF9] space-y-4">
                  <div className="flex items-center justify-between border-b border-[#EADFCF] pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#141010] text-white flex items-center justify-center font-display text-xs">
                        02
                      </div>
                      <h4 className="font-serif text-base font-bold text-[#141010]">
                        Member 2 Details
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={() => updateMemberField(0, "college", formData.leadCollege)}
                      className="text-[11px] font-mono text-[#8B2635] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Building2 size={12} />
                      <span>Same College as Lead</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.members[0]?.name || ""}
                        onChange={(e) => updateMemberField(0, "name", e.target.value)}
                        placeholder="e.g. Rhea Sen"
                        className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                      />
                      {errors.m1_name && (
                        <p className="text-xs font-mono text-[#8B2635] mt-1">{errors.m1_name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.members[0]?.email || ""}
                        onChange={(e) => updateMemberField(0, "email", e.target.value)}
                        placeholder="e.g. rhea@iima.ac.in"
                        className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                      />
                      {errors.m1_email && (
                        <p className="text-xs font-mono text-[#8B2635] mt-1">{errors.m1_email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                        WhatsApp Contact
                      </label>
                      <input
                        type="tel"
                        value={formData.members[0]?.phone || ""}
                        onChange={(e) => updateMemberField(0, "phone", e.target.value)}
                        placeholder="e.g. +91 98123 45678"
                        className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                        College / Institution
                      </label>
                      <input
                        type="text"
                        value={formData.members[0]?.college || ""}
                        onChange={(e) => updateMemberField(0, "college", e.target.value)}
                        placeholder="e.g. IIM Ahmedabad"
                        className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                        Degree Program
                      </label>
                      <select
                        value={formData.members[0]?.degree || DEGREES[0]}
                        onChange={(e) => updateMemberField(0, "degree", e.target.value)}
                        className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] focus:outline-none focus:border-[#8B2635]"
                      >
                        {DEGREES.map((d, idx) => (
                          <option key={idx} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                        Primary Role
                      </label>
                      <select
                        value={formData.members[0]?.role || ROLES[0]}
                        onChange={(e) => updateMemberField(0, "role", e.target.value)}
                        className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] focus:outline-none focus:border-[#8B2635]"
                      >
                        {ROLES.map((r, idx) => (
                          <option key={idx} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Additional Member 3 */}
              {formData.teamSize === 3 && (
                <div className="p-5 border-2 border-[#D5C2A5] bg-[#FFFDF9] space-y-4">
                  <div className="flex items-center justify-between border-b border-[#EADFCF] pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#141010] text-white flex items-center justify-center font-display text-xs">
                        03
                      </div>
                      <h4 className="font-serif text-base font-bold text-[#141010]">
                        Member 3 Details
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={() => updateMemberField(1, "college", formData.leadCollege)}
                      className="text-[11px] font-mono text-[#8B2635] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Building2 size={12} />
                      <span>Same College as Lead</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.members[1]?.name || ""}
                        onChange={(e) => updateMemberField(1, "name", e.target.value)}
                        placeholder="e.g. Karan Verma"
                        className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                      />
                      {errors.m2_name && (
                        <p className="text-xs font-mono text-[#8B2635] mt-1">{errors.m2_name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.members[1]?.email || ""}
                        onChange={(e) => updateMemberField(1, "email", e.target.value)}
                        placeholder="e.g. karan@bits-pilani.ac.in"
                        className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                      />
                      {errors.m2_email && (
                        <p className="text-xs font-mono text-[#8B2635] mt-1">{errors.m2_email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                        WhatsApp Contact
                      </label>
                      <input
                        type="tel"
                        value={formData.members[1]?.phone || ""}
                        onChange={(e) => updateMemberField(1, "phone", e.target.value)}
                        placeholder="e.g. +91 97654 32109"
                        className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                        College / Institution
                      </label>
                      <input
                        type="text"
                        value={formData.members[1]?.college || ""}
                        onChange={(e) => updateMemberField(1, "college", e.target.value)}
                        placeholder="e.g. BITS Pilani"
                        className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                        Degree Program
                      </label>
                      <select
                        value={formData.members[1]?.degree || DEGREES[0]}
                        onChange={(e) => updateMemberField(1, "degree", e.target.value)}
                        className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] focus:outline-none focus:border-[#8B2635]"
                      >
                        {DEGREES.map((d, idx) => (
                          <option key={idx} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#141010] mb-1">
                        Primary Role
                      </label>
                      <select
                        value={formData.members[1]?.role || ROLES[1]}
                        onChange={(e) => updateMemberField(1, "role", e.target.value)}
                        className="w-full bg-[#FFFDF9] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] focus:outline-none focus:border-[#8B2635]"
                      >
                        {ROLES.map((r, idx) => (
                          <option key={idx} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          )}


          {/* ================= STEP 3: OPPORTUNITY SPACE & RAILS ================= */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8B2635] font-bold block mb-1">
                  STAGE II • STEP 03 / 04
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#141010]">
                  Target Opportunity Space & Rails
                </h2>
                <p className="text-xs sm:text-sm text-[#5C4C3E] mt-1 font-light">
                  Select which real-world Indian problem space your team aims to rewire, or propose your own custom friction.
                </p>
              </div>

              {errors.opportunitySpaceId && (
                <div className="bg-[#F8D7DA] border border-[#F5C6CB] text-[#721C24] p-3 text-xs font-mono">
                  {errors.opportunitySpaceId}
                </div>
              )}

              {/* Opportunity Stacks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {competition.opportunitySpaces?.map((opp) => (
                  <div
                    key={opp.id}
                    onClick={() => updateLeadField("opportunitySpaceId", opp.id)}
                    className={`p-4 border-2 cursor-pointer transition-all flex flex-col justify-between ${
                      formData.opportunitySpaceId === opp.id
                        ? "bg-[#FAF0DC] border-[#8B2635] shadow-[4px_4px_0px_0px_#8B2635]"
                        : "bg-[#FFFDF9] border-[#D5C2A5] hover:border-[#141010]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-mono font-bold uppercase text-[#8B2635] bg-[#EFE5D3] px-2 py-0.5 border border-[#DECBB4]">
                          {opp.badge}
                        </span>
                        {formData.opportunitySpaceId === opp.id && (
                          <CheckCircle2 size={16} className="text-[#8B2635]" />
                        )}
                      </div>
                      <h4 className="font-serif text-base font-bold text-[#141010] mb-1">
                        {opp.title}
                      </h4>
                      <p className="text-xs text-[#5C4C3E] leading-relaxed mb-3">
                        {opp.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#DECBB4] flex flex-wrap gap-1">
                      {opp.suggestedRails.map((rail, rIdx) => (
                        <span
                          key={rIdx}
                          className="text-[9px] font-mono text-[#6E5E50] bg-[#FFFDF9] px-1.5 py-0.5 border border-[#DECBB4]"
                        >
                          {rail}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Custom Opportunity input if selected */}
              {formData.opportunitySpaceId === "custom-problem" && (
                <div className="p-4 bg-[#FFFDF9] border-2 border-[#8B2635] space-y-2">
                  <label className="block text-xs font-mono uppercase font-bold text-[#141010]">
                    Describe Your Custom Indian Problem Space *
                  </label>
                  <input
                    type="text"
                    value={formData.customOpportunity}
                    onChange={(e) => updateLeadField("customOpportunity", e.target.value)}
                    placeholder="e.g. Automated GST reconciliation for non-tech rural exporters"
                    className="w-full bg-[#FAF4E8] border border-[#C5B499] px-3 py-2 text-sm text-[#141010] focus:outline-none focus:border-[#8B2635]"
                  />
                  {errors.customOpportunity && (
                    <p className="text-xs font-mono text-[#8B2635]">{errors.customOpportunity}</p>
                  )}
                </div>
              )}

              {/* Rails Selection */}
              <div className="space-y-3 pt-4 border-t border-[#DECBB4]">
                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-[#141010]">
                    Select Essential Rails Involved *
                  </label>
                  <p className="text-xs text-[#5C4C3E] font-light">
                    Which foundational rails will your solution leverage or interact with?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {RAILS_LIST.map((rail, idx) => {
                    const isChecked = formData.selectedRails.includes(rail);
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleRail(rail)}
                        className={`p-3 border flex items-center justify-between cursor-pointer transition-colors ${
                          isChecked
                            ? "bg-[#FAF0DC] border-[#8B2635] text-[#141010]"
                            : "bg-[#FFFDF9] border-[#D5C2A5] text-[#5C4C3E] hover:border-[#141010]"
                        }`}
                      >
                        <span className="text-xs font-mono font-medium">{rail}</span>
                        <div
                          className={`w-4 h-4 border flex items-center justify-center ${
                            isChecked ? "bg-[#8B2635] border-[#8B2635] text-white" : "border-[#C5B499]"
                          }`}
                        >
                          {isChecked && <CheckCircle2 size={12} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {errors.selectedRails && (
                  <p className="text-xs font-mono text-[#8B2635]">{errors.selectedRails}</p>
                )}
              </div>

              {/* Initial Hypothesis Statement */}
              <div className="space-y-2 pt-4 border-t border-[#DECBB4]">
                <label className="block text-xs font-mono uppercase font-bold text-[#141010]">
                  Initial Consumer Insight or Strategic Hypothesis (2–4 Sentences)
                </label>
                <p className="text-xs text-[#78695C] font-light">
                  What is the surprising friction nobody noticed, and what is your team&apos;s initial angle?
                </p>
                <textarea
                  rows={3}
                  value={formData.problemThesis}
                  onChange={(e) => updateLeadField("problemThesis", e.target.value)}
                  placeholder="e.g. Users don't want another dashboard app; they want their existing WhatsApp and UPI rails to make proactive micro-decisions automatically..."
                  className="w-full bg-[#FFFDF9] border border-[#C5B499] p-3 text-xs sm:text-sm text-[#141010] placeholder-[#9E8E7E] focus:outline-none focus:border-[#8B2635]"
                />
              </div>

            </motion.div>
          )}


          {/* ================= STEP 4: REVIEW & DECLARATION ================= */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8B2635] font-bold block mb-1">
                  STAGE II • STEP 04 / 04
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#141010]">
                  Review Dossier & Submit Candidacy
                </h2>
                <p className="text-xs sm:text-sm text-[#5C4C3E] mt-1 font-light">
                  Please verify your team information before confirming your official registration.
                </p>
              </div>

              {/* Review Summary Box */}
              <div className="bg-[#FFFDF9] border-2 border-[#D5C2A5] p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#EADFCF] pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#78695C] block">
                      TEAM NAME
                    </span>
                    <span className="font-display text-2xl uppercase text-[#8B2635] font-bold">
                      {formData.teamName}
                    </span>
                  </div>
                  <span className="bg-[#141010] text-white text-xs font-mono px-3 py-1 uppercase font-bold">
                    {formData.track === "strategy" ? "TRACK A: STRATEGY" : "TRACK B: BUILDER"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-mono text-[#78695C] block uppercase text-[10px]">
                      TEAM LEAD
                    </span>
                    <span className="font-bold text-[#141010] block">{formData.leadName}</span>
                    <span className="text-[#5C4C3E] block font-mono">{formData.leadEmail}</span>
                    <span className="text-[#5C4C3E] block">{formData.leadCollege}</span>
                  </div>

                  <div>
                    <span className="font-mono text-[#78695C] block uppercase text-[10px]">
                      TOTAL ROSTER
                    </span>
                    <span className="font-bold text-[#141010] block">
                      {formData.teamSize} Member{formData.teamSize > 1 ? "s" : ""}
                    </span>
                    <span className="text-[#5C4C3E] block">
                      {formData.teamSize === 1
                        ? "Solo Founder"
                        : formData.members
                            .slice(0, formData.teamSize - 1)
                            .map((m) => m.name || "Member")
                            .join(", ")}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#EADFCF]">
                  <span className="font-mono text-[#78695C] block uppercase text-[10px]">
                    TARGET PROBLEM STACK
                  </span>
                  <span className="font-serif font-bold text-sm text-[#141010]">
                    {formData.opportunitySpaceId === "custom-problem" && formData.customOpportunity
                      ? formData.customOpportunity
                      : competition.opportunitySpaces?.find((o) => o.id === formData.opportunitySpaceId)?.title ||
                        "Selected Opportunity Space"}
                  </span>
                </div>
              </div>

              {/* Declarations & Eligibility Checkboxes */}
              <div className="space-y-4 pt-2">
                <h4 className="font-mono text-xs font-bold uppercase text-[#141010] tracking-wider">
                  Candidate Honor Declarations
                </h4>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 p-3 bg-[#FFFDF9] border border-[#D5C2A5] cursor-pointer hover:border-[#141010] transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.studentVerified}
                      onChange={(e) => updateLeadField("studentVerified", e.target.checked)}
                      className="mt-0.5 accent-[#8B2635] w-4 h-4"
                    />
                    <div className="text-xs text-[#2E241D]">
                      <span className="font-bold block text-[#141010]">
                        Full-Time Student Status Verification *
                      </span>
                      <span className="text-[#6E5E50] leading-relaxed">
                        I certify that all team members are enrolled students in a recognized undergraduate, postgraduate, or doctoral program across India.
                      </span>
                    </div>
                  </label>
                  {errors.studentVerified && (
                    <p className="text-xs font-mono text-[#8B2635]">{errors.studentVerified}</p>
                  )}

                  <label className="flex items-start gap-3 p-3 bg-[#FFFDF9] border border-[#D5C2A5] cursor-pointer hover:border-[#141010] transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.agreedToTerms}
                      onChange={(e) => updateLeadField("agreedToTerms", e.target.checked)}
                      className="mt-0.5 accent-[#8B2635] w-4 h-4"
                    />
                    <div className="text-xs text-[#2E241D]">
                      <span className="font-bold block text-[#141010]">
                        Originality & Competition Terms *
                      </span>
                      <span className="text-[#6E5E50] leading-relaxed">
                        All submissions, memos, code, and agent architectures will be our team&apos;s original thinking created for the SBC E-Cell IIT Kharagpur 2026 challenge.
                      </span>
                    </div>
                  </label>
                  {errors.agreedToTerms && (
                    <p className="text-xs font-mono text-[#8B2635]">{errors.agreedToTerms}</p>
                  )}
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>

        {/* Step Navigation Buttons */}
        <div className="pt-8 mt-8 border-t-2 border-[#D5C2A5] flex items-center justify-between gap-4">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-5 py-2.5 border-2 border-[#141010] bg-[#FFFDF9] text-[#141010] font-mono text-xs uppercase font-bold tracking-wider hover:bg-white transition-all flex items-center gap-2"
            >
              <ArrowLeft size={14} />
              <span>Previous Step</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-3 bg-[#8B2635] hover:bg-[#731E2B] text-white font-mono text-xs uppercase font-bold tracking-wider transition-all flex items-center gap-2 shadow-[3px_3px_0px_0px_#141010]"
            >
              <span>Next: Step 0{currentStep + 1}</span>
              <ArrowRight size={14} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-10 py-3.5 bg-[#141010] hover:bg-[#2B2323] text-white font-mono text-xs uppercase font-bold tracking-wider transition-all flex items-center gap-2 shadow-[4px_4px_0px_0px_#8B2635] disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Generating Official Pass...</span>
                </>
              ) : (
                <>
                  <span>Submit Candidacy Dossier</span>
                  <CheckCircle2 size={16} className="text-[#F89B29]" />
                </>
              )}
            </button>
          )}
        </div>
      </form>

    </div>
  );
}
