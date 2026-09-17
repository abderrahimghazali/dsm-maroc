import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/dsm/components/header";
import { Footer } from "@/dsm/components/footer";
import { OfficialBanner } from "@/dsm/components/official-banner";
import { LocaleProvider } from "@/dsm/i18n/provider";
import { localeMeta } from "@/dsm/i18n";
import { SocialFacebook, SocialInstagram, SocialLinkedin, SocialX, SocialYoutube } from "@/dsm/icons";
import { demoHref, demoLocales, getDemoContent, isDemoLocale, localeLinksFor } from "@/content/demo";
import { HtmlAttrs } from "./html-attrs";

export function generateStaticParams() {
  return demoLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isDemoLocale(locale)) return {};
  const c = await getDemoContent(locale);
  return { title: { default: c.meta.siteTitle, template: `%s · ${c.meta.siteTitle}` }, description: c.meta.description };
}

export default async function DemoLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isDemoLocale(locale)) notFound();
  const c = await getDemoContent(locale);
  const meta = localeMeta[locale];
  const entity = { fr: c.meta.entity, ar: c.meta.entity, zgh: c.meta.entity, en: c.meta.entity } as const;

  const nav = c.nav.map((item) => ({
    label: item.label,
    href: item.href ? demoHref(locale, item.href) : undefined,
    children: item.children?.map((ch) => ({ ...ch, href: demoHref(locale, ch.href) })),
    featured: item.featured ? { ...item.featured, href: demoHref(locale, item.featured.href) } : undefined,
  }));

  return (
    <LocaleProvider locale={locale}>
      <HtmlAttrs lang={meta.code} dir={meta.dir} />
      <div dir={meta.dir} lang={meta.code} className="flex min-h-dvh flex-col bg-canvas text-ink">
        <OfficialBanner />
        <Header
          entity={entity}
          homeHref={demoHref(locale, "/")}
          service={{ title: c.meta.siteTitle, tagline: c.meta.tagline, href: demoHref(locale, "/") }}
          nav={nav}
          localeLinks={localeLinksFor("/")}
          search={{ action: demoHref(locale, "/recherche") }}
          login={{ href: demoHref(locale, "/compte") }}
        />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer
          entity={entity}
          homeHref={demoHref(locale, "/")}
          description={c.footer.description}
          ecosystem={c.footer.ecosystem.map((l) => ({ ...l, external: true }))}
          columns={c.footer.columns.map((col) => ({ title: col.title, links: col.links.map((l) => ({ label: l.label, href: demoHref(locale, l.href) })) }))}
          bottomLinks={c.footer.bottomLinks.map((l) => ({ label: l.label, href: demoHref(locale, l.href) }))}
          social={[
            { label: "X", href: "https://x.com", icon: <SocialX /> },
            { label: "Facebook", href: "https://facebook.com", icon: <SocialFacebook /> },
            { label: "Instagram", href: "https://instagram.com", icon: <SocialInstagram /> },
            { label: "YouTube", href: "https://youtube.com", icon: <SocialYoutube /> },
            { label: "LinkedIn", href: "https://linkedin.com", icon: <SocialLinkedin /> },
          ]}
          license={c.footer.license}
        />
      </div>
    </LocaleProvider>
  );
}
