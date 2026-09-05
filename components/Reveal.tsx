// Dosya: components/Reveal.tsx
"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

type RevealStyle = CSSProperties & {
  "--reveal-delay": string;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const supportsObserver = typeof window.IntersectionObserver === "function";

    if (!supportsObserver) {
      const frame = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: RevealStyle = { "--reveal-delay": `${delay}ms` };

  return (
    <div
      ref={ref}
      className={`${styles.root} ${visible ? styles.visible : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
