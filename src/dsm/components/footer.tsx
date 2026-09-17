"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { ArrowUp, ExternalLink } from "@/dsm/icons";
import type { Locale } from "@/dsm/i18n";
import { useLocale } from "@/dsm/i18n/provider";
import { BlockMark } from "./block-mark";

export type FooterLink = { label: string; href: string; external?: boolean };
export type FooterColumn = { title: string; links: FooterLink[] };

export type FooterProps = {
  entity?: Partial<Record<Locale, string>>;
  description?: ReactNode;
  /** Official ecosystem links shown under the description. */
  ecosystem?: FooterLink[];
  columns?: FooterColumn[];
  bottomLinks?: FooterLink[];
  social?: { label: string; href: string; icon: ReactNode }[];
  license?: ReactNode;
  /** Slot above the bottom bar (newsletter, partners…). */
  extra?: ReactNode;
  homeHref?: string;
  backToTop?: boolean;
  className?: string;
};

export function Footer({
  entity,
  description,
  ecosystem = [],
  columns = [],
  bottomLinks = [],
  social = [],
  license,
  extra,
  homeHref = "/",
  backToTop = true,
  className,
}: FooterProps) {
  const { t, locale } = useLocale();
  return (
    <footer id="pied-de-page" role="contentinfo" className={cn("relative mt-auto overflow-hidden bg-surface text-ink", className)}>
      <div className="dsm-filet" />
      <div aria-hidden className="dsm-khatam-fade-end pointer-events-none absolute inset-y-0 end-0 w-[38%] text-ink opacity-[0.045]" />

      <div className="dsm-container relative grid gap-10 py-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <BlockMark entity={entity} locale={locale} href={homeHref} size="lg" />
          {description && <div className="mt-6 max-w-md text-sm leading-relaxed text-ink-muted">{description}</div>}
          {ecosystem.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {ecosystem.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-ink no-underline hover:underline"
                  >
                    {l.label}
                    {l.external && <ExternalLink className="size-3.5 text-ink-subtle" aria-hidden />}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {columns.length > 0 && (
          <nav aria-label="Pied de page" className={cn("grid gap-8 sm:grid-cols-2", columns.length >= 3 && "lg:grid-cols-3")}>
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">{col.title}</p>
                <ul className="mt-3.5 flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm text-ink-muted no-underline transition-colors hover:text-ink hover:underline">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        )}
      </div>

      {extra && <div className="dsm-container relative pb-10">{extra}</div>}

      <div className="relative border-t border-line">
        <div className="dsm-container flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-1 gap-y-1 text-xs text-ink-muted">
            {bottomLinks.map((l, i) => (
              <li key={l.label} className="flex items-center">
                {i > 0 && <span aria-hidden className="mx-2 h-3 w-px bg-line-strong" />}
                <Link href={l.href} className="no-underline hover:text-ink hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {social.length > 0 && (
              <ul className="flex items-center gap-1" aria-label={t.followUs}>
                {social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-9 items-center justify-center rounded-md text-ink-muted hover:bg-surface-muted hover:text-ink [&_svg]:size-[18px]"
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {backToTop && (
              <a
                href="#top"
                className="inline-flex h-9 items-center gap-1.5 rounded-md border border-line px-3 text-xs font-medium text-ink-muted no-underline hover:border-line-strong hover:text-ink"
              >
                <ArrowUp className="size-3.5" aria-hidden />
                {t.backToTop}
              </a>
            )}
          </div>
        </div>
        {license && (
          <div className="dsm-container pb-6">
            <p className="text-xs leading-relaxed text-ink-subtle">{license}</p>
          </div>
        )}
      </div>
    </footer>
  );
}
