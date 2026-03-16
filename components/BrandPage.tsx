import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Car,
  CheckCircle2,
  MessageCircle,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site";

type BrandName = "Volkswagen" | "Audi" | "Skoda" | "Seat" | "Porsche";

type BrandPageProps = {
  brand: BrandName;
};

const brandDescriptions: Record<BrandName, string> = {
  Volkswagen:
    "Volkswagen marka araçlara yönelik mekanik, kaporta, elektrik ve bakım ürünlerinde doğru ve güvenilir yedek parça tedariği sağlıyoruz.",
  Audi:
    "Audi marka araçlar için mekanik, kaporta, elektrik ve bakım gruplarında kaliteli ve güvenilir yedek parça çözümleri sunuyoruz.",
  Skoda:
    "Skoda marka araçlara uygun mekanik, kaporta, elektrik ve bakım ürünlerinde hızlı ve güvenilir tedarik hizmeti veriyoruz.",
  Seat:
    "Seat marka araçlara yönelik mekanik, kaporta, elektrik ve bakım ürünlerinde doğru ürün yönlendirmesi ve hızlı parça tedariği sunuyoruz.",
  Porsche:
    "Porsche marka araçlara uygun mekanik, kaporta, elektrik ve bakım ürünlerinde güvenilir yedek parça desteği sağlıyoruz.",
};

const productHighlights = [
  {
    title: "Mekanik Parçalar",
    description:
      "Motor parçaları, triger setleri, devirdaim setleri, debriyaj ve volan setleri, ön takım parçaları ve benzeri birçok mekanik üründe doğru tedarik sağlıyoruz.",
    icon: Wrench,
  },
  {
    title: "Elektrik ve Elektronik",
    description:
      "Elektrik sistemiyle ilgili çeşitli yedek parça ihtiyaçlarında doğru ürün yönlendirmesi ve güvenilir parça tedariği sunuyoruz.",
    icon: Zap,
  },
  {
    title: "Kaporta Parçaları",
    description:
      "Tampon, panjur, ızgara, far çevresi ve dış gövde grubuna ait birçok parçada profesyonel destek veriyoruz.",
    icon: Car,
  },
  {
    title: "Bakım Ürünleri",
    description:
      "Motor yağları, filtre grupları ve düzenli bakımda ihtiyaç duyulan ürünlerde kaliteli ve güvenilir seçenekler sunuyoruz.",
    icon: ShieldCheck,
  },
];

const suppliedGroups = [
  "Ön takım parçaları",
  "Triger setleri",
  "Devirdaimli triger setleri",
  "Debriyaj ve volan setleri",
  "DQ200 mekatronik tamir kitleri",
  "Radyatörler",
  "Motor yağları",
  "Bakım malzemeleri",
  "Filtre grupları",
  "Kaporta parçaları",
  "Elektrik ve bağlantı parçaları",
  "Mekanik yedek parçalar",
];

function getBrandSlug(brand: BrandName) {
  switch (brand) {
    case "Volkswagen":
      return "volkswagen-yedek-parca";
    case "Audi":
      return "audi-yedek-parca";
    case "Skoda":
      return "skoda-yedek-parca";
    case "Seat":
      return "seat-yedek-parca";
    case "Porsche":
      return "porsche-yedek-parca";
    default:
      return "";
  }
}

export function getBrandMetadata(brand: BrandName): Metadata {
  const slug = getBrandSlug(brand);
  const title = `${brand} Yedek Parça`;
  const description = `${brand} marka araçlar için mekanik, kaporta, elektrik ve bakım ürünlerinde güvenilir yedek parça tedariği. Kayasan Otomotiv ile hızlı iletişim ve doğru parça desteği.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: `${title} | Kayasan Otomotiv`,
      description,
      url: `${siteConfig.domain}/${slug}`,
      type: "website",
      images: [
        {
          url: `${siteConfig.domain}${siteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: `${brand} Yedek Parça | Kayasan Otomotiv`,
        },
      ],
    },
  };
}

