import { Header } from "@/components/sbc/Header";
import { RegistrationSection } from "@/components/sbc/RegistrationSection";
import { AboutSection } from "@/components/sbc/AboutSection";
import { PastMentorsSection } from "@/components/sbc/PastMentorsSection";
import { ContactSection } from "@/components/sbc/ContactSection";
import { Footer } from "@/components/sbc/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF4E8] text-[#141010] flex flex-col selection:bg-[#8B2635] selection:text-white">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        {/* SECTION 1: REGISTRATION FORM */}
        <RegistrationSection />

        {/* SECTION 2: WHAT IS STARTUP BOOTCAMP? */}
        <AboutSection />

        {/* SECTION 3: PAST MENTORS */}
        <PastMentorsSection />

        {/* SECTION 4: CONTACT US */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
