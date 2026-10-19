import type { Metadata } from "next";
import Link from "next/link";
import { HeroLogo } from "@/components/hero-logo";
import { OffersBoard } from "@/components/offers-board";
import { GroupMark, StatMark } from "@/components/icons";
import { brands, branches } from "@/lib/catalog";
import { catalogue } from "@/lib/catalogue";
import { offerBranchAnchor, offerPdfs, weeklyOffers } from "@/lib/offers";
import { offersCopy } from "@/lib/i18n/pages/offers";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { getLocale } from "@/lib/i18n/locale";
import { label, t } from "@/lib/i18n/phrase";
import { wrap } from "@/lib/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: t(locale, offersCopy.metaTitle),
    description: t(locale, offersCopy.metaDescription),
    keywords: t(locale, offersCopy.keywords).split(/\s*[,،]\s*/),
    alternates: { canonical: "https://nakhlaalbarari.com/offers" },
    openGraph: {
      title: t(locale, offersCopy.ogTitle),
      description: t(locale, offersCopy.ogDescription),
      url: "https://nakhlaalbarari.com/offers",
      type: "website",
      siteName: "Nakhla Al Barari",
      locale: locale === "ar" ? "ar_SA" : "en_SA",
    },
  };
}

function offersSchema() {
  const bySlug = new Map(catalogue.map((item) => [item.slug, item]));
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Weekly Wholesale Offers",
    itemListElement: weeklyOffers.flatMap((offer, index) => {
      const item = bySlug.get(offer.slug);
      if (!item) return [];
      return [{
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Offer",
          name: `${item.name} — ${offer.branch}`,
          description: `${offer.percent}% off. ${offer.weekLabel} at ${offer.branch}. The branch confirms the offer.`,
          url: `https://nakhlaalbarari.com/products/${item.slug}`,
          itemOffered: {
            "@type": "Product",
            name: item.name,
            brand: { "@type": "Brand", name: item.brand },
            category: item.cats[0],
            image: item.image,
          },
          seller: { "@type": "Organization", name: `Nakhla Al Barari, ${offer.branch}` },
        },
      }];
    }),
  };
}

