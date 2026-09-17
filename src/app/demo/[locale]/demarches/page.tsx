import { notFound } from "next/navigation";
import { Badge } from "@/dsm/components/badge";
import { Breadcrumb } from "@/dsm/components/breadcrumb";
import { Card, CardArrow, CardBadges, CardBody, CardFooter, CardMeta, CardText, CardTitle } from "@/dsm/components/card";
import { Pagination } from "@/dsm/components/pagination";
import { Tag, TagGroup } from "@/dsm/components/tag";
import { Tile, TileGrid } from "@/dsm/components/tile";
import { Clock } from "@/dsm/icons";
import { demoHref, getDemoContent, isDemoLocale } from "@/content/demo";
import { DemoIconGlyph } from "../icons";

export default async function ServicesIndex({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ theme?: string }> }) {
  const { locale } = await params;
  const { theme } = await searchParams;
  if (!isDemoLocale(locale)) notFound();
  const c = await getDemoContent(locale);
  const href = (p: string) => demoHref(locale, p);
  const services = [...c.home.services, ...c.search.results.slice(0, 3).map((r, i) => ({
    slug: `r-${i}`,
    title: r.title,
    ministry: r.ministry,
    theme: c.search.filterThemes[i % c.search.filterThemes.length],
    summary: r.summary,
    online: r.online,
    free: i % 2 === 0,
    duration: c.home.services[i % c.home.services.length].duration,
  }))];

  return (
    <div className="dsm-container py-8 lg:py-12">
      <Breadcrumb items={[{ label: c.common.home, href: href("/") }, { label: c.common.allServices }]} />
      <header className="mt-8 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-balance">{c.common.allServices}</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{c.home.themesText}</p>
      </header>

      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">{c.common.theme}</h2>
        <TileGrid columns={4} className="mt-4">
          {c.home.themes.map((th, i) => (
            <Tile key={`${th.href}-${i}`} href={href(th.href)} title={th.title} icon={<DemoIconGlyph name={th.icon} />} variant="tinted" orientation="horizontal" />
          ))}
        </TileGrid>
      </section>

      <section className="mt-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-ink-muted">
            <span className="font-semibold text-ink">{services.length}</span> {c.common.results}
            {theme && (
              <>
                {" · "}
                <span className="font-medium text-ink">{theme}</span>
              </>
            )}
          </p>
          <TagGroup>
            {c.search.filterThemes.map((f, i) => (
              <Tag key={f} selectable pressed={i === 0} size="sm">
                {f}
              </Tag>
            ))}
          </TagGroup>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.slug} interactive>
              <CardBody>
                <CardMeta>{s.theme} · {s.ministry}</CardMeta>
                <CardTitle href={href(s.slug === c.procedure.slug ? `/demarches/${s.slug}` : "/demarches")}>{s.title}</CardTitle>
                <CardText>{s.summary}</CardText>
                <CardFooter>
                  <CardBadges>
                    {s.online && (
                      <Badge tone="success" dot>
                        {c.common.online}
                      </Badge>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs text-ink-subtle">
                      <Clock className="size-3.5" aria-hidden />
                      {s.duration}
                    </span>
                  </CardBadges>
                  <CardArrow />
                </CardFooter>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Pagination page={1} pageCount={12} hrefFor={href("/demarches?page={page}")} />
        </div>
      </section>
    </div>
  );
}
