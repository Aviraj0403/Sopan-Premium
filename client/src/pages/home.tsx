import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionVision from "@/components/MissionVision";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import TeamSection from "@/components/TeamSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <MissionVision />
        <ServicesSection />
        <AboutSection />
        <ObjectivesSection />
        <TeamSection />
        <GetInvolvedSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
