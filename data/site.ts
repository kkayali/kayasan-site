// Dosya: data/site.ts

export const siteConfig = {
  companyName: "Kayasan Otomotiv Yedek Parça",
  shortName: "Kayasan Otomotiv",
  foundedYear: "1993",

  shortDescription:
    "1993 yılından bu yana İstanbul Cevizlibağ Akınsal Sanayi Sitesi’nde faaliyet gösteren Kayasan Otomotiv; Volkswagen, Audi, Seat, Skoda ve Porsche araçlar için mekanik, kaporta ve elektrik yedek parçaları tedarik eder.",

  phoneDisplay: "0530 385 36 29",
  phoneHref: "+905303853629",

  whatsappHref: "https://wa.me/905303853629",
  whatsappMessage: [
    "Merhaba, yedek parça bilgisi almak istiyorum.",
    "",
    "Araç marka/model:",
    "Model yılı:",
    "Aradığım parça:",
    "Varsa şasi no / OEM kodu:",
  ].join("\n"),

  instagramUrl: "https://www.instagram.com/otoyedekparca_tr/",
  facebookUrl: "https://www.facebook.com/kayasan.vag/",

  domain: "https://kayasanotomotiv.com",
  logoPath: "/logo/kayasan-logo.png",
  miniLogoPath: "/logo/kayasan-mini-logo.png",
  ogImage: "/og-image.jpg",

  addressLine:
    "Kayasan Otomotiv Yedek Parça, Maltepe, Akınsal Sanayi Sitesi, 34010 Zeytinburnu/İstanbul",
  addressLocality: "Zeytinburnu",
  addressRegion: "İstanbul",
  postalCode: "34010",
  country: "TR",

  googleMapsEmbed:
    "https://www.google.com/maps?q=Kayasan+Otomotiv+Yedek+Par%C3%A7a,+Maltepe,+Ak%C4%B1nsal+Sanayi+Sitesi,+34010+Zeytinburnu,+%C4%B0stanbul&output=embed",
  googleBusinessUrl: "https://share.google/zUyhqUyjK8zSAaHoU",
  directionsUrl: "https://maps.app.goo.gl/1aeRqugdQMpJ5zF97",

  businessHours: [
    "Pazartesi - Cumartesi: 08:30 - 19:00",
    "Pazar: Kapalı",
  ],

  brands: ["Volkswagen", "Audi", "Seat", "Skoda", "Porsche"],
  reviewSummary: {
    ratingValue: "4.9",
    reviewCount: "48",
  },

  featuredCategories: [
    "Motor Parçaları",
    "Triger Setleri",
    "Termostat",
    "Kaporta Parçaları",
    "Elektrik Parçaları",
    "Bakım Ürünleri",
  ],

  faqItems: [
    {
      question: "Hangi marka araçlara yönelik yedek parça hizmeti sunuyorsunuz?",
      answer:
        "Volkswagen, Audi, Seat, Skoda ve Porsche marka araçlara yönelik mekanik, kaporta, elektrik ve bakım grubu yedek parça çözümleri sunuyoruz.",
    },
    {
      question: "Doğru parçayı nasıl teyit ediyorsunuz?",
      answer:
        "Araç marka-modeli, model yılı, şasi numarası veya OEM kodu gibi bilgiler üzerinden parçayı teyit ediyoruz.",
    },
    {
      question: "İşletmeniz nerede yer alıyor?",
      answer:
        "İşletmemiz İstanbul Cevizlibağ bölgesindeki Akınsal Sanayi Sitesi’nde yer almaktadır.",
    },
    {
      question: "Türkiye geneline parça gönderimi yapıyor musunuz?",
      answer:
        "Evet, teyit edilen siparişleri Türkiye geneline kargo ile gönderebiliyoruz.",
    },
  ],

  city: "İstanbul",
  district: "Zeytinburnu",
  neighborhood: "Maltepe",
  areaServedText: "İstanbul ve Türkiye geneli",
  geo: {
    latitude: "41.0163",
    longitude: "28.9087",
  },

  googleAnalyticsId: "G-3F3F1NVEVG",
  googleAdsId: "AW-18057403546",
  conversionId: "AW-18057403546/PdT-CL-voZscEJq5uKJD",

  primaryKeywords: [
    "Kayasan Otomotiv",
    "Kayasan Otomotiv Yedek Parça",
    "Volkswagen yedek parça",
    "Audi yedek parça",
    "Seat yedek parça",
    "Skoda yedek parça",
    "Porsche yedek parça",
    "VAG grubu yedek parça",
    "Cevizlibağ yedek parça",
    "Zeytinburnu yedek parça",
    "otomotiv yedek parça",
    "İstanbul yedek parça",
  ],
} as const;

export function getWhatsAppLink(message = siteConfig.whatsappMessage) {
  return `${siteConfig.whatsappHref}?text=${encodeURIComponent(message)}`;
}
