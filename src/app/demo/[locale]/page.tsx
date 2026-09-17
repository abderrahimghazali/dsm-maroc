import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/dsm/components/badge";
import { Button, ButtonGroup } from "@/dsm/components/button";
import { Card, CardArrow, CardBadges, CardBody, CardFooter, CardMeta, CardText, CardTitle } from "@/dsm/components/card";
import { KeyFigure, KeyFigureGrid } from "@/dsm/components/key-figure";
import { Notice } from "@/dsm/components/notice";
import { Tag, TagGroup } from "@/dsm/components/tag";
import { Tile, TileGrid } from "@/dsm/components/tile";
import { Emblem } from "@/dsm/components/block-mark";
import { ArrowForward, CircleCheck, Clock, Fingerprint, QrCode, Search } from "@/dsm/icons";
import { ui } from "@/dsm/i18n";
import { demoHref, getDemoContent, isDemoLocale } from "@/content/demo";
import { DemoIconGlyph } from "./icons";

export default async function DemoHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isDemoLocale(locale)) notFound();
  const c = await getDemoContent(locale);
  const t = ui[locale];
  const h = c.home;
  const href = (p: string) => demoHref(locale, p);

  return (
    <>
      <Notice tone="info" title={h.noticeTitle} description={h.noticeText} link={{ label: h.noticeLink.label, href: href(h.noticeLink.href) }} dismissible />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-surface">
        <div aria-hidden className="dsm-khatam-fade-end pointer-events-none absolute inset-y-0 end-0 w-[55%] text-vert opacity-[0.13]" />
        <div className="dsm-container relative py-14 lg:py-20">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="inline-block h-[3px] w-6 bg-primary" aria-hidden />
            {h.heroEyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-display font-semibold tracking-tighter text-balance">{h.heroTitle}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">{h.heroText}</p>

          <form role="search" action={href("/recherche")} method="get" className="mt-8 flex h-14 max-w-2xl items-stretch overflow-hidden rounded-lg bg-surface shadow-md ring-1 ring-line-strong focus-within:ring-2 focus-within:ring-focus">
            <label htmlFor="demo-search" className="dsm-sr-only">
              {h.searchLabel}
            </label>
            <span className="flex items-center ps-4 text-ink-subtle">
              <Search className="size-5" aria-hidden />
            </span>
            <input id="demo-search" name="q" type="search" placeholder={t.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-3 text-base text-ink outline-none placeholder:text-ink-subtle" />
            <button type="submit" className="bg-primary px-6 text-[0.9375rem] font-medium text-primary-fg transition-colors hover:bg-primary-hover">
              {t.search}
            </button>
          </form>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-sm text-ink-muted">{h.popularLabel}</span>
            <TagGroup>
              {h.popular.map((p, i) => (
                <Tag key={`${p.href}-${i}`} href={href(p.href)} size="sm">
                  {p.label}
                </Tag>
              ))}
            </TagGroup>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="dsm-container py-14 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">{h.themesTitle}</h2>
            <p className="mt-2 text-ink-muted">{h.themesText}</p>
          </div>
          <Button variant="tertiary" iconEnd={<ArrowForward />} render={<Link href={href("/demarches")} />}>
            {c.common.allServices}
          </Button>
        </div>
        <TileGrid columns={4} className="mt-8">
          {h.themes.map((th, i) => (
            <Tile key={`${th.href}-${i}`} href={href(th.href)} title={th.title} description={th.description} icon={<DemoIconGlyph name={th.icon} />} />
          ))}
        </TileGrid>
      </section>

      {/* Services */}
      <section className="border-y border-line bg-surface">
        <div className="dsm-container py-14 lg:py-16">
          <h2 className="text-3xl font-semibold tracking-tight">{h.servicesTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {h.services.map((s) => (
              <Card key={s.slug} interactive>
                <CardBody>
                  <CardMeta>{s.ministry}</CardMeta>
                  <CardTitle href={href(s.slug === c.procedure.slug ? `/demarches/${s.slug}` : "/demarches")}>{s.title}</CardTitle>
                  <CardText>{s.summary}</CardText>
                  <CardFooter>
                    <CardBadges>
                      {s.online && (
                        <Badge tone="success" dot>
                          {c.common.online}
                        </Badge>
                      )}
                      <Badge tone={s.free ? "neutral" : "outline"}>{s.free ? c.common.free : c.common.paid}</Badge>
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
        </div>
      </section>

      {/* Key figures */}
      <section className="relative overflow-hidden bg-surface-inverse text-ink-inverse">
        <div aria-hidden className="dsm-khatam-fade-start pointer-events-none absolute inset-y-0 start-0 w-1/2 text-vert opacity-30" />
        <div className="dsm-container relative py-14 lg:py-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-inverse/60">{h.figuresTitle}</h2>
          <KeyFigureGrid columns={4} className="mt-8 [&>*]:border-ink-inverse/15">
            {h.figures.map((f) => (
              <KeyFigure key={f.label} tone="inverse" value={f.value} label={f.label} />
            ))}
          </KeyFigureGrid>
        </div>
      </section>

      {/* Digital identity */}
      <section className="dsm-container grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <Fingerprint className="size-4" aria-hidden />
            {h.heroEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance">{h.identityTitle}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{h.identityText}</p>
          <ul className="mt-6 space-y-3">
            {h.identityPoints.map((p) => (
              <li key={p} className="flex gap-3 text-ink-muted">
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <ButtonGroup className="mt-8">
            <Button size="lg" iconEnd={<ArrowForward />} render={<Link href={href("/compte")} />}>
              {h.identityCta}
            </Button>
          </ButtonGroup>
        </div>
        <div className="relative">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-xl border border-line bg-surface p-6 shadow-lg">
            <div aria-hidden className="dsm-khatam-fade-radial pointer-events-none absolute -inset-6 text-vert opacity-[0.08]" />
            <div className="relative flex items-center justify-between">
              <Emblem className="size-10" />
              <Badge tone="success" dot>
                {c.common.online}
              </Badge>
            </div>
            <div className="relative mt-8 space-y-3">
              <div className="h-3 w-2/3 rounded-full bg-surface-sunken" />
              <div className="h-3 w-1/2 rounded-full bg-surface-sunken" />
              <div className="h-3 w-3/5 rounded-full bg-surface-sunken" />
            </div>
            <div className="relative mt-8 flex items-center justify-between rounded-lg bg-surface-muted p-4">
              <div className="flex items-center gap-3">
                <span className="dsm-arch flex size-11 items-center justify-center bg-vert-soft text-vert-soft-fg">
                  <Fingerprint className="size-5" aria-hidden />
                </span>
                <div className="space-y-1.5">
                  <div className="h-2.5 w-24 rounded-full bg-surface-sunken" />
                  <div className="h-2.5 w-16 rounded-full bg-surface-sunken" />
                </div>
              </div>
              <QrCode className="size-8 text-ink-subtle" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="border-t border-line bg-surface">
        <div className="dsm-container py-14 lg:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight">{h.newsTitle}</h2>
            <Button variant="tertiary" iconEnd={<ArrowForward />} render={<Link href={href("/actualites")} />}>
              {c.common.seeAll}
            </Button>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {h.news.map((n) => (
              <Card key={n.id} interactive variant="tinted">
                <CardBody>
                  <CardMeta className="flex items-center gap-2">
                    <Badge tone="outline" size="sm">
                      {n.category}
                    </Badge>
                    <span>{n.date}</span>
                  </CardMeta>
                  <CardTitle href={href(`/actualites/${n.id}`)}>{n.title}</CardTitle>
                  <CardText>{n.summary}</CardText>
                  <CardFooter>
                    <CardArrow label={c.common.readMore} />
                  </CardFooter>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App */}
      <section className="dsm-container py-14 lg:py-16">
        <Card variant="tinted" orientation="horizontal" className="items-center">
          <CardBody className="sm:flex-row sm:items-center sm:gap-8 sm:p-8">
            <span className="dsm-arch flex size-20 shrink-0 items-center justify-center bg-surface text-primary shadow-xs">
              <QrCode className="size-9" aria-hidden />
            </span>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold tracking-tight">{h.appTitle}</h2>
              <p className="mt-2 text-ink-muted">{h.appText}</p>
            </div>
            <Button variant="accent" iconEnd={<ArrowForward />} render={<Link href={href("/application")} />}>
              {h.appCta}
            </Button>
          </CardBody>
        </Card>
      </section>
    </>
  );
}
