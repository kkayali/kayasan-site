// Dosya: app/layout.tsx

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import MobileContactBar from "@/components/MobileContactBar";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  applicationName: siteConfig.shortName,
  title: {
    default: "Kayasan Otomotiv | VAG Grubu Yedek Parça",
    template: "%s | Kayasan Otomotiv",
  },
  description: siteConfig.shortDescription,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  keywords: [...siteConfig.primaryKeywords],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.ico.png",
  },
  openGraph: {
    title: "Kayasan Otomotiv",
    description: siteConfig.shortDescription,
    url: siteConfig.domain,
    siteName: siteConfig.shortName,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Kayasan Otomotiv Yedek Parça",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayasan Otomotiv",
    description: siteConfig.shortDescription,
    images: [`${siteConfig.domain}${siteConfig.ogImage}`],
  },
  other: {
    "geo.region": "TR-34",
    "geo.placename": `${siteConfig.district}, ${siteConfig.city}`,
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  "@id": `${siteConfig.domain}/#business`,
  name: siteConfig.companyName,
  description: siteConfig.shortDescription,
  url: siteConfig.domain,
  telephone: siteConfig.phoneHref,
  image: `${siteConfig.domain}${siteConfig.logoPath}`,
  logo: `${siteConfig.domain}${siteConfig.logoPath}`,
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressLine,
    addressLocality: siteConfig.addressLocality,
    addressRegion: siteConfig.addressRegion,
    postalCode: siteConfig.postalCode,
    addressCountry: siteConfig.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  areaServed: siteConfig.areaServedText,
  sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl],
  hasMap: siteConfig.directionsUrl,
  foundingDate: siteConfig.foundedYear,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:30",
      closes: "19:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: siteConfig.phoneHref,
    availableLanguage: ["Turkish"],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.reviewSummary.ratingValue,
    reviewCount: siteConfig.reviewSummary.reviewCount,
    bestRating: "5",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.domain}/#website`,
  name: siteConfig.companyName,
  url: siteConfig.domain,
  description: siteConfig.shortDescription,
  inLanguage: "tr-TR",
  publisher: { "@id": `${siteConfig.domain}/#business` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <a className="skipLink" href="#ana-icerik">
          Ana içeriğe geç
        </a>

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics-and-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${siteConfig.googleAnalyticsId}');
            gtag('config', '${siteConfig.googleAdsId}');
          `}
        </Script>

        <JsonLd data={websiteSchema} />
        <JsonLd data={localBusinessSchema} />

        <Navbar />
        <div id="ana-icerik">{children}</div>
        <Footer />
        <WhatsAppButton />
        <MobileContactBar />
      </body>
    </html>
  );
}
