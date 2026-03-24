import { auth } from "@/auth";
import WordArtHeader from "@/components/ui/WordArtHeader";
import BlinkText from "@/components/ui/BlinkText";
import Divider from "@/components/ui/Divider";
import { SignOutButton } from "@/components/layout/AuthButton";

export default async function VipPage() {
  const session = await auth();
  const userName = session?.user?.name ?? "VIP Teacher";

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      {/* VIP Window */}
      <div className="retro-card">
        <div
          className="flex items-center px-3 py-1 gap-2"
          style={{ backgroundColor: "#800080" }}
        >
          <span className="text-white font-bold text-sm">
            ⭐ VIP Teachers Area — CLASSIFIED
          </span>
          <div className="ml-auto flex gap-1">
            <span className="text-xs px-2 bg-retro-silver border-win95-raised">_</span>
            <span className="text-xs px-2 bg-retro-silver border-win95-raised">□</span>
            <span className="text-xs px-2 bg-red-600 text-white border-win95-raised">X</span>
          </div>
        </div>

        <div className="p-6 bg-[#c0c0c0]">
          <div className="text-center">
            <WordArtHeader text="VIP Zone!!" colorScheme="gold" />
            <p className="text-lg font-bold mt-4" style={{ color: "#000080" }}>
              Welcome back, {userName}!! 👋
            </p>
            <p className="text-sm mt-1">
              You have been granted access to the <strong>EXCLUSIVE</strong> members-only area.
            </p>
            <p className="text-xs mt-1" style={{ color: "#808080" }}>
              (Please do not share your password. Not even with your spouse. Especially not your spouse.)
            </p>
          </div>

          <Divider />

          {/* VIP Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {vipFeatures.map((f) => (
              <div key={f.title} className="retro-card">
                <div className="px-3 py-1 text-white text-xs font-bold" style={{ backgroundColor: f.color }}>
                  {f.icon} {f.title}
                </div>
                <div className="p-3 text-sm">{f.description}</div>
              </div>
            ))}
          </div>

          <Divider />

          <div className="text-center mt-4">
            <p className="text-xs font-bold blink" style={{ color: "#800000" }}>
              <BlinkText>🔒 REMINDER: What happens in the VIP Zone stays in the VIP Zone 🔒</BlinkText>
            </p>
            <div className="mt-4">
              <SignOutButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const vipFeatures = [
  {
    title: "Secret Gradebook Hacks",
    icon: "📊",
    color: "#000080",
    description:
      "Exclusive rounding strategies so a 69.4% becomes a B-. Your students will never know. We will never tell. This is between us.",
  },
  {
    title: "The Excuse Generator",
    icon: "📝",
    color: "#800000",
    description:
      "Generates ironclad reasons why the photocopier being broken is technically a learning opportunity. Works 73% of the time, every time.",
  },
  {
    title: "Staff Meeting Survival Kit",
    icon: "😴",
    color: "#008080",
    description:
      "AI-generated doodle prompts, bingo cards, and a secret hand signal system for communicating 'this could have been an email' across the room.",
  },
  {
    title: "The Report Card Thesaurus",
    icon: "📖",
    color: "#804000",
    description:
      "37 different ways to write 'talks too much in class' that sound like genuine praise. Parents love it. HR has never questioned it.",
  },
];
