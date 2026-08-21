"use client";

import { motion } from "framer-motion";
import { competition } from "@/config/competition";
import { ArrowRight, Umbrella, ShieldCheck, Key, FileText, CheckCircle2 } from "lucide-react";

export function CaseSection() {
  const { caseNarrative } = competition;

  return (
    <section id="case" className="bg-[#933D3D] text-[#FAF4E8] py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle Noise / Vignette */}
      <div className="absolute inset-0 paper-texture opacity-10 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#F0C987] mb-3 block">
              Flagship Challenge 2026
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-8">
              {caseNarrative.title}
            </h2>
            
            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-[#FAF4E8]/90 font-light">
              {caseNarrative.introParagraphs.map((para, idx) => (
                <p key={idx} className={idx === 1 ? "font-serif italic text-xl sm:text-2xl text-[#FCE6B8] font-normal" : ""}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>


        {/* ================= STAGE-BY-STAGE PROGRESSION ================= */}
        <div className="space-y-28 sm:space-y-36">
          
          {/* ----------------- STAGE 1: CHOOSE (TEXT ON LEFT, POSTCARD ON RIGHT) ----------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-4"
            >
              <div className="inline-block bg-[#7A2E2E] text-[#FCE6B8] px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider">
                Stage 1: Choose
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                First, you'll have to pick what you want to solve.
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#FAF4E8]/80 font-light">
                {caseNarrative.stages[0].description}
              </p>
            </motion.div>

            {/* RETRO POSTCARD #1: THE HOLIDAY GROUP */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="bg-[#EFA795] text-[#2D1B17] p-6 sm:p-7 border-2 border-[#D88C79] shadow-xl relative overflow-hidden rounded-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  
                  {/* Left half of card */}
                  <div className="sm:col-span-7 space-y-3">
                    <div className="border-b border-[#2D1B17]/30 pb-2">
                      <h4 className="font-display text-3xl sm:text-4xl tracking-tight uppercase leading-none text-[#1C120F]">
                        THE HOLIDAY GROUP
                      </h4>
                    </div>

                    {/* SVG Graphic of Sun Umbrella & Lounge Chairs */}
                    <div className="py-2 flex items-center gap-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/40 rounded-full flex items-center justify-center p-2 border border-white/60 shadow-inner">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-[#B54A3B]">
                          {/* Umbrella */}
                          <path d="M 20 50 Q 50 15 80 50 Z" fill="#D9534F" stroke="#1C120F" strokeWidth="2" />
                          <path d="M 35 49 Q 50 16 65 49 Z" fill="#FFFDF8" stroke="#1C120F" strokeWidth="2" />
                          <path d="M 49 15 L 49 85" stroke="#1C120F" strokeWidth="3" strokeLinecap="round" />
                          <path d="M 49 85 Q 40 90 42 78" fill="none" stroke="#1C120F" strokeWidth="3" strokeLinecap="round" />
                          {/* Lounge Chair */}
                          <path d="M 60 75 L 85 75 L 90 55" stroke="#1C120F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                          <path d="M 65 75 L 60 85" stroke="#1C120F" strokeWidth="2" />
                          <path d="M 80 75 L 85 85" stroke="#1C120F" strokeWidth="2" />
                        </svg>
                      </div>
                      <p className="text-[11px] font-mono leading-tight text-[#452720]">
                        Countless options, multiple opinions, weeks of indecision. Happens in every friends WhatsApp chat.
                      </p>
                    </div>

                    <p className="font-serif italic text-xs text-[#933D3D] font-bold">
                      But it doesn't have to be this way.
                    </p>
                  </div>

                  {/* Right half of card */}
                  <div className="sm:col-span-5 bg-white/50 p-4 border border-[#D88C79] flex flex-col justify-between h-full space-y-4">
                    <p className="text-[10px] font-mono leading-relaxed text-[#38201B]">
                      We are collecting these problems. In six weeks, 1,000+ student teams pick the most interesting of these problems and build solutions.
                    </p>
                    <div className="text-[10px] font-mono font-bold text-[#8B2635]">
                      5 minutes. Anonymous. Results come to you first.
                    </div>
                    <a
                      href={competition.surveyUrl}
                      className="inline-block bg-[#8B2635] text-white text-center py-2 px-3 text-[11px] font-mono uppercase font-bold tracking-wider rounded-full shadow-xs hover:bg-[#731E2B] transition-colors"
                    >
                      Tell your problems
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>

          </div>


          {/* ----------------- STAGE 2: ASSEMBLY (POSTCARD ON LEFT, TEXT ON RIGHT) ----------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* RETRO POSTCARD #2: THE MODERN DESI FILING SYSTEM */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="bg-[#B9DFD2] text-[#163328] p-6 sm:p-7 border-2 border-[#9CC7B8] shadow-xl relative overflow-hidden rounded-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  
                  {/* Godrej Cabinet Illustration */}
                  <div className="sm:col-span-5 flex justify-center">
                    <div className="w-28 sm:w-32 bg-[#768C83] p-2 border-2 border-[#163328] shadow-md rounded-xs">
                      <div className="h-44 bg-[#8EA89E] border border-[#52665E] p-1.5 flex flex-col justify-between relative">
                        {/* Cabinet Doors */}
                        <div className="flex-1 border-r border-[#52665E] relative flex items-center justify-end pr-1">
                          <div className="w-1.5 h-6 bg-[#D4AF37] border border-black rounded-xs" />
                        </div>
                        <div className="h-6 bg-[#637970] border-t border-[#52665E] flex items-center px-1">
                          <div className="w-8 h-1 bg-[#42524B]" />
                        </div>
                        <span className="absolute top-2 left-2 text-[8px] font-mono font-bold text-[#2A3B34]">
                          GODREJ 1982
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="sm:col-span-7 space-y-3">
                    <div className="border-b border-[#163328]/30 pb-1.5">
                      <span className="text-[9px] font-mono tracking-widest uppercase text-[#3D6B58] block mb-0.5">
                        CONSUMER TEARDOWN #02
                      </span>
                      <h4 className="font-display text-2xl sm:text-3xl tracking-tight uppercase leading-none text-[#122A21]">
                        THE MODERN DESI FILING SYSTEM
                      </h4>
                    </div>

                    <p className="text-[11px] font-mono leading-relaxed text-[#234A3B]">
                      A WhatsApp chat with yourself. It holds your PAN, insurance, car RC and a photograph of something you meant to remember.
                    </p>

                    <p className="font-serif italic text-xs text-[#8B2635] font-bold">
                      The chat is very messy, but it works.
                    </p>

                    <div className="pt-2 border-t border-[#163328]/20 flex items-center justify-between">
                      <span className="text-[9px] font-mono text-[#2B5444]">
                        1,000+ teams rewire this.
                      </span>
                      <a
                        href={competition.surveyUrl}
                        className="inline-block bg-white text-[#163328] border border-[#163328] py-1.5 px-3 text-[10px] font-mono uppercase font-bold tracking-wider rounded-full shadow-xs hover:bg-[#163328] hover:text-white transition-colors"
                      >
                        Tell us yours
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>

            {/* Stage 2 Text */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-5 order-1 lg:order-2"
            >
              <div className="inline-block bg-[#7A2E2E] text-[#FCE6B8] px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider">
                Stage 2: Assembly
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Then you put the pieces together to design your solution.
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#FAF4E8]/80 font-light">
                {caseNarrative.stages[1].description}
              </p>

              {/* The 3 Rails */}
              <div className="pt-4 space-y-3">
                <p className="font-serif italic text-sm text-[#FCE6B8] font-medium">
                  {caseNarrative.stages[1].railsHeading}
                </p>
                <div className="space-y-2.5">
                  {caseNarrative.stages[1].rails?.map((rail, idx) => (
                    <div key={idx} className="bg-[#7F3232] border border-[#AA4B4B] p-3 rounded-xs text-xs sm:text-sm">
                      <span className="font-bold text-white">• {rail.name}: </span>
                      <span className="text-[#FAF4E8]/80">{rail.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>


          {/* ----------------- STAGE 3: BUILD (TEXT ON LEFT, POSTCARD ON RIGHT) ----------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-4"
            >
              <div className="inline-block bg-[#7A2E2E] text-[#FCE6B8] px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider">
                Stage 3: Build & Scale
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                This is when you test your solution against the real world.
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#FAF4E8]/80 font-light">
                {caseNarrative.stages[2].description}
              </p>
              <div className="pt-2">
                <a
                  href={competition.registrationUrl}
                  className="inline-flex items-center gap-2 bg-[#FAF4E8] text-[#933D3D] px-6 py-3 text-xs font-mono uppercase font-bold tracking-wider hover:bg-white transition-colors"
                >
                  <span>Enter Track A or Track B</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>

            {/* RETRO POSTCARD #3: THE KYC FOLDER */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="bg-[#0070BA] text-white p-6 sm:p-7 border-4 border-dashed border-[#FBE288] shadow-2xl relative overflow-hidden rounded-xs">
                
                <div className="space-y-4">
                  
                  {/* Top Bar Banner */}
                  <div className="bg-[#FBE288] text-[#0A3D62] p-2.5 flex items-center justify-between">
                    <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-wider leading-none">
                      THE KYC FOLDER
                    </h4>
                    <Key size={20} className="text-[#0A3D62]" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    
                    <div className="sm:col-span-8 space-y-2">
                      <p className="text-xs font-mono leading-relaxed text-blue-100">
                        A folder you drag to your bank every few months. Attest the same documents and submit the same forms. A day you could have spent doing what you love, wasted.
                      </p>
                      <p className="font-serif italic text-xs text-[#FBE288] font-bold">
                        It shouldn't be this way. So, tell us your problems.
                      </p>
                    </div>

                    <div className="sm:col-span-4 flex flex-col items-center justify-center bg-black/20 p-3 border border-white/20">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-blue-200 mb-1">
                        NATIONAL BENCHMARK
                      </span>
                      <span className="font-display text-xl text-[#FBE288] text-center leading-none mb-2">
                        ₹20 LAKH POOL
                      </span>
                      <a
                        href={competition.surveyUrl}
                        className="bg-white text-[#0070BA] py-1.5 px-3 text-[10px] font-mono uppercase font-bold tracking-wider rounded-full shadow-xs hover:bg-[#FBE288] transition-colors text-center w-full"
                      >
                        Tell us yours
                      </a>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
