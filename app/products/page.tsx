import type { Metadata } from "next";
import Link from "next/link";
import { CatalogueGrid } from "@/components/catalogue-grid";
import { HeroLogo } from "@/components/hero-logo";
import { PageMark, StatMark } from "@/components/icons";
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
  return { title: t(locale, productsCopy.metaTitle), description: t(locale, productsCopy.lede) };
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
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black to-transparent" />
        <HeroLogo />
        <div className={`${wrap} relative flex h-full flex-col justify-end py-10 text-white max-[640px]:py-8`}>
          <nav aria-label={t(locale, chromeCopy.breadcrumb)} className="mb-4 text-sm text-white/80">
            <ol className="flex flex-wrap items-center gap-2">
                <li><Link className="hover:text-white" href="/">{t(locale, chromeCopy.nav.home)}</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{t(locale, productsCopy.breadcrumb)}</li>
              </ol>
            </nav>
          <h1 className="hero-in max-w-[16ch] text-4xl leading-tight font-bold tracking-[-0.03em] text-white sm:text-6xl">{t(locale, productsCopy.title)}</h1>
          <p className="hero-in hero-in-2 mt-3 max-w-[800px] text-base leading-relaxed text-white/80">{t(locale, productsCopy.lede)}</p>
        </div>
      </section>

      <section className="scroll-mt-20 bg-green-dark py-16 text-white sm:py-20" id="brands" aria-labelledby="brand-logos-heading">
        <div className={wrap}>
          <div className="max-w-[68ch]">
            <h2 className="text-3xl font-bold text-white sm:text-4xl" id="brand-logos-heading">{t(locale, productsCopy.gridTitle)}</h2>
            <p className="mt-3 max-w-[62ch] text-white/75">{t(locale, productsCopy.gridLede)}</p>
          </div>
          <ul className="mt-8 grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
            {brands.map((item) => {
              const active = selected?.name === item.name;
              const labelName = catalogueBrandName(item.name) ?? item.name;
              return (
                <li className="h-full" key={item.name}>
                  <Link
                    className={`flex h-full min-h-52 flex-col items-center rounded-2xl bg-white px-4 py-5 text-center transition-shadow hover:ring-2 hover:ring-green ${active ? "ring-2 ring-green-dark" : ""}`}
                    href={brandHref(item.name)}
                    aria-current={active ? "true" : undefined}
                    aria-label={`${t(locale, productsCopy.viewProducts)}: ${labelName}`}
                  >
                    <span className="flex h-20 w-full items-center justify-center sm:h-24">
                      <img className="max-h-full max-w-full object-contain" src={item.src} alt="" />
                    </span>
                    <span className="mt-3 text-sm font-semibold leading-snug text-ink">{labelName}</span>
                    <span className="mt-auto pt-3 text-sm font-semibold text-green-dark">{t(locale, productsCopy.viewProducts)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-leaf py-16 sm:py-20" aria-labelledby="why-products-heading">
        <div className={wrap}>
          <h2 className="max-w-[16ch] text-3xl font-bold tracking-[-0.03em] text-green-dark sm:text-4xl" id="why-products-heading">{t(locale, productsCopy.whyTitle)}</h2>
          <p className="mt-3 max-w-[68ch] text-ink/70">{t(locale, productsCopy.whyLede)}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {productsCopy.whyPoints.map((point, index) => (
              <li className="group relative overflow-hidden rounded-3xl bg-white p-6" key={point.title.en}>
                {index === 0 ? <StatMark className="pointer-events-none absolute -bottom-6 -end-4 h-28 w-28 opacity-20 transition duration-300 group-hover:scale-110" name="categories" /> : null}
                {index === 1 ? <StatMark className="pointer-events-none absolute -bottom-6 -end-4 h-28 w-28 opacity-20 transition duration-300 group-hover:scale-110" name="products" /> : null}
                {index === 2 ? <PageMark className="pointer-events-none absolute -bottom-6 -end-4 h-28 w-28 opacity-20 transition duration-300 group-hover:scale-110" name="usp" /> : null}
                {index === 3 ? <PageMark className="pointer-events-none absolute -bottom-6 -end-4 h-28 w-28 opacity-20 transition duration-300 group-hover:scale-110" name="mail" /> : null}
                <h3 className="relative text-lg font-bold text-ink">{t(locale, point.title)}</h3>
                <p className="relative mt-2 max-w-[42ch] text-sm leading-relaxed text-ink/70">{t(locale, point.copy)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="scroll-mt-20 bg-page py-16 sm:py-20" id="catalogue" aria-labelledby="catalogue-heading">
        <div className={wrap}>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-center gap-4">
              {selected ? (
                <span className="flex h-16 w-28 shrink-0 items-center justify-center">
                  <img className="max-h-full max-w-full object-contain" src={selected.src} alt="" />
                </span>
              ) : null}
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

      <section className="bg-leaf py-16 sm:py-20" aria-labelledby="brands-faq-heading">
        <div className={wrap}>
          <h2 className="text-3xl font-bold text-green-dark sm:text-4xl" id="brands-faq-heading">{t(locale, faqCopy.title)}</h2>
          <p className="mt-3 max-w-[62ch] text-ink/70">{t(locale, faqCopy.lede)}</p>
          <div className="mt-8 rounded-3xl bg-white px-5 sm:px-8">
            <FaqList items={faqCopy.brands.map((item) => ({ q: t(locale, item.q), a: t(locale, item.a) }))} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-green-dark py-16 text-white sm:py-20" aria-labelledby="enquiry-heading">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,192,44,0.32),transparent_58%)]" aria-hidden="true" />
        <div className={`${wrap} relative`}>
          <div className="relative mx-auto overflow-hidden rounded-3xl bg-leaf px-6 py-12 text-ink sm:px-12 sm:py-16">
            <PageMark className="pointer-events-none absolute -bottom-10 -end-6 h-48 w-48 opacity-20" name="mail" />
            <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white" aria-hidden="true">
              <PageMark className="h-9 w-9" name="mail" />
            </span>
            <h2 className="relative mt-5 max-w-[16ch] text-3xl leading-tight font-bold tracking-[-0.03em] text-ink sm:text-4xl" id="enquiry-heading">{t(locale, productsCopy.enquiryTitle)}</h2>
            <p className="relative mt-3 max-w-[46ch] text-base leading-relaxed text-ink/70">{t(locale, productsCopy.enquiryLede)}</p>
            <Link className="relative mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-green-dark px-4 text-sm font-semibold text-white transition-colors hover:bg-ink" href="/contact">
              {t(locale, productsCopy.makeEnquiry)}
              <span className="inline-block rtl:-scale-x-100" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
