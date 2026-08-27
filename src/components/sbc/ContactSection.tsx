"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { sbcConfig } from "@/config/sbc";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Globe,
  Send,
  CheckCircle2,
  Sparkles,
  Building,
  ArrowUpRight
} from "lucide-react";
import { LinkedInIcon, InstagramIcon, WhatsAppIcon } from "./Icons";

export function ContactSection() {
  const { contactSection, socials } = sbcConfig;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    subject: "Startup Application Query",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setFormSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#FAF0DC] text-[#141010] border-b border-[#DECBB4] relative">
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-40" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FAF4E8] border border-[#DECBB4] px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#8B2635] mb-4">
          <Sparkles size={13} className="text-[#F89B29]" />
          <span>SECTION 4 • GET IN TOUCH</span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#141010] leading-none mb-3">
            {contactSection.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#5C4C3E] font-light leading-relaxed">
            {contactSection.description}
          </p>
        </div>

        {/* Coordinators Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactSection.coordinators.map((coord, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#FFFDF9] border-2 border-[#141010] p-6 shadow-[5px_5px_0px_0px_#141010] flex flex-col justify-between group hover:border-[#8B2635] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#8B2635] shrink-0 bg-[#FAF0DC]">
                    <Image
                      src={coord.photoUrl}
                      alt={coord.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#141010]">
                      {coord.name}
                    </h3>
                    <p className="text-[11px] font-mono text-[#8B2635] font-semibold">
                      {coord.role}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono border-t border-[#DECBB4] pt-4">
                  {/* Phone */}
                  <div className="flex items-center justify-between text-[#4A3B2F]">
                    <a
                      href={`tel:${coord.phone.replace(/[^0-9+]/g, "")}`}
                      className="inline-flex items-center gap-2 hover:text-[#8B2635] transition-colors"
                    >
                      <Phone size={13} className="text-[#8B2635]" />
                      <span>{coord.phone}</span>
                    </a>

                    <a
                      href={`https://wa.me/${coord.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase transition-colors"
                      title="Chat on WhatsApp"
                    >
                      <WhatsAppIcon className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <a
                      href={`mailto:${coord.email}`}
                      className="inline-flex items-center gap-2 text-[#4A3B2F] hover:text-[#8B2635] transition-colors truncate w-full"
                    >
                      <Mail size={13} className="text-[#8B2635] shrink-0" />
                      <span className="truncate">{coord.email}</span>
                    </a>
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <a
                      href={coord.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#4A3B2F] hover:text-[#8B2635] transition-colors"
                    >
                      <LinkedInIcon className="w-3.5 h-3.5 text-[#8B2635]" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#DECBB4] flex items-center justify-between text-[10px] font-mono text-[#78695C]">
                <span>E-CELL IIT KHARAGPUR</span>
                <span className="text-[#8B2635] font-bold">COORDINATOR</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two Columns: Office Address + Quick Message Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Campus Office Address & Social Links */}
          <div className="lg:col-span-5 bg-[#141010] text-[#FAF4E8] p-6 sm:p-8 border-2 border-[#141010] shadow-[6px_6px_0px_0px_#8B2635] space-y-6">
            <div>
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block mb-1">
                PHYSICAL HEADQUARTERS
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                {contactSection.address.title}
              </h3>
            </div>

            <div className="space-y-3 text-xs font-mono text-[#C8BFB3] border-t border-white/10 pt-4">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#F89B29] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-white">{contactSection.address.building}</p>
                  <p>{contactSection.address.institution}</p>
                  <p>{contactSection.address.location}</p>
                  <p className="text-[11px] text-[#A89E92]">{contactSection.address.landmark}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-white/10">
                <Mail size={16} className="text-[#F89B29] shrink-0" />
                <a
                  href={`mailto:${contactSection.helpdeskEmail}`}
                  className="text-[#FCE6B8] hover:underline"
                >
                  {contactSection.helpdeskEmail}
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="border-t border-white/10 pt-6">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block mb-3">
                FOLLOW E-CELL IIT KHARAGPUR
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#261E1E] hover:bg-[#3E2E2E] text-white p-2.5 border border-white/10 transition-colors inline-flex items-center gap-1.5 text-xs font-mono"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#261E1E] hover:bg-[#3E2E2E] text-white p-2.5 border border-white/10 transition-colors inline-flex items-center gap-1.5 text-xs font-mono"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href={socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#261E1E] hover:bg-[#3E2E2E] text-white p-2.5 border border-white/10 transition-colors inline-flex items-center gap-1.5 text-xs font-mono"
                >
                  <Globe size={14} />
                  <span>Website</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-7 bg-[#FFFDF9] border-2 border-[#141010] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#141010]">
            <div className="border-b border-[#DECBB4] pb-4 mb-6">
              <h3 className="font-serif text-2xl font-bold text-[#141010]">
                Send an Inquiry to the SBC Team
              </h3>
              <p className="text-xs font-mono text-[#78695C] mt-0.5">
                Have specific queries about mentor matching, pitch deck formats, or team composition?
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-[#8B2635] text-white mx-auto flex items-center justify-center rounded-full">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#141010]">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C3E] max-w-md mx-auto">
                  Thank you, <strong>{inquiryData.name}</strong>. An Associate Manager from E-Cell IIT Kharagpur will respond to <strong>{inquiryData.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setInquiryData({
                      name: "",
                      email: "",
                      subject: "Startup Application Query",
                      message: ""
                    });
                  }}
                  className="mt-2 text-xs font-mono uppercase font-bold text-[#8B2635] underline cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      placeholder="e.g. Suvam Ghosh"
                      className="w-full bg-[#FAF4E8] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2 text-sm text-[#141010] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      placeholder="e.g. founder@iitkgp.ac.in"
                      className="w-full bg-[#FAF4E8] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2 text-sm text-[#141010] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                    Subject *
                  </label>
                  <select
                    value={inquiryData.subject}
                    onChange={(e) => setInquiryData({ ...inquiryData, subject: e.target.value })}
                    className="w-full bg-[#FAF4E8] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2 text-sm text-[#141010] outline-none cursor-pointer"
                  >
                    <option value="Startup Application Query">Startup Registration & Application Query</option>
                    <option value="Mentor Matching & Schedule">Two Rounds 1-on-1 Mentorship Inquiry</option>
                    <option value="Live Pitch on Campus">Top 10 Live Pitch on Campus Inquiry</option>
                    <option value="Partnership & Sponsorship">Venture Partner / Sponsorship Inquiry</option>
                    <option value="Other">Other Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-semibold text-[#4A3B2F] mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    placeholder="Describe your question or message for the E-Cell IIT Kharagpur team..."
                    className="w-full bg-[#FAF4E8] border border-[#DECBB4] focus:border-[#141010] px-3.5 py-2 text-sm text-[#141010] outline-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="bg-[#141010] hover:bg-[#2B2323] text-white px-7 py-2.5 text-xs font-mono uppercase font-bold tracking-wider inline-flex items-center gap-2 transition-colors shadow-md disabled:opacity-50"
                  >
                    {isSending ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send size={13} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
