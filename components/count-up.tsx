"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = /^(\d[\d,]*)(.*)$/.exec(value);
  const target = match ? Number(match[1].replace(/,/g, "")) : 0;
  const suffix = match?.[2] ?? "";
  const [shown, setShown] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!match) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(target);
      return;
    }
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / 1400);
        const eased = 1 - (1 - progress) ** 3;
        setShown(Math.round(target * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, value]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {match ? `${shown.toLocaleString("en-US")}${suffix}` : value}
    </span>
  );
}
