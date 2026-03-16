import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://kayasanotomotiv.com/sitemap.xml",
    host: "https://kayasanotomotiv.com",
  };
}