"use client";

import { Header } from "@/components/sbc/Header";
import { RegistrationSection } from "@/components/sbc/RegistrationSection";
import { Footer } from "@/components/sbc/Footer";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#FAF4E8] text-[#141010] flex flex-col selection:bg-[#8B2635] selection:text-white">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
}
