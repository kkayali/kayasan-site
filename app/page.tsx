// Dosya: app/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Box,
  Car,
  Check,
  Clock3,
  ClipboardCheck,
  Facebook,
  Gauge,
  Instagram,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Route,
  ShieldCheck,
  Star,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import BrandsRow from "@/components/BrandsRow";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import TrackedLink from "@/components/TrackedLink";
import { getWhatsAppLink, siteConfig } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Volkswagen, Audi, Seat, Skoda ve Porsche Yedek Parça",
  description:
    "Kayasan Otomotiv; Volkswagen, Audi, Seat, Skoda ve Porsche araçlar için mekanik, kaporta, elektrik ve bakım grubu yedek parça tedariği sağlar. Telefon ve WhatsApp üzerinden hızlı destek alın.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kayasan Otomotiv | VAG Grubu Yedek Parça",
    description:
      "1993’ten beri VAG grubu araçlara doğru parça teyidi ve Türkiye geneline tedarik desteği.",
    url: siteConfig.domain,
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Kayasan Otomotiv VAG grubu yedek parça",
      },
    ],
  },
};

const productGroups = [
  {
    title: "Mekanik parçalar",
    description:
      "Motor, triger, devirdaim, debriyaj, volan, ön takım ve soğutma grubu parçaları.",
    icon: Wrench,
  },
  {
    title: "Elektrik ve elektronik",
    description:
      "Sensör, ateşleme, aydınlatma, şarj sistemi ve araç elektriği ürünleri.",
    icon: Zap,
  },
  {
    title: "Kaporta parçaları",
    description:
      "Tampon, panjur, çamurluk, ayna, kapı ve dış gövde grubu parçaları.",
    icon: Car,
  },
  {
    title: "Bakım ürünleri",
    description:
      "Filtreler, motor yağları, fren grubu ve periyodik bakımda gereken ürünler.",
    icon: ShieldCheck,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Araç bilgilerini paylaşın",
    description:
      "Marka, model, model yılı ve aradığınız parçayı bize iletin.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Parçayı birlikte teyit edelim",
    description:
      "Gerekirse şasi numarası, OEM kodu veya ürün fotoğrafıyla kontrol edelim.",
    icon: BadgeCheck,
  },
  {
    number: "03",
    title: "Teslimat şeklini seçin",
    description:
      "Mağazadan teslim alın veya teyit edilen siparişi kargoya verelim.",
    icon: PackageCheck,
  },
];

const manufacturerLogos = [
  ["Bosch", "/markalogo/bosch.png"],
  ["Brembo", "/markalogo/brembo.png"],
  ["Continental", "/markalogo/continental.png"],
  ["Delphi", "/markalogo/delphi.png"],
  ["Denso", "/markalogo/denso.png"],
  ["Elring", "/markalogo/elring.png"],
  ["Febi", "/markalogo/febi.png"],
  ["Ferodo", "/markalogo/ferodo.png"],
  ["Filtron", "/markalogo/filtron.png"],
  ["Gates", "/markalogo/gates.png"],
  ["GKL", "/markalogo/gkl.png"],
  ["GKN", "/markalogo/gkn.png"],
  ["Hella", "/markalogo/hella.png"],
  ["Hengst", "/markalogo/hengst.png"],
  ["INA", "/markalogo/ina.png"],
  ["Kale", "/markalogo/kale.png"],
  ["Lemförder", "/markalogo/lemforderr.png"],
  ["LUK", "/markalogo/luk.png"],
  ["Mahle", "/markalogo/mahle.png"],
  ["Mann", "/markalogo/mann.png"],
  ["NGK", "/markalogo/ngk.png"],
  ["Sachs", "/markalogo/sachs.png"],
  ["SKF", "/markalogo/skf.png"],
  ["SWAG", "/markalogo/swag.png"],
  ["Textar", "/markalogo/textar.png"],
  ["Valeo", "/markalogo/valeo.png"],
  ["Victor Reinz", "/markalogo/victorreinz.png"],
  ["Zimmermann", "/markalogo/zimmermann.png"],
] as const;

