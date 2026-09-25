"use client";

import { useMemo, useRef, useState } from "react";
import { CategoryMark } from "@/components/icons";
import { useTrade } from "@/components/trade-context";
import { catalogue, catalogueBrands, catalogueTabs } from "@/lib/catalogue";

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
  const [category, setCategory] = useState(start);
  const [brand, setBrand] = useState("All brands");
  const catalogueRef = useRef<HTMLDivElement>(null);
  const { query, slugs, toggle } = useTrade();

  function scrollToFilters() {
    const el = catalogueRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 76;
    if (window.scrollY > top) window.scrollTo({ top, behavior: "smooth" });
  }

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return catalogue.filter((item) => {
      const inCategory = category === "All Products" || item.cats.includes(category);
      const inBrand = brand === "All brands" || item.brand === brand;
      const text = (item.name + " " + item.brand + " " + item.cats.join(" ")).toLowerCase();
      return inCategory && inBrand && text.includes(q);
    });
  }, [category, brand, query]);

  const scope = [category === "All Products" ? "" : category, brand === "All brands" ? "" : brand].filter(Boolean);

  return (
    <div className="catalogue" ref={catalogueRef}>
      <div className="filters">
        <label className="filter">
          <span>Category</span>
          <select
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
              scrollToFilters();
            }}
          >
            {catalogueTabs.map((name) => (
              <option key={name} value={name}>{name === "All Products" ? "All categories" : name}</option>
            ))}
          </select>
        </label>
        <label className="filter">
          <span>Brand</span>
          <select
            value={brand}
            onChange={(event) => {
              setBrand(event.target.value);
              scrollToFilters();
            }}
          >
            <option value="All brands">All brands</option>
            {catalogueBrands.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </label>
        {scope.length > 0 && (
          <div className="reset-filters">
            <button
              type="button"
              className="filter-clear"
              onClick={() => {
                setCategory("All Products");
                setBrand("All brands");
                scrollToFilters();
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      <p className="sub">{shown.length} products{scope.length ? ` in ${scope.join(" · ")}` : ""}.</p>
      <div className="grid">
        {shown.length === 0 && <p className="empty">No products match those filters.</p>}
        {shown.map((item) => {
          const cat = item.cats[0];
          const added = slugs.includes(item.slug);
          return (
            <article className="card" key={item.slug}>
              <div className="shot" style={{ background: tones[cat] ?? "#f3efe8" }}>
                {item.image ? (
                  <img src={item.image} alt="" />
                ) : (
                  <CategoryMark name={markName[cat] ?? "Others"} />
                )}
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
    </div>
  );
}
