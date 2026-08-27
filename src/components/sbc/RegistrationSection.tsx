"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  User,
  Users,
  FileText,
  UploadCloud,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Plus,
  Trash2,
  Mail,
  Phone,
  Building,
  GraduationCap,
  Download,
  Share2,
  QrCode,
  ExternalLink,
  ShieldCheck,
  Briefcase
} from "lucide-react";
import { LinkedInIcon } from "./Icons";
import { sbcConfig } from "@/config/sbc";

export interface TeamMember {
  name: string;
  email: string;
  institute: string;
  role: string;
}

export interface RegistrationFormData {
  // Startup Details
  startupName: string;
  sector: string;
  pitchDeckType: "file" | "link";
  pitchDeckLink: string;
  pitchDeckFileName: string;

  // Founder Details
  founderName: string;
  founderEmail: string;
  founderPhone: string;
  founderDepartment: string;
  founderRollNo: string;
  founderYearOfStudy: string;
  founderLinkedin: string;

  // Team Members
  teamMembers: TeamMember[];
}

export function RegistrationSection() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    startupName: "",
    sector: "SaaS",
    pitchDeckType: "link",
    pitchDeckLink: "",
    pitchDeckFileName: "",
    founderName: "",
    founderEmail: "",
    founderPhone: "",
    founderDepartment: "Computer Science & Engineering",
    founderRollNo: "",
    founderYearOfStudy: "3rd Year (Undergraduate)",
    founderLinkedin: "",
    teamMembers: [
      {
        name: "",
        email: "",
        institute: "IIT Kharagpur",
        role: "Co-Founder & Tech Lead"
      }
    ]
  });

  const [activeStep, setActiveStep] = useState<number>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedPassId, setSubmittedPassId] = useState<string | null>(null);

  // Field change handler
  const handleInputChange = (field: keyof RegistrationFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  // Team member handlers
  const handleTeamMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    setFormData((prev) => {
      const updated = [...prev.teamMembers];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, teamMembers: updated };
    });
  };

  const addTeamMember = () => {
    if (formData.teamMembers.length >= 4) return;
    setFormData((prev) => ({
      ...prev,
      teamMembers: [
        ...prev.teamMembers,
        {
          name: "",
          email: "",
          institute: "IIT Kharagpur",
          role: "Co-Founder / Core Contributor"
        }
      ]
    }));
  };

  const removeTeamMember = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, i) => i !== index)
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleInputChange("pitchDeckFileName", file.name);
      handleInputChange("pitchDeckLink", `uploaded://${file.name}`);
    }
  };

  // Validation
  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.startupName.trim()) {
        newErrors.startupName = "Startup / Idea name is required";
      }
      if (!formData.sector) {
        newErrors.sector = "Please select a sector";
      }
      if (!formData.pitchDeckLink.trim()) {
        newErrors.pitchDeck = "Please upload or provide a link to your Pitch Deck";
      }
    } else if (step === 2) {
      if (!formData.founderName.trim()) {
        newErrors.founderName = "Founder full name is required";
      }
      if (!formData.founderEmail.trim() || !formData.founderEmail.includes("@")) {
        newErrors.founderEmail = "Valid email is required";
      }
      if (!formData.founderPhone.trim() || formData.founderPhone.length < 10) {
        newErrors.founderPhone = "Valid WhatsApp phone number is required";
      }
      if (!formData.founderRollNo.trim()) {
        newErrors.founderRollNo = "Roll number is required";
      }
      if (!formData.founderLinkedin.trim()) {
        newErrors.founderLinkedin = "LinkedIn profile URL is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(1) || !validateStep(2)) {
      setActiveStep(1);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `SBC9-${Math.floor(1000 + Math.random() * 9000)}-${formData.sector.substring(0, 3).toUpperCase()}`;
      setSubmittedPassId(generatedId);
    }, 1000);
  };

  const handleReset = () => {
    setSubmittedPassId(null);
    setActiveStep(1);
    setFormData({
      startupName: "",
      sector: "SaaS",
      pitchDeckType: "link",
      pitchDeckLink: "",
      pitchDeckFileName: "",
      founderName: "",
      founderEmail: "",
      founderPhone: "",
      founderDepartment: "Computer Science & Engineering",
      founderRollNo: "",
      founderYearOfStudy: "3rd Year (Undergraduate)",
      founderLinkedin: "",
      teamMembers: [
        {
          name: "",
          email: "",
          institute: "IIT Kharagpur",
          role: "Co-Founder & Tech Lead"
        }
      ]
    });
  };

  return (
    <section id="register" className="py-16 sm:py-24 bg-[#FAF4E8] text-[#141010] border-b border-[#DECBB4] relative">
      {/* Texture */}
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-40" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION 1: HEADER & SUB-HEADER & LINE */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FAF0DC] border border-[#DECBB4] px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#8B2635] mb-4">
            <Sparkles size={13} className="text-[#F89B29]" />
            <span>SECTION 1 • OFFICIAL REGISTRATION PORTAL</span>
          </div>

          {/* Header */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#141010] leading-none mb-3">
            Startup Bootcamp 9.0
          </h1>

          {/* Sub-header */}
          <h2 className="font-display text-xl sm:text-2xl tracking-widest text-[#8B2635] uppercase font-bold mb-4">
            E-Cell IIT Kharagpur
          </h2>

          {/* Line */}
          <p className="text-base sm:text-xl text-[#5C4C3E] font-light leading-relaxed max-w-3xl border-l-2 border-[#8B2635] pl-4 italic">
            Register your startup for two rounds of one-on-one mentorship and a live pitch before investors on campus.
          </p>

          {/* Highlights pills */}
          <div className="flex flex-wrap gap-2 pt-6 text-xs font-mono text-[#4A3B2F]">
            <span className="bg-[#FAF0DC] px-3 py-1 border border-[#DECBB4] font-semibold">
              ✓ Round 1 & Round 2 (1-on-1 Mentorship)
            </span>
            <span className="bg-[#FAF0DC] px-3 py-1 border border-[#DECBB4] font-semibold">
              ✓ Top 10 Live Pitch on Campus
            </span>
            <span className="bg-[#FAF0DC] px-3 py-1 border border-[#DECBB4] font-semibold">
              ✓ ₹0 Registration Fee
            </span>
            <span className="bg-[#FAF0DC] px-3 py-1 border border-[#DECBB4] font-semibold">
              ✓ 1 to 5 Founders & Team Members
            </span>
          </div>
        </div>

        {/* SUBMISSION CONFIRMATION PASS / MODAL */}
        {submittedPassId ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto bg-[#FFFDF9] border-2 border-[#141010] p-6 sm:p-10 shadow-[8px_8px_0px_0px_#141010] my-8 text-center space-y-6"
          >
            <div className="w-16 h-16 bg-[#8B2635] text-white mx-auto flex items-center justify-center rounded-full shadow-lg">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-2">
              <div className="inline-block bg-[#FAF0DC] border border-[#DECBB4] px-4 py-1 font-mono text-xs text-[#8B2635] font-bold uppercase tracking-wider">
                REGISTRATION CONFIRMED • PASS ID: {submittedPassId}
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#141010]">
                {formData.startupName || "Your Startup"} is Registered!
              </h3>
              <p className="text-sm sm:text-base text-[#5C4C3E] max-w-xl mx-auto leading-relaxed">
                Welcome to <strong>Startup Bootcamp 9.0</strong>, E-Cell IIT Kharagpur. We have dispatched a confirmation email to <strong>{formData.founderEmail}</strong> with next steps and mentor allocation details for <strong>Round 1 (Business Model Teardown)</strong>.
              </p>
            </div>

            {/* Visual Registration Card */}
            <div className="bg-[#141010] text-[#FAF4E8] p-6 text-left border border-[#2A2424] space-y-4 max-w-md mx-auto shadow-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block">
                    STARTUP BOOTCAMP 9.0
                  </span>
                  <span className="font-serif text-lg font-bold text-white">
                    {formData.startupName}
                  </span>
                </div>
                <div className="bg-[#8B2635] px-2.5 py-1 text-[11px] font-mono font-bold text-white">
                  {formData.sector}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono text-[#C8BFB3]">
                <div>
                  <span className="text-[9px] text-[#A89E92] block uppercase">Primary Founder</span>
                  <span className="text-white font-semibold">{formData.founderName}</span>
                </div>
                <div>
                  <span className="text-[9px] text-[#A89E92] block uppercase">Roll No & Dept</span>
                  <span className="text-white">{formData.founderRollNo}</span>
                </div>
                <div>
                  <span className="text-[9px] text-[#A89E92] block uppercase">Year of Study</span>
                  <span className="text-white">{formData.founderYearOfStudy}</span>
                </div>
                <div>
                  <span className="text-[9px] text-[#A89E92] block uppercase">Total Team Size</span>
                  <span className="text-white">{formData.teamMembers.length + 1} Members</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#D4AF37]">
                <span>E-CELL IIT KHARAGPUR</span>
                <span>STATUS: VERIFIED CANDIDATE</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => window.print()}
                className="bg-[#141010] hover:bg-[#2B2323] text-white px-6 py-2.5 text-xs font-mono uppercase font-bold tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <Download size={14} />
                <span>Print Pitch Pass</span>
              </button>
              <button
                onClick={handleReset}
                className="border border-[#DECBB4] hover:border-[#141010] bg-[#FAF0DC] text-[#141010] px-6 py-2.5 text-xs font-mono uppercase font-bold tracking-wider transition-colors"
              >
                Submit Another Startup
              </button>
            </div>
          </motion.div>
        ) : (
          /* FORM + LIVE PREVIEW GRID */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: MULTI-SECTION FORM */}
            <div className="lg:col-span-7 xl:col-span-8 bg-[#FFFDF9] border-2 border-[#141010] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#141010]">
              
              {/* Form Tab Stepper */}
              <div className="grid grid-cols-3 gap-2 border-b-2 border-[#DECBB4] pb-6 mb-8">
                {[
                  { step: 1, label: "Startup Details", icon: Rocket },
                  { step: 2, label: "Founder Details", icon: User },
                  { step: 3, label: "Team Members", icon: Users }
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeStep === item.step;
                  const isDone = activeStep > item.step;
                  return (
                    <button
                      key={item.step}
                      type="button"
                      onClick={() => setActiveStep(item.step)}
                      className={`flex items-center gap-2.5 p-2.5 text-left transition-all border ${
                        isActive
                          ? "bg-[#141010] text-[#FFFDF9] border-[#141010]"
                          : isDone
                          ? "bg-[#FAF0DC] text-[#8B2635] border-[#DECBB4]"
                          : "bg-transparent text-[#78695C] border-transparent hover:border-[#DECBB4]"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                          isActive
                            ? "bg-[#8B2635] text-white"
                            : isDone
                            ? "bg-[#8B2635] text-white"
                            : "bg-[#E6DBCA] text-[#141010]"
                        }`}
                      >
                        {isDone ? "✓" : item.step}
                      </div>
                      <div className="hidden sm:block">
                        <span className="text-xs font-mono uppercase font-bold block leading-tight">
                          {item.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* STEP 1: STARTUP DETAILS */}
                {activeStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-[#DECBB4] pb-3">
                      <h3 className="font-serif text-2xl font-bold text-[#141010] flex items-center gap-2.5">
                        <Rocket size={22} className="text-[#8B2635]" />
                        <span>Startup Details</span>
                      </h3>
                      <p className="text-xs font-mono text-[#78695C] mt-0.5">
                        Provide the venture thesis, market sector, and your pitch deck.
                      </p>
                    </div>

                    {/* Startup / Idea Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1.5">
                        Startup / Idea Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.startupName}
                        onChange={(e) => handleInputChange("startupName", e.target.value)}
                        placeholder="e.g. NexaFlow AI / AgriRoots"
                        className={`w-full bg-[#FAF4E8] border ${
                          errors.startupName ? "border-red-500" : "border-[#DECBB4]"
                        } focus:border-[#141010] px-4 py-2.5 text-sm text-[#141010] outline-none font-sans transition-colors`}
                      />
                      {errors.startupName && (
                        <p className="text-xs font-mono text-red-600 mt-1">{errors.startupName}</p>
                      )}
                    </div>

                    {/* Sector (Dropdown) */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-mono uppercase font-semibold text-[#4A3B2F]">
                          Sector / Domain *
                        </label>
                        <span className="text-[10px] font-mono text-[#8B2635]">
                          SBC 9.0 CURATED SECTORS
                        </span>
                      </div>
                      <select
                        value={formData.sector}
                        onChange={(e) => handleInputChange("sector", e.target.value)}
                        className="w-full bg-[#FAF4E8] border border-[#DECBB4] focus:border-[#141010] px-4 py-2.5 text-sm text-[#141010] outline-none font-sans cursor-pointer transition-colors"
                      >
                        {sbcConfig.sectors.map((sec) => (
                          <option key={sec} value={sec}>
                            {sec}
                          </option>
                        ))}
                      </select>
                      <p className="text-[11px] font-mono text-[#78695C] mt-1.5">
                        Dropdown includes: SaaS • Consumer • Fintech • Healthcare • Deeptech / AI-ML • Social Impact • D2C • Other
                      </p>
                    </div>

                    {/* Pitch Deck */}
                    <div className="space-y-3 pt-2">
                      <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F]">
                        Pitch Deck (Upload File or Paste Link) *
                      </label>

                      <div className="flex gap-4 text-xs font-mono">
                        <button
                          type="button"
                          onClick={() => handleInputChange("pitchDeckType", "link")}
                          className={`px-3 py-1.5 border transition-colors ${
                            formData.pitchDeckType === "link"
                              ? "bg-[#141010] text-white border-[#141010]"
                              : "bg-[#FAF4E8] text-[#4A3B2F] border-[#DECBB4]"
                          }`}
                        >
                          Google Drive / Pitch Link
                        </button>
                        <button
                          type="button"
                          onClick={() => handleInputChange("pitchDeckType", "file")}
                          className={`px-3 py-1.5 border transition-colors ${
                            formData.pitchDeckType === "file"
                              ? "bg-[#141010] text-white border-[#141010]"
                              : "bg-[#FAF4E8] text-[#4A3B2F] border-[#DECBB4]"
                          }`}
                        >
                          Upload PDF / PPTX
                        </button>
                      </div>

                      {formData.pitchDeckType === "link" ? (
                        <div>
                          <input
                            type="url"
                            value={formData.pitchDeckLink}
                            onChange={(e) => handleInputChange("pitchDeckLink", e.target.value)}
                            placeholder="https://drive.google.com/file/d/... or docsend.com/..."
                            className="w-full bg-[#FAF4E8] border border-[#DECBB4] focus:border-[#141010] px-4 py-2.5 text-sm text-[#141010] outline-none font-sans"
                          />
                          <p className="text-[11px] font-mono text-[#78695C] mt-1">
                            * Please ensure sharing permissions are set to "Anyone with the link can view".
                          </p>
                        </div>
                      ) : (
                        <div className="border-2 border-dashed border-[#DECBB4] bg-[#FAF4E8] p-6 text-center hover:border-[#141010] transition-colors relative cursor-pointer">
                          <input
                            type="file"
                            accept=".pdf,.ppt,.pptx"
                            onChange={handleFileUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                          />
                          <UploadCloud size={28} className="mx-auto text-[#8B2635] mb-2" />
                          <p className="text-xs font-mono font-bold text-[#141010]">
                            {formData.pitchDeckFileName || "Click or drag & drop Pitch Deck (PDF / PPTX)"}
                          </p>
                          <p className="text-[10px] font-mono text-[#78695C] mt-1">
                            Max file size: 25MB • Up to 15 slides recommended
                          </p>
                        </div>
                      )}
                      {errors.pitchDeck && (
                        <p className="text-xs font-mono text-red-600">{errors.pitchDeck}</p>
                      )}
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-[#141010] hover:bg-[#2B2323] text-white px-6 py-2.5 text-xs font-mono uppercase font-bold tracking-wider inline-flex items-center gap-2 transition-colors"
                      >
                        <span>Next: Founder Details</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: FOUNDER DETAILS */}
                {activeStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-[#DECBB4] pb-3">
                      <h3 className="font-serif text-2xl font-bold text-[#141010] flex items-center gap-2.5">
                        <User size={22} className="text-[#8B2635]" />
                        <span>Founder Details</span>
                      </h3>
                      <p className="text-xs font-mono text-[#78695C] mt-0.5">
                        Primary lead founder contact information and academic credentials.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.founderName}
                          onChange={(e) => handleInputChange("founderName", e.target.value)}
                          placeholder="e.g. Suvam Ghosh"
                          className="w-full bg-[#FAF4E8] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2.5 text-sm text-[#141010] outline-none"
                        />
                        {errors.founderName && (
                          <p className="text-xs font-mono text-red-600 mt-1">{errors.founderName}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.founderEmail}
                          onChange={(e) => handleInputChange("founderEmail", e.target.value)}
                          placeholder="e.g. founder@iitkgp.ac.in"
                          className="w-full bg-[#FAF4E8] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2.5 text-sm text-[#141010] outline-none"
                        />
                        {errors.founderEmail && (
                          <p className="text-xs font-mono text-red-600 mt-1">{errors.founderEmail}</p>
                        )}
                      </div>

                      {/* Phone (WhatsApp) */}
                      <div>
                        <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                          Phone (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.founderPhone}
                          onChange={(e) => handleInputChange("founderPhone", e.target.value)}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-[#FAF4E8] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2.5 text-sm text-[#141010] outline-none"
                        />
                        {errors.founderPhone && (
                          <p className="text-xs font-mono text-red-600 mt-1">{errors.founderPhone}</p>
                        )}
                      </div>

                      {/* Roll Number */}
                      <div>
                        <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                          Roll Number *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.founderRollNo}
                          onChange={(e) => handleInputChange("founderRollNo", e.target.value)}
                          placeholder="e.g. 21CS10045"
                          className="w-full bg-[#FAF4E8] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2.5 text-sm text-[#141010] outline-none"
                        />
                        {errors.founderRollNo && (
                          <p className="text-xs font-mono text-red-600 mt-1">{errors.founderRollNo}</p>
                        )}
                      </div>

                      {/* Department */}
                      <div>
                        <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                          Department *
                        </label>
                        <select
                          value={formData.founderDepartment}
                          onChange={(e) => handleInputChange("founderDepartment", e.target.value)}
                          className="w-full bg-[#FAF4E8] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2.5 text-sm text-[#141010] outline-none"
                        >
                          {sbcConfig.departments.map((dept) => (
                            <option key={dept} value={dept}>
                              {dept}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Year of Study */}
                      <div>
                        <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                          Year of Study *
                        </label>
                        <select
                          value={formData.founderYearOfStudy}
                          onChange={(e) => handleInputChange("founderYearOfStudy", e.target.value)}
                          className="w-full bg-[#FAF4E8] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2.5 text-sm text-[#141010] outline-none"
                        >
                          {sbcConfig.yearsOfStudy.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* LinkedIn Profile */}
                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                        LinkedIn Profile URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.founderLinkedin}
                        onChange={(e) => handleInputChange("founderLinkedin", e.target.value)}
                        placeholder="https://www.linkedin.com/in/username"
                        className="w-full bg-[#FAF4E8] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2.5 text-sm text-[#141010] outline-none"
                      />
                      {errors.founderLinkedin && (
                        <p className="text-xs font-mono text-red-600 mt-1">{errors.founderLinkedin}</p>
                      )}
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveStep(1)}
                        className="border border-[#DECBB4] px-4 py-2.5 text-xs font-mono uppercase font-semibold text-[#78695C] hover:text-[#141010]"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-[#141010] hover:bg-[#2B2323] text-white px-6 py-2.5 text-xs font-mono uppercase font-bold tracking-wider inline-flex items-center gap-2 transition-colors"
                      >
                        <span>Next: Team Members</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: TEAM MEMBERS */}
                {activeStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-[#DECBB4] pb-3 flex items-center justify-between">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#141010] flex items-center gap-2.5">
                          <Users size={22} className="text-[#8B2635]" />
                          <span>Team Members</span>
                        </h3>
                        <p className="text-xs font-mono text-[#78695C] mt-0.5">
                          Add co-founders and team members (cross-department & cross-college allowed).
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={addTeamMember}
                        disabled={formData.teamMembers.length >= 4}
                        className="bg-[#FAF0DC] hover:bg-[#F2E4C9] border border-[#DECBB4] text-[#8B2635] px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors disabled:opacity-50"
                      >
                        <Plus size={14} />
                        <span>Add Member</span>
                      </button>
                    </div>

                    {formData.teamMembers.length === 0 ? (
                      <div className="bg-[#FAF0DC] border border-[#DECBB4] p-6 text-center text-xs font-mono text-[#78695C]">
                        <p>Solo Founder application. Click "Add Member" if you have co-founders.</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {formData.teamMembers.map((member, index) => (
                          <div
                            key={index}
                            className="bg-[#FAF4E8] border border-[#DECBB4] p-4.5 relative space-y-3"
                          >
                            <div className="flex items-center justify-between border-b border-[#E3D4BD] pb-2">
                              <span className="text-xs font-mono font-bold text-[#8B2635] uppercase">
                                Team Member 0{index + 1}
                              </span>
                              <button
                                type="button"
                                onClick={() => removeTeamMember(index)}
                                className="text-zinc-500 hover:text-red-600 transition-colors p-1"
                                title="Remove team member"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {/* Name */}
                              <div>
                                <label className="block text-[11px] font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                                  Name *
                                </label>
                                <input
                                  type="text"
                                  value={member.name}
                                  onChange={(e) =>
                                    handleTeamMemberChange(index, "name", e.target.value)
                                  }
                                  placeholder="e.g. Ananya Sharma"
                                  className="w-full bg-[#FFFDF9] border border-[#DECBB4] focus:border-[#141010] px-3 py-1.5 text-xs text-[#141010] outline-none"
                                />
                              </div>

                              {/* Email */}
                              <div>
                                <label className="block text-[11px] font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                                  Email *
                                </label>
                                <input
                                  type="email"
                                  value={member.email}
                                  onChange={(e) =>
                                    handleTeamMemberChange(index, "email", e.target.value)
                                  }
                                  placeholder="e.g. ananya@college.edu"
                                  className="w-full bg-[#FFFDF9] border border-[#DECBB4] focus:border-[#141010] px-3 py-1.5 text-xs text-[#141010] outline-none"
                                />
                              </div>

                              {/* Institute */}
                              <div>
                                <label className="block text-[11px] font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                                  Institute *
                                </label>
                                <input
                                  type="text"
                                  value={member.institute}
                                  onChange={(e) =>
                                    handleTeamMemberChange(index, "institute", e.target.value)
                                  }
                                  placeholder="e.g. IIT Kharagpur / IIM Calcutta"
                                  className="w-full bg-[#FFFDF9] border border-[#DECBB4] focus:border-[#141010] px-3 py-1.5 text-xs text-[#141010] outline-none"
                                />
                              </div>

                              {/* Role in the team */}
                              <div>
                                <label className="block text-[11px] font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                                  Role in the Team *
                                </label>
                                <input
                                  type="text"
                                  value={member.role}
                                  onChange={(e) =>
                                    handleTeamMemberChange(index, "role", e.target.value)
                                  }
                                  placeholder="e.g. AI Engineer / Product Lead"
                                  className="w-full bg-[#FFFDF9] border border-[#DECBB4] focus:border-[#141010] px-3 py-1.5 text-xs text-[#141010] outline-none"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Summary Check & Submit */}
                    <div className="bg-[#FAF0DC] border border-[#DECBB4] p-4 text-xs font-sans text-[#5C4C3E] space-y-2">
                      <div className="flex items-center gap-2 font-bold text-[#8B2635] font-mono">
                        <ShieldCheck size={16} />
                        <span>SBC 9.0 COHORT TERMS & CONDITIONS</span>
                      </div>
                      <p>
                        By registering, you confirm that your startup is student-led, and you commit to participating in <strong>two rounds of one-on-one mentorship</strong> and the <strong>Top 10 Live Pitch on Campus</strong> at IIT Kharagpur if shortlisted.
                      </p>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="border border-[#DECBB4] px-4 py-2.5 text-xs font-mono uppercase font-semibold text-[#78695C] hover:text-[#141010]"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#8B2635] hover:bg-[#A32E40] text-white px-8 py-3 text-xs font-mono uppercase font-bold tracking-widest transition-all shadow-md disabled:opacity-50 flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <span>Registering Startup...</span>
                        ) : (
                          <>
                            <span>Complete Registration</span>
                            <Sparkles size={14} className="text-[#F89B29]" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}

              </form>

            </div>

            {/* RIGHT COLUMN: LIVE DIGITAL FOUNDER PASS PREVIEW */}
            <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 lg:self-start space-y-6">
              
              <div className="bg-[#141010] text-[#FAF4E8] border-2 border-[#141010] shadow-[6px_6px_0px_0px_#8B2635] overflow-hidden">
                
                {/* Header Ticket Strip */}
                <div className="bg-[#8B2635] px-5 py-3 flex items-center justify-between text-white border-b border-[#A32E40]">
                  <div className="flex items-center gap-2">
                    <QrCode size={18} className="text-[#FCE6B8]" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider">
                      SBC 9.0 • FOUNDER DOSSIER
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-black/30 px-2 py-0.5 uppercase tracking-widest text-[#FCE6B8]">
                    LIVE ADMIT
                  </span>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-5">
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block">
                      STARTUP / IDEA
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-white leading-tight">
                      {formData.startupName || "Your Startup Name"}
                    </h4>
                    <div className="inline-block mt-2 px-2.5 py-0.5 bg-[#261E1E] border border-[#3E2E2E] text-[11px] font-mono text-[#FCE6B8]">
                      Sector: {formData.sector}
                    </div>
                  </div>

                  <div className="border-t border-[#2E2626] pt-4 space-y-3 text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-[#A89E92] uppercase block">Lead Founder</span>
                      <span className="text-white font-semibold">
                        {formData.founderName || "Founder Name"}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-[10px] text-[#A89E92] uppercase block">Department</span>
                        <span className="text-white truncate block">
                          {formData.founderDepartment.split(" ")[0]}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#A89E92] uppercase block">Year</span>
                        <span className="text-white">
                          {formData.founderYearOfStudy.split(" ")[0]}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] text-[#A89E92] uppercase block">Pitch Deck Status</span>
                      <span className="text-[#F89B29] font-medium">
                        {formData.pitchDeckLink ? "✓ Deck Attached" : "Pending Link / Upload"}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] text-[#A89E92] uppercase block">Team Composition</span>
                      <span className="text-white">
                        {formData.teamMembers.filter((m) => m.name).length + 1} Member(s) Registered
                      </span>
                    </div>
                  </div>

                  {/* Two Rounds Badge */}
                  <div className="bg-[#1E1818] border border-[#2E2626] p-3 text-[11px] font-mono text-[#C8BFB3] space-y-1">
                    <span className="text-[#D4AF37] font-bold block uppercase">
                      INCLUDED IN COHORT 9.0:
                    </span>
                    <p>• 2 Rounds of 1-on-1 Mentorship</p>
                    <p>• Top 10 Live Pitch on Campus to VCs</p>
                  </div>
                </div>

                {/* Perforated Bottom Bar */}
                <div className="bg-[#1C1616] border-t border-[#2E2626] px-6 py-3 flex items-center justify-between text-[10px] font-mono text-[#A89E92]">
                  <span>ENTREPRENEURSHIP CELL</span>
                  <span>IIT KHARAGPUR</span>
                </div>
              </div>

              {/* Assistance Card */}
              <div className="bg-[#FAF0DC] border border-[#DECBB4] p-5 text-xs font-sans text-[#5C4C3E] space-y-2">
                <h5 className="font-serif font-bold text-[#141010]">Need Help with Registration?</h5>
                <p>
                  Reach out to the SBC Helpdesk at{" "}
                  <a href={`mailto:${sbcConfig.contactSection.helpdeskEmail}`} className="text-[#8B2635] underline font-semibold">
                    {sbcConfig.contactSection.helpdeskEmail}
                  </a>{" "}
                  or contact our coordinators in Section 4.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
