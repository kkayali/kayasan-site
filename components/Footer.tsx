// Dosya: components/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import { getWhatsAppLink, siteConfig } from "@/data/site";
import styles from "./Footer.module.css";

const brandLinks = [
  ["Volkswagen", "/volkswagen-yedek-parca"],
  ["Audi", "/audi-yedek-parca"],
  ["Skoda", "/skoda-yedek-parca"],
  ["Seat", "/seat-yedek-parca"],
  ["Porsche", "/porsche-yedek-parca"],
] as const;

export default function Footer() {
  const whatsappLink = getWhatsAppLink();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.ctaWrap}>
        <div className={styles.ctaCopy}>
          <p className={styles.eyebrow}>Parçayı birlikte teyit edelim</p>
          <h2>Aracınızın bilgilerini gönderin, hızlıca dönüş yapalım.</h2>
          <p>
            Marka, model, model yılı ve mümkünse şasi numarası ya da OEM kodu
            doğru parçaya ulaşmamızı hızlandırır.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <TrackedLink
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            eventName="whatsapp_click"
            eventLocation="footer_cta"
            className={styles.whatsappButton}
          >
            <MessageCircle size={19} />
            WhatsApp ile yazın
          </TrackedLink>
          <TrackedLink
            href={`tel:${siteConfig.phoneHref}`}
            eventName="phone_click"
            eventLocation="footer_cta"
            className={styles.callButton}
          >
            <Phone size={19} />
            {siteConfig.phoneDisplay}
          </TrackedLink>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.identity}>
          <Link href="/" className={styles.brand}>
            <span className={styles.logoWrap}>
              <Image
                src={siteConfig.miniLogoPath}
                alt=""
                fill
                className={styles.logo}
                sizes="60px"
              />
            </span>
            <span>
              <strong>{siteConfig.shortName}</strong>
              <small>1993’ten beri yedek parça</small>
            </span>
          </Link>
          <p className={styles.description}>
            Volkswagen, Audi, Seat, Skoda ve Porsche araçlar için mekanik,
            kaporta, elektrik ve bakım grubu yedek parça tedariği.
          </p>
          <div className={styles.socials}>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram hesabımız"
            >
              <Instagram size={19} />
            </a>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook sayfamız"
            >
              <Facebook size={19} />
            </a>
            <a
              href={siteConfig.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.googleLink}
            >
              Google profili
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3>Sayfalar</h3>
          <nav className={styles.linkList} aria-label="Alt menü">
            <Link href="/">Ana Sayfa</Link>
            <Link href="/hakkimizda">Hakkımızda</Link>
            <Link href="/urunler">Ürünler</Link>
            <Link href="/iletisim">İletişim</Link>
          </nav>
        </div>

        <div>
          <h3>Markalar</h3>
          <nav className={styles.linkList} aria-label="Marka sayfaları">
            {brandLinks.map(([name, href]) => (
              <Link href={href} key={href}>
                {name} Yedek Parça
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3>İletişim</h3>
          <div className={styles.contactList}>
            <TrackedLink
              href={`tel:${siteConfig.phoneHref}`}
              eventName="phone_click"
              eventLocation="footer_contact"
            >
              <Phone size={18} />
              <span>{siteConfig.phoneDisplay}</span>
            </TrackedLink>
            <TrackedLink
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              eventLocation="footer_contact"
            >
              <MessageCircle size={18} />
              <span>WhatsApp üzerinden yazın</span>
            </TrackedLink>
            <TrackedLink
              href={siteConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              eventName="direction_click"
              eventLocation="footer_contact"
            >
              <MapPin size={18} />
              <span>{siteConfig.addressLine}</span>
            </TrackedLink>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} {siteConfig.shortName}. Tüm hakları saklıdır.</span>
        <span>İstanbul’dan Türkiye geneline yedek parça tedariği</span>
      </div>
    </footer>
  );
}
