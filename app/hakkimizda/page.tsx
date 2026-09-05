// Dosya: app/hakkimizda/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Check,
  Clock3,
  Handshake,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Route,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import BrandsRow from "@/components/BrandsRow";
import Reveal from "@/components/Reveal";
import TrackedLink from "@/components/TrackedLink";
import { getWhatsAppLink, siteConfig } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Kayasan Otomotiv’in 1993’ten bugüne uzanan geçmişi, VAG grubu yedek parça uzmanlığı ve hizmet anlayışı hakkında bilgi alın.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: "Hakkımızda | Kayasan Otomotiv",
    description:
      "1993’ten beri Volkswagen, Audi, Seat, Skoda ve Porsche araçlara yönelik yedek parça tedariği.",
    url: `${siteConfig.domain}/hakkimizda`,
    type: "article",
    images: [
      {
        url: `${siteConfig.domain}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Kayasan Otomotiv Hakkımızda",
      },
    ],
  },
};

const milestones = [
  {
    label: "1993",
    title: "Cevizlibağ’da başlayan yolculuk",
    description:
      "Kayasan Otomotiv, Akınsal Sanayi Sitesi’nde otomotiv yedek parça alanında hizmet vermek üzere kuruldu.",
  },
  {
    label: "Uzmanlık",
    title: "VAG grubu araçlara odaklandık",
    description:
      "Volkswagen, Audi, Seat, Skoda ve Porsche araçların mekanik, kaporta ve elektrik parçalarında deneyim kazandık.",
  },
  {
    label: "Bugün",
    title: "Tecrübeyi Türkiye geneline taşıyoruz",
    description:
      "Mağazadaki hizmet anlayışımızı telefon ve WhatsApp üzerinden farklı şehirlerdeki müşterilerimize ulaştırıyoruz.",
  },
];

const workingSteps = [
  {
    title: "Araç bilgisini dinleriz",
    description:
      "Marka, model, model yılı ve motor bilgisiyle ihtiyacı doğru anlamaya başlarız.",
  },
  {
    title: "Parçayı teyit ederiz",
    description:
      "Gerektiğinde şasi numarası, OEM kodu veya ürün fotoğrafı üzerinden eşleşmeyi kontrol ederiz.",
  },
  {
    title: "Seçenekleri açıkça sunarız",
    description:
      "Araçla uyumlu üretici ve fiyat seçeneklerini anlaşılır biçimde paylaşırız.",
  },
  {
    title: "Teslimata hazırlarız",
    description:
      "Teyit edilen ürünü mağazadan teslim veya Türkiye geneline gönderim için hazırlarız.",
  },
];

const principles = [
  {
    number: "01",
    title: "Doğru ürün",
    description:
      "Amacımız yalnızca bir parça satmak değil, araçla uyumlu parçayı belirlemektir.",
    icon: BadgeCheck,
  },
  {
    number: "02",
    title: "Açık iletişim",
    description:
      "Mevcut seçenekleri, gerekli kontrolleri ve teslimat sürecini net biçimde paylaşırız.",
    icon: Handshake,
  },
  {
    number: "03",
    title: "Özenli hazırlık",
    description:
      "Siparişi ürünün yapısına uygun şekilde hazırlar, teslim veya kargo sürecine alırız.",
    icon: PackageCheck,
  },
];

export default function AboutPage() {
  const whatsappLink = getWhatsAppLink();

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.heroInner}>
          <Reveal className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>
              <span aria-hidden="true" />
              1993’ten beri Cevizlibağ’da
            </p>

            <h1 id="about-title">
              Doğru parçayı,
              <span> gerçek tecrübeyle</span> buluşturuyoruz.
            </h1>

            <p className={styles.heroLead}>
              Kayasan Otomotiv; Volkswagen, Audi, Seat, Skoda ve Porsche
              araçlar için mekanik, kaporta, elektrik ve bakım grubu yedek
              parça tedariği sağlayan köklü bir işletmedir.
            </p>

            <div className={styles.heroActions}>
              <TrackedLink
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                eventName="whatsapp_click"
                eventLocation="about_hero"
                className={styles.primaryButton}
              >
                <MessageCircle size={19} />
                WhatsApp ile parça sorun
              </TrackedLink>

              <TrackedLink
                href={`tel:${siteConfig.phoneHref}`}
                eventName="phone_click"
                eventLocation="about_hero"
                className={styles.secondaryButton}
              >
                <Phone size={19} />
                {siteConfig.phoneDisplay}
              </TrackedLink>
            </div>

            <div className={styles.heroProof} aria-label="İşletme özeti">
              <div>
                <strong>30+ yıl</strong>
                <span>Sektör tecrübesi</span>
              </div>
              <div>
                <strong>5 marka</strong>
                <span>VAG odaklı uzmanlık</span>
              </div>
              <a
                href={siteConfig.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google işletme profilini aç"
              >
                <strong>
                  <Star size={15} fill="currentColor" />
                  {siteConfig.reviewSummary.ratingValue}/5
                </strong>
                <span>{siteConfig.reviewSummary.reviewCount} Google yorumu</span>
              </a>
            </div>

            <a className={styles.scrollLink} href="#hikayemiz">
              Hikâyemizi keşfedin
              <ArrowDown size={17} />
            </a>
          </Reveal>

          <Reveal className={styles.heroVisual} delay={90}>
            <div className={styles.heroPhoto}>
              <Image
                src="/photos/raf/raf-3.jpg"
                alt="Kayasan Otomotiv mağaza ve ürün alanı"
                fill
                priority
                className={styles.coverImage}
                sizes="(max-width: 900px) 100vw, 48vw"
              />
              <div className={styles.photoShade} />

              <div className={styles.heritageBadge}>
                <span>Kuruluş</span>
                <strong>1993</strong>
              </div>

              <a
                className={styles.ratingBadge}
                href={siteConfig.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star size={17} fill="currentColor" />
                <span>
                  <strong>{siteConfig.reviewSummary.ratingValue}/5</strong>
                  <small>Google değerlendirmesi</small>
                </span>
              </a>

              <div className={styles.photoMeta}>
                <MapPin size={18} />
                <span>
                  <strong>Kayasan Otomotiv</strong>
                  <small>Akınsal Sanayi Sitesi · Zeytinburnu</small>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="hikayemiz" className={styles.storySection}>
        <div className={styles.storyGrid}>
          <Reveal className={styles.storyIntro}>
            <p className={styles.eyebrow}>Hikâyemiz</p>
            <h2>Biriken tecrübe, doğru parçayı daha hızlı tanımaktır.</h2>
            <p>
              Yıllar içinde değişmeyen yaklaşımımız; müşterinin ihtiyacını
              doğru anlamak, araçla uyumlu ürünü teyit etmek ve seçenekleri
              dürüstçe sunmak oldu.
            </p>
          </Reveal>

          <div className={styles.timeline}>
            {milestones.map((item, index) => (
              <Reveal
                key={item.label}
                className={styles.timelineReveal}
                delay={index * 80}
              >
                <article>
                  <span className={styles.timelineLabel}>{item.label}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BrandsRow />

      <section className={styles.approachSection}>
        <div className={styles.approachGrid}>
          <Reveal className={styles.approachVisual}>
            <div className={styles.approachPhoto}>
              <Image
                src="/photos/raf/raf-2.jpg"
                alt="Kayasan Otomotiv yedek parça rafları"
                fill
                className={styles.coverImage}
                sizes="(max-width: 900px) 100vw, 52vw"
              />
              <div className={styles.approachShade} />
              <div className={styles.photoStatement}>
                <ShieldCheck size={25} />
                <span>
                  <small>Uzmanlık alanımız</small>
                  <strong>Mekanik · Kaporta · Elektrik</strong>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal className={styles.approachCopy} delay={80}>
            <p className={styles.eyebrow}>Nasıl çalışıyoruz?</p>
            <h2>Satıştan önce, parçanın doğruluğunu anlamaya çalışırız.</h2>
            <p className={styles.approachLead}>
              Aynı modelin farklı motor ve donanım seçeneklerinde parça
              değişebilir. Bu nedenle doğru bilgiyle başlar, gerekli
              kontrolleri yaptıktan sonra seçenekleri sunarız.
            </p>

            <div className={styles.workingList}>
              {workingSteps.map((item, index) => (
                <div key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.approachActions}>
              <Link href="/urunler" className={styles.darkButton}>
                Ürün gruplarını inceleyin
                <ArrowRight size={18} />
              </Link>
              <TrackedLink
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                eventName="whatsapp_click"
                eventLocation="about_process"
                className={styles.textButton}
              >
                Parçayı WhatsApp’tan sorun
                <ArrowRight size={17} />
              </TrackedLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.principlesSection}>
        <div className={styles.container}>
          <Reveal className={styles.principlesHeading}>
            <div>
              <p className={styles.eyebrow}>Hizmet anlayışımız</p>
              <h2>İşimizi üç temel ilkeye göre yürütüyoruz.</h2>
            </div>
            <p>
              Doğru ürün, açık iletişim ve özenli hazırlık; 1993’ten beri
              koruduğumuz çalışma düzeninin temelidir.
            </p>
          </Reveal>

          <div className={styles.principlesGrid}>
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  className={styles.principleReveal}
                  delay={index * 80}
                >
                  <article>
                    <div className={styles.principleTop}>
                      <span>{item.number}</span>
                      <Icon size={25} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className={styles.serviceStrip} delay={120}>
            <div>
              <BadgeCheck size={19} />
              <span>Şasi / OEM ile teyit</span>
            </div>
            <div>
              <Truck size={19} />
              <span>Türkiye geneline gönderim</span>
            </div>
            <div>
              <Check size={19} />
              <span>Mağazadan teslim seçeneği</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.visitSection}>
        <div className={styles.visitGrid}>
          <Reveal className={styles.visitPhoto}>
            <Image
              src="/photos/raf/raf-1.jpg"
              alt="Kayasan Otomotiv mağaza içi raf düzeni"
              fill
              className={styles.coverImage}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </Reveal>

          <Reveal className={styles.visitCopy} delay={80}>
            <p className={styles.eyebrow}>Bizi yerinde tanıyın</p>
            <h2>Akınsal Sanayi Sitesi’ndeki mağazamıza bekleriz.</h2>
            <p>
              Parçanızı mağazadan teslim almak veya yüz yüze bilgi almak için
              çalışma saatlerimiz içinde bizi ziyaret edebilirsiniz.
            </p>

            <div className={styles.visitDetails}>
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
                  {siteConfig.businessHours.map((item) => (
                    <strong key={item}>{item}</strong>
                  ))}
                </span>
              </div>
            </div>

            <div className={styles.visitActions}>
              <TrackedLink
                href={siteConfig.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                eventName="direction_click"
                eventLocation="about_visit"
                className={styles.primaryButton}
              >
                <Route size={19} />
                Yol tarifi alın
              </TrackedLink>
              <TrackedLink
                href={`tel:${siteConfig.phoneHref}`}
                eventName="phone_click"
                eventLocation="about_visit"
                className={styles.outlineButton}
              >
                <Phone size={19} />
                Hemen arayın
              </TrackedLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
