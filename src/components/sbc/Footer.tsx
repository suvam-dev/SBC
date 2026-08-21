"use client";

import { sbcConfig } from "@/config/sbc";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#121214] text-[#F9F6F0] pt-20 pb-12 border-t border-[#2A2A2E]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2A2A2E]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#8B2635] text-white flex items-center justify-center font-display text-lg tracking-wider border border-[#B3394A]">
                SBC
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl tracking-wider uppercase text-white font-bold leading-none">
                  {sbcConfig.name}
                </span>
                <span className="text-xs tracking-widest text-[#B0A8A0] uppercase font-mono mt-0.5">
                  {sbcConfig.institution}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A89C8E] font-light leading-relaxed max-w-sm">
              {sbcConfig.tagline} Powered by the Entrepreneurship Cell, IIT Kharagpur and Science & Technology Entrepreneurs Park (STEP).
            </p>

            <div className="pt-2">
              <span className="inline-block bg-[#1E1C1A] border border-[#3E3426] text-[11px] font-mono text-[#F0C987] px-3 py-1">
                INDIA'S PREMIER VENTURE ACCELERATION COHORT
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 md:col-start-7 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F0C987] font-semibold mb-4">
              Bootcamp Roadmap
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#manifesto" className="text-[#A89C8E] hover:text-white transition-colors">
                  Venture Thesis
                </a>
              </li>
              <li>
                <a href="#journey" className="text-[#A89C8E] hover:text-white transition-colors">
                  The 12-Week Sprints
                </a>
              </li>
              <li>
                <a href="#tracks" className="text-[#A89C8E] hover:text-white transition-colors">
                  Cohort Tracks
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="text-[#A89C8E] hover:text-white transition-colors">
                  IIT Kharagpur Edge
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-[#A89C8E] hover:text-white transition-colors">
                  Important Dates
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F0C987] font-semibold mb-4">
              Connect with SBC
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={sbcConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A89C8E] hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a
                  href={sbcConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A89C8E] hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a
                  href={sbcConfig.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A89C8E] hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>E-Cell IIT Kharagpur</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={`mailto:${sbcConfig.socials.email}`}
                  className="text-xs font-mono text-[#F0C987] hover:underline"
                >
                  {sbcConfig.socials.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7D7062]">
          <p>© {new Date().getFullYear()} Startup Bootcamp (SBC), {sbcConfig.institution}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#F9F6F0] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F9F6F0] transition-colors">Cohort Terms</a>
            <a href="#" className="hover:text-[#F9F6F0] transition-colors">Honor Code</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
