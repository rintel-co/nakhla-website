"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/icons";
import { useTrade } from "@/components/trade-context";
import { pill, pillGreen, wrap } from "@/lib/ui";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/offers", label: "Offers" },
  { href: "/branches", label: "Branches" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

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
            <span className="min-w-0">
              <strong className="block truncate text-sm leading-tight font-semibold">Nakhla Al Barari</strong>
              <span className="block truncate text-left font-arabic text-[11px] text-muted max-[380px]:hidden" dir="rtl">شركة نخلة البراري</span>
            </span>
          </Link>
          <div className="absolute left-1/2 max-[980px]:hidden -translate-x-1/2">
            <nav className="flex gap-6 text-sm font-medium text-ink">
              {links.map((link) => (
                <Link key={link.href} className={pathname === link.href ? "text-green" : undefined} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <button
              className="relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-line bg-white"
              type="button"
              aria-label="Trade list"
              onClick={() => {
                setMenu(false);
                setOpen(!open);
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 3h10l-1 7H4L3 3zM6 13a1 1 0 100-2 1 1 0 000 2zm5 0a1 1 0 100-2 1 1 0 000 2z" stroke="#1c1c1c" strokeWidth="1.4" />
              </svg>
              <span className={slugs.length ? "absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-green px-1 text-[10px] text-white" : "hidden"}>
                {slugs.length}
              </span>
            </button>
            <div className="max-[980px]:hidden">
              <Link className={pill} href="/contact">Trade account</Link>
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
                <Link key={link.href} className={`py-2.5 ${pathname === link.href ? "text-green" : ""}`} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link className="py-2.5 text-green" href="/contact">Trade account</Link>
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
            <a className={`${pillGreen} w-full`} href={href} target="_blank" rel="noopener">Send on WhatsApp</a>
          </div>
        )}
      </aside>
    </>
  );
}
