"use client";

import { useRef } from "react";
import { brands } from "@/lib/catalog";

export function BrandCarousel() {
  const track = useRef<HTMLDivElement>(null);

  function move(direction: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>(".brand-slide");
    const gap = Number.parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = (slide?.offsetWidth ?? 124) + gap;
    const max = el.scrollWidth - el.clientWidth;
    const next = el.scrollLeft + direction * step;
    if (next < 0) {
      el.scrollTo({ left: max, behavior: "smooth" });
      return;
    }
    if (next > max + 1) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <div className="brand-carousel">
      <button className="brand-nav" type="button" aria-label="Previous brands" onClick={() => move(-1)}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="brand-track" ref={track}>
        {brands.map((brand) => (
          <figure className="brand-slide" key={brand.name}>
            <img src={brand.src} alt={brand.name} />
          </figure>
        ))}
      </div>
      <button className="brand-nav" type="button" aria-label="Next brands" onClick={() => move(1)}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
