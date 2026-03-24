import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import GuestbookSection from "@/components/sections/GuestbookSection";
import Divider from "@/components/ui/Divider";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  const isSignedIn = !!session?.user;

  return (
    <>
      <HeroSection />
      <Divider />
      <FeaturesSection />
      <Divider />
      <TestimonialsSection />
      <Divider />
      <GuestbookSection isSignedIn={isSignedIn} />
      <Divider />
      <CtaSection />
    </>
  );
}
