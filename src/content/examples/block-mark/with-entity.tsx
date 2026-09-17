import { BlockMark } from "@/dsm/components/block-mark";

const entity = {
  fr: "Ministère de l'Intérieur",
  ar: "وزارة الداخلية",
  zgh: "ⵜⴰⵎⴰⵡⴰⵙⵜ ⵏ ⵓⴳⵏⵙⵓ",
  en: "Ministry of the Interior",
};

export default function BlockMarkWithEntity() {
  return <BlockMark entity={entity} locale="fr" size="md" />;
}
