"use client";

import { useState, useEffect } from "react";

const navItems = [
  { id: "case", label: "The Case" },
  { id: "tracks", label: "Tracks" },
  { id: "updates", label: "Timeline" },
  { id: "partners", label: "Partners" },
  { id: "eligibility", label: "Eligibility" },
  { id: "judging", label: "Judging" },
  { id: "prizes", label: "Prize Pool" },
  { id: "survey", label: "The Survey" },
];

export function StickyNav() {
  const [activeSection, setActiveSection] = useState("case");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-[45px] sm:top-[48px] z-40 bg-[#FFFFFF] border-b border-[#E6E0D5] shadow-xs overflow-x-auto no-scrollbar">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-start md:justify-center gap-1 sm:gap-6 min-w-max">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`py-3.5 px-3 text-xs sm:text-sm font-semibold tracking-wide transition-all relative whitespace-nowrap ${
              activeSection === item.id
                ? "text-[#141010]"
                : "text-[#6B5E52] hover:text-[#141010]"
            }`}
          >
            <span>{item.label}</span>
            {activeSection === item.id && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#933D3D]" />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}
