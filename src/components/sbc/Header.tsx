"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles, UserPlus, Rocket } from "lucide-react";
import { sbcConfig } from "@/config/sbc";

export function Header({ onOpenMentorModal }: { onOpenMentorModal?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#121214] text-[#F9F6F0] border-b border-[#2A2A2E]">
        {/* Top Announcement Bar */}
        <div className="bg-[#1C1C22] border-b border-[#2A2A2E] py-1.5 px-4 text-center text-[11px] font-mono text-[#D4AF37] flex items-center justify-center gap-2">
          <Sparkles size={13} className="text-[#D4AF37] animate-pulse" />
          <span className="font-semibold uppercase tracking-wider">
            STARTUP BOOTCAMP 9.0 • 2 ROUNDS 1-ON-1 MENTORSHIP & TOP 10 CAMPUS PITCH
          </span>
          <span className="hidden sm:inline text-zinc-400">• E-CELL IIT KHARAGPUR</span>
        </div>

        {/* Main Nav Bar */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-[#8B2635] text-white flex items-center justify-center font-display text-lg tracking-wider border border-[#B3394A] shadow-sm">
              9.0
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl tracking-wider uppercase text-white font-bold leading-none">
                Startup Bootcamp 9.0
              </span>
              <span className="text-[10px] tracking-widest text-[#B0A8A0] uppercase font-mono font-medium mt-0.5">
                E-Cell IIT Kharagpur
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-mono tracking-wider uppercase text-[#C8C2B8]">
            <a href="#register" className="hover:text-[#F89B29] transition-colors flex items-center gap-1">
              <Rocket size={13} className="text-[#F89B29]" />
              <span>Section 1: Register</span>
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              Section 2: What is SBC?
            </a>
            <a href="#mentors" className="hover:text-white transition-colors">
              Section 3: Past Mentors
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Section 4: Contact Us
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#register"
              className="bg-[#8B2635] hover:bg-[#A32E40] text-white text-xs font-mono font-bold uppercase tracking-wider px-4 py-2 shadow-sm transition-all flex items-center gap-1.5"
            >
              <span>Register Startup</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#F9F6F0] p-1.5 hover:text-[#D4AF37] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Continuous Horizontal Ticker */}
        <div className="bg-[#18181C] border-t border-[#2A2A2E] overflow-hidden py-1 text-[11px] font-mono tracking-wider text-[#C2B7A8]">
          <div className="animate-ticker flex items-center gap-10 whitespace-nowrap">
            {[
              { label: "SECTION 1", text: "STARTUP REGISTRATION OPEN", status: "ACTIVE" },
              { label: "SECTION 2", text: "2 ROUNDS 1-ON-1 MENTORSHIP", status: "CONFIRMED" },
              { label: "SECTION 3", text: "IIT KGP ALUMNI FOUNDERS & VC MENTORS", status: "ONBOARDED" },
              { label: "SECTION 4", text: "TOP 10 LIVE PITCH ON CAMPUS BEFORE VCS", status: "FINALE" },
              { label: "SECTION 1", text: "STARTUP REGISTRATION OPEN", status: "ACTIVE" },
              { label: "SECTION 2", text: "2 ROUNDS 1-ON-1 MENTORSHIP", status: "CONFIRMED" },
              { label: "SECTION 3", text: "IIT KGP ALUMNI FOUNDERS & VC MENTORS", status: "ONBOARDED" },
              { label: "SECTION 4", text: "TOP 10 LIVE PITCH ON CAMPUS BEFORE VCS", status: "FINALE" },
            ].map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-2.5">
                <span className="text-[#8B2635] font-bold">•</span>
                <span className="text-[#FAF4E8] font-semibold">{item.label}:</span>
                <span>{item.text}</span>
                <span className="px-1.5 py-0.2 bg-[#8B2635]/30 border border-[#8B2635]/60 text-[#FCE6B8] text-[9px] font-bold">
                  [{item.status}]
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121214] border-b border-[#2A2A2E] px-6 py-6 space-y-4">
            <a
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-wider text-[#F89B29] font-bold"
            >
              Section 1: Registration Form
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-wider text-[#F9F6F0]"
            >
              Section 2: What is Startup Bootcamp?
            </a>
            <a
              href="#mentors"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-wider text-[#F9F6F0]"
            >
              Section 3: Past Mentors
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-wider text-[#F9F6F0]"
            >
              Section 4: Contact Us
            </a>
            <div className="pt-2">
              <a
                href="#register"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[#8B2635] text-white py-3 text-xs font-mono uppercase font-bold tracking-widest"
              >
                Register Startup Now
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
