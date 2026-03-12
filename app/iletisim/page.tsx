import Image from "next/image";
import type { Metadata } from "next";
import {
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Route,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Kayasan Otomotiv iletişim sayfası. Telefon, WhatsApp, adres, çalışma saatleri ve harita bilgileri.",
};

export default function ContactPage() {
  const whatsappLink = `${siteConfig.whatsappHref}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <main>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Reveal>
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border border-zinc-200 bg-white shadow-sm">
                <Image
                  src={siteConfig.miniLogoPath}
                  alt={`${siteConfig.companyName} mini logo`}
                  fill
                  className="object-contain p-0.5"
                  sizes="80px"
                  priority
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <SectionTitle
              eyebrow="İletişim"
              title="Bize Ulaşın"
              description="Sipariş, ürün bilgisi ve hızlı iletişim için telefon, WhatsApp, adres ve sosyal medya kanallarımızdan bize ulaşabilirsiniz."
              center
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <a
                      href={`tel:${siteConfig.phoneHref}`}
                      className="text-zinc-600 hover:text-zinc-900"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 text-green-600" size={20} />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-600 hover:text-zinc-900"
                    >
                      WhatsApp üzerinden iletişim kurun
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Adres</p>
                    <p className="text-zinc-600">{siteConfig.addressLine}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock3 className="mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Çalışma Saatleri</p>
                    <div className="text-zinc-600">
                      {siteConfig.businessHours.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                  <p className="font-semibold text-zinc-900">
                    Sosyal Medya Hesaplarımız
                  </p>

                  <div className="mt-4 flex flex-col gap-3">
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-pink-600 transition hover:text-pink-700"
                    >
                      <Instagram size={18} />
                      Instagram hesabımızı ziyaret edin
                    </a>

                    <a
                      href={siteConfig.facebookUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 transition hover:text-blue-700"
                    >
                      <Facebook size={18} />
                      Facebook sayfamızı ziyaret edin
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <a
                    href={siteConfig.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
                  >
                    <Route size={18} />
                    Yol Tarifi Al
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    <MessageCircle size={18} />
                    WhatsApp ile Yazın
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm">
              <iframe
                title="Kayasan Otomotiv Harita"
                src={siteConfig.googleMapsEmbed}
                className="h-[460px] w-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}