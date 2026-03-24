import WordArtHeader from "@/components/ui/WordArtHeader";
import BlinkText from "@/components/ui/BlinkText";
import Divider from "@/components/ui/Divider";
import { awards } from "@/lib/content";

export default function HeroSection() {
  return (
    <section id="home" className="tiled-stars px-6 py-10 text-center">
      {/* Main WordArt Title */}
      <WordArtHeader
        text="✨ Magic Teacher ✨"
        colorScheme="gold"
        as="h1"
        className="text-5xl md:text-7xl mb-2 drop-shadow-lg"
      />

      {/* Rainbow subtitle */}
      <WordArtHeader
        text="Harnessing the AWESOME POWER of AI!!"
        colorScheme="rainbow"
        as="h2"
        className="text-2xl md:text-3xl mb-4"
      />

      {/* Tagline */}
      <p
        className="text-white text-lg mb-2 max-w-3xl mx-auto"
        style={{ fontFamily: "'Comic Sans MS', cursive" }}
      >
        So you don&apos;t have to grade 47 identical essays about{" "}
        <em>The Catcher in the Rye</em> ever again.
      </p>

      <p
        className="text-retro-yellow text-base mb-6 max-w-2xl mx-auto"
        style={{ fontFamily: "'Comic Sans MS', cursive" }}
      >
        Magic Teacher uses cutting-edge{" "}
        <BlinkText className="text-retro-lime font-bold">ARTIFICIAL INTELLIGENCE</BlinkText>
        {" "}to save teachers{" "}
        <span className="font-bold underline">hours every week</span>.
        Time you could spend doing literally anything else.
        We suggest napping.
      </p>

      {/* CTA Button */}
      <div className="mb-8">
        <button
          className="retro-btn text-xl font-bold pulse-btn"
          style={{ fontFamily: "'Comic Sans MS', cursive", color: "#000080" }}
        >
          🚀 ENTER THE MAGIC ZONE &gt;&gt;
        </button>
        <p
          className="text-retro-silver text-xs mt-2"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          * No actual magic zone exists. This is a web application.
        </p>
      </div>

      <Divider />

      {/* Award Badges */}
      <div className="flex flex-wrap justify-center gap-3">
        {awards.map((award) => (
          <div
            key={award.label}
            className="bg-retro-silver border-win95-raised px-3 py-2 text-xs font-bold text-black"
            style={{ fontFamily: "'Comic Sans MS', cursive" }}
          >
            {award.emoji} {award.label}
          </div>
        ))}
      </div>
    </section>
  );
}
