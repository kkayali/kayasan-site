// Dosya: app/iletisim/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import {
  Car,
  Clock3,
  Facebook,
  FileText,
  Hash,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Route,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import TrackedLink from "@/components/TrackedLink";
import { getWhatsAppLink, siteConfig } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Kayasan Otomotiv telefon, WhatsApp, adres, çalışma saatleri ve yol tarifi bilgileri. VAG grubu yedek parça için hızlıca ulaşın.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: "İletişim | Kayasan Otomotiv",
    description:
      "Parça talebiniz için arayın, WhatsApp’tan yazın veya Akınsal Sanayi Sitesi’ndeki mağazamıza gelin.",
    url: `${siteConfig.domain}/iletisim`,
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Kayasan Otomotiv iletişim",
      },
    ],
  },
};

const messageChecklist = [
  { title: "Marka ve model", detail: "Örn. Volkswagen Passat", icon: Car },
  { title: "Model yılı", detail: "Aracın üretim/model yılı", icon: FileText },
  { title: "Aranan parça", detail: "Parça adı veya ürün fotoğrafı", icon: MessageCircle },
  { title: "Şasi / OEM kodu", detail: "Varsa doğru eşleşmeyi hızlandırır", icon: Hash },
];

export default function ContactPage() {
  const whatsappLink = getWhatsAppLink();

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/hero/raf-bg.jpg"
            alt=""
            fill
            priority
            className={styles.coverImage}
            sizes="100vw"
          />
        </div>
        <div className={styles.heroOverlay} />
        <Reveal className={styles.heroContent}>
          <SectionTitle
            as="h1"
            size="display"
            eyebrow="İletişim"
            title="Parça talebinizi doğrudan bize iletin."
            description="Telefonla arayın veya WhatsApp üzerinden araç bilgilerinizi gönderin. En hızlı başlangıç için marka, model, model yılı ve aradığınız parçayı yazın."
            tone="light"
          />
          <div className={styles.heroActions}>
            <TrackedLink
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              eventLocation="contact_hero"
              className={styles.whatsappButton}
            >
              <MessageCircle size={20} /> WhatsApp ile yazın
            </TrackedLink>
            <TrackedLink
              href={`tel:${siteConfig.phoneHref}`}
              eventName="phone_click"
              eventLocation="contact_hero"
              className={styles.phoneButton}
            >
              <Phone size={20} /> {siteConfig.phoneDisplay}
            </TrackedLink>
            <a
              href={siteConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionButton}
            >
              <Route size={20} /> Yol tarifi alın
            </a>
          </div>
        </Reveal>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          <Reveal className={styles.infoPanel}>
            <p className={styles.panelEyebrow}>İletişim bilgileri</p>
            <h2>Kayasan Otomotiv’e ulaşın</h2>

            <div className={styles.infoList}>
              <div>
                <span className={styles.iconWrap}><Phone size={20} /></span>
                <span>
                  <small>Telefon</small>
                  <TrackedLink
                    href={`tel:${siteConfig.phoneHref}`}
                    eventName="phone_click"
                    eventLocation="contact_info"
                  >
                    {siteConfig.phoneDisplay}
                  </TrackedLink>
                </span>
              </div>
              <div>
                <span className={styles.iconWrap}><MessageCircle size={20} /></span>
                <span>
                  <small>WhatsApp</small>
                  <TrackedLink
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    eventName="whatsapp_click"
                    eventLocation="contact_info"
                  >
                    Hazır mesajla konuşmayı başlatın
                  </TrackedLink>
                </span>
              </div>
              <div>
                <span className={styles.iconWrap}><MapPin size={20} /></span>
                <span>
                  <small>Adres</small>
                  <a
                    href={siteConfig.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteConfig.addressLine}
                  </a>
                </span>
              </div>
              <div>
                <span className={styles.iconWrap}><Clock3 size={20} /></span>
                <span>
                  <small>Çalışma saatleri</small>
                  {siteConfig.businessHours.map((item) => <strong key={item}>{item}</strong>)}
                </span>
              </div>
            </div>

            <div className={styles.socialBox}>
              <span>Sosyal medya hesaplarımız</span>
              <div>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={18} /> Instagram
                </a>
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={18} /> Facebook
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className={styles.mapPanel} delay={70}>
            <iframe
              title="Kayasan Otomotiv konumu"
              src={siteConfig.googleMapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={siteConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Route size={18} /> Google Maps’te yol tarifi aç
            </a>
          </Reveal>
        </div>
      </section>

      <section className={styles.checklistSection}>
        <div className={styles.container}>
          <Reveal>
            <SectionTitle
              eyebrow="Daha hızlı yanıt için"
              title="Mesajınıza bu bilgileri ekleyin."
              description="Hepsini bilmiyorsanız sorun değil. Elinizde olan bilgileri ve mümkünse ürünün fotoğrafını göndermeniz yeterli."
              align="center"
            />
          </Reveal>

          <Reveal className={styles.checklist} delay={60}>
            {messageChecklist.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon size={22} />
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              );
            })}
          </Reveal>

          <Reveal className={styles.checklistAction} delay={90}>
            <div>
              <strong>Hazır WhatsApp mesajını açın</strong>
              <span>Bilgi alanlarını doldurup doğrudan gönderin.</span>
            </div>
            <TrackedLink
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              eventLocation="contact_checklist"
            >
              <MessageCircle size={19} /> WhatsApp’a geç
            </TrackedLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
