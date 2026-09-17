"use client";

import { MoroccoMap } from "@/dsm/components/morocco-map";

// Fictitious figures: online procedures completed per region in 2026 (thousands).
const completed = {
  "tanger-tetouan-al-hoceima": 412,
  oriental: 198,
  "fes-meknes": 366,
  "rabat-sale-kenitra": 615,
  "beni-mellal-khenifra": 154,
  "casablanca-settat": 1082,
  "marrakech-safi": 388,
  "draa-tafilalet": 97,
  "souss-massa": 263,
  "guelmim-oued-noun": 41,
  "laayoune-sakia-el-hamra": 58,
  "dakhla-oued-ed-dahab": 22,
} as const;

export default function MoroccoMapChoropleth() {
  return (
    <div className="w-full max-w-lg">
      <p className="mb-3 text-sm font-semibold text-ink">Démarches en ligne abouties en 2026, par région</p>
      <MoroccoMap
        values={completed}
        labels="code"
        interactive
        formatValue={(v) => `${new Intl.NumberFormat("fr-MA").format(v)} k`}
      />
    </div>
  );
}
