import { BlockMark } from "@/dsm/components/block-mark";

const entity = {
  fr: "Direction Générale de la Sûreté Nationale",
  ar: "المديرية العامة للأمن الوطني",
  zgh: "ⵜⴰⵏⵎⵀⵍⴰ ⵜⴰⵎⴰⵜⴰⵢⵜ ⵏ ⵜⴰⴳⴷⵓⴷⴰ ⵜⴰⵏⴰⵎⵓⵔⵜ",
  en: "National Police Directorate General",
};

export default function BlockMarkInverse() {
  return (
    <div className="rounded-lg bg-surface-inverse p-6">
      <BlockMark entity={entity} size="md" inverse />
    </div>
  );
}
