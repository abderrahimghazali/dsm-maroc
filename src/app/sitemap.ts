import type { MetadataRoute } from "next";
import { docsNav } from "@/content/nav";
import { getAllComponents } from "@/content/registry";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const docs = docsNav
    .flatMap((s) => s.entries.map((e) => e.href))
    .filter((href) => !href.startsWith("/demo"));
  const components = getAllComponents().map((c) => `/composants/${c.meta.slug}`);

  return [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/composants`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...docs.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...components.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
