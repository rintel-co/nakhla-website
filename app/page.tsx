import type { Metadata } from "next";
import Link from "next/link";
import { HeroLogo } from "@/components/hero-logo";
import { AudienceMark, GroupMark, PageMark, StatMark, UserMark } from "@/components/icons";
import { CountUp } from "@/components/count-up";
import { Nationwide } from "@/components/nationwide";
import { brandHref } from "@/lib/brand";
import { brands, branches, CATALOGUE_PDF, PROFILE_PDF, serviceGroups } from "@/lib/catalog";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { aboutCopy } from "@/lib/i18n/pages/about";
import { faqCopy } from "@/lib/i18n/pages/faq";
import { homeCopy } from "@/lib/i18n/pages/home";
import { servicesCopy } from "@/lib/i18n/pages/services";
import { getLocale } from "@/lib/i18n/locale";
import { fill, label, t } from "@/lib/i18n/phrase";
import { heading, heroTitle, homeSection, pillSolid, sectionHead, sectionSub, wrap } from "@/lib/ui";

const audienceOrder = ["hotels", "hypermarkets", "grocery", "official"] as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const title = "Nakhla Al Barari — Wholesale food across Saudi Arabia";
  const description =
    "Nakhla Al Barari Trading Company is an FMCG wholesaler in Riyadh. Food products, frozen foods, soft drinks and beverages, and non-food lines for hotels, hypermarkets, and grocery counters across Saudi Arabia.";
  return {
    title,
    description,
    keywords: [homeCopy.overviewKeywords, homeCopy.customersKeywords].flatMap((item) => t(locale, item).split(/\s*[;؛]\s*/)),
    openGraph: {
      title,
      description:
        "Food products, frozen foods, soft drinks and beverages, and non-food lines. Headquartered in Riyadh, supplying hotels, hypermarkets, and grocery counters across Saudi Arabia.",
      type: "website",
      locale: "en_SA",
      siteName: "Nakhla Al Barari",
      url: "https://nakhlaalbarari.com/",
    },
  };
}

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
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black to-transparent" />
        <HeroLogo />
        <div className={`${wrap} relative mt-auto flex flex-col pb-12 pt-24 text-white max-[640px]:pb-8`}>
          <h1 className={`${heroTitle} hero-in max-w-3xl text-white`}>{t(locale, homeCopy.heroTitle)}</h1>
          <p className="hero-in hero-in-2 mb-6 max-w-[62ch] text-base leading-relaxed text-white/80">{t(locale, homeCopy.heroLede)}</p>
          <div className="hero-in hero-in-3 flex flex-wrap items-center gap-3">
            <Link className={pillSolid} href="/contact">{t(locale, homeCopy.buttons.requestPricing)}</Link>
          </div>
          <dl className="hero-in hero-in-4 mt-8 flex flex-wrap gap-8 border-t border-white/25 pt-5 text-sm">
            {([
              ["branches", homeCopy.stats.branches, String(branches.length)],
              ["products", homeCopy.stats.products, "3,500+"],
              ["customers", homeCopy.stats.customers, "6,000+"],
            ] as const).map(([icon, stat, value]) => (
              <div className="group flex items-center gap-3" key={icon}>
                <StatMark className="h-9 w-9 shrink-0 brightness-0 invert transition duration-300 group-hover:scale-110" name={icon} />
                <div>
                  <dt className="text-white/70">{t(locale, stat)}</dt>
                  <dd className="text-3xl font-bold tracking-[-0.03em]"><CountUp value={value} /></dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={`${homeSection} bg-leaf`} id="overview" aria-labelledby="overview-heading">
        <div className={`${wrap} grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]`}>
          <div>
            <h2 className={`${heading} max-w-[16ch]`} id="overview-heading">{t(locale, homeCopy.overviewTitle)}</h2>
            <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-ink/70">{t(locale, homeCopy.overviewLede)}</p>
            <Link className={`${pillSolid} mt-6`} href="/about">{t(locale, homeCopy.overviewButton)}</Link>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-3xl lg:ms-auto lg:me-0 lg:max-w-[460px]">
            <img className="absolute inset-0 h-full w-full object-cover object-bottom" src="https://nakhlaalbarari.com/wp-content/uploads/2026/06/Nakhla-Al-Barari-Contact-Us.avif" alt={t(locale, homeCopy.overviewImageAlt)} />
          </div>
        </div>
      </section>

      <section className="bg-green-dark py-16 text-white sm:py-20" id="services" aria-labelledby="services-heading">
        <div className={wrap}>
          <div className={sectionHead}>
            <div>
              <h2 className={`${heading} text-white`} id="services-heading">{t(locale, homeCopy.servicesTitle)}</h2>
              <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-white/75">{t(locale, homeCopy.servicesLede)}</p>
            </div>
            <Link className="inline-flex h-11 shrink-0 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="/services">{t(locale, homeCopy.buttons.viewCategories)}</Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {serviceGroups[0] ? (
              <Link
                className="group flex min-h-72 flex-col justify-between rounded-3xl bg-leaf p-6 text-ink transition-colors hover:bg-white sm:min-h-80 sm:p-8"
                href={`/services#${serviceGroups[0].name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
              >
                <GroupMark className="h-14 w-14 transition duration-300 group-hover:scale-110" name={serviceGroups[0].name} />
                <div className="mt-10">
                  <h3 className="text-3xl font-bold text-ink">{t(locale, servicesCopy.groups[serviceGroups[0].name as keyof typeof servicesCopy.groups].name)}</h3>
                  <p className="mt-3 max-w-[36ch] text-base leading-relaxed text-ink/70">{t(locale, servicesCopy.groups[serviceGroups[0].name as keyof typeof servicesCopy.groups].summary)}</p>
                </div>
              </Link>
            ) : null}
            <ul className="grid gap-4">
              {serviceGroups.slice(1).map((group) => (
                <li key={group.name}>
                  <Link
                    className="group flex h-full items-center gap-4 rounded-3xl border border-white/10 bg-white/10 p-5 text-white transition-colors hover:bg-white/15"
                    href={`/services#${group.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                  >
                    <GroupMark className="h-12 w-12 shrink-0 brightness-0 invert transition duration-300 group-hover:scale-110" name={group.name} />
                    <div>
                      <h3 className="text-xl font-bold text-white">{t(locale, servicesCopy.groups[group.name as keyof typeof servicesCopy.groups].name)}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">{t(locale, servicesCopy.groups[group.name as keyof typeof servicesCopy.groups].summary)}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${homeSection} bg-page`} id="why" aria-labelledby="why-heading">
        <div className={`${wrap} grid items-stretch gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]`}>
          <div className="relative min-h-80 overflow-hidden rounded-3xl lg:min-h-full">
            <img className="absolute inset-0 h-full w-full object-cover" src="https://nakhlaalbarari.com/wp-content/uploads/2026/06/About-us.avif" alt={t(locale, aboutCopy.imageAlt)} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-sm font-semibold text-green">{t(locale, aboutCopy.valuesTitle)}</p>
              <h2 className="mt-2 max-w-[14ch] text-3xl leading-tight font-bold tracking-[-0.03em] text-white sm:text-4xl" id="why-heading">{t(locale, homeCopy.whyTitle)}</h2>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {aboutCopy.values.map((value, index) => {
              const featured = index === 0;
              const mark = (["mission", "usp", "values", "vision"] as const)[index === 2 ? 2 : index > 2 ? index - 1 : index];
              return (
                <li className={`group relative overflow-hidden rounded-3xl p-5 ${featured ? "bg-green-dark text-white sm:col-span-2" : "border border-line bg-white"}`} key={value.title.en}>
                  {index === 2 ? (
                    <StatMark className="pointer-events-none absolute -bottom-6 -end-4 h-28 w-28 opacity-20 transition duration-300 group-hover:scale-110" name="customers" />
                  ) : (
                    <PageMark className={`pointer-events-none absolute -bottom-6 -end-4 h-28 w-28 transition duration-300 group-hover:scale-110 ${featured ? "opacity-25 brightness-0 invert" : "opacity-20"}`} name={mark} />
                  )}
                  <h3 className={`relative text-lg font-bold ${featured ? "text-white" : "text-ink"}`}>{t(locale, value.title)}</h3>
                  <p className={`relative mt-2 max-w-[46ch] text-sm leading-relaxed ${featured ? "text-white/75" : "text-ink/70"}`}>{t(locale, value.copy)}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className={`${homeSection} bg-leaf`} id="customers" aria-labelledby="customers-heading">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_440px]`}>
          <div>
            <h2 className={heading} id="customers-heading">{t(locale, homeCopy.customersTitle)}</h2>
            <p className="mt-3 max-w-[62ch] text-ink/70">{t(locale, homeCopy.customersLede)}</p>
            <Link className={`${pillSolid} mt-6`} href="/contact">{t(locale, homeCopy.customersButton)}</Link>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {audienceOrder.map((name, index) => (
                <article className={`group relative min-h-32 overflow-hidden rounded-3xl p-4 ${index === 0 ? "bg-green-dark text-white" : "border border-line bg-white"}`} key={name}>
                  <AudienceMark className={`pointer-events-none absolute -bottom-6 -end-4 h-28 w-28 transition duration-300 group-hover:scale-110 ${index === 0 ? "opacity-25 brightness-0 invert" : "opacity-20"}`} name={name} />
                  <div className="relative">
                    <h3 className={`text-base font-bold ${index === 0 ? "text-white" : "text-ink"}`}>{t(locale, homeCopy.audiences[name].title)}</h3>
                    <p className={`mt-1 text-sm leading-snug ${index === 0 ? "text-white/75" : "text-muted"}`}>{t(locale, homeCopy.audiences[name].copy)}</p>
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
              className="h-full w-full rounded-3xl object-cover"
              src="https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?auto=format&fit=crop&w=1200&q=80"
              alt={t(locale, homeCopy.marketAlt)}
            />
            <img
              className="absolute bottom-4 start-4 h-28 w-28 rounded-2xl border-4 border-leaf object-cover sm:h-32 sm:w-32"
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

      <section className="bg-green-dark py-16 text-white sm:py-20" id="brands" aria-labelledby="brands-heading">
        <div className={wrap}>
          <div className={sectionHead}>
            <div>
              <h2 className={`${heading} text-white`} id="brands-heading">{t(locale, homeCopy.brandsTitle)}</h2>
              <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-white/75">{t(locale, homeCopy.brandsLede)}</p>
            </div>
            <Link className="inline-flex h-11 shrink-0 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="/products">{t(locale, homeCopy.buttons.ourBrands)}</Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <Link className="flex h-24 items-center justify-center rounded-2xl bg-white px-4 transition-colors hover:bg-leaf" href={brandHref(brand.name)} key={brand.name} aria-label={brand.name}>
                <img className="max-h-12 max-w-full object-contain" src={brand.src} alt="" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white sm:py-20" id="partners" aria-labelledby="partners-heading">
        <div className={wrap}>
          <div className={sectionHead}>
            <div>
              <h2 className={`${heading} text-white`} id="partners-heading">{t(locale, homeCopy.partnersTitle)}</h2>
              <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-white/75">{t(locale, homeCopy.partnersLede)}</p>
            </div>
          </div>
          <div className="grid items-stretch gap-4 md:grid-cols-3">
            {homeCopy.quotes.map((item, index) => (
              <figure className={`relative flex flex-col overflow-hidden rounded-3xl p-6 ${index === 0 ? "bg-leaf text-ink" : "border border-white/10 bg-white/10 text-white"}`} key={item.name.en}>
                <span className={`pointer-events-none absolute -bottom-8 -end-2 font-serif text-[8rem] leading-none ${index === 0 ? "text-green-dark/15" : "text-white/10"}`} aria-hidden="true">“</span>
                <p className={`relative text-sm font-semibold ${index === 0 ? "text-green-dark" : "text-green"}`}>{t(locale, item.org)}</p>
                <blockquote className="relative mt-4 flex-1 text-lg leading-relaxed">“{t(locale, item.quote)}”</blockquote>
                <figcaption className={`relative mt-6 flex items-center gap-3 border-t pt-4 text-sm ${index === 0 ? "border-ink/10" : "border-white/10"}`}>
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${index === 0 ? "bg-white" : "bg-white/10"}`} aria-hidden="true">
                    <UserMark className={`h-7 w-7 ${index === 0 ? "" : "brightness-0 invert"}`} />
                  </span>
                  <span>
                    <span className="block font-medium">{t(locale, item.name)}</span>
                    <span className={index === 0 ? "text-ink/70" : "text-white/70"}>{t(locale, item.role)}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-green-dark py-16 text-white sm:py-20" id="order" aria-labelledby="order-heading">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(147,192,44,0.28),transparent_52%)]" aria-hidden="true" />
        <div className={`${wrap} relative`}>
          <h2 className={`${heading} max-w-[18ch] text-white`} id="enquiry-heading">{t(locale, homeCopy.enquiryTitle)}</h2>
          <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-white/75">{t(locale, homeCopy.enquiryLede)}</p>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {homeCopy.steps.map((step, index) => {
              const featured = index === 0;
              return (
                <li className={`relative min-h-56 overflow-hidden rounded-3xl p-6 ${featured ? "bg-leaf text-ink" : "border border-white/10 bg-white/10 text-white"}`} key={step.title.en}>
                  <span className={`pointer-events-none absolute -bottom-8 -start-2 text-[7.5rem] font-bold leading-none tracking-[-0.06em] ${featured ? "text-green-dark/10" : "text-white/10"}`} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <p className={`relative text-sm font-bold ${featured ? "text-green-dark" : "text-green"}`}>{String(index + 1).padStart(2, "0")}</p>
                  <h3 className={`relative mt-8 text-xl font-bold ${featured ? "text-ink" : "text-white"}`}>{t(locale, step.title)}</h3>
                  <p className={`relative mt-2 text-sm leading-relaxed ${featured ? "text-ink/70" : "text-white/75"}`}>{t(locale, step.copy)}</p>
                </li>
              );
            })}
          </ol>
          <Link className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="/contact">{t(locale, homeCopy.buttons.startEnquiry)}</Link>
        </div>
      </section>

     

      <section className={`${homeSection} bg-white`} id="company" aria-labelledby="company-heading">
        <div className={wrap}>
          <div className={sectionHead}>
            <div>
              <h2 className={heading} id="company-heading">{t(locale, homeCopy.companyTitle)}</h2>
              <p className={sectionSub}>{t(locale, homeCopy.companyLede)}</p>
            </div>
          </div>
          <div className="grid items-stretch gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="overflow-hidden rounded-3xl border border-line bg-white">
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
                <a className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-leaf p-6 text-ink transition-colors hover:bg-white" href={href} key={title.en} target="_blank" rel="noopener">
                  <svg className="pointer-events-none absolute -bottom-8 -end-4 h-36 w-36 text-green-dark/15" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <path d="M16 8h12l8 8v22a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M28 8v8h8M18 28h12M18 34h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <div className="relative">
                    <p className="text-sm font-semibold text-green-dark">{t(locale, kicker)}</p>
                    <h3 className="mt-1 text-lg font-semibold text-ink">{t(locale, title)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{t(locale, copy)}</p>
                  </div>
                  <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-green-dark">{t(locale, chromeCopy.buttons.downloadPdf)} <span className="inline-block rtl:-scale-x-100" aria-hidden="true">→</span></span>
                </a>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">{t(locale, homeCopy.registration)}</p>
        </div>
      </section>

      <section className="bg-leaf py-16 sm:py-20" id="faq" aria-labelledby="faq-heading">
        <div className={`${wrap} grid items-start gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-14`}>
          <div>
            <h2 className={heading} id="faq-heading">{t(locale, homeCopy.faqTitle)}</h2>
            <p className="mt-3 max-w-[36ch] text-base leading-relaxed text-muted">{t(locale, homeCopy.faqLede)}</p>
            <Link className={`${pillSolid} mt-6`} href="/faq">{t(locale, homeCopy.buttons.viewFaqs)}</Link>
          </div>
          <div className="rounded-3xl bg-white px-5 sm:px-7">
            {["What products does Nakhla Al Barari Trading Co. supply?", "Who can purchase products from Nakhla Al Barari?", "How can I place a wholesale order?", "How can I contact Nakhla Al Barari's sales team?"].map((question) => {
              const item = faqCopy.home.find((entry) => entry.q.en === question);
              if (!item) return null;
              return (
                <details className="group border-b border-line py-5 last:border-b-0" key={item.q.en}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold [&::-webkit-details-marker]:hidden">
                    <span>{t(locale, item.q)}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-leaf text-lg leading-none text-green-dark transition-colors group-open:bg-green-dark group-open:text-white" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 max-w-[62ch] pe-12 text-sm leading-relaxed text-muted">{t(locale, item.a)}</p>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-green-dark py-16 text-white sm:py-20" aria-labelledby="closing-heading">
        <div className={wrap}>
          <div className="relative grid items-center gap-6 overflow-hidden rounded-3xl bg-leaf px-6 py-10 text-ink sm:px-12 sm:py-14 lg:grid-cols-[1fr_auto]">
            <svg className="pointer-events-none absolute -bottom-16 -end-8 h-56 w-56 text-green-dark/15" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <path d="M18 14c8 0 12 6 12 14 0 10-6 16-14 22-2 1-4 0-5-2l-3-6c-1-2 0-4 2-5l5-2c1-1 3 0 4 1l2 3c4-2 7-6 8-10l-3-2c-1-1-2-3-1-4l2-5c1-2 3-3 5-2l6 3c2 1 3 3 2 5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            </svg>
            <div className="relative">
              <h2 className="max-w-[18ch] text-3xl leading-[1.12] font-bold tracking-[-0.03em] text-ink sm:text-4xl" id="closing-heading">{t(locale, homeCopy.closingTitle)}</h2>
              <p className="mt-3 max-w-[48ch] text-base leading-relaxed text-ink/70">{t(locale, homeCopy.closingLede)}</p>
            </div>
            <Link className="relative inline-flex h-12 items-center justify-center gap-2 rounded-md bg-green-dark px-5 text-sm font-semibold text-white transition-colors hover:bg-ink" href="/contact">
              {t(locale, homeCopy.buttons.contactTeam)}
              <span className="inline-block rtl:-scale-x-100" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
