"use client";

import Link from "next/link";
import { useState, type KeyboardEvent } from "react";
import { GroupMark } from "@/components/icons";
import { serviceGroups } from "@/lib/catalog";

const photos: Record<string, { src: string; alt: string }> = {
  "Food Products": {
    src: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1400&q=80",
    alt: "Grocery aisle stocked with cereals and canned food",
  },
  "Frozen Foods": {
    src: "https://images.unsplash.com/photo-1760463921652-78b38572da45?auto=format&fit=crop&w=1400&q=80",
    alt: "Supermarket freezer aisle",
  },
  "Soft Drinks & Beverages": {
    src: "https://images.unsplash.com/photo-1698466632388-77a7495b89b5?auto=format&fit=crop&w=1400&q=80",
    alt: "Chilled drinks in a store cooler",
  },
  "Non Food": {
    src: "https://images.unsplash.com/photo-1650964336589-96b3f1719a7b?auto=format&fit=crop&w=1400&q=80",
    alt: "Laundry and household cleaning bottles",
  },
};

export function ServiceTabs() {
  const [active, setActive] = useState(0);

  function move(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = event.key === "ArrowRight" ? (active + 1) % serviceGroups.length : (active - 1 + serviceGroups.length) % serviceGroups.length;
    setActive(next);
    document.getElementById(`service-tab-${next}`)?.focus();
  }

  return (
    <div>
      <div className="flex gap-1 overflow-x-auto border-b border-line" role="tablist" aria-label="Our services" onKeyDown={move}>
        {serviceGroups.map((item, index) => {
          const selected = index === active;
          return (
            <button
              className={`flex shrink-0 items-center gap-2 border-b-2 px-3 py-3 text-sm font-semibold ${selected ? "border-green text-green" : "border-transparent text-muted hover:text-ink"}`}
              id={`service-tab-${index}`}
              key={item.name}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`service-panel-${index}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
            >
              <GroupMark className="h-7 w-7" name={item.name} />
              {item.name}
            </button>
          );
        })}
      </div>
      {serviceGroups.map((group, index) => {
        const selected = index === active;
        const photo = photos[group.name];
        return (
          <div
            className="mt-5 grid items-stretch gap-6 lg:grid-cols-2"
            hidden={!selected}
            id={`service-panel-${index}`}
            key={group.name}
            role="tabpanel"
            aria-labelledby={`service-tab-${index}`}
          >
            <div className="relative min-h-72 overflow-hidden rounded-lg">
              <img className="absolute inset-0 h-full w-full object-cover" src={photo.src} alt={photo.alt} />
            </div>
            <div>
              <div className="flex items-start justify-between gap-4 border-b border-line pb-3">
                <div>
                  <h3 className="text-lg font-semibold">{group.name}</h3>
                  <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-muted">{group.note}</p>
                </div>
                <span className="shrink-0 rounded-md bg-soft px-2 py-1 text-xs font-semibold text-green">{group.items.length} groups</span>
              </div>
              <ul className={`mt-1 grid ${group.items.length > 4 ? "sm:grid-cols-2" : ""}`}>
                {group.items.map((item) => (
                  <li key={item} className="border-b border-line/80">
                    <Link className="flex items-center gap-3 py-2.5 text-sm hover:text-green" href="/products">
                      <GroupMark className="h-7 w-7 shrink-0" name={item} />
                      <span className="flex-1">{item}</span>
                      <span aria-hidden="true" className="text-muted">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
