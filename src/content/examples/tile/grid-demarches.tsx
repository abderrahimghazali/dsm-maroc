import { Tile, TileGrid } from "@/dsm/components/tile";
import { Briefcase, Car, Fingerprint, GraduationCap, ScrollText, Stethoscope } from "@/dsm/icons";

export default function TileGridDemarches() {
  return (
    <TileGrid columns={3}>
      <Tile href="#" icon={<Fingerprint />} title="Identité et voyage" description="CNIE, passeport biométrique, carte de résident." />
      <Tile href="#" icon={<ScrollText />} title="État civil" description="Actes de naissance, de mariage et de décès." />
      <Tile href="#" icon={<Car />} title="Véhicules et permis" description="Carte grise, permis de conduire, vignette." />
      <Tile href="#" icon={<Stethoscope />} title="Santé" description="AMO, carte Tadamon, rendez-vous médicaux." />
      <Tile href="#" icon={<GraduationCap />} title="Éducation" description="Inscriptions, bourses, équivalence de diplômes." />
      <Tile href="#" icon={<Briefcase />} title="Emploi et entreprise" description="ANAPEC, création d'entreprise, marchés publics." />
    </TileGrid>
  );
}
