// Dosya: components/TrackedLink.tsx
"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { siteConfig } from "@/data/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  conversionId?: string;
  eventName?: "phone_click" | "whatsapp_click" | "direction_click";
  eventLocation?: string;
};

export default function TrackedLink({
  children,
  conversionId = siteConfig.conversionId,
  eventName,
  eventLocation,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      !eventName ||
      typeof window.gtag !== "function"
    ) {
      return;
    }

    const location = eventLocation ?? "unspecified";

    window.gtag("event", eventName, {
      event_category: "lead",
      event_label: location,
      event_location: location,
    });

    const isPrimaryLead =
      eventName === "phone_click" || eventName === "whatsapp_click";

    if (conversionId && isPrimaryLead) {
      window.gtag("event", "conversion", {
        send_to: conversionId,
      });
    }
  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
