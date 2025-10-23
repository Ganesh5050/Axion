import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { DetailedFeatures } from "@/components/DetailedFeatures";
import { AdditionalFeatures } from "@/components/AdditionalFeatures";
import { PlatformShowcase } from "@/components/PlatformShowcase";
import { CTASection } from "@/components/CTASection";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <AdditionalFeatures />
      <PlatformShowcase />
      <Testimonials />
      <CTASection />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
