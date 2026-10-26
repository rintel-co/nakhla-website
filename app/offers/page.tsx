import type { Metadata } from "next";
import { OfferCityTabs } from "@/components/offer-city-tabs";
import { PageBanner } from "@/components/page-banner";
import { branches } from "@/lib/catalog";
import { branchesCopy } from "@/lib/i18n/pages/branches";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { offersCopy } from "@/lib/i18n/pages/offers";
import { getLocale } from "@/lib/i18n/locale";
import { label, t } from "@/lib/i18n/phrase";
import { bannersForBranch } from "@/lib/offers";
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
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Weekly Wholesale Offers",
    itemListElement: branches.flatMap((place) => bannersForBranch(place.name).map((banner) => ({ place: place.name, banner }))).map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "ImageObject",
        name: `${entry.banner.alt.en} — ${entry.place}`,
        contentUrl: entry.banner.src,
        url: entry.banner.href,
      },
    })),
  };
}

export default async function OffersPage() {
  const locale = await getLocale();

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offersSchema()) }} />
      <PageBanner
        title={t(locale, offersCopy.title)}
        lede={t(locale, offersCopy.lede)}
        image="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1600&q=80"
        imageAlt={t(locale, offersCopy.imageAlt)}
        action={{ href: "#banners", label: t(locale, offersCopy.viewCurrent) }}
      />
      <section className="scroll-mt-16 bg-page py-10 sm:py-14" id="banners" aria-labelledby="offer-banners">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-green-dark sm:text-4xl" id="offer-banners">{t(locale, offersCopy.documentsTitle)}</h2>
          <p className="mt-3 max-w-[68ch] text-ink/70">{t(locale, offersCopy.documentsLede)}</p>
          <OfferCityTabs
            label={t(locale, offersCopy.branches)}
            tabs={branches.map((place) => ({
              name: place.name,
              label: label(locale, chromeCopy.branches, place.name),
              address: t(locale, branchesCopy.addresses[place.name as keyof typeof branchesCopy.addresses]),
              banners: bannersForBranch(place.name).map((banner) => ({
                src: banner.src,
                alt: t(locale, banner.alt),
                href: banner.href,
              })),
            }))}
          />
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
