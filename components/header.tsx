"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/icons";
import { useTrade } from "@/components/trade-context";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/branches", label: "Branches" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { query, setQuery, slugs, open, setOpen, href, names } = useTrade();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  return (
    <>
      <header className={scrolled ? "site scrolled" : "site"}>
        <div className="wrap bar">
          <Link className="logo" href="/">
            <LogoMark />
            <span>
              <strong>Nakhla Al Barari</strong>
              <span>شركة نخلة البراري</span>
            </span>
          </Link>
          <button className="icon-btn menu-btn" type="button" aria-label="Menu" onClick={() => setMenu((value) => !value)}>
            ☰
          </button>
          <nav className={menu ? "main open" : "main"}>
            {links.map((link) => (
              <Link key={link.href} className={pathname === link.href ? "active" : undefined} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="bar-tools">
            {/* <label className="search">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="4.5" stroke="#5c6560" />
                <path d="M10.5 10.5L14 14" stroke="#5c6560" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder="Search the catalogue"
                aria-label="Search the catalogue"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  if (pathname !== "/" && pathname !== "/products") router.push("/products");
                }}
              />
            </label> */}
            <button className="icon-btn" type="button" aria-label="Trade list" onClick={() => setOpen(!open)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 3h10l-1 7H4L3 3zM6 13a1 1 0 100-2 1 1 0 000 2zm5 0a1 1 0 100-2 1 1 0 000 2z" stroke="#1c1c1c" strokeWidth="1.4" />
              </svg>
              <span className={slugs.length ? "count on" : "count"}>{slugs.length}</span>
            </button>
            <Link className="pill" href="/contact">Trade account</Link>
          </div>
        </div>
      </header>
      <aside className={open ? "drawer on" : "drawer"} aria-live="polite">
        <h3>Trade list</h3>
        <ul>
          {names.length ? names.map((name) => <li key={name}>{name}</li>) : <li>Nothing added yet.</li>}
        </ul>
        <a className="pill green" href={href} target="_blank" rel="noopener">Send on WhatsApp</a>
      </aside>
    </>
  );
}
