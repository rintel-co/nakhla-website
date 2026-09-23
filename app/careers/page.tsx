import type { Metadata } from "next";
import { WHATSAPP } from "@/lib/catalog";

export const metadata: Metadata = { title: "Careers — Nakhla Al Barari" };

export default function CareersPage() {
  const href = `${WHATSAPP}?text=${encodeURIComponent("Nakhla Al Barari career enquiry")}`;

  return (
    <main>
      <section className="page-intro">
        <div className="wrap">
          <p className="eyebrow">FMCG distribution</p>
          <h1>Careers</h1>
          <p className="lede">There are no active openings. Send a resume on WhatsApp and the team can keep it for the next hiring round.</p>
          <a className="pill green" href={href} target="_blank" rel="noopener">Submit resume</a>
        </div>
      </section>
    </main>
  );
}
