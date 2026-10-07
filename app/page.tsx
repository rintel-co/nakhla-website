import type { Metadata } from "next";
import Link from "next/link";
import { HeroLogo } from "@/components/hero-logo";
import { AudienceMark, StatMark, UserMark } from "@/components/icons";
import { ServiceTabs } from "@/components/service-tabs";
import { Newsletter } from "@/components/newsletter";
import { ProductGrid } from "@/components/product-grid";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { brands, branches, CATALOGUE_PDF, PROFILE_PDF, serviceGroups } from "@/lib/catalog";
import { heading, heroEm, heroTitle, homeSection, pillSolid, sectionHead, sectionSub, wrap } from "@/lib/ui";

const quotes = [
  {
    org: "Laqsa Hypermarket, Riyadh",
    quote: "As a hypermarket, we highly value our partnership with Nakhla Al Barari Trading Co. Their strong distribution network and dependable logistics have consistently ensured that we receive high-quality products on time, meeting both our demands and our customers' expectations. Their professionalism and commitment to service make them a highly recommended distributor for any retailer.",
    name: "Abdul Latheef",
    role: "CEO & Managing Director",
  },
  {
    org: "Sheroora",
    quote: "We highly value our partnership with Nakhla Al Barari. Their reliable distribution network and efficient logistics have consistently delivered high-quality products on time, helping us meet the demands of our customers seamlessly. Their professionalism and dedication to service excellence make them an ideal distributor for any retailer seeking a dependable partner.",
    name: "Oathad Al Khima",
    role: "CEO",
  },
  {
    org: "Nestlé Saudi Arabia",
    quote: "One of our top 5 customers in the central region. Sales, payment, and distribution have progressed year after year.",
    name: "Ramadan Hassan",
    role: "GT Supervisor",
  },
];

const audiences = [
  ["hotels", "Hotels & restaurants", "5-star hotels, cafes, and restaurant kitchens."],
  ["hypermarkets", "Hypermarkets", "Large floors that reorder in cases."],
  ["grocery", "Grocery counters", "Chains and independent stores, plus walk-in trade."],
  ["official", "Official accounts", "Corporations, commissions, consulates, and embassies in Riyadh."],
] as const;

const steps = [
  ["01", "Search or browse", "The homepage selection: sweet corn, milk, chickpeas, foul, baked beans, pineapple, and kidney beans."],
  ["02", "Add lines to a trade list", "Pack size stays on the card. Quantity is confirmed with sales."],
  ["03", "Send it on WhatsApp", "The list opens a chat to +966 555729077, or email contact@nbarari.com."],
];

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
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: group.name,
            itemListElement: group.items.map((name) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Product", name },
            })),
          },
        },
      })),
    },
  ],
};

