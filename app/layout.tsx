import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TradeProvider } from "@/components/trade-context";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={arabic.variable}>
      <body>
        <TradeProvider>
          <Header />
          {children}
          <Footer />
        </TradeProvider>
      </body>
    </html>
  );
}
