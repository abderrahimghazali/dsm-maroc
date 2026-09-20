import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/docs/code";
import { ExamplePreview } from "@/components/docs/example-preview";
import { PageHeader, Section } from "@/components/docs/page-header";
import { PropsTable } from "@/components/docs/props-table";
import { getAllComponents, getComponent } from "@/content/registry";
import { categoryLabels } from "@/content/types";
import { BreadcrumbJsonLd } from "@/components/docs/breadcrumb-jsonld";
import { seoDescription } from "@/lib/seo";
import { Badge } from "@/dsm/components/badge";
import { Accessibility, CircleCheck, CircleX, Languages } from "@/dsm/icons";

export function generateStaticParams() {
  return getAllComponents().map((c) => ({ slug: c.meta.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getComponent(slug);
  if (!entry) return { title: "Composant" };
  const title = entry.meta.titleEn ? `${entry.meta.title} (${entry.meta.titleEn})` : entry.meta.title;
  return {
    title,
    description: seoDescription(entry.meta.description),
    alternates: { canonical: `/composants/${entry.meta.slug}` },
    openGraph: { title: `${title} · DSM`, description: seoDescription(entry.meta.description, 200), url: `/composants/${entry.meta.slug}` },
  };
}

function List({ items, icon: Icon, tone }: { items: string[]; icon: typeof CircleCheck; tone: string }) {
  return (
    <ul className="space-y-2.5 text-sm leading-relaxed text-ink-muted">
      <BreadcrumbJsonLd trail={[{ name: "Composants", path: "/composants" }, { name: meta.title }]} />
      {items.map((it) => (
        <li key={it} className="flex gap-2.5">
          <Icon className={`mt-0.5 size-4 shrink-0 ${tone}`} aria-hidden />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getComponent(slug);
  if (!entry) notFound();
  const { meta, examples } = entry;
  const importLine = `import { ${meta.props?.[0]?.component ?? meta.title} } from "@/dsm/components/${meta.slug === "theme-toggle" ? "theme" : meta.slug}";`;

  return (
    <article>
      <PageHeader
        eyebrow={
          <span className="inline-flex items-center gap-2">
            <Link href={`/composants#${meta.category}`} className="text-primary no-underline hover:underline">
              {categoryLabels[meta.category]}
            </Link>
          </span>
        }
        title={meta.title}
        titleAr={meta.titleAr}
        titleEn={meta.titleEn}
        description={meta.description}
        aside={
          <div className="flex flex-col items-end gap-2">
            <Badge tone={meta.status === "beta" ? "warning" : "success"} dot>
              {meta.status === "beta" ? "Bêta" : "Stable"}
            </Badge>
            <code className="rounded-sm bg-surface-muted px-1.5 py-0.5 font-mono text-xs text-ink-muted">{meta.file}</code>
          </div>
        }
      />

      <Section id="import" title="Import">
        <CodeBlock code={importLine} lang="tsx" />
      </Section>

      <Section id="exemples" title="Exemples">
        <div className="space-y-10">
          {meta.examples.map((ex) => {
            const example = examples[ex.slug];
            if (!example) return null;
            const { Component, source } = example;
            return (
              <ExamplePreview
                key={ex.slug}
                id={`exemple-${ex.slug}`}
                title={ex.title}
                description={ex.description}
                inverse={ex.inverse}
                wide={ex.wide}
                minHeight={ex.minHeight}
                code={<CodeBlock code={source} lang="tsx" />}
              >
                <Component />
              </ExamplePreview>
            );
          })}
        </div>
      </Section>

      {(meta.when?.length || meta.whenNot?.length) && (
        <Section id="usage" title="Usage">
          <div className="grid gap-6 md:grid-cols-2">
            {meta.when?.length ? (
              <div className="rounded-lg border border-line bg-surface p-5">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-success-soft-fg">Quand l&apos;utiliser</h3>
                <List items={meta.when} icon={CircleCheck} tone="text-success" />
              </div>
            ) : null}
            {meta.whenNot?.length ? (
              <div className="rounded-lg border border-line bg-surface p-5">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-error-soft-fg">Quand ne pas l&apos;utiliser</h3>
                <List items={meta.whenNot} icon={CircleX} tone="text-error" />
              </div>
            ) : null}
          </div>
        </Section>
      )}

      {(meta.a11y?.length || meta.rtl?.length) && (
        <Section id="accessibilite" title="Accessibilité & langues">
          <div className="grid gap-6 md:grid-cols-2">
            {meta.a11y?.length ? (
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink">
                  <Accessibility className="size-4 text-primary" aria-hidden /> Accessibilité
                </h3>
                <List items={meta.a11y} icon={CircleCheck} tone="text-primary" />
              </div>
            ) : null}
            {meta.rtl?.length ? (
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink">
                  <Languages className="size-4 text-primary" aria-hidden /> RTL & multilingue
                </h3>
                <List items={meta.rtl} icon={CircleCheck} tone="text-primary" />
              </div>
            ) : null}
          </div>
        </Section>
      )}

      {meta.props?.length ? (
        <Section id="proprietes" title="Propriétés">
          <div className="space-y-6">
            {meta.props.map((p) => (
              <PropsTable key={p.component} component={p.component} items={p.items} />
            ))}
          </div>
        </Section>
      ) : null}

      {meta.related?.length ? (
        <Section id="lies" title="Composants liés">
          <ul className="flex flex-wrap gap-2">
            {meta.related.map((r) => {
              const rel = getComponent(r);
              return (
                <li key={r}>
                  <Link
                    href={`/composants/${r}`}
                    className="inline-flex h-9 items-center rounded-md border border-line bg-surface px-3 text-sm font-medium text-ink no-underline hover:border-line-strong"
                  >
                    {rel?.meta.title ?? r}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>
      ) : null}
    </article>
  );
}