const cargoImages = [
  {
    src: "/photos/kargo/kargo-1.jpeg",
    title: "Gönderime hazır sipariş",
    alt: "Gönderime hazırlanan yedek parça siparişi",
  },
  {
    src: "/photos/kargo/kargo-3.jpeg",
    title: "Kontrollü paketleme",
    alt: "Kayasan Otomotiv paketleme süreci",
  },
  {
    src: "/photos/kargo/kargo-5.jpeg",
    title: "Koruyucu ambalaj",
    alt: "Koruyucu ambalajla hazırlanan otomotiv parçası",
  },
  {
    src: "/photos/kargo/kargo-7.jpeg",
    title: "Türkiye geneline gönderim",
    alt: "Kargoya hazır müşteri siparişi",
  },
];

export default function HomePage() {
  const whatsappLink = getWhatsAppLink();

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroGrid}>
          <Reveal className={styles.heroCopy}>
            <p className={styles.locationTag}>
              <span aria-hidden="true" />
              İstanbul’dan Türkiye geneline
            </p>

            <h1 id="home-title">
              VAG grubu araçlar için <em>doğru yedek parça.</em>
            </h1>

            <p className={styles.heroLead}>
              Volkswagen, Audi, Seat, Skoda ve Porsche araçların mekanik,
              kaporta, elektrik ve bakım parçalarında 1993’ten beri hizmet
              veriyoruz.
            </p>

            <div className={styles.heroActions}>
              <TrackedLink
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                eventName="whatsapp_click"
                eventLocation="home_hero"
                className={styles.whatsappButton}
              >
                <MessageCircle size={20} />
                WhatsApp’tan parça sorun
              </TrackedLink>

              <TrackedLink
                href={`tel:${siteConfig.phoneHref}`}
                eventName="phone_click"
                eventLocation="home_hero"
                className={styles.callButton}
              >
                <Phone size={20} />
                {siteConfig.phoneDisplay}
              </TrackedLink>
            </div>

            <p className={styles.heroHelp}>
              <Check size={17} />
              <span>
                Marka, model, model yılı ve varsa şasi numarasını gönderin;
                doğru parçayı teyit edelim.
              </span>
            </p>

            <div className={styles.heroProof} aria-label="İşletme özeti">
              <div>
                <strong>1993</strong>
                <span>Kuruluş yılı</span>
              </div>

              <div>
                <strong>5 marka</strong>
                <span>VAG odaklı uzmanlık</span>
              </div>

              <a
                href={siteConfig.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kayasan Otomotiv Google işletme profilini aç"
              >
                <strong>
                  <Star size={16} fill="currentColor" />
                  {siteConfig.reviewSummary.ratingValue}/5
                </strong>
                <span>
                  {siteConfig.reviewSummary.reviewCount} Google yorumu
                </span>
              </a>
            </div>

            <a className={styles.heroScroll} href="#markalar">
              Markalara göz atın
              <ArrowDown size={17} />
            </a>
          </Reveal>

          <Reveal className={styles.heroVisual} delay={90}>
            <div className={styles.heroImageWrap}>
              <Image
                src="/hero/raf-bg.jpg"
                alt="Kayasan Otomotiv mağaza içi yedek parça rafları"
                fill
                priority
                className={styles.heroImage}
                sizes="(max-width: 900px) 100vw, 48vw"
              />

              <div className={styles.imageShade} />

              <div className={styles.imageTopLabel}>
                <span className={styles.logoMini}>
                  <Image
                    src={siteConfig.miniLogoPath}
                    alt=""
                    fill
                    className={styles.containImage}
                    sizes="44px"
                  />
                </span>
                <span>
                  <strong>{siteConfig.shortName}</strong>
                  <small>Akınsal Sanayi Sitesi</small>
                </span>
              </div>

              <div className={styles.heroSocials} aria-label="Sosyal medya">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.instagramIcon}
                  aria-label="Instagram hesabımız"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.facebookIcon}
                  aria-label="Facebook sayfamız"
                >
                  <Facebook size={20} />
                </a>
              </div>

              <div className={styles.imageBottomCard}>
                <Gauge size={22} />
                <span>
                  <small>Uzmanlık alanı</small>
                  <strong>Mekanik · Kaporta · Elektrik</strong>
                </span>
                <span className={styles.openBadge}>
                  <span aria-hidden="true" />
                  30+ yıl
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.assurance} aria-label="Hizmet özeti">
        <div className={styles.assuranceInner}>
          <div>
            <Wrench size={19} />
            <span>Doğru parça teyidi</span>
          </div>
          <div>
            <Truck size={19} />
            <span>Türkiye geneline kargo</span>
          </div>
          <div>
            <Box size={19} />
            <span>Geniş ürün grubu</span>
          </div>
          <div>
            <MapPin size={19} />
            <span>Cevizlibağ’da mağaza</span>
          </div>
        </div>
      </section>

      <div id="markalar" className={styles.anchorTarget}>
        <BrandsRow />
      </div>

      <section id="parca-talebi" className={styles.processSection}>
        <div className={styles.container}>
          <Reveal>
            <SectionTitle
              eyebrow="Hızlı parça talebi"
              title="Üç adımda doğru parçaya ulaşalım."
              description="Araç bilgilerinizi paylaşın. Ek bilgi gerekiyorsa size net olarak söyleyelim; uygun parçayı teyit ettikten sonra teslimatı planlayalım."
            />
          </Reveal>

          <div className={styles.processGrid}>
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal
                  className={styles.processReveal}
                  delay={index * 70}
                  key={step.number}
                >
                  <article className={styles.processCard}>
                    <div className={styles.processTop}>
                      <span>{step.number}</span>
                      <span className={styles.processIcon}>
                        <Icon size={23} />
                      </span>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className={styles.processCta} delay={100}>
            <div>
              <strong>Hazır WhatsApp mesajını açın.</strong>
              <span>
                Araç bilgilerini doldurun; konuşmaya doğrudan başlayalım.
              </span>
            </div>
            <TrackedLink
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              eventLocation="home_process"
            >
              <MessageCircle size={18} />
              Mesajı açın
              <ArrowRight size={18} />
            </TrackedLink>
          </Reveal>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.sectionHeaderRow}>
              <SectionTitle
                eyebrow="Ürün grupları"
                title="VAG araçların temel parça ihtiyaçlarında yanınızdayız."
                description="Bakım ürünlerinden motor ve kaporta parçalarına kadar farklı ihtiyaçlarda ürün teyidi ve tedarik desteği sağlıyoruz."
              />
              <Link href="/urunler" className={styles.textLink}>
                Tüm ürünleri inceleyin
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>

          <div className={styles.productGrid}>
            {productGroups.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  className={styles.productReveal}
                  delay={index * 65}
                >
                  <Link href="/urunler" className={styles.productCard}>
                    <span className={styles.productIcon}>
                      <Icon size={26} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className={styles.cardLinkText}>
                      Ürün grubuna gidin
                      <ArrowUpRight size={17} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.manufacturersSection}>
        <div className={styles.manufacturerHeading}>
          <Reveal>
            <SectionTitle
              eyebrow="Tedarik ağı"
              title="Tercih edilen parça üreticileri"
              description="Talebe ve araç uyumluluğuna göre farklı üretici seçeneklerini değerlendiriyor, uygun ürünü birlikte belirliyoruz."
              align="center"
              tone="light"
            />
          </Reveal>
        </div>

        <Reveal className={styles.marqueeReveal} delay={70}>
          <div
            className={styles.logoMarquee}
            aria-label="Çalıştığımız parça üreticileri"
          >
            <div className={styles.logoMarqueeTrack}>
              {[0, 1].map((groupIndex) => (
                <ul
                  className={styles.logoMarqueeGroup}
                  aria-hidden={groupIndex === 1 ? "true" : undefined}
                  key={groupIndex}
                >
                  {manufacturerLogos.map(([name, src]) => (
                    <li key={`${groupIndex}-${name}`}>
                      <span>
                        <Image
                          src={src}
                          alt={groupIndex === 0 ? `${name} logosu` : ""}
                          fill
                          className={styles.manufacturerLogo}
                          sizes="156px"
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </Reveal>

        <p className={styles.marqueeNote}>
          Stok ve araç uyumluluğu için bizimle iletişime geçebilirsiniz.
        </p>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutGrid}>
          <Reveal className={styles.aboutVisual}>
            <div className={styles.aboutMainImage}>
              <Image
                src="/photos/raf/raf-1.jpg"
                alt="Kayasan Otomotiv yedek parça raf düzeni"
                fill
                className={styles.coverImage}
                sizes="(max-width: 900px) 100vw, 52vw"
              />
            </div>

            <div className={styles.aboutSmallImage}>
              <Image
                src="/photos/raf/raf-2.jpg"
                alt="Kayasan Otomotiv ürün stoğundan görünüm"
                fill
                className={styles.coverImage}
                sizes="240px"
              />
            </div>

            <div className={styles.experienceBadge}>
              <strong>30+</strong>
              <span>yıllık sektör tecrübesi</span>
            </div>
          </Reveal>

          <Reveal className={styles.aboutCopy} delay={80}>
            <SectionTitle
              eyebrow="Gerçek işletme, gerçek tecrübe"
              title="1993’ten beri aynı işin içindeyiz."
              description="Kayasan Otomotiv, İstanbul Cevizlibağ’daki Akınsal Sanayi Sitesi’nde VAG grubu araçlara yönelik yedek parça tedariği sağlar."
            />

            <div className={styles.aboutList}>
              <p>
                <Check size={18} />
                Şasi veya OEM koduyla ürün teyidi
              </p>
              <p>
                <Check size={18} />
                Mekanik, elektrik ve kaporta ürün grupları
              </p>
              <p>
                <Check size={18} />
                Mağazadan teslim veya Türkiye geneline gönderim
              </p>
            </div>

            <Link href="/hakkimizda" className={styles.darkLink}>
              Kayasan Otomotiv’i tanıyın
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className={styles.cargoSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.sectionHeaderRow}>
              <SectionTitle
                eyebrow="Gerçek çalışma süreci"
                title="Hazırlanan siparişlerden görüntüler"
                description="Siparişleri ürünün yapısına göre koruyucu biçimde hazırlıyor ve teslimat sürecine alıyoruz."
              />
              <span className={styles.photoNote}>
                Kayasan Otomotiv arşivinden
              </span>
            </div>
          </Reveal>

          <div className={styles.cargoGrid}>
            {cargoImages.map((image, index) => (
              <Reveal
                className={
                  index === 0
                    ? `${styles.cargoReveal} ${styles.cargoFeatured}`
                    : styles.cargoReveal
                }
                delay={index * 55}
                key={image.src}
              >
                <figure>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={styles.coverImage}
                    sizes={
                      index === 0
                        ? "(max-width: 800px) 100vw, 50vw"
                        : "(max-width: 800px) 50vw, 25vw"
                    }
                  />
                  <div className={styles.cargoShade} />
                  <figcaption>{image.title}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.locationSection}>
        <div className={styles.locationGrid}>
          <Reveal className={styles.locationCopy}>
            <p className={styles.sectionEyebrow}>Mağaza ve iletişim</p>
            <h2>Parçanızı mağazadan teslim alabilirsiniz.</h2>
            <p className={styles.locationLead}>
              Akınsal Sanayi Sitesi’ndeki mağazamızı ziyaret edin veya gelmeden
              önce arayarak ürün bilgisi alın.
            </p>

            <div className={styles.locationFacts}>
              <div>
                <MapPin size={20} />
                <span>
                  <small>Adres</small>
                  <strong>{siteConfig.addressLine}</strong>
                </span>
              </div>
              <div>
                <Clock3 size={20} />
                <span>
                  <small>Çalışma saatleri</small>
                  <strong>Pazartesi–Cumartesi · 08:30–19:00</strong>
                </span>
              </div>
            </div>

            <div className={styles.locationActions}>
              <TrackedLink
                href={siteConfig.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                eventName="direction_click"
                eventLocation="home_location"
                className={styles.directionButton}
              >
                <Route size={19} />
                Yol tarifi alın
              </TrackedLink>
              <TrackedLink
                href={`tel:${siteConfig.phoneHref}`}
                eventName="phone_click"
                eventLocation="home_location"
                className={styles.locationCallButton}
              >
                <Phone size={19} />
                Hemen arayın
              </TrackedLink>
            </div>

            <div className={styles.socialCards}>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagramCard}
              >
                <span className={styles.socialIconWrap}>
                  <Instagram size={21} />
                </span>
                <span>
                  <small>Bizi takip edin</small>
                  <strong>Instagram</strong>
                </span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.facebookCard}
              >
                <span className={styles.socialIconWrap}>
                  <Facebook size={21} />
                </span>
                <span>
                  <small>Sayfamızı inceleyin</small>
                  <strong>Facebook</strong>
                </span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal className={styles.mapWrap} delay={80}>
            <iframe
              title="Kayasan Otomotiv haritası"
              src={siteConfig.googleMapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <TrackedLink
              href={siteConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              eventName="direction_click"
              eventLocation="home_map"
              className={styles.mapButton}
            >
              <MapPin size={18} />
              Google Haritalar’da açın
              <ArrowUpRight size={17} />
            </TrackedLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
