import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Car,
  CheckCircle2,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  PackageCheck,
  Route,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import BrandsRow from "@/components/BrandsRow";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description:
    "Kayasan Otomotiv; 1993’ten bu yana Volkswagen, Audi, Seat, Skoda ve Porsche marka araçlar için mekanik, kaporta ve elektrik yedek parça tedariği sağlayan güvenilir otomotiv firmasıdır.",
  alternates: {
    canonical: "/",
  },
   openGraph: {
    title: "Kayasan Otomotiv | VAG Grubu Yedek Parça",
    description:
      "Volkswagen, Audi, Seat, Skoda ve Porsche araçlara yönelik mekanik, kaporta ve elektrik yedek parça çözümleri.",
    url: siteConfig.domain,
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Kayasan Otomotiv VAG Grubu Yedek Parça",
      },
    ],
  },
};

const features = [
  {
    title: "Mekanik Yedek Parça",
    description:
      "Volkswagen, Audi, Seat, Skoda ve Porsche marka araçlara yönelik mekanik yedek parça ihtiyaçlarına doğru ve güvenilir çözümler sunuyoruz.",
    icon: Wrench,
  },
  {
    title: "Kaporta ve Elektrik Parçaları",
    description:
      "Kaporta ve elektrik grubu ürünlerinde doğru parça seçimi, hızlı tedarik ve güvenilir hizmet anlayışıyla çalışıyoruz.",
    icon: Car,
  },
  {
    title: "Türkiye Geneline Hızlı Tedarik",
    description:
      "Türkiye’nin dört bir yanındaki müşterilerimize hızlı dönüş ve doğru ürün yönlendirmesi ile parça tedariği sağlıyoruz.",
    icon: PackageCheck,
  },
  {
    title: "Tecrübe ve Esnaflık",
    description:
      "1993’ten bu yana süregelen hizmet anlayışımızın temelinde güven, dürüstlük ve müşteri memnuniyeti bulunur.",
    icon: ShieldCheck,
  },
];

const shelfImages = [
  { title: "Düzenli Raf Sistemi", src: "/photos/raf/raf-1.jpg" },
  { title: "Geniş Ürün Stoğu", src: "/photos/raf/raf-2.jpg" },
  { title: "Mağaza ve Ürün Alanı", src: "/photos/raf/raf-3.jpg" },
];

const cargoImages = [
  { title: "Gönderime Hazır Sipariş", src: "/photos/kargo/kargo-1.jpeg" },
  { title: "Kutu İçi Parça Hazırlığı", src: "/photos/kargo/kargo-2.jpeg" },
  { title: "Paketleme Aşaması", src: "/photos/kargo/kargo-4.jpeg" },
  { title: "Koruyucu Ambalajlama", src: "/photos/kargo/kargo-5.jpeg" },
  { title: "Parça Yerleşimi", src: "/photos/kargo/kargo-6.jpeg" },
  { title: "Sipariş Toplama", src: "/photos/kargo/kargo-7.jpeg" },
];

const reasons = [
  {
    title: "30 Yılı Aşan Tecrübe",
    description:
      "1993 yılından bu yana otomotiv yedek parça alanında edindiğimiz deneyim ile güvenilir hizmet sunuyoruz.",
  },
  {
    title: "VAG Grubu Uzmanlığı",
    description:
      "Volkswagen, Audi, Seat, Skoda ve Porsche marka araçlara yönelik ürün tedariğinde uzmanlaşmış bir yapıya sahibiz.",
  },
  {
    title: "Türkiye Geneline Hizmet",
    description:
      "Sadece bulunduğumuz bölgede değil, Türkiye’nin dört bir yanındaki müşterilere hızlı parça tedariği sağlıyoruz.",
  },
];

