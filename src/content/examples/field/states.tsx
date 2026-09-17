import { Field } from "@/dsm/components/field";
import { Input } from "@/dsm/components/input";

export default function FieldStates() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-6">
      <Field label="Numéro d'acte de naissance" error="Ce numéro doit contenir 8 chiffres." required>
        <Input defaultValue="12A45" />
      </Field>
      <Field label="Commune de résidence" hint="Utilisée pour orienter votre dossier vers le bon guichet.">
        <Input defaultValue="Rabat" disabled />
      </Field>
    </div>
  );
}
