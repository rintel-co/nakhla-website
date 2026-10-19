"use client";

import { useTrade } from "@/components/trade-context";
import { useLocale } from "@/components/locale-provider";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { t } from "@/lib/i18n/phrase";
import { addBtn, addBtnOn, pillSolid } from "@/lib/ui";

export function AddToList({ slug, primary = false, className = "" }: { slug: string; primary?: boolean; className?: string }) {
  const locale = useLocale();
  const { slugs, toggle } = useTrade();
  const added = slugs.includes(slug);
  const style = primary ? pillSolid : added ? addBtnOn : addBtn;

  return (
    <button className={`${style} ${className}`} type="button" onClick={() => toggle(slug)}>
      {added ? t(locale, chromeCopy.buttons.added) : t(locale, chromeCopy.buttons.addToList)}
    </button>
  );
}
