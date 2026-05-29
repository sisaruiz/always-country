import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const battleRoad = localFont({
  src: "../public/fonts/BATTLE ROAD VENTAGE DEMO.ttf",
  variable: "--font-battle-road",
});

export const metadata: Metadata = {
  title: "Always Country",
  description: "Vendita al dettaglio di cappelli, accessori e abbigliamento in stile country.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${playfair.variable} ${battleRoad.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}