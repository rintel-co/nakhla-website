"use client";

import { useMemo, useState } from "react";
import { CategoryMark } from "@/components/icons";
import { useTrade } from "@/components/trade-context";
import { catalogue, catalogueTabs } from "@/lib/catalogue";

const tones: Record<string, string> = {
  Rice: "#fff0dc",
  "Pulses Legumes & Beans": "#e5f6e8",
  Spices: "#ffe8e4",
  Sugar: "#fff6ea",
  "Canned Food": "#e7f1fb",
  Sauce: "#f7e8f3",
  Oil: "#f4f6e4",
  Others: "#f3efe8",
  Drinks: "#e5f6f4",
};

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

export function CatalogueGrid({ initialTab = "All Products" }: { initialTab?: string }) {
  const start = catalogueTabs.includes(initialTab as (typeof catalogueTabs)[number]) ? initialTab : "All Products";
  const [tab, setTab] = useState(start);
  const { query, slugs, toggle } = useTrade();

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return catalogue.filter((item) => {
      const inTab = tab === "All Products" || item.cats.includes(tab);
      const text = (item.name + " " + item.brand + " " + item.cats.join(" ")).toLowerCase();
      return inTab && text.includes(q);
    });
  }, [tab, query]);

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Product categories">
        {catalogueTabs.map((name) => (
          <button key={name} type="button" role="tab" aria-selected={tab === name} className={tab === name ? "tab on" : "tab"} onClick={() => setTab(name)}>
            {name}
          </button>
        ))}
      </div>
      <p className="sub">{shown.length} lines{tab === "All Products" ? " on the Nakhla Al Barari products page" : ` in ${tab}`}.</p>
      <div className="grid">
        {shown.length === 0 && <p className="empty">No products match that search in this category.</p>}
        {shown.map((item) => {
          const cat = item.cats[0];
          const added = slugs.includes(item.slug);
          return (
            <article className="card" key={item.slug}>
              <div className="shot" style={{ background: tones[cat] ?? "#f3efe8" }}>
                <CategoryMark name={markName[cat] ?? "Others"} />
                <span className="brand">{item.brand}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{cat}</p>
              <div className="row">
                <span />
                <button className={added ? "add added" : "add"} type="button" onClick={() => toggle(item.slug)}>
                  {added ? "Added" : "Add to list"}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
