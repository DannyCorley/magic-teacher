interface WordArtHeaderProps {
  text: string;
  colorScheme?: "gold" | "rainbow" | "teal";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export default function WordArtHeader({
  text,
  colorScheme = "gold",
  as: Tag = "h2",
  className = "",
}: WordArtHeaderProps) {
  const schemeClass = {
    gold: "wordart-gold",
    rainbow: "wordart-rainbow",
    teal: "wordart-teal",
  }[colorScheme];

  return (
    <Tag
      className={`font-bold ${schemeClass} ${className}`}
      style={{ fontFamily: "'Comic Sans MS', cursive" }}
    >
      {text}
    </Tag>
  );
}
