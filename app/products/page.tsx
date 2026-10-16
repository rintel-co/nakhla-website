import type { Metadata } from "next";
import Link from "next/link";
import { CatalogueGrid } from "@/components/catalogue-grid";
import { HeroLogo } from "@/components/hero-logo";
import { FaqList } from "@/components/faq-list";
import { brandFaqsFor, brandHref, brandLogo, catalogueBrandName } from "@/lib/brand";
import { brands, CATALOGUE_PDF } from "@/lib/catalog";
import { brandLine } from "@/lib/product-copy";
import { heading, pageBanner, pill, pillSolid, sectionSub, wrap } from "@/lib/ui";

export const metadata: Metadata = { title: "Our Brands — Nakhla Al Barari" };

const bannerImage = "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=80";

const tabMap: Record<string, string> = {
  Rice: "Rice",
  Pulses: "Pulses Legumes & Beans",
  Spices: "Spices",
  Sugar: "Sugar",
  Canned: "Canned Food",
  Sauce: "Sauce",
  Oil: "Oil",
  Others: "Others",
  Drinks: "Drinks",
};

const reasons = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
];

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ tab?: string; brand?: string }> }) {
  const { tab, brand } = await searchParams;
  const initialTab = tab ? tabMap[tab] ?? tab : "All Products";
  const resolved = brand ? catalogueBrandName(brand) : null;
  const selected = brand ? brandLogo(resolved ?? brand) ?? brands.find((item) => item.name.toLowerCase() === brand.toLowerCase()) : undefined;
  const catalogueTitle = resolved ?? selected?.name;
  const faqs = brand ? brandFaqsFor(resolved ?? brand) : [];

  return (
    <main>
      <section className={`${pageBanner} bg-ink text-white`}>
        <img className="absolute inset-0 h-full w-full object-cover" src={bannerImage} alt="Shop shelves stocked with packaged food" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <HeroLogo />
        <div className={`${wrap} relative flex h-full flex-col justify-center py-8`}>
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="hover:text-white" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Our Brands</li>
            </ol>
          </nav>
          <p className="mb-2 text-sm text-white/75">Wholesale catalogue</p>
          <h1 className="text-[40px] leading-tight font-semibold tracking-[-0.02em] text-white max-[640px]:text-[32px]">Our Brands</h1>
          <p className="mt-3 max-w-[800px] text-base leading-relaxed text-white/80">Nakhla Al Barari Trading Company operates as an FMCG wholesale company. It engages in the wholesale of food items and drinks. The company sells through business-to-business, discount, wholesale, and retail channels in Saudi Arabia. Founded in 2021 and headquartered in Riyadh.</p>
        </div>
      </section>

      <section className="border-b border-line py-12" aria-labelledby="brand-logos-heading">
        <div className={wrap}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className={heading} id="brand-logos-heading">Choose a brand</h2>
              <p className={sectionSub}>Open a brand to see the products listed under that name.</p>
            </div>
            <Link className={pillSolid} href="/products#catalogue">View all products</Link>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((item) => {
              const active = selected?.name === item.name;
              return (
                <li key={item.name}>
                  <Link
                    className={`flex h-36 flex-col items-center justify-center gap-2 rounded-lg border bg-white px-3 py-4 text-center transition-colors hover:border-green ${active ? "border-green bg-leaf" : "border-line"}`}
                    href={brandHref(item.name)}
                    aria-current={active ? "true" : undefined}
                  >
                    <img className="h-14 w-full object-contain" src={item.src} alt={item.name} />
                    <span className="text-xs font-semibold leading-snug text-ink">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="scroll-mt-20 border-b border-line py-12" id="catalogue" aria-labelledby="catalogue-heading">
        <div className={wrap}>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-center gap-4">
              {selected ? <img className="h-12 w-24 object-contain" src={selected.src} alt="" /> : null}
              <div>
                <h2 className={heading} id="catalogue-heading">{catalogueTitle ?? "All products"}</h2>
                <p className={sectionSub}>{resolved ? brandLine(resolved) : catalogueTitle ? "This brand has no lines in the current wholesale catalogue." : "The full wholesale catalogue."}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className={pill} href={CATALOGUE_PDF} target="_blank" rel="noopener">Download catalogue</a>
              <Link className={pillSolid} href="/contact">Contact Sales</Link>
            </div>
          </div>
          {faqs.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold" id="brand-faq-heading">Product FAQ</h3>
              <FaqList items={faqs} />
            </div>
          )}
          <CatalogueGrid key={`${initialTab}-${resolved ?? brand ?? "all"}`} initialTab={initialTab} initialBrand={resolved ?? brand} />
        </div>
      </section>

      {/* <section className="bg-leaf/40 py-12" aria-labelledby="why-brands-heading">
        <div className={wrap}>
          <h2 className={heading} id="why-brands-heading">Why Choose Our Brands</h2>
          <ul className="mt-6 grid gap-4 lg:grid-cols-3">
            {reasons.map((reason) => (
              <li className="rounded-lg border border-line bg-white p-5 text-sm leading-relaxed text-muted" key={reason}>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section> */}
    </main>
  );
}
