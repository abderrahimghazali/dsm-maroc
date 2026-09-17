import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, ButtonGroup } from "@/dsm/components/button";
import { EmptyState } from "@/dsm/components/empty-state";
import { TextLink } from "@/dsm/components/link";
import { ArrowForward, SearchX } from "@/dsm/icons";
import { ui } from "@/dsm/i18n";
import { demoHref, getDemoContent, isDemoLocale } from "@/content/demo";

export default async function ErrorTemplate({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isDemoLocale(locale)) notFound();
  const c = await getDemoContent(locale);
  const t = ui[locale];
  const href = (p: string) => demoHref(locale, p);

  return (
    <section className="dsm-container py-16 lg:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-center font-mono text-sm text-ink-subtle">404</p>
        <EmptyState
          pattern
          icon={<SearchX />}
          title={c.errors.notFoundTitle}
          description={c.errors.notFoundText}
          action={
            <ButtonGroup className="justify-center">
              <Button render={<Link href={href("/")} />} iconEnd={<ArrowForward />}>
                {c.common.backHome}
              </Button>
              <Button variant="secondary" render={<Link href={href("/recherche")} />}>
                {t.search}
              </Button>
            </ButtonGroup>
          }
        />
        <div className="mt-12 rounded-lg border border-line bg-surface p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-ink-subtle">{c.errors.suggestionsTitle}</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {c.errors.suggestions.map((s, i) => (
              <li key={`${s.href}-${i}`}>
                <TextLink href={href(s.href)}>{s.label}</TextLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
