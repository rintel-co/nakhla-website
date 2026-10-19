import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToList } from "@/components/add-to-list";
import { CategoryMark } from "@/components/icons";
import { brandHref, packDetail } from "@/lib/brand";
import { catalogue, type CatalogueItem } from "@/lib/catalogue";
import { productCopy } from "@/lib/product-copy";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { productCopyPhrases } from "@/lib/i18n/pages/product";
import { productsCopy } from "@/lib/i18n/pages/products";
import { getLocale } from "@/lib/i18n/locale";
import { fill, label, t } from "@/lib/i18n/phrase";
import { WhatsAppIcon, whatsappBtn } from "@/components/whatsapp-button";
import { WHATSAPP } from "@/lib/catalog";
import { card, heading, pillSolid, shot, shotImg, wrap } from "@/lib/ui";

const markName: Record<string, string> = {
  Rice: "Rice",
  "Pulses Legumes & Beans": "Pulses",
  Spices: "Spices",
  Sugar: "Sugar",
  "Canned Food": "Canned",
  Sauce: "Sauce",
  Oil: "Oil",
  Others: "Others",
  Drinks: "Drinks",
};

function findItem(slug: string) {
  return catalogue.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return catalogue.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = findItem(slug);
  if (!item) return { title: "Product — Nakhla Al Barari" };
  const copy = productCopy(item);
  const url = `https://nakhlaalbarari.com/products/${item.slug}`;
  return {
    title: `${item.name} — Nakhla Al Barari`,
    description: copy.meta,
    alternates: { canonical: url },
    openGraph: {
      title: item.name,
      description: copy.meta,
      url,
      type: "website",
      siteName: "Nakhla Al Barari",
      locale: "en_SA",
      images: item.image ? [{ url: item.image, alt: item.name }] : undefined,
    },
  };
}

