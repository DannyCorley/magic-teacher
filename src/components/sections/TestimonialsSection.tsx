import WordArtHeader from "@/components/ui/WordArtHeader";
import Divider from "@/components/ui/Divider";
import { testimonials } from "@/lib/content";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="px-6 py-8"
      style={{ backgroundColor: "#008080" }}
    >
      <div className="text-center mb-6">
        <WordArtHeader
          text="What Real Teachers™ Are Saying About Us!!"
          colorScheme="gold"
          as="h2"
          className="text-3xl md:text-4xl mb-2"
        />
        <p
          className="text-retro-yellow text-sm"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          (These are 100% real testimonials from real teachers. Probably.)
        </p>
      </div>

      <Divider />

      <div className="grid gap-6 max-w-5xl mx-auto" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="lined-paper p-4 pl-8"
            style={{ fontFamily: "'Comic Sans MS', cursive" }}
          >
            <p className="text-blue-800 text-sm italic mb-4 leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="border-t border-blue-300 pt-2">
              <p className="font-bold text-sm text-black">— {t.name}</p>
              <p className="text-xs text-gray-600">{t.location}</p>
              <p className="text-yellow-500 mt-1">
                {"⭐".repeat(t.rating)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Divider />

      {/* Guestbook prompt */}
      <div className="text-center mt-4">
        <p
          className="text-retro-yellow font-bold text-lg"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          📖 Have a testimonial?{" "}
          <a href="#guestbook" className="underline text-retro-lime hover:text-white">
            Sign our Guestbook!!
          </a>
        </p>
        <p
          className="text-retro-silver text-xs mt-1"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          We reply to every entry (we do not reply to every entry)
        </p>
      </div>
    </section>
  );
}
