import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LocaleProvider } from "@/components/locale-provider";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { TradeProvider } from "@/components/trade-context";
import { getLocale } from "@/lib/i18n/locale";
import "./globals.css";

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["500"],
  variable: "--font-ar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nakhla Al Barari — Wholesale food",
  description: "Importer, wholesaler, and distributor of food across Saudi Arabia. Riyadh headquarters, founded in 2021.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={arabic.variable}>
      <body suppressHydrationWarning>
        <LocaleProvider locale={locale}>
          <TradeProvider>
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
          </TradeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
