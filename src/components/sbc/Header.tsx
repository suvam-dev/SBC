"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { sbcConfig } from "@/config/sbc";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#121214] text-[#F9F6F0] border-b border-[#2A2A2E]">
        {/* Top Announcement Bar */}
        <div className="bg-[#1C1C22] border-b border-[#2A2A2E] py-1.5 px-4 text-center text-[11px] font-mono text-[#D4AF37] flex items-center justify-center gap-2">
          <Sparkles size={13} className="text-[#D4AF37] animate-pulse" />
          <span className="font-semibold uppercase tracking-wider">
            SBC COHORT 2026 APPLICATIONS NOW LIVE
          </span>
          <span className="hidden sm:inline text-zinc-400">• ₹50L+ SEED & PROTOTYPING POOL</span>
        </div>

        {/* Main Nav Bar */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-[#8B2635] text-white flex items-center justify-center font-display text-lg tracking-wider border border-[#B3394A]">
              SBC
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl tracking-wider uppercase text-white font-bold leading-none">
                {sbcConfig.name}
              </span>
              <span className="text-[10px] tracking-widest text-[#B0A8A0] uppercase font-mono font-medium mt-0.5">
                {sbcConfig.institution}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-mono tracking-wider uppercase text-[#C8C2B8]">
            <a href="#manifesto" className="hover:text-white transition-colors">
              Thesis
            </a>
            <a href="#journey" className="hover:text-white transition-colors">
              The Journey
            </a>
            <a href="#tracks" className="hover:text-white transition-colors">
              Tracks
            </a>
            <a href="#ecosystem" className="hover:text-white transition-colors">
              IIT KGP Edge
            </a>
            <a href="#timeline" className="hover:text-white transition-colors">
              Timeline
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href={sbcConfig.applyUrl}
              className="bg-[#8B2635] hover:bg-[#A32E40] text-white text-xs font-mono font-bold uppercase tracking-wider px-5 py-2.5 shadow-sm transition-all flex items-center gap-1.5"
            >
              <span>Apply for Cohort</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#F9F6F0] p-1.5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121214] border-b border-[#2A2A2E] px-6 py-6 space-y-4">
            <a
              href="#manifesto"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-wider text-[#F9F6F0]"
            >
              Thesis & Overview
            </a>
            <a
              href="#journey"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-wider text-[#F9F6F0]"
            >
              The 12-Week Journey
            </a>
            <a
              href="#tracks"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-wider text-[#F9F6F0]"
            >
              Bootcamp Tracks
            </a>
            <a
              href="#ecosystem"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-wider text-[#F9F6F0]"
            >
              IIT KGP Advantage
            </a>
            <a
              href="#timeline"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-wider text-[#F9F6F0]"
            >
              Timeline
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-wider text-[#F9F6F0]"
            >
              FAQ
            </a>
            <div className="pt-2">
              <a
                href={sbcConfig.applyUrl}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[#8B2635] text-white py-3 text-xs font-mono uppercase font-bold tracking-widest"
              >
                Apply for Cohort '26
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
