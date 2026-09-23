"use client";

import { useTrade } from "@/components/trade-context";

export function WhatsAppLink({ className, children }: { className?: string; children: React.ReactNode }) {
  const { href } = useTrade();
  return (
    <a className={className} href={href} target="_blank" rel="noopener">
      {children}
    </a>
  );
}
