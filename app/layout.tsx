import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default:
      "Kayasan Otomotiv | Volkswagen Audi Seat Skoda Porsche Yedek Parça",
    template: "%s | Kayasan Otomotiv",
  },
  description: siteConfig.shortDescription,
  keywords: [
    "Kayasan Otomotiv",
    "Kayasan Otomotiv Yedek Parça",
    "Cevizlibağ yedek parça",
    "Akınsal Sanayi Sitesi yedek parça",
    "Volkswagen yedek parça",
    "Audi yedek parça",
    "Seat yedek parça",
    "Skoda yedek parça",
    "Porsche yedek parça",
    "mekanik yedek parça",
    "kaporta parçaları",
    "elektrik parçaları",
    "otomotiv yedek parça",
    "Zeytinburnu yedek parça",
    "VAG grubu yedek parça",
  ],
  alternates: {
    canonical: "/",
  },
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
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "Kayasan Otomotiv",
    description: siteConfig.shortDescription,
    url: siteConfig.domain,
    siteName: "Kayasan Otomotiv",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: siteConfig.companyName,
  description: siteConfig.shortDescription,
  url: siteConfig.domain,
  telephone: siteConfig.phoneDisplay,
  image: [`${siteConfig.domain}${siteConfig.logoPath}`],
  logo: `${siteConfig.domain}${siteConfig.logoPath}`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressLine,
    addressLocality: siteConfig.addressLocality,
    addressRegion: siteConfig.addressRegion,
    postalCode: siteConfig.postalCode,
    addressCountry: siteConfig.country,
  },
  areaServed: "Türkiye",
  sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl].filter(Boolean),
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
    contactType: "customer service",
    telephone: siteConfig.phoneDisplay,
    availableLanguage: ["Turkish"],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.reviewSummary.ratingValue,
    reviewCount: siteConfig.reviewSummary.reviewCount,
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.companyName,
  url: siteConfig.domain,
  description: siteConfig.shortDescription,
  inLanguage: "tr-TR",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteConfig.faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Yedek Parça Ürün Kategorileri",
  url: `${siteConfig.domain}/urunler`,
  description:
    "Kayasan Otomotiv ürün grupları: mekanik, elektrik, kaporta, triger setleri, ön takım parçaları, bakım malzemeleri ve VAG grubu araçlara özel yedek parça çözümleri.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: siteConfig.featuredCategories.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item,
      url: `${siteConfig.domain}/urunler`,
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="bg-white text-zinc-900 antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3F3F1NVEVG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-and-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3F3F1NVEVG');
            gtag('config', 'AW-18057403546');
          `}
        </Script>

        <JsonLd data={webSiteSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={faqSchema} />
        <JsonLd data={productSchema} />

        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
