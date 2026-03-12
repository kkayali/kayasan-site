import Image from "next/image";
import Reveal from "@/components/Reveal";

const brands = [
  { name: "Volkswagen", src: "/brands/vw.png" },
  { name: "Audi", src: "/brands/audi.png" },
  { name: "Seat", src: "/brands/seat.png" },
  { name: "Skoda", src: "/brands/skoda.png" },
  { name: "Porsche", src: "/brands/porsche.png" },
];

export default function BrandsRow() {
  return (
    <section className="border-y border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Reveal>
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Desteklenen Markalar
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
              VAG Grubu Araçlara Uygun Parça Çözümleri
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {brands.map((brand, index) => (
            <Reveal key={brand.name} delay={index * 70}>
              <div className="flex h-32 items-center justify-center rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
                <div className="relative h-24 w-full">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 150px, 220px"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}