/**
 * Numbers, money, dates and phone numbers the Moroccan way, for the four DSM locales.
 * Pure functions on top of `Intl` — usable on the server and in tests.
 *
 * Conventions applied:
 * - Western digits (0–9) in every language, including Arabic: that is the Moroccan usage.
 * - Thousands separated by a narrow no-break space, decimal comma (fr, ar, zgh); en keeps "1,234.56".
 * - Amounts in dirhams: "1 250,50 MAD" in French, Tamazight and English; "1 250,50 د.م." in Arabic.
 * - Gregorian dates in the interface language; the Hijri date is a complement, never alone.
 */
import type { Locale } from "@/dsm/i18n";
import { formatIdentity, normalizeIdentity, toInternationalPhone } from "./identity";

const NNBSP = " ";

/** BCP-47 tag handed to Intl. Arabic forces Latin digits (`nu-latn`), the Moroccan convention. */
export const intlLocale: Record<Locale, string> = {
  fr: "fr-MA",
  ar: "ar-MA-u-nu-latn",
  zgh: "zgh",
  en: "en-MA",
};

function join(parts: Intl.NumberFormatPart[], locale: Locale) {
  return parts
    .map((p) => {
      if (locale === "en") return p.value;
      if (p.type === "group") return NNBSP;
      if (p.type === "decimal") return ",";
      if (p.type === "literal") return p.value.trim() === "" ? NNBSP : p.value;
      return p.value;
    })
    .join("");
}

export function formatNumber(value: number, locale: Locale, options?: Intl.NumberFormatOptions) {
  return join(new Intl.NumberFormat(intlLocale[locale], options).formatToParts(value), locale);
}

/** Dirham amount. `cents` shows two decimals (prices); omit for headline figures. */
export function formatMoney(value: number, locale: Locale, { cents = true }: { cents?: boolean } = {}) {
  const parts = new Intl.NumberFormat(intlLocale[locale], {
    style: "currency",
    currency: "MAD",
    currencyDisplay: locale === "ar" ? "symbol" : "code",
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  }).formatToParts(value);
  // Strip the directional marks ICU adds around Arabic currency symbols; the field's `dir` handles direction.
  return join(parts, locale).replace(/[‎‏]/g, "").trim();
}

export function formatPercent(value: number, locale: Locale, maximumFractionDigits = 1) {
  return join(new Intl.NumberFormat(intlLocale[locale], { style: "percent", maximumFractionDigits }).formatToParts(value), locale);
}

/** Gregorian date in the interface language ("17 septembre 2026", "17 شتنبر 2026", "17 ⵛⵓⵜⴰⵏⴱⵉⵔ 2026"). */
export function formatDate(date: Date, locale: Locale, style: "long" | "medium" | "short" = "long") {
  return new Intl.DateTimeFormat(intlLocale[locale], { dateStyle: style }).format(date);
}

/**
 * Hijri (Umm al-Qura) date, to display next to the Gregorian one. Morocco follows local moon sighting,
 * so the computed date can differ by one day: present it as indicative. Tamazight falls back to French.
 */
export function formatHijriDate(date: Date, locale: Locale) {
  const base = locale === "zgh" ? intlLocale.fr : intlLocale[locale];
  const tag = base.includes("-u-") ? `${base}-ca-islamic-umalqura` : `${base}-u-ca-islamic-umalqura`;
  return new Intl.DateTimeFormat(tag, { dateStyle: "long" }).format(date).replace(/\s?(AH|هـ)$/, "").trim();
}

/** "17 septembre 2026 (6 rabia ath-thani 1448)" — Gregorian first, Hijri in parentheses. */
export function formatDualDate(date: Date, locale: Locale) {
  return `${formatDate(date, locale)} (${formatHijriDate(date, locale)})`;
}

/** National display "06 12 34 56 78", or international "+212 6 12 34 56 78". */
export function formatPhone(input: string, style: "national" | "international" = "national") {
  const raw = normalizeIdentity("phone", input);
  if (style === "national") return formatIdentity("phone", raw);
  const intl = toInternationalPhone(raw);
  return `${intl.slice(0, 4)} ${intl.slice(4, 5)} ${intl.slice(5).replace(/(\d{2})(?=\d)/g, "$1 ")}`.trim();
}
