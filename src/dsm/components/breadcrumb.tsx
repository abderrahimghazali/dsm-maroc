"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/dsm/lib/cn";
import { ChevronBack, ChevronForward } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

export type BreadcrumbItem = { label: string; href?: string };

export type BreadcrumbProps = Omit<ComponentProps<"nav">, "children"> & {
  items: BreadcrumbItem[];
};

/** Trail of visited pages. The last item is the current page. Collapses to a single "back" link below `sm`. */
export function Breadcrumb({ items, className, ...props }: BreadcrumbProps) {
  const t = useT();
  if (items.length === 0) return null;

  const parent = items.length > 1 ? items[items.length - 2] : undefined;

  return (
    <nav aria-label={t.breadcrumb} className={cn("text-sm", className)} {...props}>
      {parent && (
        <Link
          href={parent.href ?? "#"}
          className="inline-flex items-center gap-1.5 py-1 text-ink-muted no-underline hover:text-ink sm:hidden"
        >
          <ChevronBack className="size-4 shrink-0" />
          <span className="truncate">{parent.label}</span>
        </Link>
      )}
      <ol className="hidden flex-wrap items-center gap-1.5 sm:flex">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.href ?? item.label}-${i}`} className="flex min-w-0 items-center gap-1.5">
              {i > 0 && <ChevronForward className="size-3.5 shrink-0 text-ink-subtle" />}
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cn("truncate", isLast ? "font-medium text-ink" : "text-ink-muted")}
                >
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="truncate text-ink-muted no-underline hover:text-ink hover:underline">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
