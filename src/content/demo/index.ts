import type { Locale } from "@/dsm/i18n";
import type { DemoContent } from "./types";

export type DemoLocale = "fr" | "ar" | "zgh";
export const demoLocales: DemoLocale[] = ["fr", "ar", "zgh"];

export function isDemoLocale(value: string): value is DemoLocale {
  return (demoLocales as string[]).includes(value);
}

export async function getDemoContent(locale: DemoLocale): Promise<DemoContent> {
  switch (locale) {
    case "ar":
      return (await import("./ar")).default;
    case "zgh":
      return (await import("./zgh")).default;
    default:
      return (await import("./fr")).default;
  }
}

/** Prefix a locale-relative path with the demo base. */
export function demoHref(locale: DemoLocale, path: string) {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path === "/" ? "" : path;
  return `/demo/${locale}${clean}`;
}

/** Same page in every demo locale, for the language switcher. */
export function localeLinksFor(path: string): Partial<Record<Locale, string>> {
  return Object.fromEntries(demoLocales.map((l) => [l, demoHref(l, path)]));
}
