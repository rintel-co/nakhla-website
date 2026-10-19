import type { Metadata } from "next";
import Link from "next/link";
import { HeroLogo } from "@/components/hero-logo";
import { AudienceMark, GroupMark, PageMark, StatMark, UserMark } from "@/components/icons";
import { ProductGrid } from "@/components/product-grid";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { FaqList } from "@/components/faq-list";
import { Nationwide } from "@/components/nationwide";
import { brandHref } from "@/lib/brand";
import { brands, branches, CATALOGUE_PDF, PROFILE_PDF, serviceGroups } from "@/lib/catalog";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { faqCopy } from "@/lib/i18n/pages/faq";
import { homeCopy } from "@/lib/i18n/pages/home";
import { servicesCopy } from "@/lib/i18n/pages/services";
import { getLocale } from "@/lib/i18n/locale";
import { fill, label, t } from "@/lib/i18n/phrase";
import { heading, heroTitle, homeSection, pillSolid, sectionHead, sectionSub, wrap } from "@/lib/ui";

const audienceOrder = ["hotels", "hypermarkets", "grocery", "official"] as const;

export const metadata: Metadata = {
  title: "Nakhla Al Barari — Wholesale food across Saudi Arabia",
  description:
    "Nakhla Al Barari Trading Company is an FMCG wholesaler in Riyadh. Food products, frozen foods, soft drinks and beverages, and non-food lines for hotels, hypermarkets, and grocery counters across Saudi Arabia.",
  openGraph: {
    title: "Nakhla Al Barari — Wholesale food across Saudi Arabia",
    description:
      "Food products, frozen foods, soft drinks and beverages, and non-food lines. Headquartered in Riyadh, supplying hotels, hypermarkets, and grocery counters across Saudi Arabia.",
    type: "website",
    locale: "en_SA",
    siteName: "Nakhla Al Barari",
    url: "https://nakhlaalbarari.com/",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "WholesaleStore"],
      name: "Nakhla Al Barari Trading Co.",
      url: "https://nakhlaalbarari.com/",
      description:
        "FMCG wholesaler of food, drinks, and other commodities. Sales run through business-to-business, discount, wholesale, and retail channels in Saudi Arabia.",
      foundingDate: "2021",
      telephone: "+966555729077",
      email: "contact@nbarari.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: branches[0].address,
        addressLocality: "Riyadh",
        addressCountry: "SA",
      },
      areaServed: "SA",
    },
    {
      "@type": "ItemList",
      name: "Our Services",
      itemListElement: serviceGroups.map((group, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: group.name,
          description: group.note,
          provider: { "@type": "Organization", name: "Nakhla Al Barari Trading Co." },
          serviceType: group.name,
        },
      })),
    },
  ],
};