const manufacturerLogos = [
  { name: "Bosch", src: "/markalogo/bosch.png", logoClass: "h-14" },
  { name: "Brembo", src: "/markalogo/brembo.png", logoClass: "h-16" },
  { name: "Continental", src: "/markalogo/continental.png", logoClass: "h-12" },
  { name: "Delphi", src: "/markalogo/delphi.png", logoClass: "h-25" },
  { name: "Denso", src: "/markalogo/denso.png", logoClass: "h-25" },
  { name: "Elring", src: "/markalogo/elring.png", logoClass: "h-25" },
  { name: "Febi", src: "/markalogo/febi.png", logoClass: "h-14" },
  { name: "Ferodo", src: "/markalogo/ferodo.png", logoClass: "h-25" },
  { name: "Filtron", src: "/markalogo/filtron.png", logoClass: "h-12" },
  { name: "Gates", src: "/markalogo/gates.png", logoClass: "h-25" },
  { name: "GKL", src: "/markalogo/gkl.png", logoClass: "h-14" },
  { name: "GKN", src: "/markalogo/gkn.png", logoClass: "h-12" },
  { name: "Hella", src: "/markalogo/hella.png", logoClass: "h-19" },
  { name: "Hengst", src: "/markalogo/hengst.png", logoClass: "h-24" },
  { name: "INA", src: "/markalogo/ina.png", logoClass: "h-22" },
  { name: "Kale", src: "/markalogo/kale.png", logoClass: "h-12" },
  { name: "Lemförder", src: "/markalogo/lemforderr.png", logoClass: "h-13" },
  { name: "LUK", src: "/markalogo/luk.png", logoClass: "h-14" },
  { name: "Mahle", src: "/markalogo/mahle.png", logoClass: "h-25" },
  { name: "Mann", src: "/markalogo/mann.png", logoClass: "h-15" },
  { name: "NGK", src: "/markalogo/ngk.png", logoClass: "h-25" },
  { name: "Sachs", src: "/markalogo/sachs.png", logoClass: "h-13" },
  { name: "SKF", src: "/markalogo/skf.png", logoClass: "h-25" },
  { name: "SWAG", src: "/markalogo/swag.png", logoClass: "h-12" },
  { name: "Textar", src: "/markalogo/textar.png", logoClass: "h-25" },
  { name: "Valeo", src: "/markalogo/valeo.png", logoClass: "h-12" },
  { name: "Victor Reinz", src: "/markalogo/victorreinz.png", logoClass: "h-28" },
  { name: "Zimmermann", src: "/markalogo/zimmermann.png", logoClass: "h-37" },
];

const manufacturerLogosLoop = [...manufacturerLogos, ...manufacturerLogos];

