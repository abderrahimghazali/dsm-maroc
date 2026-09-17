"use client";

import { useEffect } from "react";

/** Mirrors the demo locale onto <html> so scrollbars, form controls and the UA follow the direction. */
export function HtmlAttrs({ lang, dir }: { lang: string; dir: "ltr" | "rtl" }) {
  useEffect(() => {
    const el = document.documentElement;
    const prev = { lang: el.lang, dir: el.dir };
    el.lang = lang;
    el.dir = dir;
    return () => {
      el.lang = prev.lang || "fr";
      el.dir = prev.dir || "ltr";
    };
  }, [lang, dir]);
  return null;
}
