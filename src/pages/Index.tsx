import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrustStrip from "@/components/TrustStrip";
import PricingCards from "@/components/PricingCards";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <HeroSection />
      <BenefitsSection />
      <TrustStrip />
      <PricingCards />
      <ProcessSection />
      <FAQSection />
      <FooterCTA />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
