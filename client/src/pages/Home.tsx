import { FC } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import PersonalTrainingSection from "@/components/sections/PersonalTrainingSection";
import GroupClassesSection from "@/components/sections/GroupClassesSection";
import PricingSection from "@/components/sections/PricingSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import TrialSection from "@/components/sections/TrialSection";

const Home: FC = () => {
  return (
    <div className="bg-neutral-50 text-slate-800 min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesOverviewSection />
        <PersonalTrainingSection />
        <GroupClassesSection />
        <PricingSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
        <TrialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
