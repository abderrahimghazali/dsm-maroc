"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { LocaleProvider } from "@/dsm/i18n/provider";
import { ThemeProvider } from "@/dsm/components/theme";
import type { Locale } from "@/dsm/i18n";
import { localeMeta } from "@/dsm/i18n";
import { Code2Icon } from "./icons";
import { Moon, Sun } from "@/dsm/icons";

type Props = {
  title?: string;
  description?: string;
  children: ReactNode;
  /** Server-rendered <CodeBlock> */
  code?: ReactNode;
  inverse?: boolean;
  wide?: boolean;
  minHeight?: number;
  /** Show code by default */
  defaultOpen?: boolean;
  id?: string;
};

const locales: Locale[] = ["fr", "ar", "zgh"];

export function ExamplePreview({ title, description, children, code, inverse, wide, minHeight, defaultOpen, id }: Props) {
  const [locale, setLocale] = useState<Locale>("fr");
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(!!defaultOpen);
  const meta = localeMeta[locale];

  return (
    <figure id={id} className="scroll-mt-28">
      {(title || description) && (
        <figcaption className="mb-3">
          {title && <h3 className="text-base font-semibold">{title}</h3>}
          {description && <p className="mt-1 text-sm text-ink-muted">{description}</p>}
        </figcaption>
      )}
      <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-xs">
        <div className="flex flex-wrap items-center gap-2 border-b border-line bg-surface px-3 py-2">
          <div role="group" aria-label="Langue de l'aperçu" className="inline-flex rounded-md bg-surface-muted p-0.5">
            {locales.map((l) => (
              <button
                key={l}
                type="button"
                aria-pressed={locale === l}
                onClick={() => setLocale(l)}
                className={cn(
                  "h-7 rounded-[5px] px-2.5 text-xs font-semibold text-ink-muted transition-colors hover:text-ink",
                  localeMeta[l].fontClass,
                  locale === l && "bg-surface text-ink shadow-xs",
                )}
              >
                {localeMeta[l].short}
              </button>
            ))}
          </div>
          <span className="text-xs text-ink-subtle">{meta.dir.toUpperCase()}</span>
          <div className="ms-auto flex items-center gap-1">
            <button
              type="button"
              aria-pressed={dark}
              aria-label="Aperçu en mode sombre"
              onClick={() => setDark((v) => !v)}
              className={cn(
                "inline-flex size-8 items-center justify-center rounded-md text-ink-muted hover:bg-surface-muted hover:text-ink",
                dark && "bg-surface-muted text-ink",
              )}
            >
              {dark ? <Moon className="size-4" aria-hidden /> : <Sun className="size-4" aria-hidden />}
            </button>
            {code && (
              <button
                type="button"
                aria-pressed={open}
                onClick={() => setOpen((v) => !v)}
                className={cn(
                  "inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs font-semibold text-ink-muted hover:bg-surface-muted hover:text-ink",
                  open && "bg-surface-muted text-ink",
                )}
              >
                <Code2Icon className="size-4" aria-hidden />
                Code
              </button>
            )}
          </div>
        </div>

        <div
          data-theme={dark ? "dark" : undefined}
          dir={meta.dir}
          lang={meta.code}
          className={cn(
            "dsm-preview relative bg-canvas text-ink",
            inverse ? "bg-surface-inverse text-ink-inverse" : "bg-canvas",
            wide ? "p-0" : "flex items-center justify-center p-6 sm:p-10",
          )}
          style={{ minHeight: minHeight ?? (wide ? undefined : 160) }}
        >
          <ThemeProvider theme={dark ? "dark" : "light"} onThemeChange={(t) => setDark(t === "dark")}>
            <LocaleProvider locale={locale}>
              <div className={cn(wide ? "w-full" : "w-full max-w-3xl", inverse && "text-ink-inverse")}>{children}</div>
            </LocaleProvider>
          </ThemeProvider>
        </div>

        {code && open && <div className="border-t border-line [&>div]:rounded-none [&>div]:border-0">{code}</div>}
      </div>
    </figure>
  );
}
