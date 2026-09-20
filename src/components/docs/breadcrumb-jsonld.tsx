import { siteConfig } from "@/content/site";

export type Crumb = { name: string; path?: string };

/** Server-rendered BreadcrumbList for search engines; "Accueil" is prepended, the last item needs no path. */
export function BreadcrumbJsonLd({ trail }: { trail: Crumb[] }) {
  const items = [{ name: "Accueil", path: "/" }, ...trail].map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    ...(c.path ? { item: `${siteConfig.url}${c.path === "/" ? "" : c.path}` } : {}),
  }));
  const data = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
