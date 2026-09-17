import { notFound } from "next/navigation";
import { Badge } from "@/dsm/components/badge";
import { Breadcrumb } from "@/dsm/components/breadcrumb";
import { Card, CardArrow, CardBody, CardFooter, CardMeta, CardText, CardTitle } from "@/dsm/components/card";
import { Tag, TagGroup } from "@/dsm/components/tag";
import { demoHref, getDemoContent, isDemoLocale } from "@/content/demo";

export default async function NewsIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isDemoLocale(locale)) notFound();
  const c = await getDemoContent(locale);
  const href = (p: string) => demoHref(locale, p);

  return (
    <div className="dsm-container py-8 lg:py-12">
      <Breadcrumb items={[{ label: c.common.home, href: href("/") }, { label: c.news.title }]} />
      <header className="mt-8 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-balance">{c.news.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{c.news.intro}</p>
      </header>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <TagGroup>
          {c.news.categories.map((cat, i) => (
            <Tag key={cat} selectable pressed={i === 0}>
              {cat}
            </Tag>
          ))}
        </TagGroup>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {[...c.home.news, ...c.home.news].map((n, i) => (
          <Card key={`${n.id}-${i}`} interactive>
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
  );
}