export default async function OffersPage({ searchParams }: { searchParams: Promise<{ branch?: string }> }) {
  const { branch } = await searchParams;
  const locale = await getLocale();
  const heroBrands = brands.slice(0, 6);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offersSchema()) }} />
      <section className="relative flex min-h-[420px] overflow-hidden bg-[radial-gradient(ellipse_90%_80%_at_0%_18%,#3d7a2a_0%,transparent_58%),radial-gradient(ellipse_72%_90%_at_100%_88%,#0c2408_0%,transparent_56%),radial-gradient(ellipse_50%_64%_at_74%_6%,#c8e9a0_0%,transparent_50%),linear-gradient(165deg,#0c2408_0%,#163d10_52%,#0d2b09_100%)] text-white max-[640px]:min-h-[380px]">
        <HeroLogo />
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <g className="offer-spin">
            <circle cx="160" cy="90" r="78" fill="none" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="7 11" />
          </g>
          <circle className="offer-ring" cx="1040" cy="300" r="92" fill="none" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" />
          <g className="offer-drift">
            <circle cx="430" cy="360" r="46" fill="white" fillOpacity="0.08" />
          </g>
          <g className="offer-drift offer-drift-late">
            <circle cx="980" cy="70" r="28" fill="white" fillOpacity="0.12" />
          </g>
        </svg>
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <GroupMark className="absolute top-6 left-[6%] h-28 w-28 rotate-[-12deg] opacity-25 brightness-0 invert" name="Food Products" />
          <GroupMark className="absolute bottom-2 left-[22%] h-24 w-24 rotate-12 opacity-20 brightness-0 invert" name="Frozen Foods" />
          <GroupMark className="absolute top-8 left-[38%] h-20 w-20 rotate-6 opacity-20 brightness-0 invert" name="Soft Drinks & Beverages" />
          <GroupMark className="absolute right-[8%] bottom-4 h-28 w-28 rotate-[-8deg] opacity-20 brightness-0 invert" name="Non Food" />
          <StatMark className="absolute top-4 right-[28%] h-24 w-24 opacity-20 brightness-0 invert" name="branches" />
          <StatMark className="absolute bottom-6 left-[48%] h-16 w-16 rotate-12 opacity-20 brightness-0 invert" name="products" />
        </div>
        <div className={`${wrap} relative z-[1] grid h-full items-center gap-8 py-8 lg:grid-cols-[1fr_auto]`}>
          <div>
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link className="hover:text-white" href="/">{t(locale, chromeCopy.nav.home)}</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{t(locale, offersCopy.breadcrumb)}</li>
              </ol>
            </nav>
            <h1 className="max-w-[18ch] text-[52px] leading-[1.05] font-semibold tracking-[-0.03em] text-white max-[640px]:text-[36px]">{t(locale, offersCopy.title)}</h1>
            <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-white/80">{t(locale, offersCopy.lede)}</p>
            <a className="mt-6 inline-flex h-11 items-center rounded-full bg-white px-5 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="#lists">{t(locale, offersCopy.viewCurrent)}</a>
          </div>
          <div className="grid gap-3 rounded-3xl bg-white/10 p-4 lg:w-[420px]">
            <div className="grid grid-cols-3 gap-3" aria-label={t(locale, offersCopy.areas)}>
              <div className="flex flex-col items-center gap-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20"><StatMark className="h-7 w-7 brightness-0 invert" name="branches" /></span>
                <span className="text-center text-xs font-semibold leading-tight text-white">{t(locale, offersCopy.branches)}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20"><GroupMark className="h-7 w-7 brightness-0 invert" name="Food Products" /></span>
                <span className="text-center text-xs font-semibold leading-tight text-white">{t(locale, offersCopy.food)}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20"><GroupMark className="h-7 w-7 brightness-0 invert" name="Frozen Foods" /></span>
                <span className="text-center text-xs font-semibold leading-tight text-white">{t(locale, offersCopy.frozen)}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20"><GroupMark className="h-7 w-7 brightness-0 invert" name="Soft Drinks & Beverages" /></span>
                <span className="text-center text-xs font-semibold leading-tight text-white">{t(locale, offersCopy.drinks)}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20"><GroupMark className="h-7 w-7 brightness-0 invert" name="Non Food" /></span>
                <span className="text-center text-xs font-semibold leading-tight text-white">{t(locale, offersCopy.nonFood)}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20"><StatMark className="h-7 w-7 brightness-0 invert" name="products" /></span>
                <span className="text-center text-xs font-semibold leading-tight text-white">{t(locale, offersCopy.products)}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {heroBrands.map((brand) => (
                <figure className="m-0 flex h-24 items-center justify-center rounded-2xl bg-white px-3" key={brand.name}>
                  <img className="max-h-14 max-w-full object-contain" src={brand.src} alt={brand.name} />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-leaf/60 py-14" aria-labelledby="offer-documents">
        <div className={wrap}>
          <h2 className="text-2xl font-semibold tracking-[-0.02em]" id="offer-documents">{t(locale, offersCopy.documentsTitle)}</h2>
          <p className="mt-2 max-w-[68ch] text-sm text-muted">{t(locale, offersCopy.documentsLede)}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((place) => {
              const pdf = offerPdfs[place.name];
              const href = pdf ?? `#${offerBranchAnchor(place.name)}`;
              return (
                <a
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-white p-4 transition-colors hover:border-green"
                  href={href}
                  key={place.name}
                  rel={pdf ? "noopener" : undefined}
                  target={pdf ? "_blank" : undefined}
                >
                  <span className="min-w-0">
                    <span className="flex items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-leaf" aria-hidden="true">
                        <StatMark className="h-6 w-6" name="branches" />
                      </span>
                      <span className="text-lg font-semibold text-ink">{label(locale, chromeCopy.branches, place.name)}</span>
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-green-dark">
                      {t(locale, pdf ? offersCopy.viewPdf : offersCopy.viewCurrent)}
                    </span>
                  </span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-leaf text-green-dark transition-colors group-hover:bg-green" aria-hidden="true">
                    <span className="inline-block rtl:-scale-x-100">→</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <section className="scroll-mt-16 pt-8 pb-6" id="lists">
        <div className={wrap}>
          <OffersBoard initialBranch={branch} />
        </div>
      </section>
      <section className="border-t border-line bg-leaf/40 py-14" aria-labelledby="offer-questions">
        <div className={wrap}>
          <h2 className="text-2xl font-semibold tracking-[-0.02em]" id="offer-questions">{t(locale, offersCopy.questions)}</h2>
          <div className="mt-6 rounded-2xl border border-line bg-white px-5">
          {offersCopy.faqs.map((item) => (
            <details className="border-b border-line py-4" key={item.q.en}>
              <summary className="cursor-pointer text-base font-semibold">{t(locale, item.q)}</summary>
              <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-muted">{t(locale, item.a)}</p>
            </details>
          ))}
          </div>
        </div>
      </section>
    </main>
  );
}
