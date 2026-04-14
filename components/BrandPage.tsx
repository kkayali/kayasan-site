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
import TrackedLink from "@/components/TrackedLink";
import { siteConfig } from "@/data/site";
import { brandModels } from "@/data/brandModels";
import { partsCatalog } from "@/data/partsCatalog";

type BrandName = "Volkswagen" | "Audi" | "Skoda" | "Seat" | "Porsche";

type BrandPageProps = {
  brand: BrandName;
};

const CONVERSION_ID = "AW-18057403546/PdT-CL-voZscEJq5uKJD";

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
  const description = `${brand} marka araçlar için mekanik, kaporta, elektrik, bakım ve birçok farklı parça grubunda güvenilir yedek parça tedariği. Kayasan Otomotiv ile hızlı iletişim ve doğru parça desteği.`;

  return {
    title: `${brand} Yedek Parça`,
    description,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: `${brand} Yedek Parça | Kayasan Otomotiv`,
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

  const models = brandModels[brand] ?? [];
  const featuredParts = partsCatalog.slice(0, 32);

  const categoryCounts = Array.from(
    partsCatalog.reduce((map, item) => {
      map.set(item.category, (map.get(item.category) ?? 0) + 1);
      return map;
    }, new Map<string, number>())
  ).map(([category, count]) => ({ category, count }));

  const topCategories = categoryCounts
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);

  const seoCombinationModels = models.slice(0, 6);
  const seoCombinationParts = partsCatalog.slice(0, 12);

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
                  {brand} araçlara yönelik geniş parça kataloğumuzda triger
                  setlerinden radyatörlere, ön takım parçalarından far ve tampon
                  gruplarına, sensörlerden bakım malzemelerine kadar çok sayıda
                  ürün grubu yer almaktadır.
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
                  <TrackedLink
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    conversionId={CONVERSION_ID}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    <MessageCircle size={16} />
                    WhatsApp ile Sor
                  </TrackedLink>

                  <TrackedLink
                    href={`tel:${siteConfig.phoneHref}`}
                    conversionId={CONVERSION_ID}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
                  >
                    <Phone size={16} />
                    Hemen Ara
                  </TrackedLink>
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
              eyebrow="Model Yelpazesi"
              title={`${brand} Modelleri`}
              description={`${brand} marka araçlarda sık karşılaşılan modeller için doğru yedek parça desteği sağlıyoruz.`}
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {models.map((model, index) => (
              <Reveal key={model.slug} delay={index * 25}>
                <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <p className="text-lg font-semibold text-zinc-900">
                    {brand} {model.name}
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    Yedek parça çözümleri
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <Reveal>
          <SectionTitle
            eyebrow="Parça Kataloğu"
            title={`${brand} İçin Geniş Parça Kataloğu`}
            description={`Genel parça listemiz içerisindeki çok sayıda ürün grubu ${brand} araçlar için talep edilen başlıca yedek parçaları kapsamaktadır.`}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featuredParts.map((item, index) => (
            <Reveal key={`${item.slug}-${index}`} delay={index * 20}>
              <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm">
                <BadgeCheck size={18} className="shrink-0 text-green-600" />
                <div>
                  <p className="font-medium text-zinc-800">{item.name}</p>
                  <p className="text-xs text-zinc-500">{item.category}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6">
            <p className="leading-8 text-zinc-600">
              Katalog yapımızda toplam <strong>{partsCatalog.length}</strong> farklı
              parça adı yer almaktadır. Bu yapı; {brand} marka araçlar için motor,
              bakım, şanzıman, fren, ön takım, süspansiyon, elektrik, kaporta,
              soğutma ve diğer birçok ürünü kapsayacak şekilde hazırlanmıştır.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Reveal>
            <SectionTitle
              eyebrow="Kategori Bazlı Dağılım"
              title={`${brand} İçin Talep Edilen Parça Kategorileri`}
              description={`${brand} marka araçlarda sık sorulan ürünleri kategori bazında aşağıda görebilirsiniz.`}
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {topCategories.map((item, index) => (
              <Reveal key={item.category} delay={index * 30}>
                <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-5 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold text-zinc-900">
                      {item.category}
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-700">
                      {item.count}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {brand} araçlara yönelik {item.category.toLowerCase()} grubunda
                    çok sayıda ürün adı katalog yapımız içerisinde yer almaktadır.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <Reveal>
          <SectionTitle
            eyebrow="Model + Parça Kombinasyonları"
            title={`${brand} İçin Sık Aranan Parça Kombinasyonları`}
            description={`${brand} modelleri için kullanıcıların sıklıkla aradığı parça kombinasyonlarını aşağıda örnek olarak görebilirsiniz.`}
          />
        </Reveal>

        <div className="mt-10 space-y-8">
          {seoCombinationModels.map((model, modelIndex) => (
            <Reveal key={model.slug} delay={modelIndex * 40}>
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                  {brand} {model.name} İçin Parçalar
                </h3>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {seoCombinationParts.map((part, partIndex) => (
                    <div
                      key={`${model.slug}-${part.slug}-${partIndex}`}
                      className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3"
                    >
                      <p className="text-sm font-medium leading-6 text-zinc-800">
                        {brand} {model.name} {part.name}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 leading-8 text-zinc-600">
                  {brand} {model.name} için{" "}
                  {seoCombinationParts
                    .slice(0, 5)
                    .map((item) => item.name.toLowerCase())
                    .join(", ")}{" "}
                  ve daha birçok farklı üründe Kayasan Otomotiv stok ve tedarik
                  desteği sunmaktadır. Doğru ürün teyidi için bizimle hızlıca
                  iletişime geçebilirsiniz.
                </p>
              </div>
            </Reveal>
          ))}
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
                    <TrackedLink
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      conversionId={CONVERSION_ID}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                    >
                      <MessageCircle size={18} />
                      WhatsApp ile Yazın
                    </TrackedLink>

                    <TrackedLink
                      href={`tel:${siteConfig.phoneHref}`}
                      conversionId={CONVERSION_ID}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
                    >
                      <Phone size={18} />
                      Hemen Ara
                    </TrackedLink>

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

                  <TrackedLink
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    conversionId={CONVERSION_ID}
                    className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    <MessageCircle size={16} />
                    WhatsApp’tan Yazın
                    <ArrowRight size={16} />
                  </TrackedLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}