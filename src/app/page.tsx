import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import Divider from "@/components/ui/Divider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Divider />
      <FeaturesSection />
      <Divider />
      <TestimonialsSection />
      <Divider />
      <CtaSection />
    </>
  );
}
