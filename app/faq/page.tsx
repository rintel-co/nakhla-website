import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { faqCopy } from "@/lib/i18n/pages/faq";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { getLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/phrase";
import { wrap } from "@/lib/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return { title: t(locale, faqCopy.metaTitle) };
}

const faqItems = [...faqCopy.home, ...faqCopy.brands.filter((item) => !faqCopy.home.some((home) => home.q.en === item.q.en))];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q.en,
    acceptedAnswer: { "@type": "Answer", text: item.a.en },
  })),
};

export default async function FaqPage() {
  const locale = await getLocale();
  const items = faqItems.map((item) => ({ q: t(locale, item.q), a: t(locale, item.a) }));

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="border-b border-line py-12">
        <div className={wrap}>
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
                <li><Link className="hover:text-green" href="/">{t(locale, chromeCopy.nav.home)}</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{t(locale, faqCopy.title)}</li>
              </ol>
            </nav>
          <h1 className="text-[40px] leading-tight font-semibold tracking-[-0.02em] max-[640px]:text-[32px]">{t(locale, faqCopy.title)}</h1>
          <p className="mt-3 max-w-[62ch] text-muted">{t(locale, faqCopy.lede)}</p>
          <div className="mt-8">
            <FaqList items={items} />
          </div>
        </div>
      </section>
    </main>
  );
}
