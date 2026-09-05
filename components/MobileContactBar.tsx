// Dosya: components/MobileContactBar.tsx
"use client";

import { MessageCircle, Phone } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import { getWhatsAppLink, siteConfig } from "@/data/site";
import styles from "./MobileContactBar.module.css";

export default function MobileContactBar() {
  return (
    <aside className={styles.bar} aria-label="Hızlı iletişim">
      <TrackedLink
        href={`tel:${siteConfig.phoneHref}`}
        eventName="phone_click"
        eventLocation="mobile_bottom_bar"
        className={styles.call}
        aria-label={`${siteConfig.phoneDisplay} numarasını hemen ara`}
      >
        <Phone size={19} />
        Hemen Ara
      </TrackedLink>
      <TrackedLink
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        eventName="whatsapp_click"
        eventLocation="mobile_bottom_bar"
        className={styles.whatsapp}
        aria-label="WhatsApp üzerinden parça bilgisi al"
      >
        <MessageCircle size={19} />
        WhatsApp
      </TrackedLink>
    </aside>
  );
}
