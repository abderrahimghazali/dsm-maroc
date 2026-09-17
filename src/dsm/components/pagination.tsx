"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { ChevronBack, ChevronForward } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

type PageToken = number | "ellipsis";

function pageRange(page: number, pageCount: number, siblingCount: number): PageToken[] {
  const totalVisible = siblingCount * 2 + 5;
  if (pageCount <= totalVisible) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  const left = Math.max(page - siblingCount, 1);
  const right = Math.min(page + siblingCount, pageCount);
  const showLeftGap = left > 2;
  const showRightGap = right < pageCount - 1;

  const pages: PageToken[] = [1];
  if (showLeftGap) {
    pages.push("ellipsis");
  } else {
    for (let i = 2; i < left; i++) pages.push(i);
  }
  for (let i = left; i <= right; i++) {
    if (i !== 1 && i !== pageCount) pages.push(i);
  }
  if (showRightGap) {
    pages.push("ellipsis");
  } else {
    for (let i = right + 1; i < pageCount; i++) pages.push(i);
  }
  pages.push(pageCount);
  return pages;
}

function hrefForPage(template: string, page: number) {
  return template.replace("{page}", String(page));
}

const controlClass = "inline-flex size-10 shrink-0 items-center justify-center rounded-md text-sm font-medium text-ink-muted transition-colors duration-(--dsm-duration-fast) ease-dsm hover:bg-surface-muted hover:text-ink";
const disabledClass = "pointer-events-none opacity-40";

function PageControl({
  page,
  disabled,
  ariaLabel,
  hrefFor,
  onPageChange,
  children,
}: {
  page: number;
  disabled?: boolean;
  ariaLabel: string;
  hrefFor?: string;
  onPageChange?: (page: number) => void;
  children: ReactNode;
}) {
  const className = cn(controlClass, disabled && disabledClass);

  if (hrefFor && !disabled) {
    return (
      <Link href={hrefForPage(hrefFor, page)} aria-label={ariaLabel} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" aria-label={ariaLabel} disabled={disabled} onClick={() => onPageChange?.(page)} className={className}>
      {children}
    </button>
  );
}

function EdgeIcon({ direction }: { direction: "start" | "end" }) {
  const Icon = direction === "start" ? ChevronBack : ChevronForward;
  return (
    <span className="relative inline-flex">
      <Icon className="size-4" />
      <Icon className="-ms-2.5 size-4" />
    </span>
  );
}

export type PaginationProps = Omit<ComponentProps<"nav">, "children"> & {
  page: number;
  pageCount: number;
  /** URL template containing the literal "{page}" placeholder — pass a string so this stays usable from Server Components. */
  hrefFor?: string;
  onPageChange?: (page: number) => void;
  siblingCount?: number;
  variant?: "default" | "compact";
};

export function Pagination({
  page,
  pageCount,
  hrefFor,
  onPageChange,
  siblingCount = 1,
  variant = "default",
  className,
  ...props
}: PaginationProps) {
  const t = useT();
  if (pageCount <= 1) return null;

  const isFirst = page <= 1;
  const isLast = page >= pageCount;

  if (variant === "compact") {
    return (
      <nav aria-label={t.pagination} className={cn("flex items-center justify-between gap-3", className)} {...props}>
        <PageControl page={page - 1} disabled={isFirst} ariaLabel={t.previous} hrefFor={hrefFor} onPageChange={onPageChange}>
          <ChevronBack className="size-4" />
        </PageControl>
        <p className="text-sm text-ink-muted">
          {t.page} <span className="font-semibold text-ink">{page}</span> {t.pageOf} {pageCount}
        </p>
        <PageControl page={page + 1} disabled={isLast} ariaLabel={t.next} hrefFor={hrefFor} onPageChange={onPageChange}>
          <ChevronForward className="size-4" />
        </PageControl>
      </nav>
    );
  }

  const pages = pageRange(page, pageCount, siblingCount);

  return (
    <nav aria-label={t.pagination} className={cn("flex flex-wrap items-center justify-center gap-1", className)} {...props}>
      <PageControl page={1} disabled={isFirst} ariaLabel={t.firstPage} hrefFor={hrefFor} onPageChange={onPageChange}>
        <EdgeIcon direction="start" />
      </PageControl>
      <PageControl page={page - 1} disabled={isFirst} ariaLabel={t.previous} hrefFor={hrefFor} onPageChange={onPageChange}>
        <ChevronBack className="size-4" />
      </PageControl>

      <ul className="flex items-center gap-1">
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <li key={`ellipsis-${i}`} aria-hidden className="flex size-10 items-center justify-center text-ink-subtle">
              …
            </li>
          ) : p === page ? (
            <li key={p}>
              <span
                aria-current="page"
                className="inline-flex size-10 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-fg"
              >
                {p}
                <span className="dsm-sr-only"> ({t.currentPage})</span>
              </span>
            </li>
          ) : (
            <li key={p}>
              <PageControl page={p} ariaLabel={`${t.goToPage} ${p}`} hrefFor={hrefFor} onPageChange={onPageChange}>
                {p}
              </PageControl>
            </li>
          ),
        )}
      </ul>

      <PageControl page={page + 1} disabled={isLast} ariaLabel={t.next} hrefFor={hrefFor} onPageChange={onPageChange}>
        <ChevronForward className="size-4" />
      </PageControl>
      <PageControl page={pageCount} disabled={isLast} ariaLabel={t.lastPage} hrefFor={hrefFor} onPageChange={onPageChange}>
        <EdgeIcon direction="end" />
      </PageControl>
    </nav>
  );
}
