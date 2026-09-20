import type { Metadata, Viewport } from "next";
import { Manrope, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { siteConfig } from "@/lib/constants";
import { localBusinessSchema, servicesSchema, faqSchema } from "@/lib/structuredData";
import WaterDropEffect from "@/components/WaterDropEffect";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b1730",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Nettoyage Commercial Premium`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "nettoyage commercial",
    "nettoyage de bureaux",
    "services de conciergerie",
    "entretien de locaux",
    "nettoyeurs professionnels",
    "nettoyage écologique",
    "nettoyage de propriété commerciale",
    "services de nettoyage pour entreprises",
    "nettoyage post-chantier",
    "services de désinfection",
    "entreprise de nettoyage locale",
    "nettoyage fiable",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: `${siteConfig.name} | Nettoyage Commercial Premium`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Nettoyage Commercial Premium`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${manrope.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema()) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-lg focus:bg-aqua-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-sapphire-950"
        >
          Aller au contenu principal
        </a>
        <div className="noise-layer pointer-events-none fixed inset-0 z-40" aria-hidden="true" />
        <WaterDropEffect />
        {children}
        <WhatsAppButton />
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
