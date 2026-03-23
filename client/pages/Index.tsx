import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import WhyChooseMeSection from "@/components/WhyChooseMeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <WhyChooseMeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
