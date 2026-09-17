"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { cn } from "@/dsm/lib/cn";
import type { NavSection } from "@/content/nav";

export function DocsSidebar({ sections, className }: { sections: NavSection[]; className?: string }) {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  // A prefix entry (e.g. "/composants") stays inactive when a more specific entry matches the page.
  const hasExact = sections.some((s) => s.entries.some((e) => e.href === pathname));

  // Keep the current entry visible: on load (or when navigating from elsewhere) the list is
  // scrolled so the active link sits in the middle of the sidebar, without moving the page itself.
  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!nav || !link) return;
    const offset = link.getBoundingClientRect().top - nav.getBoundingClientRect().top;
    const visible = offset >= 0 && offset + link.offsetHeight <= nav.clientHeight;
    if (!visible) nav.scrollTop += offset - (nav.clientHeight - link.offsetHeight) / 2;
  }, [pathname]);

  return (
    <nav ref={navRef} aria-label="Documentation" className={cn("text-sm", className)}>
      {sections.map((section) => (
        <div key={section.title} className="mb-7">
          <p className="mb-2 px-3 text-2xs font-semibold uppercase tracking-wider text-ink-subtle">{section.title}</p>
          <ul className="flex flex-col gap-px">
            {section.entries.map((entry) => {
              const active =
                pathname === entry.href || (!hasExact && entry.href !== "/" && pathname.startsWith(entry.href + "/"));
              return (
                <li key={entry.href}>
                  <Link
                    href={entry.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative flex items-center gap-2 rounded-md px-3 py-1.5 text-ink-muted no-underline transition-colors hover:bg-surface-muted hover:text-ink",
                      active && "bg-vert-soft font-semibold text-vert-soft-fg hover:bg-vert-soft hover:text-vert-soft-fg",
                    )}
                  >
                    {active && <span aria-hidden className="absolute inset-y-1.5 start-0 w-[3px] rounded-e-sm bg-primary" />}
                    <span className="truncate">{entry.label}</span>
                    {entry.badge && (
                      <span className="ms-auto rounded-sm bg-surface-muted px-1.5 text-2xs font-semibold uppercase tracking-wide text-ink-subtle">
                        {entry.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
