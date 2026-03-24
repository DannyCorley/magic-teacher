"use client";

interface BlinkTextProps {
  children: React.ReactNode;
  slow?: boolean;
  className?: string;
}

export default function BlinkText({ children, slow, className = "" }: BlinkTextProps) {
  return (
    <span className={`${slow ? "blink-slow" : "blink"} ${className}`}>
      {children}
    </span>
  );
}
