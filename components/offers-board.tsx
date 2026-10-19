"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AddToList } from "@/components/add-to-list";
import { CategoryMark, OfferMark } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";
import { branches } from "@/lib/catalog";
import { catalogue } from "@/lib/catalogue";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { offersCopy } from "@/lib/i18n/pages/offers";
import { fill, label, t } from "@/lib/i18n/phrase";
import { offerBranchAnchor, offerPdfs, weeklyOffers } from "@/lib/offers";

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

export function OffersBoard({ initialBranch }: { initialBranch?: string }) {
  const locale = useLocale();

  useEffect(() => {
    if (!initialBranch || !branches.some((place) => place.name === initialBranch)) return;
    document.getElementById(offerBranchAnchor(initialBranch))?.scrollIntoView();
  }, [initialBranch]);

  return (
    <div className="grid gap-14">
      {branches.map((place) => {
        const offers = weeklyOffers.filter((offer) => offer.branch === place.name && catalogueBySlug.has(offer.slug));
        if (offers.length === 0) return null;
        const pdf = offerPdfs[place.name];
        const headingId = `${offerBranchAnchor(place.name)}-heading`;
        return (
          <section className="scroll-mt-20 overflow-hidden rounded-3xl bg-white" id={offerBranchAnchor(place.name)} key={place.name} aria-labelledby={headingId}>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-5 py-5 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-leaf" aria-hidden="true">
                  <OfferMark className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold tracking-[-0.03em] text-ink" id={headingId}>{label(locale, chromeCopy.branches, place.name)}</h2>
                  <a className="text-sm text-ink/60" dir="ltr" href={`tel:${place.phone.replace(/\s/g, "")}`}>{place.phone}</a>
                </div>
              </div>
                {pdf ? (
                  <a className="inline-flex h-10 items-center rounded-xl bg-green-dark px-3 text-sm font-semibold text-white" href={pdf} target="_blank" rel="noopener">{t(locale, offersCopy.viewPdf)}</a>
                ) : null}
            </div>
            <div className="grid grid-cols-4 gap-4 p-4 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1 sm:p-5">
              {offers.map((offer) => {
                const item = catalogueBySlug.get(offer.slug);
                if (!item) return null;
                const cat = item.cats[0];
                return (
                  <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white" key={`${offer.weekStart}-${offer.slug}`}>
                    <Link href={`/products/${item.slug}`}>
                      <div className="relative flex h-52 items-center justify-center bg-soft">
                        <span className="absolute top-3 start-3 z-[1] rounded-full bg-green px-3 py-1 text-sm font-semibold text-green-dark">{fill(locale, offersCopy.percentOff, { percent: String(offer.percent) })}</span>
                        {item.image ? (
                          <img className="h-full w-full object-contain p-3" src={item.image} alt="" />
                        ) : (
                          <CategoryMark className="h-16 w-16" name={markName[cat] ?? "Others"} />
                        )}
                      </div>
                      <div className="p-3">
                        <p className="text-sm font-semibold text-green-dark">{item.brand}</p>
                        <h3 className="mt-1 text-sm font-semibold leading-snug">{item.name}</h3>
                        <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 rounded-xl bg-leaf px-3 py-2.5 text-xs">
                          <div>
                            <dt className="text-muted">{t(locale, offersCopy.category)}</dt>
                            <dd className="font-medium">{label(locale, chromeCopy.categories, cat)}</dd>
                          </div>
                          <div>
                            <dt className="text-muted">{t(locale, offersCopy.week)}</dt>
                            <dd className="font-medium">{offer.weekLabel}</dd>
                          </div>
                          <div>
                            <dt className="text-muted">{t(locale, offersCopy.offer)}</dt>
                            <dd className="font-medium">{fill(locale, offersCopy.percentOff, { percent: String(offer.percent) })}</dd>
                          </div>
                        </dl>
                      </div>
                    </Link>
                    <div className="mt-3 px-3 pb-3">
                      <AddToList className="w-full" slug={item.slug} />
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
