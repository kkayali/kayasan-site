import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import { siteConfig } from "@/data/site";

const CONVERSION_ID = "AW-18057403546/PdT-CL-voZscEJq5uKJD";

export default function Footer() {
  const whatsappLink = `${siteConfig.whatsappHref}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-zinc-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-zinc-700 bg-white shadow-sm">
              <Image
                src={siteConfig.miniLogoPath}
                alt={`${siteConfig.companyName} mini logo`}
                fill
                className="object-contain p-0.5"
                sizes="64px"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold">{siteConfig.companyName}</h3>
              <p className="text-sm text-zinc-400">
                1993’ten beri VAG grubu parça tedariği
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-sm leading-7 text-zinc-400">
            {siteConfig.shortDescription}
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <TrackedLink
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              conversionId={CONVERSION_ID}
              className="inline-flex items-center gap-2 rounded-2xl bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              <MessageCircle size={16} />
              WhatsApp ile Yazın
            </TrackedLink>

            <TrackedLink
              href={`tel:${siteConfig.phoneHref}`}
              conversionId={CONVERSION_ID}
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              <Phone size={16} />
              Hemen Arayın
            </TrackedLink>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-pink-300 bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-400 text-white transition hover:scale-105"
            >
              <Instagram size={18} />
            </a>

            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-400 bg-blue-600 text-white transition hover:scale-105 hover:bg-blue-700"
            >
              <Facebook size={18} />
            </a>
          </div>

          <a
            href={siteConfig.googleBusinessUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-2xl border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            Google İşletme Profilini İncele
          </a>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Hızlı Menü</h4>
          <div className="mt-4 flex flex-col gap-3 text-zinc-400">
            <Link href="/" className="hover:text-white">
              Ana Sayfa
            </Link>
            <Link href="/hakkimizda" className="hover:text-white">
              Hakkımızda
            </Link>
            <Link href="/urunler" className="hover:text-white">
              Ürünler
            </Link>
            <Link href="/iletisim" className="hover:text-white">
              İletişim
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold">İletişim</h4>
          <div className="mt-4 space-y-4 text-zinc-400">
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-1" />
              <TrackedLink
                href={`tel:${siteConfig.phoneHref}`}
                conversionId={CONVERSION_ID}
                className="hover:text-white"
              >
                {siteConfig.phoneDisplay}
              </TrackedLink>
            </div>

            <div className="flex items-start gap-3">
              <MessageCircle size={18} className="mt-1 text-green-400" />
              <TrackedLink
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                conversionId={CONVERSION_ID}
                className="hover:text-white"
              >
                WhatsApp üzerinden ulaşın
              </TrackedLink>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1" />
              <p>{siteConfig.addressLine}</p>
            </div>

            <div className="flex items-start gap-3">
              <Instagram size={18} className="mt-1 text-pink-400" />
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Instagram hesabımızı ziyaret edin
              </a>
            </div>

            <div className="flex items-start gap-3">
              <Facebook size={18} className="mt-1 text-blue-400" />
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Facebook sayfamızı ziyaret edin
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 px-6 py-5 text-center text-sm text-zinc-500">
        © 2026 {siteConfig.companyName}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}