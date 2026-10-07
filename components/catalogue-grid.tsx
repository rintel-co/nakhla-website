"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { CategoryMark } from "@/components/icons";
import { useTrade } from "@/components/trade-context";
import { catalogue, catalogueBrands, catalogueTabs } from "@/lib/catalogue";
import { addBtn, addBtnOn, card, shot, shotImg } from "@/lib/ui";

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

const selectClass =
  "h-11 appearance-none rounded-md border border-line bg-white bg-[linear-gradient(45deg,transparent_50%,#222_50%),linear-gradient(135deg,#222_50%,transparent_50%)] bg-size-[6px_6px,6px_6px] bg-position-[calc(100%-16px)_18px,calc(100%-10px)_18px] bg-no-repeat pr-8 pl-3 text-sm font-medium text-ink";

export function CatalogueGrid({ initialTab = "All Products" }: { initialTab?: string }) {
  const start = catalogueTabs.includes(initialTab as (typeof catalogueTabs)[number]) ? initialTab : "All Products";
  const [category, setCategory] = useState(start);
  const [brand, setBrand] = useState("All brands");
  const catalogueRef = useRef<HTMLDivElement>(null);
  const { query, slugs, toggle } = useTrade();

  function scrollToFilters() {
    const el = catalogueRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
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
    <div ref={catalogueRef}>
      <div className="sticky top-16 z-[15] flex flex-wrap items-end gap-3 border-b border-line bg-page pt-3 pb-3.5">
        <label className="grid min-w-[min(240px,100%)] gap-1.5">
          <span className="text-xs font-medium text-muted">Category</span>
          <select
            className={selectClass}
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
        <label className="grid min-w-[min(240px,100%)] gap-1.5">
          <span className="text-xs font-medium text-muted">Brand</span>
          <select
            className={selectClass}
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
          <button
            type="button"
            className="h-11 cursor-pointer self-end rounded-md border border-line bg-white px-4 text-sm font-semibold text-ink hover:bg-soft"
            onClick={() => {
              setCategory("All Products");
              setBrand("All brands");
              scrollToFilters();
            }}
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
        {shown.length === 0 && <p className="col-span-full py-8 text-center text-sm text-muted">No products match those filters.</p>}
        {shown.map((item) => {
          const cat = item.cats[0];
          const added = slugs.includes(item.slug);
          return (
            <article className={`${card} flex flex-col transition-colors hover:border-green`} key={item.slug}>
              <Link href={`/products/${item.slug}`}>
                <div className={shot}>
                  {item.image ? (
                    <img className={shotImg} src={item.image} alt="" />
                  ) : (
                    <CategoryMark className="h-16 w-16" name={markName[cat] ?? "Others"} />
                  )}
                </div>
                <p className="mt-3 text-xs text-muted">{item.brand} · {cat}</p>
                <h3 className="mt-1 mb-3 text-sm font-medium leading-snug">{item.name}</h3>
              </Link>
              <button className={`${added ? addBtnOn : addBtn} mt-auto w-full`} type="button" onClick={() => toggle(item.slug)}>
                {added ? "Added" : "Add to list"}
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
