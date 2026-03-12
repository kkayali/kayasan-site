import type { Metadata } from "next";
import Image from "next/image";
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
import BrandsRow from "@/components/BrandsRow";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Kayasan Otomotiv ürün grupları: mekanik, elektrik, kaporta, triger setleri, ön takım parçaları, bakım malzemeleri ve VAG grubu araçlara özel yedek parça çözümleri.",
  alternates: {
    canonical: "/urunler",
  },
  openGraph: {
    title: "Ürünler | Kayasan Otomotiv",
    description:
      "Volkswagen, Audi, Seat, Skoda ve Porsche araçlar için mekanik, elektrik, kaporta ve bakım ürünleri.",
    url: `${siteConfig.domain}/urunler`,
    type: "website",
  },
};

const productHighlights = [
  {
    title: "Mekanik Parçalar",
    description:
      "Motor parçaları, triger setleri, devirdaim setleri, debriyaj ve volan setleri, ön takım parçaları, radyatör ve benzeri birçok mekanik üründe doğru ve güvenilir tedarik sağlıyoruz.",
    icon: Wrench,
  },
  {
    title: "Elektrik ve Elektronik",
    description:
      "Elektrik sistemiyle ilgili çeşitli yedek parça ihtiyaçlarında doğru ürün yönlendirmesi ve hızlı parça temini sunuyoruz.",
    icon: Zap,
  },
  {
    title: "Kaporta Parçaları",
    description:
      "Ön tampon, panjur, ızgara, far çevresi, kaporta tamamlayıcı parçaları ve dış gövde grubuna ait birçok üründe profesyonel destek veriyoruz.",
    icon: Car,
  },
  {
    title: "Bakım Malzemeleri",
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

const catalogItems = [
  {
    title: "Ön Takım Parçaları",
    description:
      "Salıncak, Z rot, rot başı, burç setleri ve ön takım grubuna ait çeşitli ürünler.",
    src: "/products/on-takim-parcalari.jpeg",
  },
  {
    title: "Devirdaimli Triger Setleri",
    description:
      "VAG grubu araçlara uygun triger ve devirdaim setleri için güvenilir ürün tedariği.",
    src: "/products/triger-setleri.jpeg",
  },
  {
    title: "Kaporta Parçaları",
    description:
      "Kaporta grubunda çeşitli dış gövde parçaları ve tamamlayıcı ürünler.",
    src: "/products/kaporta-parcalari.jpeg",
  },
  {
    title: "DQ200 Mekatronik Tamir Kiti",
    description:
      "DQ200 şanzıman sistemine yönelik tamir kitleri ve ilgili parça çözümleri.",
    src: "/products/dq200-mekatronik.jpeg",
  },
  {
    title: "LUK Volan Setleri",
    description:
      "Volkswagen, Audi, Seat, Skoda ve Porsche araçlara uygun volan setleri.",
    src: "/products/luk-volan-setleri.jpeg",
  },
  {
    title: "Volanlı Debriyaj Setleri",
    description:
      "Debriyaj ve volan grubunda kaliteli ve güvenilir ürün tedariki.",
    src: "/products/volanli-debriyaj-setleri.jpeg",
  },
  {
    title: "Liqui Moly Motor Yağları",
    description:
      "Yeni nesil Alman teknolojisine sahip motor yağları ve bakım çözümleri.",
    src: "/products/liqui-moly-motor-yaglari.jpeg",
  },
  {
    title: "Bakım Malzemeleri",
    description:
      "Filtre, yağ ve bakım grubuna ait çeşitli orijinal ve kaliteli ürünler.",
    src: "/products/bakim-malzemeleri.jpeg",
  },
  {
    title: "Radyatörler",
    description:
      "VAG grubu araçlara uygun radyatör çeşitleri ve soğutma sistemi ürünleri.",
    src: "/products/radyatorler.jpeg",
  },
];

const manufacturerLogos = [
  { name: "Bosch", src: "/markalogo/bosch.png", logoClass: "h-14" },
  { name: "Brembo", src: "/markalogo/brembo.png", logoClass: "h-14" },
  { name: "Continental", src: "/markalogo/continental.png", logoClass: "h-12" },
  { name: "Delphi", src: "/markalogo/delphi.png", logoClass: "h-12" },
  { name: "Denso", src: "/markalogo/denso.png", logoClass: "h-14" },
  { name: "Elring", src: "/markalogo/elring.png", logoClass: "h-12" },
  { name: "Febi", src: "/markalogo/febi.png", logoClass: "h-14" },
  { name: "Ferodo", src: "/markalogo/ferodo.png", logoClass: "h-12" },
  { name: "Filtron", src: "/markalogo/filtron.png", logoClass: "h-12" },
  { name: "Gates", src: "/markalogo/gates.png", logoClass: "h-12" },
  { name: "GKL", src: "/markalogo/gkl.png", logoClass: "h-14" },
  { name: "GKN", src: "/markalogo/gkn.png", logoClass: "h-12" },
  { name: "Hella", src: "/markalogo/hella.png", logoClass: "h-13" },
  { name: "Hengst", src: "/markalogo/hengst.png", logoClass: "h-12" },
  { name: "INA", src: "/markalogo/ina.png", logoClass: "h-14" },
  { name: "Kale", src: "/markalogo/kale.png", logoClass: "h-12" },
  { name: "Lemförder", src: "/markalogo/lemforderr.png", logoClass: "h-13" },
  { name: "LUK", src: "/markalogo/luk.png", logoClass: "h-14" },
  { name: "Mahle", src: "/markalogo/mahle.png", logoClass: "h-13" },
  { name: "Mann", src: "/markalogo/mann.png", logoClass: "h-16" },
  { name: "NGK", src: "/markalogo/ngk.png", logoClass: "h-14" },
  { name: "Sachs", src: "/markalogo/sachs.png", logoClass: "h-13" },
  { name: "SKF", src: "/markalogo/skf.png", logoClass: "h-12" },
  { name: "SWAG", src: "/markalogo/swag.png", logoClass: "h-12" },
  { name: "Textar", src: "/markalogo/textar.png", logoClass: "h-12" },
  { name: "Valeo", src: "/markalogo/valeo.png", logoClass: "h-12" },
  { name: "Victor Reinz", src: "/markalogo/victorreinz.png", logoClass: "h-13" },
  { name: "Zimmermann", src: "/markalogo/zimmermann.png", logoClass: "h-12" },
];

const manufacturerLogosLoop = [...manufacturerLogos, ...manufacturerLogos];

export default function ProductsPage() {
  const whatsappLink = `${siteConfig.whatsappHref}?text=${encodeURIComponent(
    "Merhaba, ürünleriniz hakkında bilgi almak istiyorum."
  )}`;

  return (
    <main>
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50">
        <div className="soft-grid-bg absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Reveal>
            <SectionTitle
              eyebrow="Ürün Grupları"
              title="VAG Grubu Araçlara Uygun Yedek Parça Çözümleri"
              description="Kayasan Otomotiv olarak Volkswagen, Audi, Seat, Skoda ve Porsche marka araçlara yönelik mekanik, elektrik, kaporta ve bakım ürünlerinde güvenilir tedarik sağlıyoruz."
            />
          </Reveal>

          <Reveal delay={90}>
            <div className="mt-8 grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
                <p className="text-lg leading-8 text-zinc-600">
                  Ürün grubumuz; günlük bakım ihtiyaçlarından özel parça taleplerine
                  kadar uzanan geniş bir yapıya sahiptir. Ön takım parçaları, triger
                  ve devirdaim setleri, debriyaj ve volan setleri, radyatörler,
                  kaporta parçaları, motor yağları, filtre grupları, bakım
                  malzemeleri ve daha birçok ürün için müşterilerimize doğru ürün
                  yönlendirmesi yapıyoruz.
                </p>

                <p className="mt-4 text-lg leading-8 text-zinc-600">
                  Amacımız yalnızca parça satmak değil; müşteriye doğru parçayı,
                  hızlı şekilde ve güven veren bir iletişimle ulaştırmaktır.
                </p>
              </div>

              <div className="rounded-[2rem] border border-zinc-200 bg-zinc-900 p-8 text-white shadow-sm">
                <div className="inline-flex rounded-2xl bg-white/10 p-3">
                  <Sparkles size={22} />
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-tight">
                  Aracın için parça mı arıyorsun ?
                </h3>

                <div className="mt-6 space-y-3 text-zinc-200">
                  <div className="inline-flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 text-green-400" />
                    Hemen bizimle iletişime geç.
                  </div>
                  <div className="inline-flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 text-green-400" />
                    Aracının Şasi numarasına göre ihtiyacın olan parçaları doğru şekilde tespit edelim.
                  </div>
                  <div className="inline-flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 text-green-400" />
                    Sana istediğin ürünlerin marka ve fiyatlarını şeffaf şekilde gösterelim.
                  </div>
                  <div className="inline-flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 text-green-400" />
                    Siparişini oluştur , İSTER GEL AL , İSTERSEN BİZ SANA KARGOLAYALIM.
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

      <BrandsRow />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal>
          <SectionTitle
            eyebrow="Ürün İçeriği"
            title="Başlıca Sattığımız Ürün Grupları"
            description="Mekanik, elektrik, kaporta ve bakım odaklı ürün yapımızı aşağıda özet şekilde inceleyebilirsiniz."
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
              eyebrow="Katalog"
              title="Öne Çıkan Ürün Görsellerimiz"
              description="Ürünlerimizden sadece bir kısım ..."
              center
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {catalogItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/5] w-full bg-zinc-100">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <Reveal>
          <SectionTitle
            eyebrow="Detaylı Ürün Yelpazesi"
            title="Neler Satıyoruz?"
            description="Aşağıdaki ürün grupları, Kayasan Otomotiv’in aktif olarak öne çıktığı başlıca parça ve bakım kategorileridir."
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
          <div className="mt-8 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6">
            <p className="leading-8 text-zinc-600">
              Burada yer alan ürünler dışında, müşterilerimizin ihtiyaç duyduğu pek
              çok farklı yedek parça grubunda da yardımcı oluyoruz. Parça doğruluğu
              ve araç uyumluluğu konusunda hızlı bilgi almak için bizimle doğrudan
              iletişime geçebilirsiniz.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-14">
          <Reveal>
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Üretici Markalar
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
                Çalıştığımız Parça Üretici Markaları
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-zinc-600 md:text-lg">
                Ürün tedariğinde birçok güçlü üretici markayla çalışıyor, kalite ve
                güven anlayışımızı bu markalarla destekliyoruz.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="manufacturer-marquee relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 py-5 shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

              <div className="manufacturer-marquee-track flex items-center gap-4 px-4">
                {manufacturerLogosLoop.map((brand, index) => (
                  <div
                    key={`${brand.name}-${index}`}
                    className="flex h-28 w-[190px] shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className={`relative w-full ${brand.logoClass ?? "h-12"}`}>
                      <Image
                        src={brand.src}
                        alt={brand.name}
                        fill
                        className="object-contain"
                        sizes="190px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Reveal>
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm md:p-10">
              <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <SectionTitle
                    eyebrow="Hızlı İletişim"
                    title="Aradığınız Parçayı Sorun, Hızlıca Dönüş Sağlayalım"
                    description="Volkswagen, Audi, Seat, Skoda ve Porsche araçlara uygun mekanik, elektrik, kaporta ve bakım ürünleri için bizimle hemen iletişime geçebilirsiniz."
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
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
                    >
                      <Phone size={18} />
                      Hemen Ara
                    </a>

                    <a
                      href={siteConfig.directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
                    >
                      <Route size={18} />
                      Yol Tarifi Al
                    </a>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-zinc-900 p-6 text-white">
                  <p className="text-sm text-zinc-300">İletişim</p>
                  <p className="mt-2 text-3xl font-bold">{siteConfig.phoneDisplay}</p>
                  <p className="mt-3 leading-7 text-zinc-300">
                    Ürün bilgisi, araç uyumluluğu ve fiyat soruları için doğrudan
                    bize ulaşabilirsiniz.
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