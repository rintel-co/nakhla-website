import type { Metadata } from "next";
import Link from "next/link";
import { CatalogueGrid } from "@/components/catalogue-grid";
import { HeroLogo } from "@/components/hero-logo";
import { pageBanner, wrap } from "@/lib/ui";

export const metadata: Metadata = { title: "Products — Nakhla Al Barari" };

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

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const { tab } = await searchParams;
  const initialTab = tab ? tabMap[tab] ?? tab : "All Products";

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
              <li aria-current="page">Products</li>
            </ol>
          </nav>
          <p className="mb-2 text-sm text-white/75">Wholesale catalogue</p>
          <h1 className="text-[40px] leading-tight font-semibold tracking-[-0.02em] max-[640px]:text-[32px]">Products</h1>
          <p className="mt-3 max-w-[800px] text-base leading-relaxed text-white/80">Nakhla Al Barari Trading Company operates as an FMCG wholesale company. It engages in the wholesale of food items and drinks. The company sells through business-to-business, discount, wholesale, and retail channels in Saudi Arabia. Founded in 2021 and headquartered in Riyadh.</p>
        </div>
      </section>
      <section className="py-12">
        <div className={wrap}>
          <CatalogueGrid initialTab={initialTab} />
        </div>
      </section>
    </main>
  );
}
