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

export function Nationwide() {
  const locale = useLocale();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-green-dark py-14 text-white sm:py-20" id="nationwide" aria-labelledby="nationwide-heading">
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14`}>
        <div className="relative overflow-hidden">
          <Image className="h-auto w-full" src={map} alt={t(locale, nationwideCopy.mapAlt)} />
          <ul className="absolute inset-0 m-0 list-none p-0">
            {pins.map((pin) => {
              const on = active === pin.name;
              return (
                <li className={`absolute -translate-x-1/2 -translate-y-1/2 ${on ? "z-10" : ""}`} style={{ left: `${pin.x}%`, top: `${pin.y}%` }} key={pin.name}>
                  <a
                    className="grid h-8 w-8 place-items-center"
                    href={pin.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={fill(locale, nationwideCopy.pinLabel, { name: pin.name })}
                    onMouseEnter={() => setActive(pin.name)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(pin.name)}
                    onBlur={() => setActive(null)}
                  >
                    <span className={`pin-ring absolute h-4 w-4 rounded-full bg-white ${on ? "opacity-100" : "opacity-70"}`} />
                    <span className={`relative h-3 w-3 rounded-full border-2 border-white shadow-sm ${on ? "scale-125 bg-white" : "bg-green"}`} />
                    <span className={`pointer-events-none absolute bottom-full left-1/2 z-[1] mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold leading-none text-green-dark shadow-md ${on ? "opacity-100" : "opacity-0"}`}>
                      {pin.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-green">{t(locale, nationwideCopy.eyebrow)}</p>
          <h2 className="mt-2 text-3xl leading-tight font-semibold tracking-[-0.02em] text-white" id="nationwide-heading">{t(locale, nationwideCopy.title)}</h2>
          <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-white/75">{t(locale, nationwideCopy.lede)}</p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {nationwideCopy.points.map((point) => (
              <li className="flex items-start gap-2.5 rounded-lg bg-white/5 px-3 py-3 text-sm leading-snug text-white/90" key={point.en}>
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-green" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 8.2 6.2 11.5 13 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t(locale, point)}
              </li>
            ))}
          </ul>
          <Link className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="/branches">{t(locale, nationwideCopy.viewBranches)}</Link>
        </div>
      </div>
    </section>
  );
}
