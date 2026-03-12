"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/site";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const whatsappLink = `${siteConfig.whatsappHref}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href="/" className="min-w-0">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-white shadow-sm md:h-14 md:w-14">
              <Image
                src={siteConfig.miniLogoPath}
                alt={`${siteConfig.companyName} mini logo`}
                fill
                className="object-contain p-0.5"
                sizes="56px"
                priority
              />
            </div>

            <div className="min-w-0">
              <div className="truncate text-base font-bold tracking-tight text-zinc-900 md:text-xl">
                {siteConfig.companyName}
              </div>
              <div className="hidden text-sm text-zinc-500 md:block">
                1993’ten beri VAG grubu yedek parça tedariği
              </div>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-700 transition hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pink-200 bg-gradient-to-br from-pink-50 via-fuchsia-50 to-orange-50 text-pink-600 transition hover:scale-105 hover:from-pink-100 hover:via-fuchsia-100 hover:to-orange-100"
            >
              <Instagram size={18} />
            </a>

            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600 transition hover:scale-105 hover:bg-blue-100"
            >
              <Facebook size={18} />
            </a>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-100"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            <Phone size={16} />
            Ara
          </a>
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex rounded-xl border border-zinc-300 p-2 md:hidden"
          aria-label="Menüyü aç"
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-zinc-100 py-3 text-sm font-medium text-zinc-700"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 flex items-center gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-pink-200 bg-gradient-to-br from-pink-50 via-fuchsia-50 to-orange-50 text-pink-600"
              >
                <Instagram size={18} />
              </a>

              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600"
              >
                <Facebook size={18} />
              </a>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700"
            >
              <MessageCircle size={16} />
              WhatsApp ile Yazın
            </a>

            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone size={16} />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}