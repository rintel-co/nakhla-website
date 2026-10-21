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

const faqItems = faqCopy.page;

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
      <section className="bg-leaf py-16 sm:py-20">
        <div className={wrap}>
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
                <li><Link className="hover:text-green-dark" href="/">{t(locale, chromeCopy.nav.home)}</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{t(locale, faqCopy.title)}</li>
              </ol>
            </nav>
          <h1 className="max-w-[16ch] text-4xl leading-tight font-bold tracking-[-0.03em] text-green-dark sm:text-5xl">{t(locale, faqCopy.title)}</h1>
          <p className="mt-4 max-w-[62ch] text-ink/70">{t(locale, faqCopy.lede)}</p>
          <div className="mt-8 rounded-3xl bg-white px-5 sm:px-8">
            <FaqList items={items} />
          </div>
        </div>
      </section>
    </main>
  );
}
