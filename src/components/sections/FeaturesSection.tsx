import WordArtHeader from "@/components/ui/WordArtHeader";
import Divider from "@/components/ui/Divider";
import UnderConstruction from "@/components/ui/UnderConstruction";
import FeatureCardGrid from "@/components/cards/FeatureCardGrid";

export default function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-8" style={{ backgroundColor: "#c0c0c0" }}>
      <div className="text-center mb-6">
        <WordArtHeader
          text="Why Teachers LOVE Us (and You Will Too!!)"
          colorScheme="teal"
          as="h2"
          className="text-3xl md:text-4xl mb-3"
        />
        <p
          className="text-black text-base max-w-2xl mx-auto"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          Our AI-powered tools handle the boring stuff so you can focus on the parts
          of teaching you actually enjoy. (We assume some parts exist.)
        </p>
      </div>

      <Divider />

      <FeatureCardGrid />

      <Divider />

      <UnderConstruction />
    </section>
  );
}
