"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import map from "@/assets/sa_map.svg";
import { useLocale } from "@/components/locale-provider";
import { nationwideCopy } from "@/lib/i18n/pages/nationwide";
import { fill, t } from "@/lib/i18n/phrase";
import { wrap } from "@/lib/ui";

const pins = [
  { name: "Riyadh (HQ)", x: 56.4, y: 47.6, href: "https://maps.app.goo.gl/anTLTVx3jad5wwhQA" },
  { name: "Riyadh (Branch)", x: 58, y: 49.2, href: "https://maps.app.goo.gl/p3RWiP2JNRpnhDSUA" },
  { name: "Dammam", x: 69.6, y: 38.1, href: "https://maps.app.goo.gl/RaAKm89WGHxNqxBLA" },
  { name: "Qassim", x: 45.1, y: 38.6, href: "https://maps.app.goo.gl/wy2Fv6qV5oTkv4tW9" },
  { name: "Hail", x: 35.3, y: 31.8, href: "https://maps.app.goo.gl/wa5yMYisNWX9NwFM6" },
  { name: "Hafar Al Batin", x: 53.7, y: 26.5, href: "https://maps.app.goo.gl/4SrvqH8ZjJg2yPEP7" },
  { name: "Al Aziziyah", x: 57.2, y: 51, href: "https://maps.app.goo.gl/JDEEwrNRChwGug288" },
];

const marks = [
  "M12 3.5 20 8v6.2c0 4.2-3.2 7.4-8 9.3-4.8-1.9-8-5.1-8-9.3V8l8-4.5Z",
  "M5 19.5c2.2-3.4 4.2-5 7-5s4.8 1.6 7 5M8 9.5a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z",
  "M4 12h4l2.2-5 3.6 10L16 12h4",
  "M4 16.5h11.2a2 2 0 0 0 1.8-1.1l2.2-4.4H7.2M6 19.2a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm9.2 0a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z",
];

export function Nationwide() {
  const locale = useLocale();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-green-dark py-16 text-white sm:py-20" id="nationwide" aria-labelledby="nationwide-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(147,192,44,0.22),transparent_46%)]" aria-hidden="true" />
      <div className={`${wrap} relative grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14`}>
        <div>
          <p className="text-sm font-semibold text-green">{t(locale, nationwideCopy.eyebrow)}</p>
          <h2 className="mt-2 text-3xl leading-[1.12] font-bold tracking-[-0.03em] text-white sm:text-4xl" id="nationwide-heading">{t(locale, nationwideCopy.title)}</h2>
          <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-white/75">{t(locale, nationwideCopy.lede)}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {nationwideCopy.points.map((point, index) => {
              const featured = index === 0;
              return (
                <li className={`relative min-h-36 overflow-hidden rounded-3xl p-5 ${featured ? "bg-leaf text-ink" : "border border-white/10 bg-white/10 text-white"}`} key={point.en}>
                  <svg className={`pointer-events-none absolute -bottom-7 -start-3 h-32 w-32 ${featured ? "text-green-dark/20" : "text-green/35"}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d={marks[index]} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="relative max-w-[18ch] text-base font-semibold leading-snug">{t(locale, point)}</p>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {pins.map((pin) => (
              <a
                className={`inline-flex h-9 items-center rounded-full px-3 text-sm font-semibold transition-colors ${active === pin.name ? "bg-leaf text-ink" : "bg-white/10 text-white hover:bg-white/15"}`}
                href={pin.href}
                key={pin.name}
                target="_blank"
                rel="noopener"
                onMouseEnter={() => setActive(pin.name)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(pin.name)}
                onBlur={() => setActive(null)}
              >
                {pin.name}
              </a>
            ))}
          </div>
          <Link className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="/branches">{t(locale, nationwideCopy.viewBranches)}</Link>
        </div>
        <div className="rounded-3xl bg-leaf p-4 sm:p-6">
          <div className="relative">
            <Image className="h-auto w-full" src={map} alt={t(locale, nationwideCopy.mapAlt)} />
            <ul className="absolute inset-0 m-0 list-none p-0">
              {pins.map((pin) => {
                const on = active === pin.name;
                return (
                  <li className={`absolute -translate-x-1/2 -translate-y-1/2 ${on ? "z-10" : ""}`} style={{ left: `${pin.x}%`, top: `${pin.y}%` }} key={pin.name}>
                    <a
                      className="grid h-11 w-11 place-items-center"
                      href={pin.href}
                      target="_blank"
                      rel="noopener"
                      aria-label={fill(locale, nationwideCopy.pinLabel, { name: pin.name })}
                      onMouseEnter={() => setActive(pin.name)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(pin.name)}
                      onBlur={() => setActive(null)}
                    >
                      <span className={`pin-ring absolute h-4 w-4 rounded-full bg-green-dark ${on ? "opacity-100" : "opacity-50"}`} />
                      <span className={`relative h-3.5 w-3.5 rounded-full border-2 border-white ${on ? "scale-125 bg-green" : "bg-green-dark"}`} />
                      <span className={`pointer-events-none absolute bottom-full left-1/2 z-[1] mb-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-green-dark px-3 py-1.5 text-xs font-semibold leading-none text-white ${on ? "opacity-100" : "opacity-0"}`}>
                        {pin.name}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
