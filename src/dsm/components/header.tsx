"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { Drawer } from "@base-ui/react/drawer";
import { Collapsible } from "@base-ui/react/collapsible";
import { cn } from "@/dsm/lib/cn";
import { ChevronDown, ChevronForward, LogIn, Menu as MenuIcon, Search, X } from "@/dsm/icons";
import type { Locale } from "@/dsm/i18n";
import { useLocale } from "@/dsm/i18n/provider";
import { BlockMark } from "./block-mark";
import { Button } from "./button";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme";

export type NavLink = { label: string; href: string; description?: string };
export type NavItem = {
  label: string;
  href?: string;
  active?: boolean;
  children?: NavLink[];
  /** Optional featured block rendered at the end of a mega menu. */
  featured?: { title: string; text: string; href: string; cta: string };
};

export type HeaderProps = {
  entity?: Partial<Record<Locale, string>>;
  service?: { title: string; tagline?: string; href?: string };
  nav?: NavItem[];
  /** Language switcher — URL per locale; omit to hide. */
  localeLinks?: Partial<Record<Locale, string>>;
  search?: { action?: string; onSubmit?: (query: string) => void } | false;
  login?: { label?: string; href: string } | false;
  /** Extra tools rendered before the language switcher. */
  tools?: ReactNode;
  themeToggle?: boolean;
  sticky?: boolean;
  homeHref?: string;
  className?: string;
};

