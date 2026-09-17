import { Tile } from "@/dsm/components/tile";
import { Fingerprint } from "@/dsm/icons";

export default function TileDefault() {
  return (
    <Tile
      href="#"
      icon={<Fingerprint />}
      title="Identité et voyage"
      description="Carte nationale d'identité électronique, passeport biométrique, carte de résident."
      className="max-w-xs"
    />
  );
}
