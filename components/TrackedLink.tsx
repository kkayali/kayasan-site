"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  conversionId?: string;
};

export default function TrackedLink({
  children,
  conversionId,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (conversionId && typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: conversionId,
      });
    }

    onClick?.(event);
  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}