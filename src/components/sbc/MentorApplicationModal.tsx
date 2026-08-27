"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles, Building2, Mail, Phone, UserCheck, ShieldCheck } from "lucide-react";
import { sbcConfig } from "@/config/sbc";

interface MentorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MentorApplicationModal({ isOpen, onClose }: MentorModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mentorData, setMentorData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    designation: "",
    organization: "",
    isKgpAlum: "yes",
    batch: "",
    department: "",
    sectors: [] as string[],
    availability: "Both Rounds (Round 1 & Round 2)",
    message: ""
  });

  const toggleSector = (sector: string) => {
    setMentorData((prev) => {
      const exists = prev.sectors.includes(sector);
      return {
        ...prev,
        sectors: exists
          ? prev.sectors.filter((s) => s !== sector)
          : [...prev.sectors, sector]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setMentorData({
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      designation: "",
      organization: "",
      isKgpAlum: "yes",
      batch: "",
      department: "",
      sectors: [],
      availability: "Both Rounds (Round 1 & Round 2)",
      message: ""
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#FAF4E8] text-[#141010] border-2 border-[#141010] shadow-[8px_8px_0px_0px_#141010] my-8 overflow-hidden"
        >
          {/* Top Banner Header */}
          <div className="bg-[#141010] text-[#FAF4E8] px-6 py-4 flex items-center justify-between border-b border-[#2A2424]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#8B2635] text-white flex items-center justify-center font-display text-base font-bold">
                M
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FFFDF9]">
                  Apply as a Mentor • SBC 9.0
                </h3>
                <p className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider">
                  Entrepreneurship Cell • IIT Kharagpur
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-[#D4AF37] hover:text-white p-1 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            {submitted ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 bg-[#8B2635] text-white mx-auto flex items-center justify-center rounded-full shadow-lg">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-[#FAF0DC] border border-[#DECBB4] px-3 py-1 text-xs font-mono font-bold text-[#8B2635] uppercase">
                    APPLICATION RECEIVED • REF: SBC9-MNT-{Math.floor(1000 + Math.random() * 9000)}
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#141010]">
                    Thank You, {mentorData.name}!
                  </h4>
                  <p className="text-sm text-[#5C4C3E] max-w-md mx-auto leading-relaxed">
                    Our team at E-Cell IIT Kharagpur will review your profile and reach out via email ({mentorData.email}) with mentor-mentee matching schedules for Round 1 & Round 2.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="bg-[#141010] hover:bg-[#2B2323] text-white px-6 py-2.5 text-xs font-mono uppercase font-bold tracking-wider transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-[#FAF0DC] border border-[#DECBB4] p-4 text-xs font-sans text-[#5C4C3E] leading-relaxed flex items-start gap-3">
                  <Sparkles size={18} className="text-[#F89B29] shrink-0 mt-0.5" />
                  <p>
                    Join a community of 50+ alumni founders, angel investors, and venture partners mentoring early-stage student startups for <strong>Startup Bootcamp 9.0</strong> at IIT Kharagpur.
                  </p>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="font-serif text-base font-bold text-[#141010] border-b border-[#DECBB4] pb-1.5 flex items-center gap-2">
                    <UserCheck size={16} className="text-[#8B2635]" />
                    <span>Mentor Details</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={mentorData.name}
                        onChange={(e) => setMentorData({ ...mentorData, name: e.target.value })}
                        placeholder="e.g. Rahul Jaimini"
                        className="w-full bg-[#FFFDF9] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2 text-sm text-[#141010] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={mentorData.email}
                        onChange={(e) => setMentorData({ ...mentorData, email: e.target.value })}
                        placeholder="e.g. rahul@company.com"
                        className="w-full bg-[#FFFDF9] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2 text-sm text-[#141010] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                        Phone (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={mentorData.phone}
                        onChange={(e) => setMentorData({ ...mentorData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-[#FFFDF9] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2 text-sm text-[#141010] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                        LinkedIn Profile URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={mentorData.linkedin}
                        onChange={(e) => setMentorData({ ...mentorData, linkedin: e.target.value })}
                        placeholder="https://linkedin.com/in/username"
                        className="w-full bg-[#FFFDF9] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2 text-sm text-[#141010] outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Info */}
                <div className="space-y-4">
                  <h4 className="font-serif text-base font-bold text-[#141010] border-b border-[#DECBB4] pb-1.5 flex items-center gap-2">
                    <Building2 size={16} className="text-[#8B2635]" />
                    <span>Current Designation & Organisation</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                        Designation / Role *
                      </label>
                      <input
                        type="text"
                        required
                        value={mentorData.designation}
                        onChange={(e) => setMentorData({ ...mentorData, designation: e.target.value })}
                        placeholder="e.g. Founder & CEO / Partner"
                        className="w-full bg-[#FFFDF9] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2 text-sm text-[#141010] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                        Company / VC Fund *
                      </label>
                      <input
                        type="text"
                        required
                        value={mentorData.organization}
                        onChange={(e) => setMentorData({ ...mentorData, organization: e.target.value })}
                        placeholder="e.g. Swiggy / Matrix Partners"
                        className="w-full bg-[#FFFDF9] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2 text-sm text-[#141010] outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* IIT Kharagpur Alumnus Affiliation */}
                <div className="space-y-4">
                  <h4 className="font-serif text-base font-bold text-[#141010] border-b border-[#DECBB4] pb-1.5 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#8B2635]" />
                    <span>IIT Kharagpur Affiliation</span>
                  </h4>

                  <div className="space-y-3">
                    <div className="flex items-center gap-6 text-xs font-mono">
                      <label className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="isKgpAlum"
                          checked={mentorData.isKgpAlum === "yes"}
                          onChange={() => setMentorData({ ...mentorData, isKgpAlum: "yes" })}
                          className="accent-[#8B2635]"
                        />
                        <span>IIT Kharagpur Alumnus</span>
                      </label>
                      <label className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="isKgpAlum"
                          checked={mentorData.isKgpAlum === "no"}
                          onChange={() => setMentorData({ ...mentorData, isKgpAlum: "no" })}
                          className="accent-[#8B2635]"
                        />
                        <span>Industry Expert / Venture Investor (Non-Alum)</span>
                      </label>
                    </div>

                    {mentorData.isKgpAlum === "yes" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                        <div>
                          <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                            Graduation Batch
                          </label>
                          <input
                            type="text"
                            value={mentorData.batch}
                            onChange={(e) => setMentorData({ ...mentorData, batch: e.target.value })}
                            placeholder="e.g. Batch of 2012"
                            className="w-full bg-[#FFFDF9] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2 text-sm text-[#141010] outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                            Department
                          </label>
                          <input
                            type="text"
                            value={mentorData.department}
                            onChange={(e) => setMentorData({ ...mentorData, department: e.target.value })}
                            placeholder="e.g. Computer Science / E&ECE"
                            className="w-full bg-[#FFFDF9] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2 text-sm text-[#141010] outline-none"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Preferred Sectors */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F]">
                    Preferred Mentorship Sectors (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sbcConfig.sectors.map((sec) => {
                      const isSelected = mentorData.sectors.includes(sec);
                      return (
                        <button
                          key={sec}
                          type="button"
                          onClick={() => toggleSector(sec)}
                          className={`text-xs px-3 py-1.5 font-mono border transition-all ${
                            isSelected
                              ? "bg-[#8B2635] text-white border-[#8B2635]"
                              : "bg-[#FFFDF9] text-[#4A3B2F] border-[#DECBB4] hover:border-[#141010]"
                          }`}
                        >
                          {sec}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-[#DECBB4] flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 text-xs font-mono uppercase font-semibold text-[#78695C] hover:text-[#141010] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#8B2635] hover:bg-[#A32E40] text-white px-6 py-2.5 text-xs font-mono uppercase font-bold tracking-wider transition-colors shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting Application..." : "Submit Mentor Application"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
