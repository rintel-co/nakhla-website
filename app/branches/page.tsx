import type { Metadata } from "next";
import Link from "next/link";
import { StatMark } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { branches } from "@/lib/catalog";
import { wrap } from "@/lib/ui";

export const metadata: Metadata = { title: "Branches — Nakhla Al Barari" };

const corridor = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Inside-office-4.avif";

export default function BranchesPage() {
  return (
    <main>
      <PageBanner
        title="Branches"
        kicker="Saudi Arabia"
        lede="Headquarters and a branch in Riyadh, plus Aziziyah, Dammam, Hail, Hafar Al Batin, and Qassim."
        image={corridor}
        imageAlt="Corridor at the Nakhla Al Barari office"
      />
      <section className="py-12">
        <div className={wrap}>
          <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
            {branches.map((branch) => (
              <article className="rounded-lg border border-line bg-white p-5" key={branch.name}>
                <h2 className="mb-1.5 flex items-center gap-2 text-xl">
                  <StatMark className="h-7 w-7 shrink-0" name="branches" />
                  {branch.name}
                </h2>
                <p className="mb-1.5 text-muted">{branch.address}</p>
                <p className="mb-1.5 text-muted"><a href={`tel:${branch.phone.replace(/\s/g, "")}`}>{branch.phone}</a></p>
                <p className="m-0 flex flex-wrap gap-4">
                  <a className="font-bold text-green" href={branch.map} target="_blank" rel="noopener">Google Maps</a>
                  <Link className="font-bold text-green" href={`/offers?branch=${encodeURIComponent(branch.name)}`}>Weekly offers</Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
