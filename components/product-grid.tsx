"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";
import { useTrade } from "@/components/trade-context";
import { products } from "@/lib/catalog";
import { catalogueCopy } from "@/lib/i18n/pages/catalogue";
import { t } from "@/lib/i18n/phrase";
import { addBtn, addBtnOn, card, shot, shotImg } from "@/lib/ui";

export function ProductGrid() {
  const { query, slugs, toggle } = useTrade();
  const locale = useLocale();
  const shown = products.filter((product) => (product.name + " " + product.brand).toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <div className="grid grid-cols-4 gap-4 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
      {shown.length === 0 && <p className="col-span-full text-sm text-muted">{t(locale, catalogueCopy.noneOnHome)}</p>}
      {shown.map((product) => {
        const added = slugs.includes(product.slug);
        return (
          <article className={`${card} flex flex-col transition-colors hover:border-green`} key={product.slug}>
            <Link href={`/products/${product.slug}`}>
              <div className={shot}>
                <img className={shotImg} src={product.image} alt="" />
              </div>
              <p className="mt-3 text-xs text-muted">{product.brand} · {product.cat}</p>
              <h3 className="mt-1 mb-3 text-sm font-medium leading-snug">{product.name}</h3>
            </Link>
            <button className={`${added ? addBtnOn : addBtn} mt-auto w-full`} type="button" onClick={() => toggle(product.slug)}>
              {added ? "Added" : "Add to list"}
            </button>
          </article>
        );
      })}
    </div>
  );
}
