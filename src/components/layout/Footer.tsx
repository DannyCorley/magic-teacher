import VisitorCounter from "@/components/ui/VisitorCounter";
import Divider from "@/components/ui/Divider";
import BlinkText from "@/components/ui/BlinkText";

export default function Footer() {
  return (
    <footer
      className="mt-8"
      style={{ backgroundColor: "#000080", color: "#c0c0c0" }}
    >
      <Divider />

      <div className="px-6 py-4 text-center">
        {/* Award badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
          {[
            { emoji: "🏆", text: "Cool Site of the Day 1997" },
            { emoji: "🌐", text: "Netscape NOW! Certified" },
            { emoji: "⭐", text: "Best Education Site (We Voted Ourselves)" },
            { emoji: "💾", text: "Y2K Compliant" },
          ].map((a) => (
            <span
              key={a.text}
              className="border-2 px-3 py-1 text-retro-yellow"
              style={{
                borderColor: "#c0c0c0",
                fontFamily: "'Comic Sans MS', cursive",
              }}
            >
              {a.emoji} {a.text}
            </span>
          ))}
        </div>

        <Divider />

        {/* Visitor counter */}
        <p
          className="mb-3 text-sm"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          You are visitor number{" "}
          <VisitorCounter />
          {" "}— congratulations, you found us!!
        </p>

        {/* Best viewed notice */}
        <p
          className="mb-3 text-xs text-retro-silver"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          🖥️ Best viewed in Internet Explorer 6.0 at 800×600 resolution &nbsp;|&nbsp;
          Requires Flash Player 4.0 &nbsp;|&nbsp; Enable JavaScript for FULL MAGIC EXPERIENCE
        </p>

        <p
          className="text-xs"
          style={{ fontFamily: "'Comic Sans MS', cursive", color: "#aaaaff" }}
        >
          This site was made with love, Microsoft FrontPage, and one (1) cup of lukewarm
          teachers&apos; lounge coffee. Do not hotlink our images. Do not steal our clipart.
        </p>

        <p
          className="mt-3 text-xs font-bold"
          style={{ fontFamily: "'Comic Sans MS', cursive", color: "#ffff00" }}
        >
          <BlinkText slow>
            © 1997–2026 Magic Teacher Inc. All rights reserved. Do not steal.
          </BlinkText>
        </p>

        <div className="mt-2 text-center">
          <span className="text-yellow-300 text-lg">
            ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★
          </span>
        </div>
      </div>
    </footer>
  );
}
