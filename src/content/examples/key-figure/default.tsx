import { KeyFigure } from "@/dsm/components/key-figure";

export default function KeyFigureDefault() {
  return (
    <KeyFigure
      value="4,2 M"
      label="Démarches réalisées en ligne en 2025"
      description="Source : Agence de Développement du Digital"
      trend={{ value: "+18 % sur un an", direction: "up" }}
    />
  );
}
