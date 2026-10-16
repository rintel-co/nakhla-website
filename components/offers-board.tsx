"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AddToList } from "@/components/add-to-list";
import { CategoryMark } from "@/components/icons";
import { branches } from "@/lib/catalog";
import { catalogue } from "@/lib/catalogue";
import { currentWeekStart, offerWeeks, weeklyOffers } from "@/lib/offers";

const markName: Record<string, string> = {
  Rice: "Rice",
  "Pulses Legumes & Beans": "Pulses",
  Spices: "Spices",
  Sugar: "Sugar",
  "Canned Food": "Canned",
  Sauce: "Sauce",
  Oil: "Oil",
  Others: "Others",
  Drinks: "Drinks",
};

const catalogueBySlug = new Map(catalogue.map((item) => [item.slug, item]));

function Chip({ active, children, onClick }: { active: boolean; children: string; onClick: () => void }) {
  return (
    <button
      className={`h-9 shrink-0 cursor-pointer rounded-full px-3.5 text-sm font-semibold transition-colors ${active ? "bg-green text-white" : "border border-line bg-white text-ink hover:border-green hover:bg-leaf"}`}
      type="button"
      aria-pressed={active}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function OffersBoard({ initialBranch = "All branches" }: { initialBranch?: string }) {
  const known = branches.some((branch) => branch.name === initialBranch);
  const [branch, setBranch] = useState(known ? initialBranch : "All branches");
  const [week, setWeek] = useState("This week");
  const [category, setCategory] = useState("All categories");

  const categories = useMemo(() => {
    const names = new Set<string>();
    for (const offer of weeklyOffers) {
      const item = catalogueBySlug.get(offer.slug);
      if (item) names.add(item.cats[0]);
    }
    return [...names].sort((a, b) => a.localeCompare(b));
  }, []);

  const shown = useMemo(() => {
    return weeklyOffers.filter((offer) => {
      const item = catalogueBySlug.get(offer.slug);
      if (!item) return false;
      if (branch !== "All branches" && offer.branch !== branch) return false;
      if (week === "This week" && offer.weekStart !== currentWeekStart) return false;
      if (week === "Earlier" && offer.weekStart === currentWeekStart) return false;
      if (week !== "This week" && week !== "Earlier" && week !== "All weeks" && offer.weekStart !== week) return false;
      if (category !== "All categories" && !item.cats.includes(category)) return false;
      return true;
    });
  }, [branch, week, category]);

  const filtered = branch !== "All branches" || week !== "This week" || category !== "All categories";

  return (
    <div>
      <div className="sticky top-16 z-[15] border-b border-line bg-page py-3">
        <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Branch">
          <Chip active={branch === "All branches"} onClick={() => setBranch("All branches")}>All branches</Chip>
          {branches.map((place) => (
            <Chip active={branch === place.name} key={place.name} onClick={() => setBranch(place.name)}>{place.name}</Chip>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Week and category">
          <Chip active={week === "This week"} onClick={() => setWeek("This week")}>This week</Chip>
          <Chip active={week === "Earlier"} onClick={() => setWeek("Earlier")}>Earlier</Chip>
          <Chip active={week === "All weeks"} onClick={() => setWeek("All weeks")}>All weeks</Chip>
          {offerWeeks.map((item) => (
            <Chip active={week === item.start} key={item.start} onClick={() => setWeek(item.start)}>{item.label}</Chip>
          ))}
          <span className="mx-1 hidden w-px self-stretch bg-line sm:block" aria-hidden="true" />
          <Chip active={category === "All categories"} onClick={() => setCategory("All categories")}>All categories</Chip>
          {categories.map((name) => (
            <Chip active={category === name} key={name} onClick={() => setCategory(name)}>{name}</Chip>
          ))}
          {filtered && (
            <button
              className="h-9 cursor-pointer rounded-full px-3 text-sm font-semibold text-green"
              type="button"
              onClick={() => {
                setBranch("All branches");
                setWeek("This week");
                setCategory("All categories");
              }}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {shown.length === 0 && <p className="py-10 text-sm text-muted">No offers match those filters.</p>}

      <div className="mt-6 grid grid-cols-4 gap-4 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
        {shown.map((offer) => {
          const item = catalogueBySlug.get(offer.slug);
          if (!item) return null;
          const cat = item.cats[0];
          const place = branches.find((entry) => entry.name === offer.branch);
          return (
            <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white" key={`${offer.branch}-${offer.weekStart}-${offer.slug}`}>
              <Link href={`/products/${item.slug}`}>
                <div className="relative flex h-48 items-center justify-center bg-soft">
                  <span className="absolute top-2.5 left-2.5 z-[1] rounded-full bg-green px-2.5 py-1 text-xs font-semibold text-white">{offer.percent}% off</span>
                  {item.image ? (
                    <img className="h-full w-full object-contain p-3" src={item.image} alt="" />
                  ) : (
                    <CategoryMark className="h-16 w-16" name={markName[cat] ?? "Others"} />
                  )}
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-green">{item.brand}</p>
                  <h3 className="mt-1 text-sm font-semibold leading-snug">{item.name}</h3>
                  <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-xs">
                    <div>
                      <dt className="text-muted">Category</dt>
                      <dd className="font-medium">{cat}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Branch</dt>
                      <dd className="font-medium">{offer.branch}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Week</dt>
                      <dd className="font-medium">{offer.weekLabel}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Offer</dt>
                      <dd className="font-medium">{offer.percent}% off</dd>
                    </div>
                  </dl>
                </div>
              </Link>
              {place ? <a className="px-3 text-xs font-semibold text-green" href={`tel:${place.phone.replace(/\s/g, "")}`}>{place.phone}</a> : null}
              <div className="mt-3 px-3 pb-3">
                <AddToList className="w-full" slug={item.slug} />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
