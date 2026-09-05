// Dosya: components/ProductCatalog.tsx
"use client";

import { ArrowUpRight, MessageCircle, Search, X } from "lucide-react";
import { useDeferredValue, useMemo, useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import type { PartItem } from "@/data/partsCatalog";
import { getWhatsAppLink } from "@/data/site";
import styles from "./ProductCatalog.module.css";

type ProductCatalogProps = {
  items: PartItem[];
};

function normalizeText(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function getProductWhatsAppLink(productName: string) {
  return getWhatsAppLink(
    [
      `Merhaba, ${productName} hakkında bilgi almak istiyorum.`,
      "",
      "Araç marka/model:",
      "Model yılı:",
      "Varsa şasi no / OEM kodu:",
    ].join("\n")
  );
}

export default function ProductCatalog({ items }: ProductCatalogProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [visibleCount, setVisibleCount] = useState(48);
  const deferredQuery = useDeferredValue(query);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    items.forEach((item) => {
      counts.set(item.category, (counts.get(item.category) ?? 0) + 1);
    });

    return Array.from(counts, ([name, count]) => ({ name, count })).sort(
      (a, b) => b.count - a.count
    );
  }, [items]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = normalizeText(deferredQuery);

    return items.filter((item) => {
      const categoryMatches =
        activeCategory === "Tümü" || item.category === activeCategory;
      const queryMatches =
        !normalizedQuery ||
        normalizeText(`${item.name} ${item.category}`).includes(normalizedQuery);

      return categoryMatches && queryMatches;
    });
  }, [activeCategory, deferredQuery, items]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const emptyResultWhatsappLink = getWhatsAppLink(
    [
      "Merhaba, katalogda aradığım parçayı bulamadım.",
      "",
      `Aradığım ifade: ${query.trim() || "-"}`,
      `Seçili kategori: ${activeCategory}`,
      "Araç marka/model:",
      "Model yılı:",
      "Varsa şasi no / OEM kodu:",
    ].join("\n")
  );

  const clearFilters = () => {
    setQuery("");
    setActiveCategory("Tümü");
    setVisibleCount(48);
  };

  return (
    <div className={styles.catalog}>
      <div className={styles.toolbar}>
        <label className={styles.searchBox}>
          <span className="srOnly">Parça ara</span>
          <Search size={20} aria-hidden="true" />
          <input
            type="search"
            value={query}
            autoComplete="off"
            enterKeyHint="search"
            placeholder="Parça adı yazın: triger, far, filtre..."
            onChange={(event) => {
              setQuery(event.target.value);
              setVisibleCount(48);
            }}
          />
          {query ? (
            <button
              type="button"
              aria-label="Aramayı temizle"
              onClick={() => {
                setQuery("");
                setVisibleCount(48);
              }}
            >
              <X size={18} />
            </button>
          ) : null}
        </label>

        <div className={styles.resultCount} aria-live="polite">
          <strong>{filteredItems.length}</strong>
          <span>ürün adı eşleşti</span>
        </div>
      </div>

      <div
        className={styles.categoryScroller}
        role="group"
        aria-label="Ürün kategorileri"
      >
        <button
          type="button"
          className={activeCategory === "Tümü" ? styles.activeCategory : ""}
          aria-pressed={activeCategory === "Tümü"}
          onClick={() => {
            setActiveCategory("Tümü");
            setVisibleCount(48);
          }}
        >
          Tümü <span>{items.length}</span>
        </button>
        {categories.map((category) => (
          <button
            type="button"
            key={category.name}
            className={
              activeCategory === category.name ? styles.activeCategory : ""
            }
            aria-pressed={activeCategory === category.name}
            onClick={() => {
              setActiveCategory(category.name);
              setVisibleCount(48);
            }}
          >
            {category.name} <span>{category.count}</span>
          </button>
        ))}
      </div>

      {visibleItems.length ? (
        <>
          <ul className={styles.grid}>
            {visibleItems.map((item) => (
              <li key={`${item.category}-${item.slug}`}>
                <TrackedLink
                  href={getProductWhatsAppLink(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  eventLocation="product_catalog_item"
                  className={styles.itemLink}
                  aria-label={`${item.name} için WhatsApp üzerinden fiyat ve uyumluluk sorun`}
                >
                  <span className={styles.itemCategory}>{item.category}</span>
                  <strong>{item.name}</strong>
                  <span className={styles.itemAction}>
                    WhatsApp’tan sorun <ArrowUpRight size={16} />
                  </span>
                </TrackedLink>
              </li>
            ))}
          </ul>

          {visibleCount < filteredItems.length ? (
            <button
              type="button"
              className={styles.loadMore}
              onClick={() => setVisibleCount((count) => count + 48)}
            >
              Daha fazla ürün göster
              <span>
                {Math.min(visibleCount, filteredItems.length)} / {filteredItems.length}
              </span>
            </button>
          ) : null}
        </>
      ) : (
        <div className={styles.emptyState}>
          <Search size={28} />
          <h3>Bu filtrelerle eşleşen ürün bulunamadı.</h3>
          <p>
            Yazımı kontrol edin veya parçayı WhatsApp üzerinden doğrudan sorun.
          </p>
          <div className={styles.emptyActions}>
            <button type="button" onClick={clearFilters}>
              Filtreleri temizle
            </button>
            <TrackedLink
              href={emptyResultWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              eventLocation="product_catalog_empty"
            >
              <MessageCircle size={17} /> WhatsApp’tan sorun
            </TrackedLink>
          </div>
        </div>
      )}
    </div>
  );
}
