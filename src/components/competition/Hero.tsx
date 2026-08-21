"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Building2, PhoneCall, Radio, Monitor, Cpu } from "lucide-react";
import { competition } from "@/config/competition";

export function Hero() {
  return (
    <section className="relative bg-[#FAF4E8] text-[#141010] pt-10 pb-20 overflow-hidden border-b border-[#E6DBCA]">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT FLANKING VINTAGE COLLAGE ================= */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-5 pt-4 select-none opacity-90 hover:opacity-100 transition-opacity">
            
            {/* Artifact 1: Vintage Telephone Callout */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#EEDFCA] border border-[#D5C2A5] p-4 shadow-sm relative rotate-[-2deg] hover:rotate-0 transition-transform"
            >
              <div className="flex items-center gap-2 mb-2">
                <PhoneCall size={18} className="text-[#8B2635]" />
                <span className="font-display tracking-widest text-xs uppercase text-[#8B2635]">TRUNK CALL 1984</span>
              </div>
              <h4 className="font-serif italic text-2xl font-bold leading-none text-[#1E1717] mb-1">
                HELLO HELLO
              </h4>
              <p className="text-[11px] font-mono text-[#5C4D3C] uppercase leading-tight">
                Operator assisted trunk calls are now fully automated.
              </p>
            </motion.div>

            {/* Artifact 2: "No more small talk" placard */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-[#474B8F] text-white p-5 shadow-sm rotate-[1.5deg] hover:rotate-0 transition-transform"
            >
              <p className="font-display text-4xl leading-[0.9] tracking-tight uppercase">
                NO MORE<br />
                SMALL<br />
                TALK
              </p>
              <div className="w-8 h-1 bg-[#F89B29] my-2" />
              <p className="text-[10px] font-mono text-blue-100 tracking-wider">
                TRANSACTIONS IN PURE INTENT
              </p>
            </motion.div>

            {/* Artifact 3: POS Mobile Terminal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#C94747] text-white p-4 shadow-sm rotate-[-1deg] border border-[#A63636] hover:rotate-0 transition-transform"
            >
              <span className="inline-block bg-black/30 px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-widest mb-1.5">
                THERMAL PRINT 58MM
              </span>
              <h5 className="font-display text-xl leading-tight uppercase tracking-wide">
                INSTANT PAYMENT<br />WITH POS MOBILE<br />TERMINAL
              </h5>
              <p className="text-[10px] text-red-100 mt-2 font-mono border-t border-red-400/40 pt-1.5">
                At fee shopping complexes & mandis across India.
              </p>
            </motion.div>

            {/* Artifact 4: Freego Electronics Radio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-[#E4D5BC] border border-[#C5B499] p-3 text-[#2E2419] shadow-sm rotate-[2deg] hover:rotate-0 transition-transform"
            >
              <div className="flex items-center justify-between border-b border-[#C5B499] pb-1 mb-1.5">
                <span className="font-display text-sm tracking-wider uppercase">FREEGO ELECTRONICS</span>
                <Radio size={14} className="text-[#6E5A44]" />
              </div>
              <p className="text-[10px] font-mono leading-relaxed text-[#5A4936]">
                Transistor networks are connected. 1978 All-India Service.
              </p>
            </motion.div>

          </div>


          {/* ================= CENTER EDITORIAL COLUMN ================= */}
          <div className="lg:col-span-6 flex flex-col items-center text-center px-2 sm:px-4">
            
            {/* Main 3D Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4"
            >
              <h1 className="retro-3d-text text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.95] tracking-tight">
                {competition.name}
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-lg sm:text-xl font-medium text-[#2E221E] mb-6"
            >
              {competition.subtitle}
            </motion.p>

            {/* Partnership Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-6 flex flex-col items-center"
            >
              <span className="text-xs font-mono tracking-widest text-[#7D6E5D] uppercase mb-1.5">
                {competition.partnerTiers.primary.title}
              </span>
              <div className="inline-flex items-center gap-2 bg-[#FAF0DC] border border-[#DFCBB0] px-4 py-1.5 text-xs font-mono font-bold text-[#141010] uppercase tracking-wider">
                <Building2 size={14} className="text-[#8B2635]" />
                <span>{competition.partnerTiers.primary.name}</span>
              </div>
            </motion.div>

            {/* Rails Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-lg mb-8"
            >
              {competition.partnerTiers.rails.map((rail, idx) => (
                <div key={idx} className="bg-[#FAF0DC]/80 border border-[#E3D4BD] p-2 text-center">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#7A6C5C] mb-0.5">{rail.role}</p>
                  <p className="font-display text-sm tracking-wide text-[#141010] font-bold">{rail.name}</p>
                </div>
              ))}
            </motion.div>

            {/* Manifesto Body Copy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="space-y-4 text-sm sm:text-base leading-relaxed text-[#2B231F] font-normal max-w-xl text-left sm:text-center mb-8"
            >
              {competition.heroManifesto.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </motion.div>

            {/* Dual Track Highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#EFE5D3] border-l-2 border-[#8B2635] p-3 text-xs sm:text-sm text-[#42352B] max-w-lg mb-8 text-left font-serif italic"
            >
              {competition.tracksOverview}
            </motion.div>

            {/* Prize Callout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mb-8"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#8B2635] tracking-tight">
                {competition.prizePool}{" "}
                <span className="text-xl sm:text-2xl font-normal text-[#4A3B31]">
                  in cash prizes
                </span>
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#736353] mt-1.5">
                {competition.eligibilityCallout}
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a
                href={competition.registrationUrl}
                className="w-full sm:w-auto bg-[#8B2635] hover:bg-[#731E2B] text-[#FAF4E8] font-semibold text-sm uppercase tracking-wider px-8 py-3.5 shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 group"
              >
                <span>Register your team</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#case"
                className="w-full sm:w-auto border border-[#B3A086] hover:border-[#141010] bg-[#FAF4E8] text-[#141010] font-medium text-sm uppercase tracking-wider px-6 py-3.5 transition-colors text-center"
              >
                Read The Case
              </a>
            </motion.div>

            {/* Survey Tease */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="pt-6 border-t border-[#DECDB7] w-full max-w-lg text-xs sm:text-sm text-[#5C4D40] leading-relaxed"
            >
              <p className="mb-2">
                Right now, consumers and students across India are naming the parts of daily life that annoy and frustrate them, and the strange workarounds they've built.
              </p>
              <a
                href={competition.surveyUrl}
                className="inline-flex items-center gap-1 font-semibold text-[#8B2635] hover:underline uppercase tracking-wide text-xs"
              >
                <span>Take the survey</span>
                <ArrowRight size={14} />
              </a>
            </motion.div>

          </div>


          {/* ================= RIGHT FLANKING VINTAGE COLLAGE ================= */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-5 pt-4 select-none opacity-90 hover:opacity-100 transition-opacity">
            
            {/* Artifact 5: Personal Computer 1991 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#D8E6D9] border border-[#B8CEBA] p-4 text-[#1C361F] shadow-sm rotate-[2deg] hover:rotate-0 transition-transform"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-display text-sm uppercase tracking-wider">PERSONAL COMPUTER</span>
                <Monitor size={16} className="text-[#3A6B41]" />
              </div>
              <p className="font-serif italic text-xl leading-tight font-bold text-[#142A16]">
                WORLD STANDARD 386SX
              </p>
              <p className="text-[10px] font-mono text-[#3A603F] mt-1">
                40MB Hard Disk • VGA Color Monitor • MS-DOS 5.0
              </p>
            </motion.div>

            {/* Artifact 6: Hybrid Mechanics Car Sketch */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="bg-[#E7D6A5] border border-[#CCA76B] p-4 shadow-sm rotate-[-1.5deg] hover:rotate-0 transition-transform"
            >
              <span className="text-[9px] font-mono uppercase text-[#73511D] tracking-widest block mb-1">
                AUTOMOTIVE TEARDOWN
              </span>
              <h5 className="font-display text-2xl text-[#3D2C11] leading-none uppercase">
                HYBRID<br />MECHANICS
              </h5>
              <div className="my-2 border-b border-[#CCA76B]" />
              <p className="text-[10px] font-mono text-[#5E441D]">
                PowerX 1981 • Dual Carburetor Tuning & Spare Logistics
              </p>
            </motion.div>

            {/* Artifact 7: Vijay Scooters Hand Lettered */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="bg-[#3D2B24] text-[#F3ECE1] p-4 shadow-sm rotate-[1deg] hover:rotate-0 transition-transform"
            >
              <p className="font-serif italic text-2xl font-bold text-[#F0C987] leading-none mb-1">
                Vijay Scooters
              </p>
              <p className="text-[10px] font-mono text-[#C4B3A3] uppercase tracking-wider">
                150cc 2-Stroke Engineering • Genuine Parts Only
              </p>
            </motion.div>

            {/* Artifact 8: Campfire Matchbox Lithograph */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="bg-[#D9534F] text-white p-3.5 border-2 border-dashed border-[#F9D5D3] rotate-[-2deg] hover:rotate-0 transition-transform"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-display text-lg uppercase tracking-wider">SAFETY MATCHES</span>
                <Sparkles size={14} className="text-yellow-200" />
              </div>
              <p className="font-serif text-xs italic text-red-100">
                Guaranteed Strike-Anywhere Sulfur Tips • Made in Sivakasi
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
