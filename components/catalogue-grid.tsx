"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { CategoryMark } from "@/components/icons";
import { useTrade } from "@/components/trade-context";
import { catalogueBrandName, normBrand } from "@/lib/brand";
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

function resolveBrand(value?: string) {
  if (!value || value === "All brands") return "All brands";
  return catalogueBrandName(value) ?? value;
}

function sameBrand(itemBrand: string, selected: string) {
  return normBrand(itemBrand) === normBrand(selected);
}

export function CatalogueGrid({ initialTab = "All Products", initialBrand }: { initialTab?: string; initialBrand?: string }) {
  const router = useRouter();
  const start = catalogueTabs.includes(initialTab as (typeof catalogueTabs)[number]) ? initialTab : "All Products";
  const [category, setCategory] = useState(start);
  const [brand, setBrand] = useState(resolveBrand(initialBrand));
  const catalogueRef = useRef<HTMLDivElement>(null);
  const { query, slugs, toggle } = useTrade();

  function writeFilters(nextCategory: string, nextBrand: string) {
    const params = new URLSearchParams();
    if (nextCategory !== "All Products") params.set("tab", nextCategory);
    if (nextBrand !== "All brands") params.set("brand", nextBrand);
    const search = params.toString();
    router.replace(search ? `/products?${search}` : "/products", { scroll: false });
  }

  function applyBrand(value: string) {
    let nextBrand = resolveBrand(value);
    let nextCategory = category;
    if (nextBrand !== "All brands") {
      const matches = (cat: string) => catalogue.some((item) => (cat === "All Products" || item.cats.includes(cat)) && sameBrand(item.brand, nextBrand));
      if (!matches(nextCategory) && matches("All Products")) nextCategory = "All Products";
    }
    setBrand(nextBrand);
    setCategory(nextCategory);
    writeFilters(nextCategory, nextBrand);
    scrollToFilters();
  }

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
      const inBrand = brand === "All brands" || sameBrand(item.brand, brand);
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
              const nextCategory = event.target.value;
              setCategory(nextCategory);
              writeFilters(nextCategory, brand);
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
            onChange={(event) => applyBrand(event.target.value)}
          >
            <option value="All brands">All brands</option>
            {catalogueBrands.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
            {!catalogueBrands.includes(brand) && brand !== "All brands" ? <option value={brand}>{brand}</option> : null}
          </select>
        </label>
        {scope.length > 0 && (
          <button
            type="button"
            className="h-11 cursor-pointer self-end rounded-md border border-line bg-white px-4 text-sm font-semibold text-ink hover:bg-soft"
            onClick={() => {
              setCategory("All Products");
              setBrand("All brands");
              writeFilters("All Products", "All brands");
              scrollToFilters();
            }}
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
        {shown.length === 0 && (
          <p className="col-span-full py-8 text-center text-sm text-muted">
            {brand !== "All brands" && !catalogueBrands.some((name) => sameBrand(name, brand))
              ? "This brand has no lines in the current wholesale catalogue."
              : "No products match those filters."}
          </p>
        )}
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
