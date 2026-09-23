import type { Metadata } from "next";
import { branches } from "@/lib/catalog";

export const metadata: Metadata = { title: "Branches — Nakhla Al Barari" };

export default function BranchesPage() {
  return (
    <main>
      <section className="page-intro">
        <div className="wrap">
          <p className="eyebrow">Saudi Arabia</p>
          <h1>Branches</h1>
          <p className="lede">Headquarters and a branch in Riyadh, plus Aziziyah, Dammam, Hail, Hafar Al Batin, and Qassim.</p>
          <div className="branch-list">
            {branches.map((branch) => (
              <article className="branch" key={branch.name}>
                <h2>{branch.name}</h2>
                <p>{branch.address}</p>
                <p><a href={`tel:${branch.phone.replace(/\s/g, "")}`}>{branch.phone}</a></p>
                <p><a className="map" href={branch.map} target="_blank" rel="noopener">Google Maps</a></p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
