import type { Metadata } from "next";
import Link from "next/link";
import { CatalogueGrid } from "@/components/catalogue-grid";
import { HeroLogo } from "@/components/hero-logo";
import { PageMark } from "@/components/icons";
import { FaqList } from "@/components/faq-list";
import { brandHref, brandLogo, catalogueBrandName } from "@/lib/brand";
import { brands, CATALOGUE_PDF } from "@/lib/catalog";
import { faqCopy } from "@/lib/i18n/pages/faq";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { productsCopy } from "@/lib/i18n/pages/products";
import { getLocale } from "@/lib/i18n/locale";
import { fill, t } from "@/lib/i18n/phrase";
import { heading, pageBanner, pill, pillSolid, sectionSub, wrap } from "@/lib/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return { title: t(locale, productsCopy.metaTitle) };
}

const bannerImage = "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=80";

const tabMap: Record<string, string> = {
  Rice: "Rice",
  Pulses: "Pulses Legumes & Beans",
  Spices: "Spices",
  Sugar: "Sugar",
  Canned: "Canned Food",
  Sauce: "Sauce",
  Oil: "Oil",
  Others: "Others",
  Drinks: "Drinks",
};

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ tab?: string; brand?: string }> }) {
  const { tab, brand } = await searchParams;
  const locale = await getLocale();
  const initialTab = tab ? tabMap[tab] ?? tab : "All Products";
  const resolved = brand ? catalogueBrandName(brand) : null;
  const selected = brand ? brandLogo(resolved ?? brand) ?? brands.find((item) => item.name.toLowerCase() === brand.toLowerCase()) : undefined;
  const catalogueTitle = resolved ?? selected?.name;
  const brandKey = (resolved ?? brand ?? "") as keyof typeof productsCopy.brandFaqs;
  const brandLinePhrase = resolved ? productsCopy.brandLines[resolved as keyof typeof productsCopy.brandLines] : undefined;
  const intro = resolved
    ? brandLinePhrase ? t(locale, brandLinePhrase) : fill(locale, productsCopy.brandLineFallback, { brand: resolved })
    : catalogueTitle ? t(locale, productsCopy.emptyBrand) : t(locale, productsCopy.fullCatalogue);
  const faqs = (productsCopy.brandFaqs[brandKey] ?? []).map((item) => ({ q: t(locale, item.q), a: t(locale, item.a) }));

  return (
    <main>
      <section className={`${pageBanner} bg-ink text-white`}>
        <img className="absolute inset-0 h-full w-full object-cover" src={bannerImage} alt={t(locale, productsCopy.bannerAlt)} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20 rtl:bg-gradient-to-l" />
        <HeroLogo />
        <div className={`${wrap} relative flex h-full flex-col justify-center py-8`}>
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
            <ol className="flex flex-wrap items-center gap-2">
                <li><Link className="hover:text-white" href="/">{t(locale, chromeCopy.nav.home)}</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{t(locale, productsCopy.breadcrumb)}</li>
              </ol>
            </nav>
          <h1 className="text-[40px] leading-tight font-semibold tracking-[-0.02em] text-white max-[640px]:text-[32px]">{t(locale, productsCopy.title)}</h1>
          <p className="mt-3 max-w-[800px] text-base leading-relaxed text-white/80">{t(locale, productsCopy.lede)}</p>
          <a className="mt-6 inline-flex h-11 w-fit items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="#brands">{t(locale, productsCopy.chooseBrand)}</a>
        </div>
      </section>

      <section className="scroll-mt-20 border-b border-line py-12" id="brands" aria-labelledby="brand-logos-heading">
        <div className={wrap}>
          <div className="max-w-[68ch]">
            <h2 className={heading} id="brand-logos-heading">{t(locale, productsCopy.gridTitle)}</h2>
            <p className={sectionSub}>{t(locale, productsCopy.gridLede)}</p>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((item) => {
              const active = selected?.name === item.name;
              const labelName = catalogueBrandName(item.name) ?? item.name;
              return (
                <li key={item.name}>
                  <Link
                    className={`flex min-h-40 flex-col items-center justify-center gap-2 rounded-lg border bg-white px-3 py-4 text-center transition-colors hover:border-green ${active ? "border-green bg-leaf" : "border-line"}`}
                    href={brandHref(item.name)}
                    aria-current={active ? "true" : undefined}
                    aria-label={`${t(locale, productsCopy.viewBrand)}: ${labelName}`}
                  >
                    <img className="h-14 w-full object-contain" src={item.src} alt="" />
                    <span className="text-xs font-semibold leading-snug text-ink">{labelName}</span>
                    <span className="text-xs font-semibold text-green">{t(locale, productsCopy.viewBrand)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-green-dark py-14 text-white sm:py-16" aria-labelledby="why-brands-heading">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(147,192,44,0.38),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(147,192,44,0.16),transparent_48%)]" aria-hidden="true" />
        <div className={`${wrap} relative grid items-center gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12`}>
          <div>
            <h2 className="max-w-[14ch] text-3xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-4xl" id="why-brands-heading">{t(locale, productsCopy.whyTitle)}</h2>
            <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-white/80">{t(locale, productsCopy.whyLede)}</p>
            <Link className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="#catalogue">
              {t(locale, productsCopy.exploreProducts)}
              <span className="inline-block rtl:-scale-x-100" aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="grid grid-cols-3 gap-3">
            {brands.slice(0, 6).map((item) => {
              const labelName = catalogueBrandName(item.name) ?? item.name;
              return (
                <li key={item.name}>
                  <Link className="flex h-24 items-center justify-center rounded-xl bg-white px-3 transition-colors hover:bg-leaf" href={brandHref(item.name)} aria-label={`${t(locale, productsCopy.viewBrand)}: ${labelName}`}>
                    <img className="max-h-12 w-full object-contain" src={item.src} alt="" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="scroll-mt-20 border-b border-line py-12" id="catalogue" aria-labelledby="catalogue-heading">
        <div className={wrap}>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-center gap-4">
              {selected ? <img className="h-12 w-24 object-contain" src={selected.src} alt="" /> : null}
              <div>
                <h2 className={heading} id="catalogue-heading">{t(locale, productsCopy.productsTitle)}</h2>
                <p className={sectionSub}>{t(locale, productsCopy.productsLede)}</p>
                {catalogueTitle ? <p className="mt-2 text-sm font-semibold">{catalogueTitle}{intro ? ` — ${intro}` : ""}</p> : null}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className={pillSolid} href="/products#catalogue">{t(locale, productsCopy.viewAllProducts)}</Link>
              <a className={pill} href={CATALOGUE_PDF} target="_blank" rel="noopener">{t(locale, chromeCopy.buttons.downloadCatalogue)}</a>
            </div>
          </div>
          {faqs.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold" id="brand-faq-heading">{t(locale, productsCopy.productFaq)}</h3>
              <FaqList items={faqs} />
            </div>
          )}
          <CatalogueGrid key={`${initialTab}-${resolved ?? brand ?? "all"}`} initialTab={initialTab} initialBrand={resolved ?? brand} />
        </div>
      </section>

      <section className="border-t border-line py-16" aria-labelledby="brands-faq-heading">
        <div className={wrap}>
          <h2 className={heading} id="brands-faq-heading">{t(locale, faqCopy.title)}</h2>
          <p className={`mt-3 ${sectionSub}`}>{t(locale, faqCopy.lede)}</p>
          <div className="mt-8">
            <FaqList items={faqCopy.brands.map((item) => ({ q: t(locale, item.q), a: t(locale, item.a) }))} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-green-dark py-16 text-white sm:py-20" aria-labelledby="enquiry-heading">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,192,44,0.32),transparent_58%)]" aria-hidden="true" />
        <div className={`${wrap} relative`}>
          <div className="mx-auto flex max-w-3xl flex-col items-center rounded-2xl border border-white/10 bg-white/10 px-6 py-10 text-center sm:px-12 sm:py-14">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-white" aria-hidden="true">
              <PageMark className="h-9 w-9" name="mail" />
            </span>
            <h2 className="mt-5 max-w-[16ch] text-3xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-4xl" id="enquiry-heading">{t(locale, productsCopy.enquiryTitle)}</h2>
            <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-white/80">{t(locale, productsCopy.enquiryLede)}</p>
            <Link className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="/contact">
              {t(locale, productsCopy.makeEnquiry)}
              <span className="inline-block rtl:-scale-x-100" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
