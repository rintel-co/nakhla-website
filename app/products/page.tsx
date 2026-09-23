import type { Metadata } from "next";
import { CatalogueGrid } from "@/components/catalogue-grid";

export const metadata: Metadata = { title: "Products — Nakhla Al Barari" };

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
      <section className="page-intro">
        <div className="wrap center">
          <p className="eyebrow">Best in quality</p>
          <h1>Products</h1>
          <p style={{ maxWidth: 800 }} className="lede center">Nakhla Al Barari Trading Company operates as an FMCG wholesale company. It engages in the wholesale of food items and drinks. The company sells through business-to-business, discount, wholesale, and retail channels in Saudi Arabia. Founded in 2021 and headquartered in Riyadh.</p>
          <CatalogueGrid initialTab={initialTab} />
        </div>
      </section>
    </main>
  );
}
