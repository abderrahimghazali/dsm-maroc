"use client";

import Link from "next/link";
import { Collapsible } from "@base-ui/react/collapsible";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { ChevronDown } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

export type SideMenuLink = { label: string; href: string; active?: boolean };
export type SideMenuItem = { label: string; href?: string; active?: boolean; items?: SideMenuLink[] };

export type SideMenuProps = Omit<ComponentProps<"nav">, "title"> & {
  title?: ReactNode;
  items: SideMenuItem[];
  sticky?: boolean;
  /** Href of the current entry (e.g. from `useScrollSpy`); overrides the items' own `active` flags. */
  activeHref?: string;
};

function itemClass(active?: boolean) {
  return cn(
    "block rounded-e-md border-s-[3px] py-2.5 ps-3.5 pe-3 text-sm no-underline transition-colors",
    active ? "border-primary font-semibold text-ink bg-vert-soft/40" : "border-transparent text-ink-muted hover:border-line-strong hover:bg-surface-muted hover:text-ink",
  );
}

/** Local, in-page navigation for a section — up to two levels, with collapsible groups. */
export function SideMenu({ title, items: rawItems, sticky, activeHref, className, ...props }: SideMenuProps) {
  const t = useT();
  const label = typeof title === "string" ? title : t.menuTitle;
  const items =
    activeHref === undefined
      ? rawItems
      : rawItems.map((item) => ({
          ...item,
          active: item.href === activeHref,
          items: item.items?.map((sub) => ({ ...sub, active: sub.href === activeHref })),
        }));

  return (
    <nav
      aria-label={label}
      className={cn("text-sm", sticky && "sticky top-(--dsm-header-height) max-h-[calc(100dvh-var(--dsm-header-height))] overflow-y-auto", className)}
      {...props}
    >
      <p className="mb-3 px-3.5 text-xs font-semibold uppercase tracking-wide text-ink-subtle">{title ?? t.menuTitle}</p>
      <ul className="flex flex-col gap-0.5 border-s border-line">
        {items.map((item) => {
          if (item.items?.length) {
            const groupActive = item.active || item.items.some((s) => s.active);
            return (
              <li key={item.label}>
                <Collapsible.Root defaultOpen={groupActive}>
                  <Collapsible.Trigger
                    className={cn(
                      "group/t flex w-full items-center justify-between gap-2 rounded-e-md border-s-[3px] py-2.5 ps-3.5 pe-3 text-start text-sm font-medium no-underline transition-colors",
                      groupActive ? "border-primary text-ink font-semibold" : "border-transparent text-ink-muted hover:border-line-strong hover:bg-surface-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                    <ChevronDown className="size-4 shrink-0 text-ink-subtle transition-transform duration-(--dsm-duration) ease-dsm group-data-panel-open/t:rotate-180" />
                  </Collapsible.Trigger>
                  <Collapsible.Panel className="overflow-hidden transition-[height] duration-(--dsm-duration) ease-dsm data-starting-style:h-0 data-ending-style:h-0">
                    <ul className="flex flex-col gap-0.5 py-0.5">
                      {item.items.map((sub) => (
                        <li key={`${sub.href}-${sub.label}`}>
                          <Link href={sub.href} aria-current={sub.active ? "page" : undefined} className={cn(itemClass(sub.active), "ps-7")}>
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Collapsible.Panel>
                </Collapsible.Root>
              </li>
            );
          }
          return (
            <li key={item.href ?? item.label}>
              <Link href={item.href ?? "#"} aria-current={item.active ? "page" : undefined} className={itemClass(item.active)}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