export default function HomePage() {
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
          aria-label="Nakhla Al Barari"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <HeroLogo />
        <div className={`${wrap} relative mt-auto flex flex-col pb-12 pt-24 text-white max-[640px]:pb-8`}>
          <p className="mb-3 inline-flex w-fit rounded-full bg-white/20 px-3 py-1 text-sm font-semibold text-white">Riyadh, since 2021</p>
          <h1 className={`${heroTitle} text-white`}>Wholesale food<br /><em className={heroEm}>across Saudi Arabia.</em></h1>
          <p className="mb-6 max-w-[62ch] text-base leading-relaxed text-white/80">Nakhla Al Barari Trading Company is an FMCG wholesaler of food, drinks, and other commodities. We sell through business-to-business, discount, wholesale, and retail channels in Saudi Arabia, headquartered in Riyadh.</p>
          <div className="flex flex-wrap gap-3">
            <Link className={pillSolid} href="/products">Explore products</Link>
            <a className="inline-flex h-11 items-center justify-center rounded-md border border-white/80 px-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink" href={PROFILE_PDF} target="_blank" rel="noopener">Company profile</a>
            <a className="inline-flex h-11 items-center justify-center rounded-md border border-white/80 px-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink" href="#order">Order process</a>
          </div>
          <dl className="mt-8 flex flex-wrap gap-8 border-t border-white/25 pt-5 text-sm">
            {([
              ["branches", "Branches", String(branches.length)],
              ["products", "Products", "3,500+"],
              ["customers", "Customers", "6,000+"],
            ] as const).map(([icon, label, value]) => (
              <div className="flex items-center gap-3" key={label}>
                <StatMark className="h-9 w-9 shrink-0 brightness-0 invert" name={icon} />
                <div>
                  <dt className="text-white/70">{label}</dt>
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
              <h2 className={heading} id="services-heading">Our Services</h2>
              <p className={sectionSub}>Four services. Pick a group, then open the full product list.</p>
            </div>
            <Link className={pillSolid} href="/products">Our Products</Link>
          </div>
          <ServiceTabs />
        </div>
      </section>

      <section className={homeSection} id="customers" aria-labelledby="customers-heading">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_440px]`}>
          <div>
            <h2 className={heading} id="customers-heading">Stocked for hotels, hypermarkets, and grocery counters.</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">Importer, wholesaler, and distributor of tea, coffee, milk, rice, flour, oil, spices, frozen food, and soft drinks across Saudi Arabia.</p>
            <Link className="mt-3 inline-block text-sm font-semibold text-green" href="/about">About the company</Link>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {audiences.map(([name, title, copy]) => (
                <article className="flex gap-3 rounded-lg border border-line bg-white p-3" key={name}>
                  <AudienceMark className="h-8 w-8 shrink-0" name={name} />
                  <div>
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="mt-0.5 text-sm leading-snug text-muted">{copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-5 border-t border-line pt-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold">Branches</p>
                <Link className="text-sm font-semibold text-green" href="/branches">View all</Link>
              </div>
              <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5">
                {branches.map((branch) => (
                  <li key={branch.name}>
                    <a className="flex items-center gap-1.5 text-sm text-muted hover:text-green" href={branch.map} target="_blank" rel="noopener">
                      <StatMark className="h-4 w-4 shrink-0" name="branches" />
                      {branch.name}
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
              alt="Market stall of fresh food"
            />
            <img
              className="absolute bottom-3 left-3 h-32 w-32 rounded-full border-4 border-page object-cover sm:h-36 sm:w-36"
              src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80"
              alt="Grocery aisle stocked with cereals and canned food"
            />
            <div className="absolute top-6 right-0 flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2">
              <StatMark className="h-8 w-8 shrink-0" name="branches" />
              <div>
                <p className="text-xs text-muted">Branches</p>
                <p className="text-sm font-semibold">{branches.length} across Saudi Arabia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={homeSection} id="catalogue" aria-labelledby="products-heading">
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
      </section>

      <section className={homeSection} id="partners" aria-labelledby="partners-heading">
        <div className={wrap}>
          <div className={sectionHead}>
            <div>
              <h2 className={heading} id="partners-heading">What our partners say</h2>
              <p className={sectionSub}>Retailers and a supplier, in their words.</p>
            </div>
          </div>
          <div className="grid items-stretch gap-4 md:grid-cols-3">
            {quotes.map((item) => (
              <figure className="flex flex-col rounded-lg border border-line bg-white p-5" key={item.name}>
                <p className="text-sm font-semibold text-green">{item.org}</p>
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed">“{item.quote}”</blockquote>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-line pt-3 text-sm">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-soft" aria-hidden="true">
                    <UserMark className="h-7 w-7" />
                  </span>
                  <span>
                    <span className="block font-medium">{item.name}</span>
                    <span className="text-muted">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green py-14 text-white" id="order" aria-labelledby="order-heading">
        <div className={wrap}>
          <h2 className={`${heading} max-w-[60ch] text-white`} id="order-heading">Order the way trade already works.</h2>
          <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-white/80">No public checkout. The catalogue is for building a list. Confirmation, price, and delivery stay with the branch.</p>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map(([num, title, copy]) => (
              <li className="rounded-2xl bg-white/10 p-5" key={num}>
                <p className="text-3xl font-semibold tracking-[-0.03em] text-white">{num}</p>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{copy}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppLink className="inline-flex h-11 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-green transition-colors hover:bg-soft">Send list on WhatsApp</WhatsAppLink>
            <a className="inline-flex h-11 items-center justify-center rounded-md border border-white/70 px-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-green" href={CATALOGUE_PDF} target="_blank" rel="noopener">Download catalogue</a>
          </div>
        </div>
      </section>

      <section className={homeSection} id="brands" aria-labelledby="brands-heading">
        <div className={wrap}>
          <div className={sectionHead}>
            <div>
              <h2 className={heading} id="brands-heading">Brands on the floor</h2>
              <p className={sectionSub}>House and partner labels we distribute.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <figure className="m-0 flex h-20 items-center justify-center rounded-lg bg-white px-4" key={brand.name}>
                <img className="max-h-12 max-w-full object-contain" src={brand.src} alt={brand.name} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={homeSection} id="company" aria-labelledby="company-heading">
        <div className={wrap}>
          <div className={sectionHead}>
            <div>
              <h2 className={heading} id="company-heading">From the company</h2>
              <p className={sectionSub}>A note from the range, and the files buyers ask for.</p>
            </div>
          </div>
          <div className="grid items-stretch gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="overflow-hidden rounded-lg border border-line bg-white">
              <img className="h-72 w-full object-cover object-[center_55%]" src="https://nakhlaalbarari.com/wp-content/uploads/2026/06/STRONG-START-TO-EVERY-MORING-AL-AZIMA-BAKED-BEANS-400-GM.avif" alt="Al Azima baked beans served for breakfast" />
              <div className="p-5">
                <p className="text-sm font-semibold text-green">Journal</p>
                <h3 className="mt-1 text-lg font-semibold">A strong start to every morning</h3>
                <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-muted">Al Azima baked beans in tomato sauce, 400 g. Heat and serve for breakfast, wraps, or a side.</p>
              </div>
            </article>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
              {([
                [CATALOGUE_PDF, "Catalogue", "Product catalogue", "The current wholesale range, as a PDF."],
                [PROFILE_PDF, "Profile", "Company profile", "The company file buyers ask for."],
              ] as const).map(([href, kicker, title, copy]) => (
                <a className="flex flex-col justify-between rounded-lg border border-line bg-white p-5 transition-colors hover:border-green" href={href} key={title} target="_blank" rel="noopener">
                  <div>
                    <p className="text-sm font-semibold text-green">{kicker}</p>
                    <h3 className="mt-1 text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p>
                  </div>
                  <span className="mt-5 text-sm font-semibold text-green">Download PDF →</span>
                </a>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">CR 1010679869 · VAT 310835914300003</p>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
