import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { faqs } from "@/lib/faq";
import { wrap } from "@/lib/ui";

export const metadata: Metadata = { title: "FAQ — Nakhla Al Barari" };

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="border-b border-line py-12">
        <div className={wrap}>
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="hover:text-green" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">FAQ</li>
            </ol>
          </nav>
          <h1 className="text-[40px] leading-tight font-semibold tracking-[-0.02em] max-[640px]:text-[32px]">FAQ</h1>
          <p className="mt-3 max-w-[62ch] text-muted">Wholesale orders, availability, returns, and how to reach us on WhatsApp.</p>
          <div className="mt-8">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
