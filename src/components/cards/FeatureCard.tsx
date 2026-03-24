import type { FeatureCardData } from "@/types";
import BlinkText from "@/components/ui/BlinkText";

interface FeatureCardProps {
  card: FeatureCardData;
}

export default function FeatureCard({ card }: FeatureCardProps) {
  return (
    <div className="retro-card relative" style={{ minHeight: "200px" }}>
      {/* Card Header */}
      <div
        className="px-3 py-2 flex items-center gap-2"
        style={{ backgroundColor: card.headerColor }}
      >
        <span className="text-2xl">{card.icon}</span>
        <h3
          className="text-white font-bold text-sm"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          {card.title}
        </h3>
        {card.isNew && (
          <BlinkText className="ml-auto text-yellow-300 font-bold text-xs bg-red-600 px-1">
            NEW!
          </BlinkText>
        )}
      </div>

      {/* Card Body */}
      <div className="p-3 bg-retro-silver relative">
        <p
          className="text-sm text-black leading-relaxed"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          {card.description}
        </p>
      </div>

      {/* Badge */}
      {card.badgeText && (
        <div
          className="absolute top-1 right-1 bg-red-600 text-yellow-300 font-bold text-xs px-2 py-1 wobble"
          style={{
            transform: "rotate(12deg)",
            fontFamily: "'Comic Sans MS', cursive",
          }}
        >
          {card.badgeText}
        </div>
      )}
    </div>
  );
}
