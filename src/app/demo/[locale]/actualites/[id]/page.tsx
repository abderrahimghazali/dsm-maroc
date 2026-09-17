import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/dsm/components/badge";
import { Breadcrumb } from "@/dsm/components/breadcrumb";
import { Card, CardArrow, CardBody, CardFooter, CardMeta, CardTitle } from "@/dsm/components/card";
import { Share } from "@/dsm/components/share";
import { Button } from "@/dsm/components/button";
import { Highlight } from "@/dsm/components/highlight";
import { ArrowForward, Calendar, Printer } from "@/dsm/icons";
import { ui } from "@/dsm/i18n";
import { demoHref, demoLocales, getDemoContent, isDemoLocale } from "@/content/demo";

export async function generateStaticParams() {
  const fr = await getDemoContent("fr");
  return demoLocales.flatMap((locale) => fr.home.news.map((n) => ({ locale, id: n.id })));
}

export default async function NewsArticle({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params;
  if (!isDemoLocale(locale)) notFound();
  const c = await getDemoContent(locale);
  const t = ui[locale];
  const article = c.home.news.find((n) => n.id === id);
  if (!article) notFound();
  const related = c.home.news.filter((n) => n.id !== id).slice(0, 2);
  const href = (p: string) => demoHref(locale, p);

  return (
    <div className="dsm-container py-8 lg:py-12">
      <Breadcrumb items={[{ label: c.common.home, href: href("/") }, { label: c.news.title, href: href("/actualites") }, { label: article.title }]} />
      <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <article>
          <header>
            <div className="flex flex-wrap items-center gap-3 text-sm text-ink-muted">
              <Badge tone="outline">{article.category}</Badge>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" aria-hidden />
                {article.date}
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance">{article.title}</h1>
            <p className="mt-4 text-xl leading-relaxed text-ink-muted">{article.summary}</p>
          </header>
          <div className="dsm-filet mt-8 w-24" />
          <div className="dsm-prose mt-8">
            {article.body.map((p, i) =>
              i === 1 ? (
                <Highlight key={i} size="md">
                  {p}
                </Highlight>
              ) : (
                <p key={i}>{p}</p>
              ),
            )}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
            <Share title={t.share} />
            <Button variant="tertiary" size="sm" iconStart={<Printer />}>
              {t.print}
            </Button>
          </div>
        </article>
        <aside className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">{c.news.title}</p>
          {related.map((n) => (
            <Card key={n.id} interactive variant="tinted">
              <CardBody className="gap-2 p-4">
                <CardMeta>{n.date}</CardMeta>
                <CardTitle href={href(`/actualites/${n.id}`)} className="text-base">
                  {n.title}
                </CardTitle>
                <CardFooter className="pt-0">
                  <CardArrow />
                </CardFooter>
              </CardBody>
            </Card>
          ))}
          <Button variant="secondary" className="w-full" iconEnd={<ArrowForward />} render={<Link href={href("/actualites")} />}>
            {c.common.seeAll}
          </Button>
        </aside>
      </div>
    </div>
  );
}
