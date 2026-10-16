"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/icons";
import { useTrade } from "@/components/trade-context";
import { WhatsAppIcon, whatsappBtn } from "@/components/whatsapp-button";
import { wrap } from "@/lib/ui";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Our Brands" },
  { href: "/services", label: "Services" },
  { href: "/branches", label: "Branches" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const offersBtn =
  "inline-flex h-9 items-center justify-center rounded-md border border-green bg-leaf px-3 text-sm font-semibold text-green-dark transition-colors hover:bg-green";

const accountBtn =
  "inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-green bg-white px-3 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { query, setQuery, slugs, toggle, open, setOpen, href, names } = useTrade();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-page">
        <div className={`${wrap} relative flex h-16 items-center gap-3`}>
          <Link className="flex min-w-0 items-center gap-2.5" href="/">
            <LogoMark />
          </Link>
          <div className="absolute left-1/2 max-[980px]:hidden -translate-x-1/2">
            <nav className="flex items-center gap-6 text-sm font-medium text-ink">
              {links.map((link) => (
                <Link key={link.href} className={pathname === link.href ? "text-green" : "transition-colors hover:text-green"} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link className={pathname.startsWith("/offers") ? `${offersBtn} bg-green` : offersBtn} href="/offers">Offers</Link>
            </nav>
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <button
              className={`relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border transition-colors ${open ? "border-green bg-green text-green-dark" : "border-line bg-white text-ink hover:border-green hover:bg-leaf"}`}
              type="button"
              aria-label="Trade list"
              aria-expanded={open}
              onClick={() => {
                setMenu(false);
                setOpen(!open);
              }}
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2.5 3.5h1.2l1.1 6.2a1 1 0 0 0 1 .8h5.7a1 1 0 0 0 1-.8L13.5 5H4.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="6.5" cy="13" r="1" fill="currentColor" />
                <circle cx="11.5" cy="13" r="1" fill="currentColor" />
              </svg>
              <span className={slugs.length ? "absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-dark px-1 text-[10px] font-semibold text-white" : "hidden"}>
                {slugs.length}
              </span>
            </button>
            <div className="max-[980px]:hidden">
              <Link className={pathname === "/contact" ? `${accountBtn} bg-leaf` : accountBtn} href="/contact">
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="5.5" r="2.2" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M3.5 13.2c.6-2.2 2.3-3.2 4.5-3.2s3.9 1 4.5 3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                Trade account
              </Link>
            </div>
            <div className="min-[981px]:hidden">
              <button
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-line bg-white text-lg"
                type="button"
                aria-label={menu ? "Close menu" : "Menu"}
                aria-expanded={menu}
                onClick={() => setMenu((value) => !value)}
              >
                {menu ? "×" : "☰"}
              </button>
            </div>
          </div>
        </div>
        {menu && (
          <div className="border-t border-line min-[981px]:hidden">
            <nav className={`${wrap} flex flex-col py-2 text-sm font-medium text-ink`}>
              {links.map((link) => (
                <Link key={link.href} className={`py-2.5 transition-colors hover:text-green ${pathname === link.href ? "text-green" : ""}`} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link className={`${accountBtn} my-1 w-full`} href="/contact">
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="5.5" r="2.2" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M3.5 13.2c.6-2.2 2.3-3.2 4.5-3.2s3.9 1 4.5 3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                Trade account
              </Link>
              <Link className={`my-2 inline-flex h-11 items-center justify-center rounded-md border border-green px-3 text-sm font-semibold text-green-dark ${pathname.startsWith("/offers") ? "bg-green" : "bg-leaf"}`} href="/offers">Offers</Link>
            </nav>
          </div>
        )}
      </header>
      <aside
        className={open ? "fixed top-20 right-4 z-30 flex w-[min(360px,calc(100%-32px))] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_16px_40px_rgba(28,36,22,0.14)]" : "hidden"}
        aria-label="Trade list"
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
          <div>
            <h3 className="text-base font-semibold">Trade list</h3>
            <p className="text-xs text-muted">{slugs.length ? `${slugs.length} ${slugs.length === 1 ? "line" : "lines"}` : "Nothing added yet"}</p>
          </div>
          <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-lg leading-none text-muted hover:bg-soft hover:text-ink" type="button" aria-label="Close trade list" onClick={() => setOpen(false)}>×</button>
        </div>
        <ul className="max-h-[min(360px,50vh)] overflow-y-auto px-3 py-3">
          {slugs.length ? slugs.map((slug, index) => (
            <li className="mb-2 flex items-start justify-between gap-3 rounded-xl bg-soft px-3 py-2.5 text-sm last:mb-0" key={slug}>
              <span className="leading-snug">{names[index]}</span>
              <button className="shrink-0 cursor-pointer text-xs font-semibold text-green" type="button" onClick={() => toggle(slug)}>Remove</button>
            </li>
          )) : <li className="px-1 py-2 text-sm text-muted">Add a line from the catalogue, then send it from here.</li>}
        </ul>
        {slugs.length > 0 && (
          <div className="border-t border-line p-3">
            <a className={`${whatsappBtn} w-full`} href={href} target="_blank" rel="noopener">
              <WhatsAppIcon />
              Send on WhatsApp
            </a>
          </div>
        )}
      </aside>
    </>
  );
}
