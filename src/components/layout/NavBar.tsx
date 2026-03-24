import { navItems } from "@/lib/content";
import MarqueeText from "@/components/ui/MarqueeText";
import BlinkText from "@/components/ui/BlinkText";

export default function NavBar() {
  return (
    <header>
      {/* Title Bar */}
      <div
        className="flex items-center gap-2 px-3 py-1"
        style={{ backgroundColor: "#000080" }}
      >
        <span className="text-2xl">🧙</span>
        <span
          className="text-white font-bold text-xl tracking-wide"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          Magic Teacher
        </span>
        <span className="ml-2 text-xs" style={{ color: "#c0c0c0" }}>
          v2.0 GOLD EDITION
        </span>
        <div className="ml-auto flex gap-1">
          <span className="text-xs px-2 py-0 bg-retro-silver border-win95-raised cursor-pointer">_</span>
          <span className="text-xs px-2 py-0 bg-retro-silver border-win95-raised cursor-pointer">□</span>
          <span className="text-xs px-2 py-0 bg-red-600 text-white border-win95-raised cursor-pointer">X</span>
        </div>
      </div>

      {/* Nav Links */}
      <nav
        className="flex flex-wrap"
        style={{ backgroundColor: "#c0c0c0", borderBottom: "2px solid #808080" }}
      >
        {navItems.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            title={item.tooltip}
            className="px-4 py-2 text-sm font-bold text-retro-navy underline hover:bg-retro-yellow hover:text-black transition-none"
            style={{
              borderRight: i < navItems.length - 1 ? "1px solid #808080" : "none",
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            {item.blink ? (
              <BlinkText className="text-retro-maroon">{item.label}</BlinkText>
            ) : (
              item.label
            )}
          </a>
        ))}
      </nav>

      {/* Marquee Subtitle */}
      <MarqueeText
        speed="slow"
        className="text-retro-yellow font-bold text-sm py-1 px-2"
        style={{ backgroundColor: "#000080" }}
      >
        ✨ Welcome to Magic Teacher — The #1 AI Teaching Assistant on the WORLD WIDE WEB!! ✨ &nbsp;&nbsp;&nbsp;
        AS SEEN ON: The Internet!! &nbsp;|&nbsp; Voted Best Teacher Tool by Teachers Who Clicked &quot;Yes&quot; on a Pop-Up &nbsp;|&nbsp;
        Powered by MAGIC (and also machine learning) &nbsp;|&nbsp; Y2K Compliant ✓ &nbsp;&nbsp;&nbsp;
      </MarqueeText>
    </header>
  );
}
