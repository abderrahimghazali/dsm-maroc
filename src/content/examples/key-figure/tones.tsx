import { KeyFigure } from "@/dsm/components/key-figure";

export default function KeyFigureTones() {
  return (
    <div className="flex flex-wrap gap-8">
      <KeyFigure tone="default" value="577 827" label="Habitants à Rabat" description="RGPH 2024" />
      <KeyFigure tone="primary" value="93 %" label="Taux de satisfaction usagers" trend={{ value: "+3 pts", direction: "up" }} />
      <div className="rounded-lg bg-surface-inverse p-6">
        <KeyFigure tone="inverse" value="24/7" label="Disponibilité du portail national" />
      </div>
    </div>
  );
}
