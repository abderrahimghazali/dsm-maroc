"use client";

import { createContext, useContext, type ReactNode } from "react";
import { DirectionProvider } from "@base-ui/react/direction-provider";
import { defaultLocale, dirFor, localeMeta, ui, type Dir, type Locale, type UiStrings } from "./index";

type LocaleContextValue = {
  locale: Locale;
  dir: Dir;
  lang: string;
  t: UiStrings;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  dir: "ltr",
  lang: localeMeta[defaultLocale].code,
  t: ui[defaultLocale],
});

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const dir = dirFor(locale);
  return (
    <LocaleContext.Provider value={{ locale, dir, lang: localeMeta[locale].code, t: ui[locale] }}>
      <DirectionProvider direction={dir}>{children}</DirectionProvider>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useT() {
  return useContext(LocaleContext).t;
}
