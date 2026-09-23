import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact — Nakhla Al Barari" };

export default function ContactPage() {
  return (
    <main>
      <section className="page-intro">
        <div className="wrap">
          <p className="eyebrow">Riyadh headquarters</p>
          <h1>Contact</h1>
          <p className="lede">Al Masani Dist., Domat Al Jandal Street, Riyadh. +966 555729077 · contact@nbarari.com</p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