export default function BrandPage({ brand }: BrandPageProps) {
  const whatsappLink = `${siteConfig.whatsappHref}?text=${encodeURIComponent(
    `Merhaba, ${brand} yedek parça hakkında bilgi almak istiyorum.`
  )}`;

  return (
    <main>
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50">
        <div className="soft-grid-bg absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
          <Reveal>
            <SectionTitle
              eyebrow={`${brand} Yedek Parça`}
              title={`${brand} Marka Araçlara Uygun Yedek Parça Çözümleri`}
              description={brandDescriptions[brand]}
            />
          </Reveal>

          <Reveal delay={90}>
            <div className="mt-8 grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
                <p className="text-lg leading-8 text-zinc-600">
                  Kayasan Otomotiv olarak {brand} marka araçlar için mekanik,
                  kaporta, elektrik ve bakım ürünlerinde güvenilir tedarik
                  sağlıyoruz. Doğru parçayı hızlı şekilde ulaştırmak ve müşteri
                  memnuniyetini ön planda tutmak temel hizmet anlayışımızdır.
                </p>

                <p className="mt-4 text-lg leading-8 text-zinc-600">
                  Triger setleri, ön takım parçaları, debriyaj ve volan setleri,
                  radyatörler, bakım ürünleri, filtre grupları ve daha birçok
                  yedek parça grubunda destek sunuyoruz.
                </p>
              </div>

              <div className="rounded-[2rem] border border-zinc-200 bg-zinc-900 p-8 text-white shadow-sm">
                <div className="inline-flex rounded-2xl bg-white/10 p-3">
                  <Sparkles size={22} />
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-tight">
                  {brand} için parça mı arıyorsun?
                </h3>

                <div className="mt-6 space-y-3 text-zinc-200">
                  <div className="inline-flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 text-green-400" />
                    Hemen bizimle iletişime geç.
                  </div>
                  <div className="inline-flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 text-green-400" />
                    Araç bilgine veya şasi numarasına göre doğru parçayı birlikte
                    belirleyelim.
                  </div>
                  <div className="inline-flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 text-green-400" />
                    Uygun marka ve fiyat seçeneklerini şeffaf şekilde sunalım.
                  </div>
                  <div className="inline-flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 text-green-400" />
                    İstersen gel al, istersen Türkiye geneline gönderim sağlayalım.
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    <MessageCircle size={16} />
                    WhatsApp ile Sor
                  </a>

                  <a
                    href={`tel:${siteConfig.phoneHref}`}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
                  >
                    <Phone size={16} />
                    Hemen Ara
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <Reveal>
          <SectionTitle
            eyebrow="Parça Grupları"
            title={`${brand} İçin Öne Çıkan Yedek Parça Grupları`}
            description={`${brand} marka araçlara yönelik başlıca parça ve bakım ürünlerimizi aşağıda inceleyebilirsiniz.`}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 70}>
                <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-5 inline-flex rounded-2xl bg-zinc-100 p-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-8 text-zinc-600">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Reveal>
            <SectionTitle
              eyebrow="Detaylı Ürün Yelpazesi"
              title={`${brand} İçin Neler Sunuyoruz?`}
              description={`${brand} marka araç sahiplerinin sıkça ihtiyaç duyduğu başlıca yedek parça kategorileri aşağıda yer alıyor.`}
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {suppliedGroups.map((item, index) => (
              <Reveal key={item} delay={index * 35}>
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm">
                  <BadgeCheck size={18} className="shrink-0 text-green-600" />
                  <span className="font-medium text-zinc-800">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-8 rounded-[2rem] border border-zinc-200 bg-white p-6">
              <p className="leading-8 text-zinc-600">
                Burada yer alan ürünlerin dışında da birçok farklı yedek parça
                grubunda destek sağlıyoruz. {brand} marka aracınız için doğru
                parçayı hızlıca öğrenmek isterseniz bizimle doğrudan iletişime
                geçebilirsiniz.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Reveal>
            <div className="rounded-[2rem] border border-zinc-200 bg-zinc-900 p-8 text-white shadow-sm md:p-10">
              <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <SectionTitle
                    eyebrow="Hızlı İletişim"
                    title={`${brand} Yedek Parça İçin Hızlı Destek`}
                    description={`${brand} marka araçlara uygun mekanik, elektrik, kaporta ve bakım ürünleri için bizimle hemen iletişime geçebilirsiniz.`}
                  />

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                    >
                      <MessageCircle size={18} />
                      WhatsApp ile Yazın
                    </a>

                    <a
                      href={`tel:${siteConfig.phoneHref}`}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
                    >
                      <Phone size={18} />
                      Hemen Ara
                    </a>

                    <a
                      href={siteConfig.directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      <Route size={18} />
                      Yol Tarifi Al
                    </a>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-white/10 p-6 text-white">
                  <p className="text-sm text-zinc-300">İletişim</p>
                  <p className="mt-2 text-3xl font-bold">{siteConfig.phoneDisplay}</p>
                  <p className="mt-3 leading-7 text-zinc-300">
                    {brand} parça bilgisi, araç uyumluluğu ve fiyat soruları için
                    doğrudan bize ulaşabilirsiniz.
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    <MessageCircle size={16} />
                    WhatsApp’tan Yazın
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}