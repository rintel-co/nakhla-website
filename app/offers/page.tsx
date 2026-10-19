import type { Metadata } from "next";
import { OffersBoard } from "@/components/offers-board";
import { PageBanner } from "@/components/page-banner";
import { OfferMark } from "@/components/icons";
import { branches } from "@/lib/catalog";
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

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offersSchema()) }} />
      <PageBanner
        title={t(locale, offersCopy.title)}
        lede={t(locale, offersCopy.lede)}
        image="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1600&q=80"
        imageAlt={t(locale, offersCopy.imageAlt)}
        action={{ href: "#lists", label: t(locale, offersCopy.viewCurrent) }}
      />
      <section className="bg-leaf py-16 sm:py-20" aria-labelledby="offer-documents">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-green-dark sm:text-4xl" id="offer-documents">{t(locale, offersCopy.documentsTitle)}</h2>
          <p className="mt-3 max-w-[68ch] text-ink/70">{t(locale, offersCopy.documentsLede)}</p>
          <div className="mt-8 grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
            {branches.map((place) => {
              const pdf = offerPdfs[place.name];
              const href = pdf ?? `#${offerBranchAnchor(place.name)}`;
              return (
                <a
                  className="group relative flex items-center justify-between gap-3 overflow-hidden rounded-3xl bg-white p-6 transition-colors hover:bg-page"
                  href={href}
                  key={place.name}
                  rel={pdf ? "noopener" : undefined}
                  target={pdf ? "_blank" : undefined}
                >
                  <OfferMark className="pointer-events-none absolute -bottom-6 -end-3 h-28 w-28 opacity-15 transition duration-300 group-hover:scale-110" />
                  <span className="relative min-w-0">
                    <span className="flex items-center gap-2 text-lg font-bold text-ink">
                      <OfferMark className="h-8 w-8 shrink-0 transition duration-300 group-hover:scale-110" />
                      {label(locale, chromeCopy.branches, place.name)}
                    </span>
                    <span className="mt-2 block text-sm font-semibold text-green-dark">{t(locale, pdf ? offersCopy.viewPdf : offersCopy.viewCurrent)}</span>
                  </span>
                  <span className="relative text-green-dark" aria-hidden="true"><span className="inline-block rtl:-scale-x-100">→</span></span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <section className="scroll-mt-16 bg-page py-16 sm:py-20" id="lists">
        <div className={wrap}>
          <OffersBoard initialBranch={branch} />
        </div>
      </section>
      <section className="bg-leaf py-16 sm:py-20" aria-labelledby="offer-questions">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-green-dark sm:text-4xl" id="offer-questions">{t(locale, offersCopy.questions)}</h2>
          <div className="mt-8 rounded-3xl bg-white px-5 sm:px-8">
          {offersCopy.faqs.map((item) => (
            <details className="group border-b border-line py-5 last:border-b-0" key={item.q.en}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold [&::-webkit-details-marker]:hidden">
                <span>{t(locale, item.q)}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-leaf text-lg leading-none text-green-dark transition-colors group-open:bg-green-dark group-open:text-white" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 max-w-[68ch] pe-12 text-sm leading-relaxed text-muted">{t(locale, item.a)}</p>
            </details>
          ))}
          </div>
        </div>
      </section>
    </main>
  );
}
