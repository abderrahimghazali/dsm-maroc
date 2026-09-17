import { Tile } from "@/dsm/components/tile";
import { Car, GraduationCap, Stethoscope } from "@/dsm/icons";

export default function TileHorizontal() {
  return (
    <div className="grid max-w-md gap-3">
      <Tile orientation="horizontal" variant="tinted" href="#" icon={<Stethoscope />} title="Santé" description="AMO, carte Tadamon, rendez-vous médicaux." />
      <Tile orientation="horizontal" variant="tinted" href="#" icon={<GraduationCap />} title="Éducation" description="Inscriptions, bourses, équivalence de diplômes." />
      <Tile orientation="horizontal" variant="tinted" href="#" icon={<Car />} title="Véhicules et permis" description="Carte grise, permis de conduire, contrôle technique." />
    </div>
  );
}
