import type { Metadata } from "next";

export const metadata: Metadata = { title: "About — Nakhla Al Barari" };

const directors = [
  ["Yazeed Mohammed Al Suwaylih", "Managing Partner"],
  ["Basheer Nadammel", "General Manager"],
  ["Shameer Cheriya Puthan Veetil", "Managing Partner"],
  ["Sohail Abdulrazzaq", "Managing Partner"],
  ["Yahiya Purayil", "Managing Partner"],
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-intro">
        <div className="wrap">
          <p className="eyebrow">Founded 2021 · Riyadh</p>
          <h1>About the company</h1>
          <p className="lede">Nakhla Al Barari Trading Company is an FMCG wholesaler. It sells food and drinks through business-to-business, discount, wholesale, and retail channels in Saudi Arabia.</p>
          <div className="points" style={{ marginTop: 28 }}>
            <div className="point"><i>✓</i><div><b>Commitment to customers</b><span>A selection of food products for retailers, hotels, and walk-in trade, with a longer aim of leading Saudi FMCG wholesale.</span></div></div>
            <div className="point"><i>✓</i><div><b>Promise of quality</b><span>Authentic food and beverage brands, a price promise, and long-term relationships across regions.</span></div></div>
          </div>
          <h2 style={{ marginTop: 48 }}>Directors</h2>
          <div className="people">
            {directors.map(([name, role]) => (
              <article className="person" key={name}>
                <h2>{name}</h2>
                <p>{role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
