import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import BrandsRow from "@/components/BrandsRow";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Kayasan Otomotiv hakkında kurumsal bilgi, marka geçmişi, VAG grubu uzmanlığı ve hizmet anlayışı.",
};

const infoCards = [
  {
    title: "30 Yılı Aşan Tecrübe",
    description:
      "1993 yılından bu yana otomotiv yedek parça sektöründe tecrübe ile hizmet veriyoruz.",
  },
  {
    title: "VAG Grubu Uzmanlığı",
    description:
      "Volkswagen, Audi, Seat, Skoda ve Porsche marka araçlar için odaklı ürün tedariği sağlıyoruz.",
  },
  {
    title: "Güven ve Esnaflık",
    description:
      "Doğru ürün, dürüst iletişim ve müşteri memnuniyeti anlayışıyla çalışıyoruz.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Reveal>
            <SectionTitle
              eyebrow="Biz Kimiz ?"
              title={`${siteConfig.companyName} `}
              description="1993’ten bu yana VAG grubu araçlara yönelik güvenilir yedek parça tedariği sağlayan köklü bir işletmeyiz."
            />
          </Reveal>
        </div>
      </section>

      <BrandsRow />

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="space-y-8 text-zinc-700">
          <Reveal>
            <p className="leading-8">
              Kayasan Otomotiv, 1993 yılında İstanbul Cevizlibağ’da bulunan
              Akınsal Sanayi Sitesi’nde kurulmuştur. Kurulduğu günden bu yana
              Volkswagen, Audi, Seat, Skoda ve Porsche marka araçlara yönelik
              mekanik, kaporta ve elektrik yedek parçalarının satışını
              gerçekleştirmektedir.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <p className="leading-8">
              Uzun yıllara dayanan tecrübemiz sayesinde doğru parça tedariği,
              hızlı iletişim ve müşteri memnuniyeti odaklı bir hizmet anlayışı ile
              çalışıyoruz. Türkiye’nin dört bir yanındaki müşterilerimize güvenilir
              şekilde yedek parça tedariği sağlayarak sektörde sağlam bir yer
              edinmiş bulunmaktayız.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p className="leading-8">
              Kayasan Otomotiv için en önemli unsur; müşteriye doğru ürünü sunmak,
              güvenilir bir alışveriş ortamı oluşturmak ve gerçek esnaf anlayışıyla
              hizmet vermektir. Dijital tarafta oluşturduğumuz bu yapı da aynı
              yaklaşımı yansıtmak için hazırlanmıştır.
            </p>
          </Reveal>

          <div className="grid gap-6 pt-6 md:grid-cols-3">
            {infoCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}