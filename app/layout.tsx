import type { Metadata } from "next";
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
  icons: {
    icon: siteConfig.miniLogoPath,
    shortcut: siteConfig.miniLogoPath,
    apple: siteConfig.miniLogoPath,
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
        url: siteConfig.logoPath,
        width: 512,
        height: 512,
        alt: "Kayasan Otomotiv Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayasan Otomotiv",
    description: siteConfig.shortDescription,
    images: [siteConfig.logoPath],
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
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressLine,
    addressLocality: siteConfig.addressLocality,
    addressRegion: siteConfig.addressRegion,
    postalCode: siteConfig.postalCode,
    addressCountry: siteConfig.country,
  },
  areaServed: "Türkiye",
  sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.reviewSummary.ratingValue,
    reviewCount: siteConfig.reviewSummary.reviewCount,
  },
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
  "@type": "ItemList",
  name: "Yedek Parça Ürün Kategorileri",
  itemListElement: siteConfig.featuredCategories.map((item, index) => ({
    "@type": "Product",
    position: index + 1,
    name: item,
    brand: siteConfig.companyName,
    category: "Otomotiv Yedek Parça",
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="bg-white text-zinc-900 antialiased">
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