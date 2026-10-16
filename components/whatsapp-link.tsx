"use client";

import { useTrade } from "@/components/trade-context";
import { WhatsAppIcon, whatsappBtn } from "@/components/whatsapp-button";

export function WhatsAppLink({ className, children }: { className?: string; children: React.ReactNode }) {
  const { href } = useTrade();
  return (
    <a className={className ?? whatsappBtn} href={href} target="_blank" rel="noopener">
      <WhatsAppIcon />
      {children}
    </a>
  );
}