export default function Home() {
  const whatsappLink = `${siteConfig.whatsappHref}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <main>
      <section className="relative overflow-hidden border-b border-zinc-200 bg-[linear-gradient(to_bottom,_#fafafa,_#ffffff)]">
        <div className="absolute inset-0">
          <Image
            src="/hero/raf-bg.jpg"
            alt="Kayasan Otomotiv mağaza içi raf görünümü"
            fill
            priority
            className="object-cover object-center opacity-100 md:opacity-100"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/78 md:from-white md:via-white/88 md:to-white/70" />
        <div className="soft-grid-bg absolute inset-0 opacity-30" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-14 md:py-24">
          <Reveal>
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-white shadow-md md:h-28 md:w-28">
                  <Image
                    src={siteConfig.logoPath}
                    alt={`${siteConfig.companyName} logo`}
                    fill
                    className="object-contain p-1"
                    sizes="120px"
                    priority
                  />
                </div>

                <span className="inline-flex w-fit rounded-full border border-zinc-300 bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 backdrop-blur-sm">
                  Yedek Parçanın Tek Adresi
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-zinc-900 md:text-6xl">
                VAG grubu araçlar için güvenilir yedek parça adresi
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-700 md:text-lg">
                Kayasan Otomotiv, 1993 yılında İstanbul Cevizlibağ Akınsal Sanayi
                Sitesi’nde kurulmuş köklü bir otomotiv yedek parça işletmesidir.
                Volkswagen, Audi, Seat, Skoda ve Porsche marka araçlara yönelik
                mekanik, kaporta ve elektrik yedek parçalarının satışını
                gerçekleştirir.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-700 md:text-lg">
                Doğru parça, hızlı tedarik ve müşteri memnuniyetini esas alan hizmet
                anlayışımızla Türkiye’nin dört bir yanındaki müşterilerimize güvenilir
                çözümler sunuyoruz.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
                >
                  <Phone size={18} />
                  Hemen Ara
                </a>

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
                  href={siteConfig.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-zinc-300 bg-white/95 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
                >
                  <Route size={18} />
                  Yol Tarifi Al
                </a>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-pink-200 bg-gradient-to-br from-pink-50 via-fuchsia-50 to-orange-50 text-pink-600 transition hover:scale-105"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600 transition hover:scale-105"
                >
                  <Facebook size={18} />
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-3 text-sm text-zinc-700 sm:flex-row sm:flex-wrap sm:gap-5">
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-zinc-900" />
                  1993’ten beri tecrübe
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-zinc-900" />
                  Doğru parça tedariği
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-zinc-900" />
                  Türkiye geneline hizmet
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-zinc-200 bg-white/92 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-[2px]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                  <p className="text-sm text-zinc-500">Uzmanlık</p>
                  <p className="mt-2 text-lg font-semibold leading-8 text-zinc-900">
                    Mekanik • Kaporta • Elektrik
                  </p>
                </div>

                <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                  <p className="text-sm text-zinc-500">Marka Odağı</p>
                  <p className="mt-2 text-lg font-semibold leading-8 text-zinc-900">
                    Volkswagen • Audi • Seat • Skoda • Porsche
                  </p>
                </div>

                <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 sm:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-zinc-200 bg-white shadow-sm">
                      <Image
                        src={siteConfig.miniLogoPath}
                        alt={`${siteConfig.companyName} mini logo`}
                        fill
                        className="object-contain p-0.5"
                        sizes="48px"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-zinc-500">Google Güveni</p>
                      <p className="font-semibold text-zinc-900">
                        {siteConfig.companyName}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-zinc-900">
                    <Star size={18} className="fill-zinc-900" />
                    <span className="text-2xl font-bold">
                      {siteConfig.reviewSummary.ratingValue}
                    </span>
                    <span className="text-base font-medium text-zinc-600">/ 5</span>
                  </div>

                  <p className="mt-1 text-sm text-zinc-600">
                    {siteConfig.reviewSummary.reviewCount} Google değerlendirmesi
                  </p>

                  <a
                    href={siteConfig.googleBusinessUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900"
                  >
                    Google’da İncele
                    <ArrowRight size={16} />
                  </a>
                </div>

                <div className="rounded-3xl bg-zinc-900 p-6 text-white sm:col-span-2">
                  <p className="text-sm text-zinc-300">İletişim</p>
                  <p className="mt-2 text-3xl font-bold">{siteConfig.phoneDisplay}</p>
                  <p className="mt-2 text-zinc-300">
                    Sipariş, ürün bilgisi ve hızlı iletişim için doğrudan bize ulaşın.
                  </p>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`tel:${siteConfig.phoneHref}`}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
                    >
                      <Phone size={16} />
                      Ara
                    </a>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <BrandsRow />

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-14">
          <Reveal>
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Tedarik Ettiğimiz Üretici Markalar
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
                Kaliteli Parça Üreticileriyle Güçlü Tedarik Ağı
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-zinc-600 md:text-lg">
                İşletmemizde tercih edilen üretici markaların bir kısmı
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
                    className="flex h-24 w-[180px] shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className={`relative w-full ${brand.logoClass ?? "h-12"}`}>
                      <Image
                        src={brand.src}
                        alt={brand.name}
                        fill
                        className="object-contain"
                        sizes="180px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 md:pb-24 md:pt-16">
        <Reveal>
          <SectionTitle
            eyebrow="Hizmet Yapımız"
            title="Neler Sunuyoruz?"
            description="Volkswagen, Audi, Seat, Skoda ve Porsche marka araçlara yönelik yedek parça tedariğinde güven, hız ve doğru ürün yaklaşımıyla hizmet veriyoruz."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 70}>
                <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-5 inline-flex rounded-2xl bg-zinc-100 p-4">
                    <Icon size={26} />
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
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <Reveal>
            <div>
              <SectionTitle
                eyebrow="Kurumsal Tanıtım"
                title="Hakkımızda"
                description="Gerçek esnaf anlayışı, doğru parça tedariği ve yıllara dayanan tecrübe ile hizmet veriyoruz."
              />
              <p className="mt-6 leading-8 text-zinc-600">
                Kayasan Otomotiv, 1993 yılında İstanbul Cevizlibağ’daki Akınsal
                Sanayi Sitesi’nde kurulmuştur. Kurulduğu günden bu yana Volkswagen,
                Audi, Seat, Skoda ve Porsche marka araçlara yönelik mekanik,
                kaporta ve elektrik yedek parça satışı gerçekleştirmektedir.
              </p>
              <p className="mt-4 leading-8 text-zinc-600">
                Hizmet anlayışımızın temelinde doğru ürün, hızlı dönüş, müşteri
                memnuniyeti ve gerçek esnaflık yer alır. Türkiye’nin dört bir
                yanındaki müşterilerimize güvenilir parça tedariği sağlamayı
                sürdürüyoruz.
              </p>

              <Link
                href="/hakkimizda"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900"
              >
                Daha Fazla İncele
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
              <h3 className="text-3xl font-bold tracking-tight text-zinc-900">
                Neden Bizi Tercih Etmelisiniz?
              </h3>

              <div className="mt-7 space-y-5">
                {reasons.map((item, index) => (
                  <Reveal key={item.title} delay={index * 60}>
                    <div className="rounded-2xl bg-zinc-50 p-5">
                      <p className="font-semibold text-zinc-900">{item.title}</p>
                      <p className="mt-2 leading-7 text-zinc-600">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal>
          <SectionTitle
            eyebrow="Raf Görselleri"
            title="Stok ve Raf Düzenimiz"
            description="İşletmemizdeki raf yapısını ve stok düzenini yansıtan gerçek görseller."
            center
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {shelfImages.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-zinc-900">{item.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Reveal>
            <SectionTitle
              eyebrow="Kargo Süreci"
              title="Hazırlanan Siparişler"
              description="Paketleme ve kargolama sürecimize ait gerçek görseller ile işletmemizin aktif çalışma düzeni."
              center
            />
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {cargoImages.map((item, index) => (
              <Reveal key={item.src} delay={index * 70}>
                <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-semibold text-zinc-900">{item.title}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal>
          <SectionTitle
            eyebrow="Google Güveni"
            title="Google İşletme Profilimiz"
            description="Gerçek işletme profilimiz üzerinden kullanıcıların bizi daha yakından inceleyebilmesini sağlıyoruz."
            center
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 text-center shadow-sm">
            <div className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-3 shadow-sm">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-zinc-200 bg-white">
                <Image
                  src={siteConfig.miniLogoPath}
                  alt={`${siteConfig.companyName} mini logo`}
                  fill
                  className="object-contain p-0.5"
                  sizes="48px"
                />
              </div>
              <span className="text-sm font-semibold text-zinc-900">
                {siteConfig.companyName}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 text-zinc-900">
              <Star size={20} className="fill-zinc-900" />
              <span className="text-3xl font-bold">
                {siteConfig.reviewSummary.ratingValue}
              </span>
              <span className="text-lg font-medium text-zinc-600">/ 5</span>
            </div>

            <p className="mt-3 text-zinc-600">
              {siteConfig.reviewSummary.reviewCount} Google değerlendirmesi
            </p>

            <a
              href={siteConfig.googleBusinessUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              Google’da Yorumları Gör
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
                <SectionTitle
                  eyebrow="İletişim"
                  title="Bize Ulaşın"
                  description="Telefon, WhatsApp ve adres bilgilerimiz üzerinden bizimle hızlı şekilde iletişim kurabilirsiniz."
                />

                <div className="mt-8 space-y-5">
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
                        Hızlı iletişim için yazın
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

                  <div className="rounded-3xl bg-zinc-50 p-5">
                    <p className="font-semibold text-zinc-900">
                      Sipariş ve ürün bilgisi için hızlı iletişim
                    </p>
                    <p className="mt-2 text-zinc-600">
                      Telefonla anında arayabilir ya da WhatsApp üzerinden doğrudan
                      bize yazabilirsiniz.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row">
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
                  className="h-[420px] w-full border-0"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}