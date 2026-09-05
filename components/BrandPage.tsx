// Dosya: components/BrandPage.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Car,
  Check,
  ChevronDown,
  MessageCircle,
  PackageCheck,
  Phone,
  Route,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import TrackedLink from "@/components/TrackedLink";
import { brandModels, type BrandKey } from "@/data/brandModels";
import { partsCatalog } from "@/data/partsCatalog";
import { getWhatsAppLink, siteConfig } from "@/data/site";
import styles from "./BrandPage.module.css";

type BrandPageProps = {
  brand: BrandKey;
};

const brandDetails: Record<
  BrandKey,
  { slug: string; logo: string; description: string }
> = {
  Volkswagen: {
    slug: "volkswagen-yedek-parca",
    logo: "/brands/vw.png",
    description:
      "Volkswagen araçlar için mekanik, kaporta, elektrik ve bakım ürünlerinde doğru parça teyidi ve tedarik desteği.",
  },
  Audi: {
    slug: "audi-yedek-parca",
    logo: "/brands/audi.png",
    description:
      "Audi araçlar için mekanik, kaporta, elektrik ve bakım gruplarında güvenilir yedek parça çözümleri.",
  },
  Skoda: {
    slug: "skoda-yedek-parca",
    logo: "/brands/skoda.png",
    description:
      "Skoda araçlara uygun mekanik, kaporta, elektrik ve bakım ürünlerinde hızlı ve kontrollü tedarik desteği.",
  },
  Seat: {
    slug: "seat-yedek-parca",
    logo: "/brands/seat.png",
    description:
      "Seat araçlara yönelik mekanik, kaporta, elektrik ve bakım ürünlerinde doğru ürün yönlendirmesi.",
  },
  Porsche: {
    slug: "porsche-yedek-parca",
    logo: "/brands/porsche.png",
    description:
      "Porsche araçlara uygun mekanik, kaporta, elektrik ve bakım ürünlerinde güvenilir parça desteği.",
  },
};

const productGroups = [
  {
    title: "Mekanik parçalar",
    description: "Motor, triger, devirdaim, debriyaj, volan ve ön takım ürünleri.",
    icon: Wrench,
  },
  {
    title: "Elektrik ve elektronik",
    description: "Sensör, ateşleme, aydınlatma ve araç elektriği ürünleri.",
    icon: Zap,
  },
  {
    title: "Kaporta parçaları",
    description: "Tampon, panjur, çamurluk, ayna ve dış gövde ürünleri.",
    icon: Car,
  },
  {
    title: "Bakım ürünleri",
    description: "Filtre, motor yağı, fren ve periyodik bakım ürünleri.",
    icon: ShieldCheck,
  },
];

