"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { LogoMark } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";
import { useTrade } from "@/components/trade-context";
import { WhatsAppIcon, whatsappBtn } from "@/components/whatsapp-button";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { t } from "@/lib/i18n/phrase";
import { wrap } from "@/lib/ui";

const links = [
  { href: "/", label: chromeCopy.nav.home },
  { href: "/products", label: chromeCopy.nav.brands },
  { href: "/services", label: chromeCopy.nav.services },
  { href: "/branches", label: chromeCopy.nav.branches },
  { href: "/about", label: chromeCopy.nav.about },
  { href: "/gallery", label: chromeCopy.nav.gallery },
  { href: "/contact", label: chromeCopy.nav.contact },
];

const offersBtn =
  "inline-flex h-10 items-center justify-center rounded-md border border-green bg-leaf px-3 text-sm font-semibold text-green-dark transition-colors hover:bg-green";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const { slugs, toggle, open, setOpen, href, names } = useTrade();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-page">
        <div className={`${wrap} flex h-16 items-center gap-4`}>
          <Link className="flex shrink-0 items-center" href="/" aria-label={t(locale, chromeCopy.footer.logo)}>
            <LogoMark />
          </Link>
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 min-[981px]:flex min-[1200px]:gap-1" aria-label={t(locale, chromeCopy.nav.primary)}>
            {links.map((link) => {
              const current = isCurrent(pathname, link.href);
              return (
                <Link key={link.href} className={`inline-flex h-10 items-center whitespace-nowrap rounded-md px-2 text-sm font-medium transition-colors min-[1200px]:px-2.5 ${current ? "bg-leaf text-green-dark" : "text-ink hover:bg-leaf hover:text-green-dark"}`} href={link.href} aria-current={current ? "page" : undefined}>
                  {t(locale, link.label)}
                </Link>
              );
            })}
            <Link className={`${pathname.startsWith("/offers") ? `${offersBtn} bg-green` : offersBtn} whitespace-nowrap`} href="/offers" aria-current={pathname.startsWith("/offers") ? "page" : undefined}>{t(locale, chromeCopy.nav.offers)}</Link>
          </nav>
          <div className="ms-auto flex shrink-0 items-center gap-2 min-[981px]:ms-0">
            <LanguageSwitcher className="max-[980px]:hidden" />
            <button
              className={`relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border transition-colors ${open ? "border-green bg-green text-green-dark" : "border-line bg-white text-ink hover:border-green hover:bg-leaf"}`}
              type="button"
              aria-label={t(locale, chromeCopy.buttons.tradeList)}
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
              <span className={slugs.length ? "absolute -top-1.5 -end-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-dark px-1 text-[10px] font-semibold text-white" : "hidden"}>
                {slugs.length}
              </span>
            </button>
            <div className="min-[981px]:hidden">
              <button
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-line bg-white text-lg"
                type="button"
                aria-label={menu ? t(locale, chromeCopy.buttons.closeMenu) : t(locale, chromeCopy.buttons.menu)}
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
            <nav className={`${wrap} flex flex-col gap-1 py-3 text-sm font-medium text-ink`} aria-label={t(locale, chromeCopy.nav.primary)}>
              <LanguageSwitcher className="mb-2 w-full" />
              {links.map((link) => {
                const current = isCurrent(pathname, link.href);
                return (
                  <Link key={link.href} className={`flex h-11 items-center rounded-md px-3 transition-colors ${current ? "bg-leaf text-green-dark" : "hover:bg-leaf hover:text-green-dark"}`} href={link.href} aria-current={current ? "page" : undefined}>
                    {t(locale, link.label)}
                  </Link>
                );
              })}
              <Link className={`${offersBtn} mt-1 w-full ${pathname.startsWith("/offers") ? "bg-green" : ""}`} href="/offers" aria-current={pathname.startsWith("/offers") ? "page" : undefined}>{t(locale, chromeCopy.nav.offers)}</Link>
            </nav>
          </div>
        )}
      </header>
      <aside
        className={open ? "fixed top-20 end-4 z-30 flex w-[min(360px,calc(100%-32px))] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_16px_40px_rgba(28,36,22,0.14)]" : "hidden"}
        aria-label={t(locale, chromeCopy.buttons.tradeList)}
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
          <div>
            <h3 className="text-base font-semibold">{t(locale, chromeCopy.buttons.tradeList)}</h3>
            <p className="text-xs text-muted">{slugs.length ? `${slugs.length} ${t(locale, slugs.length === 1 ? chromeCopy.buttons.line : chromeCopy.buttons.lines)}` : t(locale, chromeCopy.buttons.nothingAdded)}</p>
          </div>
          <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-lg leading-none text-muted hover:bg-soft hover:text-ink" type="button" aria-label={t(locale, chromeCopy.buttons.closeTradeList)} onClick={() => setOpen(false)}>×</button>
        </div>
        <ul className="max-h-[min(360px,50vh)] overflow-y-auto px-3 py-3">
          {slugs.length ? slugs.map((slug, index) => (
            <li className="mb-2 flex items-start justify-between gap-3 rounded-xl bg-soft px-3 py-2.5 text-sm last:mb-0" key={slug}>
              <span className="leading-snug">{names[index]}</span>
              <button className="shrink-0 cursor-pointer text-xs font-semibold text-green" type="button" aria-label={`${t(locale, chromeCopy.buttons.remove)} ${names[index]}`} onClick={() => toggle(slug)}>{t(locale, chromeCopy.buttons.remove)}</button>
            </li>
          )) : <li className="px-1 py-2 text-sm text-muted">{t(locale, chromeCopy.buttons.emptyTrade)}</li>}
        </ul>
        {slugs.length > 0 && (
          <div className="border-t border-line p-3">
            <a className={`${whatsappBtn} w-full`} href={href} target="_blank" rel="noopener">
              <WhatsAppIcon />
              {t(locale, chromeCopy.buttons.sendOnWhatsApp)}
            </a>
          </div>
        )}
      </aside>
    </>
  );
}
