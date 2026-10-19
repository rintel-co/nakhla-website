"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { products, WHATSAPP } from "@/lib/catalog";
import { catalogue } from "@/lib/catalogue";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { t } from "@/lib/i18n/phrase";

type TradeContextValue = {
  query: string;
  setQuery: (value: string) => void;
  slugs: string[];
  toggle: (slug: string) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  href: string;
  names: string[];
};

const TradeContext = createContext<TradeContextValue | null>(null);

export function TradeProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const [query, setQuery] = useState("");
  const [slugs, setSlugs] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const names = slugs.map((slug) => products.find((item) => item.slug === slug)?.name ?? catalogue.find((item) => item.slug === slug)?.name ?? slug);
  const href = useMemo(() => {
    if (!names.length) return WHATSAPP;
    const text = encodeURIComponent(t(locale, chromeCopy.buttons.tradeListMessage) + "\n" + names.map((name) => "• " + name).join("\n"));
    return `${WHATSAPP}?text=${text}`;
  }, [names, locale]);

  function toggle(slug: string) {
    setSlugs((current) => {
      const next = current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug];
      setOpen(next.length > 0);
      return next;
    });
  }

  return (
    <TradeContext.Provider value={{ query, setQuery, slugs, toggle, open, setOpen, href, names }}>
      {children}
    </TradeContext.Provider>
  );
}

export function useTrade() {
  const value = useContext(TradeContext);
  if (!value) throw new Error("useTrade must be used inside TradeProvider");
  return value;
}
