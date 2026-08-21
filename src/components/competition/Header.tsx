"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { competition } from "@/config/competition";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Black Bar */}
      <header className="sticky top-0 z-50 bg-[#141010] text-[#FAF4E8] border-b border-[#2A2424]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 bg-[#933D3D] flex items-center justify-center font-display text-white text-lg tracking-wider">
              K
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-lg sm:text-xl tracking-wider uppercase text-white font-bold">
                {competition.organization}
              </span>
              <span className="text-[11px] sm:text-xs tracking-widest text-[#B3A89B] uppercase font-mono font-medium">
                CASE COMPETITION 2026
              </span>
            </div>
          </a>

          {/* Quick CTA & Nav */}
          <div className="flex items-center gap-4">
            <a
              href={competition.registrationUrl}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#933D3D] hover:bg-[#A64545] text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 transition-colors"
            >
              <span>Register Now</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#FAF4E8] p-1.5 hover:text-[#933D3D] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Continuous Horizontal Ticker / Timeline Bar */}
        <div className="bg-[#1E1818] border-t border-[#2E2626] overflow-hidden py-1.5 text-[11px] font-mono tracking-wider text-[#C2B7A8]">
          <div className="animate-ticker flex items-center gap-12 whitespace-nowrap">
            {[...competition.tickerPhases, ...competition.tickerPhases, ...competition.tickerPhases].map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-3">
                <span className="text-[#933D3D] font-bold">•</span>
                <span className="text-[#FAF4E8] font-semibold">{item.phase}:</span>
                <span>{item.title}</span>
                <span className={`px-1.5 py-0.2 rounded-xs text-[10px] ${
                  item.status === "OPEN NOW" 
                    ? "bg-[#933D3D] text-white font-bold animate-pulse" 
                    : item.status === "COMPLETED"
                    ? "bg-zinc-800 text-zinc-400"
                    : "bg-[#2D2424] text-[#E0D7CB]"
                }`}>
                  [{item.status}]
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#141010] border-b border-[#2E2626] px-6 py-6 flex flex-col space-y-4">
            <a
              href="#case"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#FAF4E8] hover:text-[#933D3D] text-sm uppercase tracking-wider py-1"
            >
              The Case
            </a>
            <a
              href="#tracks"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#FAF4E8] hover:text-[#933D3D] text-sm uppercase tracking-wider py-1"
            >
              Tracks
            </a>
            <a
              href="#updates"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#FAF4E8] hover:text-[#933D3D] text-sm uppercase tracking-wider py-1"
            >
              Timeline & Updates
            </a>
            <a
              href="#prizes"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#FAF4E8] hover:text-[#933D3D] text-sm uppercase tracking-wider py-1"
            >
              Prizes
            </a>
            <a
              href="#eligibility"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#FAF4E8] hover:text-[#933D3D] text-sm uppercase tracking-wider py-1"
            >
              Eligibility
            </a>
            <a
              href="#about-ecell"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#FAF4E8] hover:text-[#933D3D] text-sm uppercase tracking-wider py-1"
            >
              About ABC E-Cell
            </a>
            <div className="pt-2">
              <a
                href={competition.registrationUrl}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[#933D3D] text-white py-3 text-xs uppercase font-bold tracking-widest"
              >
                Register Your Team
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
