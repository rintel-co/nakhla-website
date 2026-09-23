"use client";

import { ProductMark } from "@/components/icons";
import { useTrade } from "@/components/trade-context";
import { products } from "@/lib/catalog";

export function ProductGrid() {
  const { query, slugs, toggle } = useTrade();
  const shown = products.filter((product) => (product.name + " " + product.brand).toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <>
      <p className="sub" id="catCount">
        {query.trim() ? `${shown.length} of the homepage selection.` : "The same eight lines featured on the Nakhla Al Barari homepage."}
      </p>
      <div className="grid">
        {shown.length === 0 && <p className="empty">None of the homepage products match that search.</p>}
        {shown.map((product) => {
          const added = slugs.includes(product.slug);
          return (
            <article className="card" key={product.slug}>
              <div className="shot" style={{ background: "#e7f1fb" }}>
                <ProductMark icon={product.icon} />
                <span className="brand">{product.brand}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.cat}</p>
              <div className="row">
                <span />
                <button className={added ? "add added" : "add"} type="button" onClick={() => toggle(product.slug)}>
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
