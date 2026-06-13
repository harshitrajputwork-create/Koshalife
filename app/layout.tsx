import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kosha Life — The Art of Natural Luxury",
  description:
    "Ayurvedic rituals rooted in ancient wisdom. Female-founded, modern luxury skincare from India.",
  keywords: ["Ayurvedic skincare", "natural luxury", "rose water", "saffron elixir", "India"],
  openGraph: {
    title: "Kosha Life — The Art of Natural Luxury",
    description: "Bloom with Intent. Ayurvedic skincare for the modern woman.",
    type: "website",
    url: "https://thekoshalife.com",
    siteName: "Kosha Life",
    images: [
      {
        url: "https://thekoshalife.com/rose-ras-product.png",
        width: 1200,
        height: 630,
        alt: "Kosha Life — Ayurvedic Luxury Skincare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kosha Life — The Art of Natural Luxury",
    description: "Bloom with Intent. Ayurvedic skincare for the modern woman.",
    images: ["https://thekoshalife.com/rose-ras-product.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
