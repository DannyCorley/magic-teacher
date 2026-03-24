"use client";

interface MarqueeTextProps {
  children: React.ReactNode;
  speed?: "slow" | "medium" | "fast";
  className?: string;
  style?: React.CSSProperties;
}

const speedMap = {
  slow: "20s",
  medium: "12s",
  fast: "7s",
};

export default function MarqueeText({
  children,
  speed = "medium",
  className = "",
  style,
}: MarqueeTextProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} style={style}>
      <span
        style={{
          display: "inline-block",
          animation: `marquee ${speedMap[speed]} linear infinite`,
        }}
      >
        {children}
      </span>
    </div>
  );
}
