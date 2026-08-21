import { Header } from "@/components/competition/Header";
import { Hero } from "@/components/competition/Hero";
import { LiveUpdates } from "@/components/competition/LiveUpdates";
import { StickyNav } from "@/components/competition/StickyNav";
import { CaseSection } from "@/components/competition/CaseSection";
import { TracksSection } from "@/components/competition/TracksSection";
import { PrizePool } from "@/components/competition/PrizePool";
import { Eligibility } from "@/components/competition/Eligibility";
import { JudgingCriteria } from "@/components/competition/JudgingCriteria";
import { SurveySection } from "@/components/competition/SurveySection";
import { Partners } from "@/components/competition/Partners";
import { AboutAbc } from "@/components/competition/AboutAbc";
import { FAQ } from "@/components/competition/FAQ";
import { FinalCTA } from "@/components/competition/FinalCTA";
import { Footer } from "@/components/competition/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <LiveUpdates />
        <StickyNav />
        <CaseSection />
        <TracksSection />
        <PrizePool />
        <Eligibility />
        <JudgingCriteria />
        <SurveySection />
        <Partners />
        <AboutAbc />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
