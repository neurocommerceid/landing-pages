import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sans = localFont({ src: "./fonts/Manrope.ttf", variable: "--font-sans", display: "swap" });
const display = localFont({ src: "./fonts/CormorantGaramond.ttf", variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "AgriXentris Nusantara — Tumbuh Bersama, dari Benih hingga Panen",
  description: "Mitra agribisnis terintegrasi di Bogor. Jelajahi katalog sarana pertanian, pendampingan, pelatihan, dan teknologi pertanian AgriXentris Nusantara.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="id" className={`${sans.variable} ${display.variable}`}><body>{children}</body></html>;
}