function productSchema(item: CatalogueItem) {
  const copy = productCopy(item);
  const url = `https://nakhlaalbarari.com/products/${item.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://nakhlaalbarari.com/" },
          { "@type": "ListItem", position: 2, name: "Our Brands", item: "https://nakhlaalbarari.com/products" },
          { "@type": "ListItem", position: 3, name: item.name, item: url },
        ],
      },
      {
        "@type": "Product",
        name: item.name,
        url,
        image: item.image,
        brand: { "@type": "Brand", name: item.brand },
        category: item.cats[0],
        description: copy.text,
      },
    ],
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = findItem(slug);
  if (!item) notFound();

  const locale = await getLocale();
  const category = item.cats[0];
  const pack = packDetail(item.name);
  const categoryPhrase = productCopyPhrases.categoryLines[category as keyof typeof productCopyPhrases.categoryLines] ?? productCopyPhrases.categoryFallback;
  const brandPhrase = productsCopy.brandLines[item.brand as keyof typeof productsCopy.brandLines];
  const brandText = brandPhrase ? t(locale, brandPhrase) : fill(locale, productsCopy.brandLineFallback, { brand: item.brand });
  const summary = fill(locale, productCopyPhrases.summary, { categoryLine: t(locale, categoryPhrase), brandLine: brandText });
  const quote = `${WHATSAPP}?text=${encodeURIComponent([
    fill(locale, chromeCopy.messages.enquiryAbout, { name: item.name }),
    fill(locale, chromeCopy.messages.enquiryBrand, { brand: item.brand }),
    fill(locale, chromeCopy.messages.enquiryCategory, { category: label(locale, chromeCopy.categories, category) }),
    ...(pack ? [fill(locale, chromeCopy.messages.enquiryPack, { pack })] : []),
  ].join("\n"))}`;
  const related = catalogue
    .filter((entry) => entry.slug !== item.slug && entry.cats.includes(category))
    .sort((a, b) => Number(b.brand === item.brand) - Number(a.brand === item.brand))
    .slice(0, 4);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema(item)) }} />
      <section className="border-b border-line py-8">
        <div className={wrap}>
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="hover:text-green" href="/">{t(locale, chromeCopy.nav.home)}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link className="hover:text-green" href="/products">{t(locale, chromeCopy.nav.brands)}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link className="hover:text-green" href={brandHref(item.brand)}>{item.brand}</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">{item.name}</li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="py-10">
        <div className={`${wrap} grid items-start gap-10 lg:grid-cols-[minmax(280px,420px)_1fr]`}>
          <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-lg bg-soft max-[640px]:h-80">
            {item.image ? (
              <img className="h-full w-full object-contain p-6" src={item.image} alt={item.name} />
            ) : (
              <CategoryMark className="h-24 w-24" name={markName[category] ?? "Others"} />
            )}
          </div>
          <div>
            <p className="text-sm text-muted">
              <Link className="hover:text-green" href={brandHref(item.brand)}>{item.brand}</Link>
              <span aria-hidden="true"> · </span>
              <Link className="hover:text-green" href={`/products?tab=${encodeURIComponent(category)}`}>{label(locale, chromeCopy.categories, category)}</Link>
            </p>
            <h1 className="mt-2 text-[40px] leading-tight font-semibold tracking-[-0.02em] max-[640px]:text-[32px]">{item.name}</h1>
            <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-muted">{summary}</p>
            <dl className="mt-5 grid max-w-md gap-3 text-sm">
              <div className="grid grid-cols-[7rem_1fr] gap-3 border-b border-line pb-3">
                <dt className="text-muted">{t(locale, productCopyPhrases.brand)}</dt>
                <dd><Link className="font-medium hover:text-green" href={brandHref(item.brand)}>{item.brand}</Link></dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-3 border-b border-line pb-3">
                <dt className="text-muted">{t(locale, productCopyPhrases.category)}</dt>
                <dd className="font-medium">{label(locale, chromeCopy.categories, category)}</dd>
              </div>
              {pack ? (
                <div className="grid grid-cols-[7rem_1fr] gap-3 border-b border-line pb-3">
                  <dt className="text-muted">{t(locale, productCopyPhrases.pack)}</dt>
                  <dd className="font-medium">{pack}</dd>
                </div>
              ) : null}
            </dl>
            <p className="mt-4 text-sm text-ink">{t(locale, productCopyPhrases.order)}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <AddToList primary className="h-11 min-w-40 px-4" slug={item.slug} />
              <Link className={pillSolid} href={`/contact?product=${item.slug}#enquiry`}>{t(locale, chromeCopy.buttons.contactSales)}</Link>
              <a className={whatsappBtn} href={quote} target="_blank" rel="noopener">
                <WhatsAppIcon />
                {t(locale, productCopyPhrases.requestQuote)}
              </a>
            </div>
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="border-t border-line py-12">
          <div className={wrap}>
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className={heading}>{t(locale, productCopyPhrases.similar)}</h2>
              <Link className="text-sm font-semibold text-green" href={`/products?tab=${encodeURIComponent(category)}#catalogue`}>{t(locale, productCopyPhrases.viewAll)}</Link>
            </div>
            <div className="grid grid-cols-4 gap-4 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
              {related.map((entry) => (
                <article className={`${card} flex flex-col transition-colors hover:border-green`} key={entry.slug}>
                  <Link href={`/products/${entry.slug}`}>
                    <div className={shot}>
                      {entry.image ? (
                        <img className={shotImg} src={entry.image} alt="" />
                      ) : (
                        <CategoryMark className="h-16 w-16" name={markName[entry.cats[0]] ?? "Others"} />
                      )}
                    </div>
                    <p className="mt-3 text-xs text-muted">{entry.brand} · {label(locale, chromeCopy.categories, entry.cats[0])}</p>
                    <h3 className="mt-1 mb-3 text-sm font-medium leading-snug">{entry.name}</h3>
                  </Link>
                  <AddToList className="mt-auto w-full" slug={entry.slug} />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
