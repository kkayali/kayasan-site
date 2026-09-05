// Dosya: components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import { getWhatsAppLink, siteConfig } from "@/data/site";
import styles from "./Navbar.module.css";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

const productLinks = [
  { href: "/urunler", label: "Tüm Ürünler" },
  { href: "/volkswagen-yedek-parca", label: "Volkswagen Yedek Parça" },
  { href: "/audi-yedek-parca", label: "Audi Yedek Parça" },
  { href: "/skoda-yedek-parca", label: "Skoda Yedek Parça" },
  { href: "/seat-yedek-parca", label: "Seat Yedek Parça" },
  { href: "/porsche-yedek-parca", label: "Porsche Yedek Parça" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement | null>(null);
  const whatsappLink = getWhatsAppLink();

  const productsActive = productLinks.some((item) => item.href === pathname);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!productsRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 62.01rem)");
    const closeMobileMenuOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileOpen(false);
    };

    desktopQuery.addEventListener("change", closeMobileMenuOnDesktop);
    return () =>
      desktopQuery.removeEventListener("change", closeMobileMenuOnDesktop);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setProductsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.brand}
          onClick={closeMenus}
          aria-label={`${siteConfig.shortName} ana sayfa`}
        >
          <span className={styles.logoWrap}>
            <Image
              src={siteConfig.miniLogoPath}
              alt=""
              fill
              className={styles.logo}
              sizes="52px"
              priority
            />
          </span>
          <span className={styles.brandCopy}>
            <strong>{siteConfig.shortName}</strong>
            <small>VAG grubu yedek parça · 1993</small>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Ana menü">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${
                pathname === item.href ? styles.active : ""
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}

          <div
            className={styles.products}
            ref={productsRef}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              className={`${styles.navLink} ${
                productsActive ? styles.active : ""
              }`}
              aria-expanded={productsOpen}
              aria-controls="urunler-menusu"
              aria-haspopup="true"
              onClick={() => setProductsOpen((current) => !current)}
            >
              Ürünler
              <ChevronDown
                size={15}
                className={productsOpen ? styles.chevronOpen : styles.chevron}
              />
            </button>

            <div
              id="urunler-menusu"
              className={styles.dropdown}
              hidden={!productsOpen}
            >
              {productLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={pathname === item.href ? styles.dropdownActive : ""}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={closeMenus}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/iletisim"
            className={`${styles.navLink} ${
              pathname === "/iletisim" ? styles.active : ""
            }`}
            aria-current={pathname === "/iletisim" ? "page" : undefined}
          >
            İletişim
          </Link>
        </nav>

        <div className={styles.desktopActions}>
          <TrackedLink
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            eventName="whatsapp_click"
            eventLocation="navbar"
            className={styles.whatsappAction}
          >
            <MessageCircle size={17} />
            WhatsApp
          </TrackedLink>
          <TrackedLink
            href={`tel:${siteConfig.phoneHref}`}
            eventName="phone_click"
            eventLocation="navbar"
            className={styles.phoneAction}
          >
            <Phone size={17} />
            Ara
          </TrackedLink>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobileOpen}
          aria-controls="mobil-menu"
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen ? (
        <div id="mobil-menu" className={styles.mobilePanel}>
          <nav className={styles.mobileNav} aria-label="Mobil menü">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? styles.mobileActive : ""}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={closeMenus}
              >
                {item.label}
              </Link>
            ))}

            <details className={styles.mobileProducts} open={productsActive}>
              <summary>
                Ürünler
                <ChevronDown size={17} />
              </summary>
              <div>
                {productLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={pathname === item.href ? styles.mobileActive : ""}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={closeMenus}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              href="/iletisim"
              className={pathname === "/iletisim" ? styles.mobileActive : ""}
              aria-current={pathname === "/iletisim" ? "page" : undefined}
              onClick={closeMenus}
            >
              İletişim
            </Link>
          </nav>

          <p className={styles.mobileHint}>
            Marka, model, model yılı ve aradığınız parçayı yazın; doğru ürünü
            birlikte teyit edelim.
          </p>

          <div className={styles.mobileActions}>
            <TrackedLink
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              eventLocation="mobile_menu"
              className={styles.whatsappAction}
            >
              <MessageCircle size={18} />
              WhatsApp ile yaz
            </TrackedLink>
            <TrackedLink
              href={`tel:${siteConfig.phoneHref}`}
              eventName="phone_click"
              eventLocation="mobile_menu"
              className={styles.phoneAction}
            >
              <Phone size={18} />
              {siteConfig.phoneDisplay}
            </TrackedLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
