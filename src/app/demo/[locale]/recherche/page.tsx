import { notFound } from "next/navigation";
import { Badge } from "@/dsm/components/badge";
import { Breadcrumb } from "@/dsm/components/breadcrumb";
import { Card, CardArrow, CardBadges, CardBody, CardFooter, CardMeta, CardText, CardTitle } from "@/dsm/components/card";
import { Checkbox } from "@/dsm/components/checkbox";
import { EmptyState } from "@/dsm/components/empty-state";
import { Pagination } from "@/dsm/components/pagination";
import { Tag, TagGroup } from "@/dsm/components/tag";
import { TextLink } from "@/dsm/components/link";
import { Search, SearchX } from "@/dsm/icons";
import { ui } from "@/dsm/i18n";
import { demoHref, getDemoContent, isDemoLocale } from "@/content/demo";

export default async function SearchPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ q?: string; page?: string }> }) {
  const { locale } = await params;
  const { q, page } = await searchParams;
  if (!isDemoLocale(locale)) notFound();
  const c = await getDemoContent(locale);
  const t = ui[locale];
  const href = (p: string) => demoHref(locale, p);
  const query = (q ?? c.search.query).trim();
  const noResults = query.length > 0 && query.toLowerCase().includes("xyz");
  const results = noResults ? [] : c.search.results;
  const current = Math.max(1, Number(page ?? 1) || 1);

  return (
    <div className="dsm-container py-8 lg:py-12">
      <Breadcrumb items={[{ label: c.common.home, href: href("/") }, { label: c.search.title }]} />
      <header className="mt-8 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">{c.search.title}</h1>
        <form role="search" action={href("/recherche")} method="get" className="mt-6 flex h-13 items-stretch overflow-hidden rounded-lg bg-surface shadow-xs ring-1 ring-line-strong focus-within:ring-2 focus-within:ring-focus">
          <label htmlFor="search-q" className="dsm-sr-only">
            {t.search}
          </label>
          <span className="flex items-center ps-4 text-ink-subtle">
            <Search className="size-5" aria-hidden />
          </span>
          <input id="search-q" name="q" type="search" defaultValue={query} placeholder={t.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-3 text-base text-ink outline-none placeholder:text-ink-subtle" />
          <button type="submit" className="bg-ink px-5 text-sm font-medium text-ink-inverse transition-colors hover:bg-primary">
            {t.search}
          </button>
        </form>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <aside className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">{c.common.theme}</p>
            <TagGroup className="mt-3">
              {c.search.filterThemes.map((f, i) => (
                <Tag key={f} selectable pressed={i === 0} size="sm">
                  {f}
                </Tag>
              ))}
            </TagGroup>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">{c.common.ministry}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {c.search.filterMinistries.map((mi) => (
                <li key={mi}>
                  <Checkbox size="sm" label={mi} />
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
            <p className="text-sm text-ink-muted" aria-live="polite">
              {c.search.resultsCount.replace("{count}", String(results.length)).replace("{query}", query)}
            </p>
            <p className="text-sm text-ink-muted">
              {c.common.sortBy} <span className="font-medium text-ink">{c.common.relevance}</span>
            </p>
          </div>

          {results.length === 0 ? (
            <div className="py-10">
              <EmptyState
                icon={<SearchX />}
                title={c.search.noResults}
                description={
                  <span className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                    {c.search.suggestions.map((s) => (
                      <TextLink key={s} href={href(`/recherche?q=${encodeURIComponent(s)}`)}>
                        {s}
                      </TextLink>
                    ))}
                  </span>
                }
              />
            </div>
          ) : (
            <ul className="mt-2 divide-y divide-line">
              {results.map((r) => (
                <li key={r.href + r.title} className="py-2">
                  <Card variant="ghost" interactive className="rounded-md">
                    <CardBody className="gap-2 p-3 sm:p-4">
                      <CardMeta>{r.ministry}</CardMeta>
                      <CardTitle href={href(r.href)}>{r.title}</CardTitle>
                      <CardText>{r.summary}</CardText>
                      <CardFooter className="pt-1">
                        <CardBadges>
                          {r.online && (
                            <Badge tone="success" dot>
                              {c.common.online}
                            </Badge>
                          )}
                          <span className="text-xs text-ink-subtle">
                            {c.common.updatedOn} {r.updated}
                          </span>
                        </CardBadges>
                        <CardArrow />
                      </CardFooter>
                    </CardBody>
                  </Card>
                </li>
              ))}
            </ul>
          )}

          {results.length > 0 && (
            <div className="mt-8 flex justify-center">
              <Pagination page={current} pageCount={8} hrefFor={href(`/recherche?q=${encodeURIComponent(query)}&page={page}`)} />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
