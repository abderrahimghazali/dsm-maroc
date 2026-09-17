import { Field } from "@/dsm/components/field";
import { Input } from "@/dsm/components/input";
import { Search } from "@/dsm/icons";

export default function InputDefault() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-6">
      <Field label="Nom de la démarche" hint="Utilisé pour retrouver votre dossier.">
        <Input iconStart={<Search aria-hidden />} placeholder="Rechercher une démarche…" />
      </Field>
      <Field label="Montant des droits de timbre">
        <Input inputMode="decimal" defaultValue="150" addonEnd="MAD" />
      </Field>
      <Field label="Numéro de téléphone">
        <Input type="tel" placeholder="6 12 34 56 78" addonStart="+212" />
      </Field>
    </div>
  );
}
