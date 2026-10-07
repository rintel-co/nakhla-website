import type { Metadata } from "next";
import Link from "next/link";
import { HeroLogo } from "@/components/hero-logo";
import { OffersBoard } from "@/components/offers-board";
import { GroupMark, StatMark } from "@/components/icons";
import { brands } from "@/lib/catalog";
import { catalogue } from "@/lib/catalogue";
import { weeklyOffers } from "@/lib/offers";
import { wrap } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Offers — Nakhla Al Barari",
  description: "Weekly offers for each Nakhla Al Barari branch. Riyadh, Aziziyah, Dammam, Hail, Hafar Al Batin, and Qassim publish their own lists. The branch confirms the offer.",
  alternates: { canonical: "https://nakhlaalbarari.com/offers" },
  openGraph: {
    title: "Weekly offers — Nakhla Al Barari",
    description: "Each branch keeps its own weekly offer list. The branch confirms the offer.",
    url: "https://nakhlaalbarari.com/offers",
    type: "website",
    siteName: "Nakhla Al Barari",
    locale: "en_SA",
  },
};

function offersSchema() {
  const bySlug = new Map(catalogue.map((item) => [item.slug, item]));
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Weekly offers by branch",
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
  const heroBrands = brands.slice(0, 6);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offersSchema()) }} />
      <section className="relative flex min-h-[420px] overflow-hidden bg-[radial-gradient(ellipse_90%_80%_at_0%_18%,#6d2c78_0%,transparent_58%),radial-gradient(ellipse_72%_90%_at_100%_88%,#1d4f86_0%,transparent_56%),radial-gradient(ellipse_50%_64%_at_74%_6%,#c46a3a_0%,transparent_50%),linear-gradient(165deg,#140e28_0%,#1c1638_50%,#121a30_100%)] text-white max-[640px]:min-h-[380px]">
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
                <li><Link className="hover:text-white" href="/">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Offers</li>
              </ol>
            </nav>
            <p className="mb-2 text-sm text-white/75">General offers</p>
            <h1 className="offer-lines max-w-[16ch] text-[52px] leading-[1.05] font-semibold tracking-[-0.03em] max-[640px]:text-[36px]">
              <span>Weekly offers for every branch.</span>
              <span>This week’s lines, ready to add.</span>
              <span>Each branch confirms the offer.</span>
            </h1>
            <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-white/80">Each branch keeps its own list. The branch confirms the offer before you order.</p>
            <a className="mt-6 inline-flex h-11 items-center rounded-full bg-white px-5 text-sm font-semibold text-ink transition-colors hover:bg-soft" href="#lists">See this week</a>
          </div>
          <div className="grid gap-2.5 lg:w-[420px]">
            <div className="grid grid-cols-6 gap-2" aria-label="Offer areas">
              <div className="flex flex-col items-center gap-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20"><StatMark className="h-6 w-6 brightness-0 invert" name="branches" /></span>
                <span className="text-[10px] font-semibold text-white">Branches</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20"><GroupMark className="h-6 w-6 brightness-0 invert" name="Food Products" /></span>
                <span className="text-[10px] font-semibold text-white">Food</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20"><GroupMark className="h-6 w-6 brightness-0 invert" name="Frozen Foods" /></span>
                <span className="text-[10px] font-semibold text-white">Frozen</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20"><GroupMark className="h-6 w-6 brightness-0 invert" name="Soft Drinks & Beverages" /></span>
                <span className="text-[10px] font-semibold text-white">Drinks</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20"><GroupMark className="h-6 w-6 brightness-0 invert" name="Non Food" /></span>
                <span className="text-[10px] font-semibold text-white">Non food</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20"><StatMark className="h-6 w-6 brightness-0 invert" name="products" /></span>
                <span className="text-[10px] font-semibold text-white">Products</span>
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
      <section className="scroll-mt-16 pt-8 pb-6" id="lists">
        <div className={wrap}>
          <OffersBoard initialBranch={branch} />
        </div>
      </section>
      <section className={`${wrap} pb-16`} aria-labelledby="offer-questions">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]" id="offer-questions">Questions</h2>
        <div className="mt-4 border-t border-line">
          <details className="border-b border-line py-4">
            <summary className="cursor-pointer text-base font-semibold">Is the list the same at every branch?</summary>
            <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-muted">No. Riyadh, Aziziyah, Dammam, Hail, Hafar Al Batin, and Qassim each publish their own week.</p>
          </details>
          <details className="border-b border-line py-4">
            <summary className="cursor-pointer text-base font-semibold">Where is the price?</summary>
            <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-muted">The branch confirms the offer. This page does not show a public price.</p>
          </details>
          <details className="border-b border-line py-4">
            <summary className="cursor-pointer text-base font-semibold">How do I order a line?</summary>
            <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-muted">Add it to a trade list, then send the list from the site. The branch confirms price and delivery.</p>
          </details>
        </div>
      </section>
    </main>
  );
}
