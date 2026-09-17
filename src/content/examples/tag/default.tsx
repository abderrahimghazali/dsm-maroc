import { Tag, TagGroup } from "@/dsm/components/tag";
import { MapPin } from "@/dsm/icons";

export default function TagDefault() {
  return (
    <TagGroup>
      <Tag>État civil</Tag>
      <Tag icon={<MapPin aria-hidden />}>Rabat</Tag>
      <Tag href="#">Voir toutes les démarches</Tag>
    </TagGroup>
  );
}
