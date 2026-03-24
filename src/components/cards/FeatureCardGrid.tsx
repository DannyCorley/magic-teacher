import { featureCards } from "@/lib/content";
import FeatureCard from "./FeatureCard";

export default function FeatureCardGrid() {
  return (
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      }}
    >
      {featureCards.map((card) => (
        <FeatureCard key={card.id} card={card} />
      ))}
    </div>
  );
}