export default async function HomePage() {
  const locale = await getLocale();

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <section className="relative flex min-h-[min(720px,calc(100vh-64px))] overflow-hidden bg-ink">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label={t(locale, homeCopy.heroAria)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20 rtl:bg-gradient-to-l" />
        <HeroLogo />
        <div className={`${wrap} relative mt-auto flex flex-col pb-12 pt-24 text-white max-[640px]:pb-8`}>
          <h1 className={`${heroTitle} max-w-3xl text-white`}>{t(locale, homeCopy.heroTitle)}</h1>
          <p className="mb-6 max-w-[62ch] text-base leading-relaxed text-white/80">{t(locale, homeCopy.heroLede)}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link className={pillSolid} href="/contact">{t(locale, homeCopy.buttons.requestPricing)}</Link>
          </div>
          <dl className="mt-8 flex flex-wrap gap-8 border-t border-white/25 pt-5 text-sm">
            {([
              ["branches", homeCopy.stats.branches, String(branches.length)],
              ["products", homeCopy.stats.products, "3,500+"],
              ["customers", homeCopy.stats.customers, "6,000+"],
            ] as const).map(([icon, stat, value]) => (
              <div className="flex items-center gap-3" key={icon}>
                <StatMark className="h-9 w-9 shrink-0 brightness-0 invert" name={icon} />
                <div>
                  <dt className="text-white/70">{t(locale, stat)}</dt>
                  <dd className="text-lg font-semibold">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={homeSection} id="services" aria-labelledby="services-heading">
        <div className={wrap}>
          <div className={sectionHead}>
            <div>
              <h2 className={heading} id="services-heading">{t(locale, homeCopy.servicesTitle)}</h2>
              <p className={sectionSub}>{t(locale, homeCopy.servicesLede)}</p>
            </div>
            <Link className={pillSolid} href="/services">{t(locale, homeCopy.buttons.viewCategories)}</Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceGroups.map((group) => (
              <li key={group.name}>
                <Link className="flex h-full flex-col rounded-lg border border-line bg-white p-4 transition-colors hover:border-green" href={`/services#${group.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}>
                  <GroupMark className="h-10 w-10" name={group.name} />
                  <h3 className="mt-3 text-lg font-semibold">{t(locale, servicesCopy.groups[group.name as keyof typeof servicesCopy.groups].name)}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={homeSection} id="customers" aria-labelledby="customers-heading">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_440px]`}>
          <div>
            <h2 className={heading} id="customers-heading">{t(locale, homeCopy.customersTitle)}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t(locale, homeCopy.customersLede)}</p>
            <Link className="mt-3 inline-block text-sm font-semibold text-green" href="/about">{t(locale, homeCopy.buttons.aboutCompany)}</Link>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {audienceOrder.map((name) => (
                <article className="flex gap-3 rounded-lg border border-line bg-white p-3" key={name}>
                  <AudienceMark className="h-8 w-8 shrink-0" name={name} />
                  <div>
                    <h3 className="text-sm font-semibold">{t(locale, homeCopy.audiences[name].title)}</h3>
                    <p className="mt-0.5 text-sm leading-snug text-muted">{t(locale, homeCopy.audiences[name].copy)}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-5 border-t border-line pt-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold">{t(locale, homeCopy.stats.branches)}</p>
                <Link className="text-sm font-semibold text-green" href="/branches">{t(locale, homeCopy.buttons.viewAll)}</Link>
              </div>
              <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5">
                {branches.map((branch) => (
                  <li key={branch.name}>
                    <a className="flex items-center gap-1.5 text-sm text-muted hover:text-green" href={branch.map} target="_blank" rel="noopener">
                      <StatMark className="h-4 w-4 shrink-0" name="branches" />
                      {label(locale, chromeCopy.branches, branch.name)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[440px]">
            <img
              className="h-full w-full rounded-full object-cover"
              src="https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?auto=format&fit=crop&w=1200&q=80"
              alt={t(locale, homeCopy.marketAlt)}
            />
            <img
              className="absolute bottom-3 start-3 h-32 w-32 rounded-full border-4 border-page object-cover sm:h-36 sm:w-36"
              src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80"
              alt={t(locale, homeCopy.aisleAlt)}
            />
            <div className="absolute top-6 end-0 flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2">
              <StatMark className="h-8 w-8 shrink-0" name="branches" />
              <div>
                <p className="text-xs text-muted">{t(locale, homeCopy.stats.branches)}</p>
                <p className="text-sm font-semibold">{fill(locale, homeCopy.stats.branchesAcross, { count: String(branches.length) })}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Nationwide />

      {/* <section className={homeSection} id="catalogue" aria-labelledby="products-heading">
        <div className={wrap}>
          <div className={sectionHead}>
            <div>
              <h2 className={heading} id="products-heading">Our products</h2>
              <p className={sectionSub}>Al Azima canned lines. Pack size is on the card. Add a line, then send the list to the branch.</p>
            </div>
            <Link className={pillSolid} href="/products">More products</Link>
          </div>
          <ProductGrid />
        </div>
      </section> */}

      <section className={homeSection} id="brands" aria-labelledby="brands-heading">
        <div className={wrap}>
          <div className={sectionHead}>
            <div>
              <h2 className={heading} id="brands-heading">{t(locale, homeCopy.brandsTitle)}</h2>
              <p className={sectionSub}>{t(locale, homeCopy.brandsLede)}</p>
            </div>
            <Link className={pillSolid} href="/products">{t(locale, homeCopy.buttons.ourBrands)}</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <Link className="flex h-20 items-center justify-center rounded-lg bg-white px-4 transition-colors hover:bg-leaf" href={brandHref(brand.name)} key={brand.name} aria-label={brand.name}>
                <img className="max-h-12 max-w-full object-contain" src={brand.src} alt="" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={homeSection} id="partners" aria-labelledby="partners-heading">
        <div className={wrap}>
          <div className={sectionHead}>
            <div>
              <h2 className={heading} id="partners-heading">{t(locale, homeCopy.partnersTitle)}</h2>
              <p className={sectionSub}>{t(locale, homeCopy.partnersLede)}</p>
            </div>
          </div>
          <div className="grid items-stretch gap-4 md:grid-cols-3">
            {homeCopy.quotes.map((item) => (
              <figure className="flex flex-col rounded-lg border border-line bg-white p-5" key={item.name.en}>
                <p className="text-sm font-semibold text-green">{t(locale, item.org)}</p>
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed">“{t(locale, item.quote)}”</blockquote>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-line pt-3 text-sm">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-soft" aria-hidden="true">
                    <UserMark className="h-7 w-7" />
                  </span>
                  <span>
                    <span className="block font-medium">{t(locale, item.name)}</span>
                    <span className="text-muted">{t(locale, item.role)}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-green-dark py-16 text-white" id="order" aria-labelledby="order-heading">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(147,192,44,0.38),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(147,192,44,0.16),transparent_48%)]" aria-hidden="true" />
        <div className={`${wrap} relative`}>
          <h2 className={`${heading} max-w-[60ch] text-white`} id="enquiry-heading">{t(locale, homeCopy.enquiryTitle)}</h2>
          <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-white/80">{t(locale, homeCopy.enquiryLede)}</p>
          
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {homeCopy.steps.map((step, index) => (
              <li className="rounded-2xl border border-white/10 bg-white/10 p-5" key={step.title.en}>
                <p className="text-3xl font-semibold tracking-[-0.03em] text-green">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-lg font-semibold text-white">{t(locale, step.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{t(locale, step.copy)}</p>
              </li>
            ))}
          </ol>
          <Link className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="/contact">{t(locale, homeCopy.buttons.startEnquiry)}</Link>
          
        </div>
      </section>

     

      <section className={homeSection} id="company" aria-labelledby="company-heading">
        <div className={wrap}>
          <div className={sectionHead}>
            <div>
              <h2 className={heading} id="company-heading">{t(locale, homeCopy.companyTitle)}</h2>
              <p className={sectionSub}>{t(locale, homeCopy.companyLede)}</p>
            </div>
          </div>
          <div className="grid items-stretch gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="overflow-hidden rounded-lg border border-line bg-white">
              <img className="h-72 w-full object-cover object-[center_55%]" src="https://nakhlaalbarari.com/wp-content/uploads/2026/06/STRONG-START-TO-EVERY-MORING-AL-AZIMA-BAKED-BEANS-400-GM.avif" alt={t(locale, homeCopy.journalAlt)} />
              <div className="p-5">
                <p className="text-sm font-semibold text-green">{t(locale, homeCopy.journalKicker)}</p>
                <h3 className="mt-1 text-lg font-semibold">{t(locale, homeCopy.journalTitle)}</h3>
                <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-muted">{t(locale, homeCopy.journalCopy)}</p>
              </div>
            </article>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
              {([
                [CATALOGUE_PDF, homeCopy.catalogueKicker, homeCopy.catalogueTitle, homeCopy.catalogueCopy],
                [PROFILE_PDF, homeCopy.profileKicker, homeCopy.profileTitle, homeCopy.profileCopy],
              ] as const).map(([href, kicker, title, copy]) => (
                <a className="flex flex-col justify-between rounded-lg border border-line bg-white p-5 transition-colors hover:border-green" href={href} key={title.en} target="_blank" rel="noopener">
                  <div>
                    <p className="text-sm font-semibold text-green">{t(locale, kicker)}</p>
                    <h3 className="mt-1 text-lg font-semibold">{t(locale, title)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{t(locale, copy)}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-green">{t(locale, chromeCopy.buttons.downloadPdf)} <span className="inline-block rtl:-scale-x-100" aria-hidden="true">→</span></span>
                </a>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">{t(locale, homeCopy.registration)}</p>
        </div>
      </section>

      <section className={homeSection} id="faq" aria-labelledby="faq-heading">
        <div className={wrap}>
          <div className={sectionHead}>
            <div>
              <h2 className={heading} id="faq-heading">{t(locale, homeCopy.faqTitle)}</h2>
              <p className={sectionSub}>{t(locale, homeCopy.faqLede)}</p>
            </div>
            <Link className={pillSolid} href="/faq">{t(locale, homeCopy.buttons.viewFaqs)}</Link>
          </div>
          <FaqList items={faqCopy.home.map((item) => ({ q: t(locale, item.q), a: t(locale, item.a) }))} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-green-dark py-16 text-white sm:py-20" aria-labelledby="closing-heading">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,192,44,0.32),transparent_58%)]" aria-hidden="true" />
        <div className={`${wrap} relative`}>
          <div className="mx-auto flex max-w-3xl flex-col items-center rounded-2xl border border-white/10 bg-white/10 px-6 py-10 text-center sm:px-12 sm:py-14">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-white" aria-hidden="true">
              <PageMark className="h-9 w-9" name="mail" />
            </span>
            <h2 className="mt-5 max-w-[18ch] text-3xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-4xl" id="closing-heading">{t(locale, homeCopy.closingTitle)}</h2>
            <p className="mt-3 max-w-[48ch] text-base leading-relaxed text-white/80">{t(locale, homeCopy.closingLede)}</p>
            <Link className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="/contact">
              {t(locale, homeCopy.buttons.contactTeam)}
              <span className="inline-block rtl:-scale-x-100" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