export function SkipLinks({ links }: { links?: { label: string; href: string }[] }) {
  const { t } = useLocale();
  const items = links ?? [
    { label: t.skipToContent, href: "#contenu" },
    { label: t.skipToNav, href: "#navigation" },
    { label: t.skipToFooter, href: "#pied-de-page" },
  ];
  return (
    <nav aria-label={t.quickAccess} className="dsm-container">
      <ul className="flex gap-2">
        {items.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="dsm-sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-2 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-inverse"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function HeaderSearch({ action, onSubmit, autoFocus }: { action?: string; onSubmit?: (q: string) => void; autoFocus?: boolean }) {
  const { t } = useLocale();
  return (
    <form
      role="search"
      action={action}
      method="get"
      className="group/search flex h-11 w-full items-stretch overflow-hidden rounded-md bg-surface ring-1 ring-inset ring-line-strong focus-within:ring-2 focus-within:ring-focus"
      onSubmit={(e) => {
        if (onSubmit) {
          e.preventDefault();
          const q = new FormData(e.currentTarget).get("q");
          onSubmit(String(q ?? ""));
        }
      }}
    >
      <label htmlFor="dsm-header-search" className="dsm-sr-only">
        {t.search}
      </label>
      <input
        id="dsm-header-search"
        name="q"
        type="search"
        autoFocus={autoFocus}
        placeholder={t.searchPlaceholder}
        className="min-w-0 flex-1 bg-transparent px-3.5 text-sm text-ink outline-none placeholder:text-ink-subtle"
      />
      <button
        type="submit"
        aria-label={t.search}
        className="inline-flex w-11 shrink-0 items-center justify-center bg-ink text-ink-inverse transition-colors hover:bg-primary"
      >
        <Search className="size-[18px]" aria-hidden />
      </button>
    </form>
  );
}

const navTriggerClass =
  "group/nav relative inline-flex h-12 items-center gap-1.5 whitespace-nowrap px-3.5 text-[0.9375rem] font-medium text-ink-muted no-underline transition-colors " +
  "hover:text-ink data-popup-open:text-ink " +
  "after:absolute after:inset-x-3.5 after:bottom-0 after:h-[3px] after:rounded-t-sm after:bg-ink after:opacity-0 after:transition-opacity " +
  "hover:after:opacity-100 data-popup-open:after:opacity-100 data-[active=true]:text-ink data-[active=true]:font-semibold data-[active=true]:after:opacity-100 data-[active=true]:after:bg-primary";

export function Header({
  entity,
  service,
  nav = [],
  localeLinks,
  search = {},
  login = false,
  tools,
  themeToggle = true,
  sticky = false,
  homeHref = "/",
  className,
}: HeaderProps) {
  const { t, locale, dir } = useLocale();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header
      role="banner"
      className={cn("@container/header relative z-40 bg-surface text-ink", sticky && "sticky top-0 shadow-xs", className)}
    >
      <SkipLinks />

      {/* Identity row */}
      <div className="dsm-container flex min-h-(--dsm-header-height) items-center gap-4 py-2 lg:gap-6">
        <div className={cn("shrink-0", service ? "[&_[data-entity]]:hidden @5xl/header:[&_[data-entity]]:inline-block" : "[&_[data-entity]]:hidden @3xl/header:[&_[data-entity]]:inline-block")}>
          <BlockMark entity={entity} locale={locale} href={homeHref} size="md" />
        </div>

        {service && (
          <div className="hidden min-w-0 flex-1 border-s border-line ps-5 @2xl/header:block">
            <Link href={service.href ?? homeHref} className="line-clamp-2 text-lg font-semibold leading-tight tracking-tight text-ink no-underline">
              {service.title}
            </Link>
            {service.tagline && <p className="truncate text-sm text-ink-muted">{service.tagline}</p>}
          </div>
        )}

        <div className="ms-auto flex items-center gap-1">
          {search !== false && (
            <div className="hidden w-64 shrink-0 @6xl/header:block">
              <HeaderSearch action={search.action} onSubmit={search.onSubmit} />
            </div>
          )}
          {search !== false && (
            <button
              type="button"
              aria-label={t.search}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-md text-ink-muted hover:bg-surface-muted hover:text-ink @6xl/header:hidden"
            >
              {searchOpen ? <X className="size-[18px]" aria-hidden /> : <Search className="size-[18px]" aria-hidden />}
            </button>
          )}
          {tools}
          {localeLinks && <LanguageSwitcher links={localeLinks} available={Object.keys(localeLinks) as Locale[]} className="hidden @lg/header:inline-flex" />}
          {themeToggle && <ThemeToggle className="hidden @lg/header:inline-flex" />}
          {login && (
            <Button variant="secondary" size="sm" className="ms-1 hidden @lg/header:inline-flex" iconStart={<LogIn />} render={<Link href={login.href} />}>
              {login.label ?? t.login}
            </Button>
          )}

          {/* Mobile drawer */}
          <Drawer.Root swipeDirection={dir === "rtl" ? "left" : "right"}>
            <Drawer.Trigger
              aria-label={t.menu}
              className="inline-flex size-10 items-center justify-center rounded-md text-ink-muted hover:bg-surface-muted hover:text-ink @4xl/header:hidden"
            >
              <MenuIcon className="size-5" aria-hidden />
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Backdrop className="fixed inset-0 z-50 min-h-dvh bg-ink/40 opacity-[calc(1-var(--drawer-swipe-progress))] transition-opacity duration-(--dsm-duration-slow) ease-dsm-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-swiping:duration-0" />
              <Drawer.Viewport className="fixed inset-0 z-50 flex items-stretch justify-end rtl:justify-start">
                <Drawer.Popup className="flex h-full w-[min(22rem,calc(100vw-3rem))] flex-col bg-surface text-ink shadow-lg outline-none transition-transform duration-(--dsm-duration-slow) ease-dsm-out [transform:translateX(var(--drawer-swipe-movement-x))] data-ending-style:[transform:translateX(100%)] data-starting-style:[transform:translateX(100%)] rtl:data-ending-style:[transform:translateX(-100%)] rtl:data-starting-style:[transform:translateX(-100%)] data-swiping:select-none">
                  <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
                    <Drawer.Title className="text-sm font-semibold uppercase tracking-wide text-ink-muted">{t.menu}</Drawer.Title>
                    <Drawer.Close
                      aria-label={t.close}
                      className="inline-flex size-9 items-center justify-center rounded-md text-ink-muted hover:bg-surface-muted hover:text-ink"
                    >
                      <X className="size-5" aria-hidden />
                    </Drawer.Close>
                  </div>
                  <div className="dsm-filet" />
                  <Drawer.Content className="flex-1 overflow-y-auto overscroll-contain px-2 py-3">
                    {service && (
                      <p className="px-3 pb-3 text-base font-semibold tracking-tight">{service.title}</p>
                    )}
                    <ul className="flex flex-col">
                      {nav.map((item) =>
                        item.children ? (
                          <li key={item.label}>
                            <Collapsible.Root defaultOpen={item.active}>
                              <Collapsible.Trigger className="group/c flex w-full items-center justify-between rounded-md px-3 py-3 text-start text-[0.9375rem] font-medium text-ink hover:bg-surface-muted">
                                {item.label}
                                <ChevronDown className="size-4 text-ink-subtle transition-transform group-data-panel-open/c:rotate-180" aria-hidden />
                              </Collapsible.Trigger>
                              <Collapsible.Panel className="overflow-hidden transition-[height] duration-(--dsm-duration) ease-dsm data-starting-style:h-0 data-ending-style:h-0">
                                <ul className="ms-3 border-s border-line ps-2 pb-2">
                                  {item.children.map((c) => (
                                    <li key={c.label}>
                                      <Link href={c.href} className="block rounded-md px-3 py-2 text-sm text-ink-muted no-underline hover:bg-surface-muted hover:text-ink">
                                        {c.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </Collapsible.Panel>
                            </Collapsible.Root>
                          </li>
                        ) : (
                          <li key={item.label}>
                            <Link
                              href={item.href ?? "#"}
                              aria-current={item.active ? "page" : undefined}
                              className={cn(
                                "block rounded-md px-3 py-3 text-[0.9375rem] font-medium text-ink no-underline hover:bg-surface-muted",
                                item.active && "bg-vert-soft text-vert-soft-fg",
                              )}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </Drawer.Content>
                  <div className="flex flex-wrap items-center gap-2 border-t border-line p-3">
                    {login && (
                      <Button variant="primary" size="sm" className="w-full" iconStart={<LogIn />} render={<Link href={login.href} />}>
                        {login.label ?? t.login}
                      </Button>
                    )}
                    <div className="flex w-full items-center justify-between">
                      {localeLinks ? <LanguageSwitcher links={localeLinks} available={Object.keys(localeLinks) as Locale[]} /> : <span />}
                      {themeToggle && <ThemeToggle />}
                    </div>
                  </div>
                </Drawer.Popup>
              </Drawer.Viewport>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </div>

      {/* Mobile search row */}
      {search !== false && searchOpen && (
        <div className="dsm-container pb-3 @6xl/header:hidden">
          <HeaderSearch action={search.action} onSubmit={search.onSubmit} autoFocus />
        </div>
      )}

      {/* Le filet */}
      <div className="dsm-filet" />

      {/* Main navigation */}
      {nav.length > 0 && (
        <NavigationMenu.Root id="navigation" aria-label={t.mainNav} className="hidden border-b border-line @4xl/header:block">
          <div className="dsm-container">
            <NavigationMenu.List className="relative -ms-3.5 flex items-center">
              {nav.map((item) => (
                <NavigationMenu.Item key={item.label}>
                  {item.children ? (
                    <>
                      <NavigationMenu.Trigger className={navTriggerClass} data-active={item.active || undefined}>
                        {item.label}
                        <NavigationMenu.Icon className="transition-transform duration-(--dsm-duration) ease-dsm data-popup-open:rotate-180">
                          <ChevronDown className="size-4 opacity-70" aria-hidden />
                        </NavigationMenu.Icon>
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="h-full w-[calc(100vw-2rem)] max-w-[56rem] p-3 transition-[opacity,transform] duration-(--dsm-duration) ease-dsm data-starting-style:opacity-0 data-ending-style:opacity-0">
                        <div className={cn("grid gap-1", item.featured ? "grid-cols-[2fr_1fr]" : "grid-cols-2")}>
                          <ul className="grid grid-cols-2 gap-1 self-start">
                            {item.children.map((c) => (
                              <li key={c.label}>
                                <NavigationMenu.Link
                                  render={<Link href={c.href} />}
                                  className="group/link block rounded-md px-3 py-2.5 no-underline transition-colors hover:bg-surface-muted focus-visible:bg-surface-muted"
                                >
                                  <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                                    {c.label}
                                    <ChevronForward className="size-3.5 opacity-0 transition-[opacity,transform] group-hover/link:translate-x-0.5 group-hover/link:opacity-100 rtl:group-hover/link:-translate-x-0.5" />
                                  </span>
                                  {c.description && <span className="mt-0.5 block text-xs leading-relaxed text-ink-muted">{c.description}</span>}
                                </NavigationMenu.Link>
                              </li>
                            ))}
                          </ul>
                          {item.featured && (
                            <div className="relative overflow-hidden rounded-md bg-surface-inverse p-5 text-ink-inverse">
                              <div aria-hidden className="dsm-khatam-fade-end pointer-events-none absolute inset-y-0 end-0 w-2/3 opacity-15" />
                              <p className="relative text-xs font-semibold uppercase tracking-wider text-ink-inverse/70">{item.label}</p>
                              <p className="relative mt-2 text-base font-semibold leading-snug">{item.featured.title}</p>
                              <p className="relative mt-1.5 text-sm leading-relaxed text-ink-inverse/75">{item.featured.text}</p>
                              <NavigationMenu.Link render={<Link href={item.featured.href} />} className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-inverse no-underline hover:underline">
                                {item.featured.cta}
                                <ChevronForward className="size-4" />
                              </NavigationMenu.Link>
                            </div>
                          )}
                        </div>
                      </NavigationMenu.Content>
                    </>
                  ) : (
                    <NavigationMenu.Link
                      render={<Link href={item.href ?? "#"} />}
                      className={navTriggerClass}
                      data-active={item.active || undefined}
                      aria-current={item.active ? "page" : undefined}
                    >
                      {item.label}
                    </NavigationMenu.Link>
                  )}
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </div>

          <NavigationMenu.Portal>
            <NavigationMenu.Positioner
              sideOffset={0}
              align="start"
              collisionPadding={{ top: 8, bottom: 8, left: 16, right: 16 }}
              collisionAvoidance={{ side: "none" }}
              className="z-40 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-(--dsm-duration) ease-dsm data-instant:transition-none"
            >
              <NavigationMenu.Popup className="relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-b-lg border border-t-0 border-line bg-surface text-ink shadow-lg outline-none transition-[opacity,transform,width,height] duration-(--dsm-duration) ease-dsm data-ending-style:opacity-0 data-starting-style:opacity-0 data-starting-style:-translate-y-1 data-ending-style:-translate-y-1">
                <NavigationMenu.Viewport className="relative size-full overflow-hidden" />
              </NavigationMenu.Popup>
            </NavigationMenu.Positioner>
          </NavigationMenu.Portal>
        </NavigationMenu.Root>
      )}
    </header>
  );
}
