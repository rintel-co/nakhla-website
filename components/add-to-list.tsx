"use client";

import { useTrade } from "@/components/trade-context";
import { addBtn, addBtnOn, pillSolid } from "@/lib/ui";

export function AddToList({ slug, primary = false, className = "" }: { slug: string; primary?: boolean; className?: string }) {
  const { slugs, toggle } = useTrade();
  const added = slugs.includes(slug);
  const style = primary ? pillSolid : added ? addBtnOn : addBtn;

  return (
    <button className={`${style} ${className}`} type="button" onClick={() => toggle(slug)}>
      {added ? "Added" : "Add to list"}
    </button>
  );
}
