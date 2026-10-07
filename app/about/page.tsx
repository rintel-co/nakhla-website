import type { Metadata } from "next";
import { StatMark, UserMark } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { brands, PROFILE_PDF } from "@/lib/catalog";
import { eyebrow, heading, pillSolid, wrap } from "@/lib/ui";

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

      <section className="border-b border-line py-12">
        <div className={wrap}>
          <h2 className={heading}>Who are we?</h2>
          <p className="mt-3 max-w-[68ch] text-muted">Nakhla Al Barari Trading Company operates as an FMCG wholesale company. It engages in the wholesale of food items, drinks, and other commodities through business-to-business, discount, wholesale, and retail channels in Saudi Arabia. Founded in 2021 and headquartered in Riyadh.</p>
          <dl className="mt-8 grid grid-cols-3 border-y border-line max-[640px]:grid-cols-1">
            {stats.map(([icon, value, label]) => (
              <div className="flex items-center gap-3 border-line py-5 max-[640px]:border-b max-[640px]:last:border-b-0 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0" key={label}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-soft">
                  <StatMark className="h-8 w-8" name={icon} />
                </span>
                <div>
                  <dd className="text-3xl font-semibold tracking-[-0.02em]">{value}</dd>
                  <dt className="mt-1 text-sm text-muted">{label}</dt>
                </div>
              </div>
            ))}
          </dl>
          <a className={`${pillSolid} mt-6`} href={PROFILE_PDF} target="_blank" rel="noopener">Download company profile</a>
        </div>
      </section>

      <section className="border-b border-line py-12">
        <div className={wrap}>
          <h2 className={heading}>Our directors</h2>
          <p className="mt-3 max-w-[68ch] text-muted">We are a major importer, wholesaler, retailer, and distributor of FMCG commodities. This includes tea, coffee and milk, rice and flour, oil and spices, cold food, and soft drinks.</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {directors.map((person) => (
              <article className="overflow-hidden rounded-lg border border-line bg-white" key={person.name}>
                {person.photo ? (
                  <img className="aspect-[2/3] w-full object-cover object-top" src={person.photo} alt="" />
                ) : (
                  <div className="grid aspect-[2/3] w-full place-items-center bg-soft" aria-hidden="true">
                    <UserMark className="h-16 w-16" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-sm font-semibold leading-snug">{person.name}</h3>
                  <p className="mt-1 text-sm text-muted">{person.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-12">
        <div className={`${wrap} grid gap-4 lg:grid-cols-3`}>
          <article className="rounded-lg border border-line bg-white p-5">
            <p className={eyebrow}>Vision</p>
            <h2 className="mb-2 text-lg font-semibold">Commitment to customers</h2>
            <p className="mb-2.5 text-muted">We have developed a reputation for our commitment to our customers. As our community has become increasingly service-oriented and well-travelled, we are focused on providing the best selection of food products in Saudi Arabia.</p>
            <p className="m-0 text-muted">Our longer-term aim is to become the top leader in Saudi Arabia’s FMCG wholesale sector. We are proud to deliver a taste of home with a wide variety of food products.</p>
          </article>
          <article className="rounded-lg border border-line bg-white p-5">
            <p className={eyebrow}>Mission</p>
            <h2 className="mb-2 text-lg font-semibold">Promise of quality</h2>
            <p className="m-0 text-muted">To offer authentic, appealing, high-quality food and beverage brands to wholesale and retail channels in Saudi Arabia. The range is backed by a price promise and by long-term relationships with customers and clients across regions.</p>
          </article>
          <article className="rounded-lg border border-line bg-white p-5">
            <p className={eyebrow}>Core values</p>
            <h2 className="mb-2 text-lg font-semibold">Treat everyone right</h2>
            <ul className="m-0 list-disc pl-[18px] text-muted">
              <li className="mb-2">We treat customers and clients with respect and faith.</li>
              <li className="mb-2">We grow through creativity, invention, collaboration, and innovation.</li>
              <li className="mb-2">We bring honesty, integrity, and business ethics into how the company works.</li>
              <li>We develop and invest in our employees, and make them part of the company.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="py-12">
        <div className={wrap}>
          <h2 className={heading}>Our brands</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <figure className="m-0 flex h-20 items-center justify-center rounded-lg border border-line bg-white px-4" key={brand.name}>
                <img className="max-h-12 max-w-full object-contain" src={brand.src} alt={brand.name} />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