export function getBrandMetadata(brand: BrandKey): Metadata {
  const detail = brandDetails[brand];
  const description = `${brand} marka araçlar için mekanik, kaporta, elektrik, bakım ve farklı parça gruplarında güvenilir yedek parça tedariği. Kayasan Otomotiv ile hızlı iletişim ve doğru parça desteği.`;

  return {
    title: `${brand} Yedek Parça`,
    description,
    alternates: { canonical: `/${detail.slug}` },
    openGraph: {
      title: `${brand} Yedek Parça | Kayasan Otomotiv`,
      description,
      url: `${siteConfig.domain}/${detail.slug}`,
      type: "website",
      images: [
        {
          url: `${siteConfig.domain}${siteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: `${brand} Yedek Parça | Kayasan Otomotiv`,
        },
      ],
    },
  };
}

export default function BrandPage({ brand }: BrandPageProps) {
  const detail = brandDetails[brand];
  const models = brandModels[brand];
  const pageUrl = `${siteConfig.domain}/${detail.slug}`;
  const whatsappLink = getWhatsAppLink(
    [
      `Merhaba, ${brand} yedek parça bilgisi almak istiyorum.`,
      "",
      "Araç modeli:",
      "Model yılı:",
      "Aradığım parça:",
      "Varsa şasi no / OEM kodu:",
    ].join("\n")
  );

  const categoryEntries = Array.from(
    partsCatalog.reduce((map, item) => {
      const current = map.get(item.category) ?? [];
      current.push(item);
      map.set(item.category, current);
      return map;
    }, new Map<string, typeof partsCatalog>())
  );

  const topCategories = categoryEntries
    .map(([name, items]) => ({ name, count: items.length }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const featuredParts = categoryEntries
    .flatMap(([, items]) => items.slice(0, 2))
    .slice(0, 24);

  const combinationModels = models.slice(0, 6);
  const modelSupportCategories = topCategories.slice(0, 6).map(({ name }) => name);

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: `${brand} Yedek Parça | Kayasan Otomotiv`,
        description: detail.description,
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${siteConfig.domain}/#website` },
        about: { "@type": "Brand", name: brand },
        publisher: { "@id": `${siteConfig.domain}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: siteConfig.domain,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: `${brand} Yedek Parça`,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main>
      <JsonLd data={pageSchema} />

      <section className={styles.hero}>
        <div className={styles.heroBackdrop}>
          <Image
            src="/hero/raf-bg.jpg"
            alt=""
            fill
            priority
            className={styles.coverImage}
            sizes="100vw"
          />
        </div>
        <div className={styles.heroShade} />

        <div className={styles.heroGrid}>
          <Reveal className={styles.heroCopy}>
            <SectionTitle
              as="h1"
              size="display"
              eyebrow={`${brand} yedek parça`}
              title={`${brand} aracınız için doğru parçayı birlikte bulalım.`}
              description={detail.description}
              tone="light"
            />

            <div className={styles.heroActions}>
              <TrackedLink
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                eventName="whatsapp_click"
                eventLocation={`${detail.slug}_hero`}
                className={styles.whatsappButton}
              >
                <MessageCircle size={20} /> WhatsApp’tan parça sorun
              </TrackedLink>
              <TrackedLink
                href={`tel:${siteConfig.phoneHref}`}
                eventName="phone_click"
                eventLocation={`${detail.slug}_hero`}
                className={styles.phoneButton}
              >
                <Phone size={20} /> Hemen arayın
              </TrackedLink>
            </div>

            <p className={styles.heroNote}>
              <Check size={17} /> Marka-model, model yılı ve varsa şasi numarasını
              iletin; parça uyumluluğunu teyit edelim.
            </p>
          </Reveal>

          <Reveal className={styles.brandPanel} delay={80}>
            <div className={styles.brandLogo}>
              <Image
                src={detail.logo}
                alt={`${brand} logosu`}
                fill
                className={styles.containImage}
                sizes="180px"
              />
            </div>
            <p className={styles.panelLabel}>{brand} parça desteği</p>
            <h2>Satıştan önce parça teyidi</h2>
            <ul>
              <li><BadgeCheck size={17} /> Şasi veya OEM koduyla kontrol</li>
              <li><PackageCheck size={17} /> Mağazadan teslim veya kargo</li>
              <li><ShieldCheck size={17} /> Farklı üretici seçenekleri</li>
            </ul>
            <TrackedLink
              href={`tel:${siteConfig.phoneHref}`}
              eventName="phone_click"
              eventLocation={`${detail.slug}_info_panel`}
              className={styles.panelPhone}
              aria-label={`${siteConfig.phoneDisplay} numarasını ara`}
            >
              <span>Telefon</span>
              <strong>{siteConfig.phoneDisplay}</strong>
            </TrackedLink>
          </Reveal>
        </div>
      </section>

      <section className={styles.modelsSection}>
        <div className={styles.container}>
          <Reveal>
            <SectionTitle
              eyebrow="Model yelpazesi"
              title={`${brand} modelleri için yedek parça desteği`}
              description={`Aşağıdaki ${brand} modelleri ve farklı motor seçenekleri için ürün teyidi sağlayabiliyoruz.`}
            />
          </Reveal>
          <Reveal className={styles.modelGrid} delay={60}>
            {models.map((model) => (
              <div key={model.slug}>
                <span>{brand}</span>
                <strong>{model.name}</strong>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className={styles.groupsSection}>
        <div className={styles.container}>
          <Reveal>
            <SectionTitle
              eyebrow="Parça grupları"
              title={`${brand} için temel ürün grupları`}
              description="Aracın versiyonuna göre ürün değişebilir. Bu nedenle katalog bilgisini araç bilgileriyle birlikte teyit ediyoruz."
              align="center"
            />
          </Reveal>
          <Reveal className={styles.groupGrid} delay={60}>
            {productGroups.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon size={25} />
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className={styles.catalogSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.catalogHeading}>
              <SectionTitle
                eyebrow="Katalogdan seçkiler"
                title={`${brand} için sık talep edilen parçalar`}
                description="Aşağıdaki liste genel ürün gruplarından bir seçkidir; tam katalog için ürünler sayfasını inceleyebilirsiniz."
              />
              <Link href="/urunler" className={styles.inlineLink}>
                Tüm kataloğa git <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>

          <Reveal className={styles.partsGrid} delay={60}>
            {featuredParts.map((item) => (
              <div key={`${item.category}-${item.slug}`}>
                <span>{item.category}</span>
                <strong>{item.name}</strong>
              </div>
            ))}
          </Reveal>

          <Reveal className={styles.categoryStrip} delay={80}>
            {topCategories.map((category) => (
              <div key={category.name}>
                <span>{category.name}</span>
                <strong>{category.count}</strong>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className={styles.combinationsSection}>
        <div className={styles.container}>
          <Reveal>
            <SectionTitle
              eyebrow="Model bazlı destek"
              title={`${brand} modeliniz için talep oluşturun`}
              description="Modelinizi açın, sık çalıştığımız ürün gruplarını görün ve araç bilgilerinizi hazır mesajla bize iletin. Kesin ürün kodu şasi ve motor bilgisiyle belirlenir."
            />
          </Reveal>
          <Reveal className={styles.accordion} delay={60}>
            {combinationModels.map((model, index) => (
              <details key={model.slug} open={index === 0}>
                <summary>
                  <span>{brand} {model.name} parça desteği</span>
                  <ChevronDown size={20} />
                </summary>
                <div className={styles.accordionContent}>
                  <p>
                    {brand} {model.name} için mekanik, bakım, elektrik ve kaporta
                    gruplarında ürün teyidi sağlayabiliyoruz. Model yılı, motor
                    bilgisi ve mümkünse şasi numarası doğru eşleşmeyi hızlandırır.
                  </p>
                  <div className={styles.accordionTags}>
                    {modelSupportCategories.map((category) => (
                      <span key={`${model.slug}-${category}`}>{category}</span>
                    ))}
                  </div>
                  <TrackedLink
                    href={getWhatsAppLink(
                      [
                        `Merhaba, ${brand} ${model.name} için yedek parça bilgisi almak istiyorum.`,
                        "",
                        "Model yılı:",
                        "Motor bilgisi:",
                        "Aradığım parça:",
                        "Varsa şasi no / OEM kodu:",
                      ].join("\n")
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    eventName="whatsapp_click"
                    eventLocation={`${detail.slug}_${model.slug}_accordion`}
                    className={styles.accordionAction}
                  >
                    <MessageCircle size={17} /> Bu model için parça sorun
                    <ArrowRight size={16} />
                  </TrackedLink>
                </div>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <Reveal className={styles.ctaBox}>
          <div>
            <p>{brand} yedek parça desteği</p>
            <h2>Aracınızın bilgilerini gönderin, parça seçeneklerini konuşalım.</h2>
            <span>
              Uyum, güncel ürün durumu ve fiyat bilgisi için doğrudan bize ulaşın.
            </span>
          </div>
          <div className={styles.ctaActions}>
            <TrackedLink
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              eventLocation={`${detail.slug}_cta`}
              className={styles.whatsappButton}
            >
              <MessageCircle size={19} /> WhatsApp ile yazın
            </TrackedLink>
            <TrackedLink
              href={`tel:${siteConfig.phoneHref}`}
              eventName="phone_click"
              eventLocation={`${detail.slug}_cta`}
              className={styles.phoneButton}
            >
              <Phone size={19} /> {siteConfig.phoneDisplay}
            </TrackedLink>
            <TrackedLink
              href={siteConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              eventName="direction_click"
              eventLocation={`${detail.slug}_cta`}
              className={styles.directionButton}
            >
              <Route size={19} /> Yol tarifi
            </TrackedLink>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
