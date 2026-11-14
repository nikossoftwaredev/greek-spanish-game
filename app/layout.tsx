import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Alegreya, Manrope } from "next/font/google";

import { Providers } from "@/components/providers";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext", "greek"],
});

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin", "latin-ext", "greek"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: { default: "Vamos · Ισπανικά για την τάξη", template: "%s · Vamos" },
  description:
    "Παιχνίδια, φλας κάρτες, ρήματα και εργασίες για το μάθημα ισπανικών, χωρισμένα ακριβώς όπως το βιβλίο Aula Internacional Plus 1.",
  // A study tool for the class, not something to rank in search results.
  robots: { index: false, follow: false },
  appleWebApp: { capable: true, title: "Vamos", statusBarStyle: "default" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f3e8" },
    { media: "(prefers-color-scheme: dark)", color: "#241d18" },
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="el" suppressHydrationWarning>
    <body className={`${manrope.variable} ${alegreya.variable} font-sans antialiased`}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
