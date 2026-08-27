"use client";

import { sbcConfig } from "@/config/sbc";
import { ArrowUpRight, Heart, Sparkles, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#121214] text-[#F9F6F0] pt-16 pb-12 border-t border-[#2A2A2E]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#2A2A2E]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#8B2635] text-white flex items-center justify-center font-display text-lg tracking-wider border border-[#B3394A]">
                9.0
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
              Startup Boot Camp (SBC) is the Entrepreneurship Cell, IIT Kharagpur's flagship mentorship programme for early-stage student ventures, now in its ninth edition.
            </p>

            <div className="pt-2">
              <span className="inline-block bg-[#1E1C1A] border border-[#3E3426] text-[11px] font-mono text-[#D4AF37] px-3 py-1">
                INDIA'S PREMIER STUDENT VENTURE ACCELERATION COHORT
              </span>
            </div>
          </div>

          {/* Quick Nav: 4 Core Sections */}
          <div className="md:col-span-3 md:col-start-7 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
              Core Sections
            </h4>
            <ul className="space-y-2.5 text-sm font-mono">
              <li>
                <a href="#register" className="text-[#A89C8E] hover:text-[#F89B29] transition-colors">
                  • Section 1: Registration Form
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#A89C8E] hover:text-white transition-colors">
                  • Section 2: What is SBC?
                </a>
              </li>
              <li>
                <a href="#mentors" className="text-[#A89C8E] hover:text-white transition-colors">
                  • Section 3: Past Mentors
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#A89C8E] hover:text-white transition-colors">
                  • Section 4: Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Headquarters */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
              Connect with E-Cell
            </h4>
            <ul className="space-y-2.5 text-sm">
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
                  href={sbcConfig.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A89C8E] hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>E-Cell Official Site</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li className="pt-2 text-xs font-mono text-[#D4AF37]">
                <a href={`mailto:${sbcConfig.contactSection.helpdeskEmail}`} className="hover:underline">
                  {sbcConfig.contactSection.helpdeskEmail}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7D7062]">
          <p>© {new Date().getFullYear()} Startup Bootcamp 9.0 • Entrepreneurship Cell, IIT Kharagpur. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[#A89C8E]">
            <a href="#register" className="hover:text-white transition-colors">Apply as Startup</a>
            <a href="#mentors" className="hover:text-white transition-colors">Apply as Mentor</a>
            <a href="#contact" className="hover:text-white transition-colors">Support Desk</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
