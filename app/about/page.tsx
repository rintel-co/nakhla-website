import type { Metadata } from "next";
import { UserMark } from "@/components/icons";

export const metadata: Metadata = { title: "About — Nakhla Al Barari" };

const directors: { name: string; role: string; photo?: string }[] = [
  { name: "Yazeed Mohammed Al Suwaylih", role: "Managing Partner" },
  { name: "Basheer Nadammel", role: "General Manager", photo: "/directors/basheer-nadammel.avif" },
  { name: "Shameer Cheriya Puthan Veetil", role: "Managing Partner", photo: "/directors/shameer-cheriya-puthan-veetil.avif" },
  { name: "Sohail Abdulrazzaq", role: "Managing Partner", photo: "/directors/sohail-abdulrazzaq.avif" },
  { name: "Yahiya Purayil", role: "Managing Partner", photo: "/directors/yahiya-purayil.avif" },
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-intro">
        <div className="wrap">
          <p className="eyebrow">Founded 2021 · Riyadh</p>
          <h1>About the company</h1>
          <p className="lede">Nakhla Al Barari Trading Company is an FMCG wholesaler. It sells food and drinks through business-to-business, discount, wholesale, and retail channels in Saudi Arabia.</p>
          
          <h2 style={{ marginTop: 48 }}>Directors</h2>
          <div className="people">
            {directors.map((person) => (
              <article className="person" key={person.name}>
                {person.photo ? (
                  <img src={person.photo} alt="" width={400} height={600} />
                ) : (
                  <div className="person-fallback" aria-hidden="true"><UserMark /></div>
                )}
                <div>
                  <h2>{person.name}</h2>
                  <p>{person.role}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="principles principles-alt">
            <article>
              <p className="eyebrow">Vision</p>
              <h2>Commitment to customers</h2>
              <p>We have developed a reputation for our commitment to our customers. As our community has become increasingly service-oriented and well-travelled, we are focused on providing the best selection of food products in Saudi Arabia.</p>
              <p>Our longer-term aim is to become the top leader in Saudi Arabia’s FMCG wholesale sector. We are proud to deliver a taste of home with a wide variety of food products.</p>
            </article>
            <article>
              <p className="eyebrow">Mission</p>
              <h2>Promise of quality</h2>
              <p>To offer authentic, appealing, high-quality food and beverage brands to wholesale and retail channels in Saudi Arabia. The range is backed by a price promise and by long-term relationships with customers across regions.</p>
            </article>
            <article>
              <p className="eyebrow">Core values</p>
              <h2>Treat everyone right</h2>
              <ul>
                <li>We treat customers and clients with respect and faith.</li>
                <li>We grow through creativity, invention, collaboration, and innovation.</li>
                <li>We bring honesty, integrity, and business ethics into how the company works.</li>
                <li>We develop and invest in our employees, and make them part of the company.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
