import { BlockMark } from "@/dsm/components/block-mark";
import { localeMeta } from "@/dsm/i18n";

const entity = {
  fr: "Ministère de l'Intérieur",
  ar: "وزارة الداخلية",
  zgh: "ⵜⴰⵎⴰⵡⴰⵙⵜ ⵏ ⵓⴳⵏⵙⵓ",
  en: "Ministry of the Interior",
};

export default function BlockMarkLocales() {
  return (
    <div className="flex flex-wrap items-end gap-10">
      <div lang={localeMeta.ar.code} dir={localeMeta.ar.dir}>
        <BlockMark entity={entity} locale="ar" size="md" />
      </div>
      <div lang={localeMeta.zgh.code} dir={localeMeta.zgh.dir}>
        <BlockMark entity={entity} locale="zgh" size="md" />
      </div>
    </div>
  );
}
