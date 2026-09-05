// Dosya: components/WhatsAppButton.tsx
"use client";

import { MessageCircle } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import { getWhatsAppLink } from "@/data/site";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <TrackedLink
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      eventName="whatsapp_click"
      eventLocation="floating_desktop"
      aria-label="WhatsApp üzerinden parça bilgisi alın"
      className={styles.button}
    >
      <span className={styles.icon}>
        <MessageCircle size={20} />
      </span>
      <span>
        <small>Hızlı parça desteği</small>
        <strong>WhatsApp’tan yazın</strong>
      </span>
    </TrackedLink>
  );
}
