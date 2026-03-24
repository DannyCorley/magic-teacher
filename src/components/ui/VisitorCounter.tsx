"use client";

import { useState, useEffect } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(1337042);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="counter-font text-lg">
      {count.toLocaleString()}
    </span>
  );
}
