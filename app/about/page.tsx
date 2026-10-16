import type { Metadata } from "next";
import Link from "next/link";
import { GroupMark, PageMark, StatMark, UserMark } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { brandHref } from "@/lib/brand";
import { brands } from "@/lib/catalog";
import { eyebrow, heading, wrap } from "@/lib/ui";

export const metadata: Metadata = { title: "About — Nakhla Al Barari" };

const aboutImage = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/About-us.avif";

const directors: { name: string; role: string; photo?: string }[] = [
  { name: "Yazeed Mohammed Al Suwaylih", role: "Managing Partner" },
  { name: "Basheer Nadammel", role: "General Manager", photo: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/BASHEER-NADAMMEL.avif" },
  { name: "Shameer Cheriya Puthan Veetil", role: "Managing Partner", photo: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/SHAMEER-CHERIYA-PUTHAN-VEETIL.avif" },
  { name: "Sohail Abdulrazzaq", role: "Managing Partner", photo: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/SOHAIL-ABDULRAZZAQ.avif" },
  { name: "Yahiya Purayil", role: "Managing Partner", photo: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/YAHIYA-PURAYIL.avif" },
];

const stats = [
  ["employees", "250+", "Employees"],
  ["products", "3,500+", "Products"],
  ["customers", "6,000+", "Customers"],
] as const;

export default function AboutPage() {
  return (
    <main>
      <PageBanner
        title="About Us"
        kicker="Building trust through quality"
        lede="Nakhla Al Barari Trading Company is committed to delivering high-quality products and dependable distribution solutions across Saudi Arabia. With a focus on excellence, integrity, and customer satisfaction, we have built strong relationships with retailers, suppliers, and business partners, serving as a trusted name in the FMCG industry."
        image={aboutImage}
        imageAlt="Nakhla Al Barari"
      />

      <section className="border-b border-line py-14" aria-labelledby="intro-heading">
        <div className={wrap}>
          <h2 className={heading} id="intro-heading">Company introduction</h2>
          <p className="mt-3 max-w-[62ch] text-muted">Nakhla Al Barari Trading Company operates as an FMCG wholesale company. It engages in the wholesale of food items, drinks, and other commodities through business-to-business, discount, wholesale, and retail channels in Saudi Arabia. Founded in 2021 and headquartered in Riyadh.</p>
          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map(([icon, value, label]) => (
              <div className="flex items-center gap-3 rounded-lg border border-line bg-white p-4" key={label}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-leaf">
                  <StatMark className="h-8 w-8" name={icon} />
                </span>
                <div>
                  <dd className="text-3xl font-semibold tracking-[-0.02em]">{value}</dd>
                  <dt className="text-sm text-muted">{label}</dt>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-line bg-leaf/40 py-14">
        <div className={`${wrap} grid items-stretch gap-4 lg:grid-cols-3`}>
          <article className="flex h-full flex-col rounded-lg border border-line bg-white p-5">
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-leaf"><PageMark className="h-7 w-7" name="vision" /></span>
            <p className={eyebrow}>Vision</p>
            <h2 className="mb-2 text-lg font-semibold">Commitment to customers</h2>
            <p className="mb-2.5 text-muted">We have developed a reputation for our commitment to our customers. As our community has become increasingly service-oriented and well-travelled, we are focused on providing the best selection of food products in Saudi Arabia.</p>
            <p className="m-0 text-muted">Our longer-term aim is to become the top leader in Saudi Arabia’s FMCG wholesale sector. We are proud to deliver a taste of home with a wide variety of food products.</p>
          </article>
          <article className="flex h-full flex-col rounded-lg border border-line bg-white p-5">
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-leaf"><PageMark className="h-7 w-7" name="mission" /></span>
            <p className={eyebrow}>Mission</p>
            <h2 className="mb-2 text-lg font-semibold">Promise of quality</h2>
            <p className="m-0 text-muted">To offer authentic, appealing, high-quality food and beverage brands to wholesale and retail channels in Saudi Arabia. The range is backed by a price promise and by long-term relationships with customers and clients across regions.</p>
          </article>
          <article className="flex h-full flex-col rounded-lg border border-line bg-white p-5">
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-leaf"><PageMark className="h-7 w-7" name="values" /></span>
            <p className={eyebrow}>Core values</p>
            <h2 className="mb-2 text-lg font-semibold">Treat everyone right</h2>
            <ul className="m-0 list-disc space-y-2 pl-[18px] text-muted">
              <li>We treat customers and clients with respect and faith.</li>
              <li>We grow through creativity, invention, collaboration, and innovation.</li>
              <li>We bring honesty, integrity, and business ethics into how the company works.</li>
              <li>We develop and invest in our employees, and make them part of the company.</li>
            </ul>
          </article>
        </div>
      </section>


      <section className="border-b border-line py-14" aria-labelledby="team-heading">
        <div className={wrap}>
          <h2 className={heading} id="team-heading">Team</h2>
          <p className="mt-3 max-w-[68ch] text-muted">We are a major importer, wholesaler, retailer and distributor of FMCG product commodities. This includes tea, coffee & milk; rice & flour; oil & spices; cold food & soft drinks, etc.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {directors.map((person) => (
              <article className="flex overflow-hidden rounded-lg border border-line bg-white" key={person.name}>
                {person.photo ? (
                  <img className="h-auto w-28 shrink-0 object-cover object-top sm:w-36" src={person.photo} alt="" />
                ) : (
                  <div className="grid w-28 shrink-0 place-items-center bg-leaf sm:w-36" aria-hidden="true">
                    <UserMark className="h-16 w-16" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-base font-semibold leading-snug">{person.name}</h3>
                  <p className="mt-1 text-sm font-medium text-green">{person.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-leaf/40 py-14">
        <div className={wrap}>
          <h2 className={heading}>Our brands</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <Link className="flex h-24 items-center justify-center rounded-lg border border-line bg-white px-4 transition-colors hover:border-green" href={brandHref(brand.name)} key={brand.name} aria-label={brand.name}>
                <img className="max-h-12 max-w-full object-contain" src={brand.src} alt="" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-dark py-14 text-white" aria-labelledby="about-contact-heading">
        <div className={`${wrap} flex flex-wrap items-end justify-between gap-8`}>
          <div className="min-w-[min(100%,280px)] flex-1">
            <h2 className={`${heading} text-white`} id="about-contact-heading">Contact</h2>
            <dl className="mt-6 grid gap-5 sm:grid-cols-3">
              <div className="flex gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10"><StatMark className="h-6 w-6 brightness-0 invert" name="branches" /></span>
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-white/60">Address</dt>
                  <dd className="mt-1 text-sm text-white/90">Al Masani Dist., Domat Al Jandal Street. Warehouses 26 and 27, Riyadh.</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10"><PageMark className="h-6 w-6 brightness-0 invert" name="phone" /></span>
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-white/60">Phone</dt>
                  <dd className="mt-1 text-sm"><a className="text-white hover:text-leaf" href="tel:+966555729077">+966 555729077</a></dd>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10"><PageMark className="h-6 w-6 brightness-0 invert" name="mail" /></span>
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-white/60">Email</dt>
                  <dd className="mt-1 text-sm"><a className="text-white hover:text-leaf" href="mailto:contact@nbarari.com">contact@nbarari.com</a></dd>
                </div>
              </div>
            </dl>
            <p className="mt-5 text-sm"><Link className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white" href="/contact">Contact page</Link></p>
          </div>
          <Link className="inline-flex h-11 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="/products">Explore Our Brands</Link>
        </div>
      </section>
    </main>
  );
}
