"use client";

import { Alert } from "@/dsm/components/alert";
import { Badge } from "@/dsm/components/badge";
import { Button } from "@/dsm/components/button";
import { ArrowForward } from "@/dsm/icons";
import { useLocale, useT } from "@/dsm/i18n/provider";

const paragraphs: Record<string, string> = {
  fr: "Ce panneau démontre la mise en page logique : le bouton, le badge et le texte suivent la direction sans code spécifique à la langue.",
  ar: "توضح هذه اللوحة التخطيط المنطقي: يتبع الزر والشارة والنص اتجاه الكتابة دون أي شيفرة خاصة باللغة.",
  zgh: "ⴰⵙⴰⵜⴰⵍ ⴰⴷ ⵉⵙⴽⴰⵏ ⴰⵙⵏⵎⴰⵍⴰ ⴰⵎⴰⵏⵜⵉⵇ : ⴰⵙⵜⴰⵢ ⴷ ⵜⴰⵙⵎⴰⵣⴰⵢⵜ ⴷ ⵓⴹⵔⵉⵙ ⵜⵜⴱⵉⵄⵏ ⵜⴰⵙⵉⵔⵜ ⵏ ⵜⵉⵔⵔⴰ.",
};

/** Renders through ExamplePreview's LocaleProvider: text updates with the active locale. */
export function TrilingualSample() {
  const { locale } = useLocale();
  const t = useT();

  return (
    <div className="w-full space-y-4">
      <Alert tone="info" title={t.info}>
        {t.officialExplainer}
      </Alert>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm" iconEnd={<ArrowForward />}>
          {t.nextStep}
        </Button>
        <Badge tone="success" dot>
          {t.results} : 12
        </Badge>
      </div>
      <p className="text-sm text-ink-muted">{paragraphs[locale] ?? paragraphs.fr}</p>
    </div>
  );
}
