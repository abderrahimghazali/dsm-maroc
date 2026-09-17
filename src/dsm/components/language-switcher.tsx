"use client";

import Link from "next/link";
import { Menu } from "@base-ui/react/menu";
import { cn } from "@/dsm/lib/cn";
import { Check, ChevronDown, Globe } from "@/dsm/icons";
import { localeMeta, locales, type Locale } from "@/dsm/i18n";
import { useLocale } from "@/dsm/i18n/provider";
import { menuItemClass, menuPopupClass, menuPositionerClass } from "./menu-styles";

export type LanguageSwitcherProps = {
  /** URL per locale (serialisable, safe to pass from Server Components). Omit to use `onChange` instead. */
  links?: Partial<Record<Locale, string>>;
  onChange?: (locale: Locale) => void;
  /** Restrict the offered locales. */
  available?: Locale[];
  variant?: "icon" | "label";
  className?: string;
};

export function LanguageSwitcher({ links, onChange, available = locales, variant = "label", className }: LanguageSwitcherProps) {
  const { locale, t } = useLocale();
  const current = localeMeta[locale];
  return (
    <Menu.Root>
      <Menu.Trigger
        aria-label={t.selectLanguage}
        className={cn(
          "inline-flex h-10 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium text-ink-muted hover:bg-surface-muted hover:text-ink data-popup-open:bg-surface-muted data-popup-open:text-ink",
          variant === "icon" && "size-10 justify-center px-0",
          className,
        )}
      >
        <Globe className="size-[18px]" aria-hidden />
        {variant === "label" && (
          <>
            <span className={cn("uppercase", current.fontClass)}>{current.short}</span>
            <ChevronDown className="size-3.5 opacity-70" aria-hidden />
          </>
        )}
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner className={menuPositionerClass} sideOffset={6} align="end">
          <Menu.Popup className={menuPopupClass} aria-label={t.selectLanguage}>
            {available.map((l) => {
              const meta = localeMeta[l];
              const inner = (
                <>
                  <span className={cn("w-7 text-xs font-semibold uppercase text-ink-subtle", meta.fontClass)}>{meta.short}</span>
                  <span className={cn("flex-1", meta.fontClass)} lang={meta.code} dir={meta.dir}>
                    {meta.nativeLabel}
                  </span>
                  {l === locale && <Check className="size-4 text-primary" aria-hidden />}
                </>
              );
              const href = links?.[l];
              return href ? (
                <Menu.LinkItem key={l} className={menuItemClass} render={<Link href={href} hrefLang={meta.code} />}>
                  {inner}
                </Menu.LinkItem>
              ) : (
                <Menu.Item key={l} className={menuItemClass} onClick={() => onChange?.(l)}>
                  {inner}
                </Menu.Item>
              );
            })}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
