import { KeyFigure, KeyFigureGrid } from "@/dsm/components/key-figure";

export default function KeyFigureMarocEnChiffres() {
  return (
    <div>
      <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-ink-subtle">Le Maroc en chiffres — HCP, RGPH 2024</p>
      <KeyFigureGrid columns={4}>
        <KeyFigure value="37,8 M" label="Population totale" trend={{ value: "+0,85 % / an", direction: "up" }} />
        <KeyFigure value="65,4 %" label="Taux d'urbanisation" trend={{ value: "+1,1 pt", direction: "up" }} />
        <KeyFigure value="12" label="Régions administratives" description="Depuis le découpage de 2015" />
        <KeyFigure value="1 538" label="Communes" description="dont 256 communes urbaines" />
      </KeyFigureGrid>
    </div>
  );
}
