import { Field } from "@/dsm/components/field";
import { Input } from "@/dsm/components/input";

export default function InputStates() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-6">
      <Field label="Numéro d'AMO" error="Ce numéro d'affiliation est introuvable.">
        <Input defaultValue="00000000" />
      </Field>
      <Field label="Régime d'affiliation">
        <Input defaultValue="Salariés du secteur privé" disabled />
      </Field>
      <Field label="Identifiant de dossier" hint="Attribué automatiquement, non modifiable.">
        <Input defaultValue="DS-2026-004821" readOnly />
      </Field>
    </div>
  );
}
