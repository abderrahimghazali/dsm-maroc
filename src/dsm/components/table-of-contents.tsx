"use client";

import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { useT } from "@/dsm/i18n/provider";
import { useScrollSpy } from "@/dsm/lib/use-scroll-spy";

export type TocItem = { id: string; label: string; level?: 1 | 2 };

export type TableOfContentsProps = Omit<ComponentProps<"nav">, "title"> & {
  title?: ReactNode;
  items: TocItem[];
  /** Controlled active id. Omit and set `observe` to track scroll position automatically. */
  activeId?: string;
  observe?: boolean;
  sticky?: boolean;
};

/** Section outline for a long-form page — tracks the reading position when `observe` is set. */
export function TableOfContents({ title, items, activeId, observe, sticky, className, ...props }: TableOfContentsProps) {
  const t = useT();
  const observedId = useScrollSpy(observe ? items.map((i) => i.id) : []);

  const current = activeId ?? observedId;
  const label = typeof title === "string" ? title : t.contents;

  return (
    <nav aria-label={label} className={cn("text-sm", sticky && "sticky top-(--dsm-header-height)", className)} {...props}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-subtle">{title ?? t.contents}</p>
      <ul className="flex flex-col gap-0.5 border-s border-line">
        {items.map((item) => {
          const active = item.id === current;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active ? "location" : undefined}
                className={cn(
                  "-ms-px block border-s-2 py-1.5 ps-3.5 pe-2 no-underline transition-colors",
                  item.level === 2 && "ps-7",
                  active ? "border-primary font-medium text-ink" : "border-transparent text-ink-muted hover:border-line-strong hover:text-ink",
                )}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
