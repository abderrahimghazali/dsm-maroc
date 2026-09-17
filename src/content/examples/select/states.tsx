import { Field } from "@/dsm/components/field";
import { Select } from "@/dsm/components/select";

export default function SelectStates() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-6">
      <Field label="Province" error="Veuillez choisir une province pour continuer." required>
        <Select
          placeholder="Choisir une province"
          options={[
            { value: "rabat", label: "Rabat" },
            { value: "sale", label: "Salé" },
            { value: "kenitra", label: "Kénitra" },
          ]}
        />
      </Field>
      <Field label="Province" hint="Déterminée automatiquement à partir de votre commune.">
        <Select
          defaultValue="rabat"
          disabled
          options={[
            { value: "rabat", label: "Rabat" },
            { value: "sale", label: "Salé" },
            { value: "kenitra", label: "Kénitra" },
          ]}
        />
      </Field>
    </div>
  );
}
