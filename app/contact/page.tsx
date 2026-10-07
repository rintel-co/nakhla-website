import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { HeroLogo } from "@/components/hero-logo";
import { pageBanner, wrap } from "@/lib/ui";

export const metadata: Metadata = { title: "Contact — Nakhla Al Barari" };

const exterior = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Nakhla-Al-Barari-Contact-Us.avif";
const meetingRoom = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Home-Office.avif";

export default function ContactPage() {
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
            <h1 className="text-[40px] leading-tight font-semibold tracking-[-0.02em] max-[640px]:text-[32px]">Contact</h1>
            <p className="mt-3 max-w-[42ch] text-white/80">Al Masani Dist., Domat Al Jandal Street, Riyadh.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img className="h-[300px] w-full rounded-lg object-cover object-bottom max-[640px]:h-[200px]" src={exterior} alt="Nakhla Al Barari warehouse and delivery vans" />
            <img className="h-[300px] w-full rounded-lg object-cover max-[640px]:h-[200px]" src={meetingRoom} alt="Nakhla Al Barari meeting room" />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className={`${wrap} grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,520px)]`}>
          <div>
            <h2 className="text-2xl font-semibold">Write to the branch</h2>
            <p className="mt-2 max-w-[40ch] text-muted">Prices, delivery, and account questions stay with the sales desk.</p>
            <dl className="mt-6 grid gap-4 text-sm">
              <div>
                <dt className="font-medium">Address</dt>
                <dd className="text-muted">Al Masani Dist., Domat Al Jandal Street. Warehouses 26 and 27, Riyadh.</dd>
              </div>
              <div>
                <dt className="font-medium">Phone</dt>
                <dd><a className="text-green" href="tel:+966555729077">+966 555729077</a></dd>
              </div>
              <div>
                <dt className="font-medium">Email</dt>
                <dd><a className="text-green" href="mailto:contact@nbarari.com">contact@nbarari.com</a></dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
