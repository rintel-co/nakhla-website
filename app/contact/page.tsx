import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { HeroLogo } from "@/components/hero-logo";
import { StatMark } from "@/components/icons";
import { enquiryText } from "@/lib/brand";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { branches } from "@/lib/catalog";
import { catalogue } from "@/lib/catalogue";
import { pageBanner, wrap } from "@/lib/ui";

function phoneDigits(phone: string) {
  return phone.replace(/\D/g, "");
}

export const metadata: Metadata = { title: "Contact — Nakhla Al Barari" };

const exterior = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Nakhla-Al-Barari-Contact-Us.avif";
const meetingRoom = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Home-Office.avif";

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ product?: string; branch?: string }> }) {
  const { product, branch: branchName } = await searchParams;
  const item = product ? catalogue.find((entry) => entry.slug === product) : undefined;
  const selected = branchName ? branches.find((branch) => branch.name === branchName) : undefined;
  const message = item ? enquiryText(item) : selected ? `Enquiry for ${selected.name}.\n${selected.address}\n${selected.phone}` : "";

  return (
    <main>
      <section className={`${pageBanner} relative bg-ink text-white`}>
        <HeroLogo />
        <div className={`${wrap} grid h-full items-center gap-8 py-8 lg:grid-cols-[1.05fr_0.95fr]`}>
          <div>
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link className="hover:text-white" href="/">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Contact</li>
              </ol>
            </nav>
            <p className="mb-2 text-sm text-white/75">Riyadh headquarters</p>
            <h1 className="text-[40px] leading-tight font-semibold tracking-[-0.02em] text-white max-[640px]:text-[32px]">Contact</h1>
            <p className="mt-3 max-w-[42ch] text-white/80">Al Masani Dist., Domat Al Jandal Street, Riyadh.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img className="h-[300px] w-full rounded-lg object-cover object-bottom max-[640px]:h-[200px]" src={exterior} alt="Nakhla Al Barari warehouse and delivery vans" />
            <img className="h-[300px] w-full rounded-lg object-cover max-[640px]:h-[200px]" src={meetingRoom} alt="Nakhla Al Barari meeting room" />
          </div>
        </div>
      </section>
      <section className="scroll-mt-20 border-b border-line bg-leaf/40 py-12" id="enquiry">
        <div className={`${wrap} grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,520px)]`}>
          <div>
            <h2 className="text-2xl font-semibold">Request a quote</h2>
            <p className="mt-2 max-w-[40ch] text-muted">Prices, delivery, and account questions stay with the sales desk.</p>
            <dl className="mt-6 grid gap-4 text-sm">
              <div>
                <dt className="font-medium">Email</dt>
                <dd><a className="text-green" href="mailto:contact@nbarari.com">contact@nbarari.com</a></dd>
              </div>
            </dl>
          </div>
          <div className="rounded-lg border border-line bg-white p-5">
            <ContactForm key={message} initialMessage={message} />
          </div>
        </div>
      </section>
      <section className="py-12" aria-labelledby="branches-heading">
        <div className={wrap}>
          <h2 className="mb-6 text-2xl font-semibold" id="branches-heading">Branches</h2>
          <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
            {branches.map((branch) => {
              const digits = phoneDigits(branch.phone);
              const whatsapp = `https://wa.me/${digits}?text=${encodeURIComponent(`Enquiry for ${branch.name}.`)}`;
              const active = selected?.name === branch.name;
              return (
                <article className={`rounded-lg border bg-white p-5 ${branch.name === "Riyadh HQ" ? "sm:col-span-2" : ""} ${active ? "border-green" : "border-line"}`} key={branch.name}>
                  <h3 className="mb-1.5 flex items-center gap-2 text-xl">
                    <StatMark className="h-7 w-7 shrink-0" name="branches" />
                    {branch.name}
                  </h3>
                  <p className="mb-1.5 text-muted">{branch.address}</p>
                  <p className="mb-1.5 text-muted"><a href={`tel:${branch.phone.replace(/\s/g, "")}`}>{branch.phone}</a></p>
                  <p className="m-0 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <a className="inline-flex items-center gap-1.5 font-bold text-[#128C7E]" href={whatsapp} target="_blank" rel="noopener">
                      <WhatsAppIcon className="h-4 w-4" />
                      WhatsApp
                    </a>
                    <span className="text-muted" aria-hidden="true">|</span>
                    <a className="font-bold text-green" href={branch.map} target="_blank" rel="noopener">Google Maps</a>
                    <span className="text-muted" aria-hidden="true">|</span>
                    <Link className="font-bold text-green" href={`/contact?branch=${encodeURIComponent(branch.name)}#enquiry`}>Request a quote</Link>
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
