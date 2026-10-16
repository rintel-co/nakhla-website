import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { WhatsAppIcon, whatsappBtn } from "@/components/whatsapp-button";
import { WHATSAPP } from "@/lib/catalog";
import { wrap } from "@/lib/ui";

export const metadata: Metadata = { title: "Careers — Nakhla Al Barari" };

const office = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Inside-office-4.avif";

export default function CareersPage() {
  const href = `${WHATSAPP}?text=${encodeURIComponent("Nakhla Al Barari career enquiry")}`;

  return (
    <main>
      <PageBanner
        title="Careers"
        kicker="FMCG distribution"
        lede="There are no active openings. Send a resume on WhatsApp and the team can keep it for the next hiring round."
        image={office}
        imageAlt="Corridor at the Nakhla Al Barari office"
        imageClass="object-right"
      />
      <section className="py-12">
        <div className={wrap}>
          <a className={whatsappBtn} href={href} target="_blank" rel="noopener">
            <WhatsAppIcon />
            Submit resume
          </a>
        </div>
      </section>
    </main>
  );
}
