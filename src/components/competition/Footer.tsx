"use client";

import { competition } from "@/config/competition";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#141010] text-[#FAF4E8] pt-20 pb-12 border-t border-[#2A2424]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2E2626]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-[#8B2635] flex items-center justify-center font-display text-white text-lg tracking-wider">
                K
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-xl tracking-wider uppercase text-white font-bold">
                  {competition.organization}
                </span>
                <span className="text-xs tracking-widest text-[#B3A89B] uppercase font-mono">
                  {competition.institution}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A89C8E] font-light leading-relaxed max-w-sm">
              {competition.tagline}. Organized by the Entrepreneurship Cell, IIT Kharagpur — catalyzing India's future founders since 2006.
            </p>

            <div className="pt-2">
              <span className="inline-block bg-[#1F1818] border border-[#332828] text-[11px] font-mono text-[#F0C987] px-3 py-1">
                INDIA'S PREMIER CASE COMPETITION
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 md:col-start-7 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F0C987] font-semibold mb-4">
              Competition Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#case" className="text-[#A89C8E] hover:text-white transition-colors">
                  The Case Problem
                </a>
              </li>
              <li>
                <a href="#tracks" className="text-[#A89C8E] hover:text-white transition-colors">
                  Strategy & Builder Tracks
                </a>
              </li>
              <li>
                <a href="#updates" className="text-[#A89C8E] hover:text-white transition-colors">
                  Timeline & Milestones
                </a>
              </li>
              <li>
                <a href="#prizes" className="text-[#A89C8E] hover:text-white transition-colors">
                  Prize Pool & Grants
                </a>
              </li>
              <li>
                <a href="#survey" className="text-[#A89C8E] hover:text-white transition-colors">
                  The Rewiring Survey
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F0C987] font-semibold mb-4">
              Connect with E-Cell
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={competition.socials.instagram}
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
                  href={competition.socials.linkedin}
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
                  href={competition.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A89C8E] hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Official Website</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={`mailto:${competition.socials.email}`}
                  className="text-xs font-mono text-[#F0C987] hover:underline"
                >
                  {competition.socials.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7D7062]">
          <p>© {new Date().getFullYear()} {competition.organization}, {competition.institution}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#FAF4E8] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FAF4E8] transition-colors">Competition Terms</a>
            <a href="#" className="hover:text-[#FAF4E8] transition-colors">Code of Conduct</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
