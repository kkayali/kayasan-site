"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function WhatsAppButton() {
  const href = `${siteConfig.whatsappHref}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      title="Parça bilgisi için yazın"
      className="whatsapp-pulse fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] transition hover:bg-green-600 md:bottom-5 md:right-5"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Parça bilgisi için yazın</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}