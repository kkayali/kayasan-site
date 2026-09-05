// Dosya: components/BrandsRow.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import styles from "./BrandsRow.module.css";

const brands = [
  { name: "Volkswagen", src: "/brands/vw.png", href: "/volkswagen-yedek-parca" },
  { name: "Audi", src: "/brands/audi.png", href: "/audi-yedek-parca" },
  { name: "Seat", src: "/brands/seat.png", href: "/seat-yedek-parca" },
  { name: "Skoda", src: "/brands/skoda.png", href: "/skoda-yedek-parca" },
  { name: "Porsche", src: "/brands/porsche.png", href: "/porsche-yedek-parca" },
];

export default function BrandsRow() {
  return (
    <section className={styles.section} aria-labelledby="markalar-baslik">
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.heading}>
            <div>
              <p>Uzmanlık alanımız</p>
              <h2 id="markalar-baslik">VAG grubu araçlara odaklı parça tedariği</h2>
            </div>
            <span>Markanızı seçerek ilgili sayfaya geçin.</span>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {brands.map((brand, index) => (
            <Reveal key={brand.name} delay={index * 45}>
              <Link href={brand.href} className={styles.card}>
                <span className={styles.logoWrap}>
                  <Image
                    src={brand.src}
                    alt={`${brand.name} logosu`}
                    fill
                    className={styles.logo}
                    sizes="(max-width: 640px) 42vw, 180px"
                  />
                </span>
                <span className={styles.cardBottom}>
                  <strong>{brand.name}</strong>
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
