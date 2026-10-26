"use client";

import { useState } from "react";
import { StatMark } from "@/components/icons";

type Banner = { src: string; alt: string; href?: string };
type CityTab = { name: string; label: string; address: string; banners: Banner[] };

function panelId(name: string) {
  return `offer-panel-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

export function OfferCityTabs({ label, tabs }: { label: string; tabs: CityTab[] }) {
  const [active, setActive] = useState(tabs[0]?.name ?? "");

  function selectByOffset(current: string, offset: number) {
    const index = tabs.findIndex((tab) => tab.name === current);
    const next = tabs[(index + offset + tabs.length) % tabs.length];
    if (!next) return;
    setActive(next.name);
    document.getElementById(`offer-tab-${panelId(next.name)}`)?.focus();
  }

  return (
    <div className="mt-6">
      <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label={label}>
        {tabs.map((tab) => {
          const selected = tab.name === active;
          const id = panelId(tab.name);
          return (
            <button
              className={`inline-flex h-10 shrink-0 items-center rounded-full px-4 text-sm font-semibold transition-colors ${selected ? "bg-green-dark text-white" : "bg-white text-ink shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:bg-leaf"}`}
              id={`offer-tab-${id}`}
              key={tab.name}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={id}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.name)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  selectByOffset(tab.name, 1);
                }
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  selectByOffset(tab.name, -1);
                }
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => {
        const id = panelId(tab.name);
        const selected = tab.name === active;
        return (
          <div className="mt-8" hidden={!selected} id={id} key={tab.name} role="tabpanel" aria-labelledby={`offer-tab-${id}`}>
            <p className="flex items-start gap-2 text-sm leading-relaxed text-ink/70">
              <StatMark className="mt-0.5 h-5 w-5 shrink-0" name="branches" />
              <span>{tab.address}</span>
            </p>
            <ul className="mt-4 grid max-w-xl grid-cols-2 gap-3">
              {tab.banners.map((banner) => {
                const image = (
                  <img className="h-auto w-full rounded-[14px]" src={banner.src} alt={banner.alt} width={828} height={1098} />
                );
                return (
                  <li className="rounded-2xl bg-white p-2.5 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]" key={banner.src}>
                    {banner.href ? (
                      <a className="block rounded-[14px] outline-none focus-visible:ring-2 focus-visible:ring-green" href={banner.href} target="_blank" rel="noopener noreferrer">
                        {image}
                      </a>
                    ) : image}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
