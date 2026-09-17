import { Field } from "@/dsm/components/field";
import { Select } from "@/dsm/components/select";

export default function SelectDefault() {
  return (
    <div className="mx-auto max-w-sm">
      <Field label="Type de document demandé" required>
        <Select
          placeholder="Choisir un document"
          options={[
            { value: "passeport", label: "Passeport biométrique", description: "Validité de 10 ans" },
            { value: "cnie", label: "Carte d'identité nationale", description: "Validité de 15 ans" },
            { value: "permis", label: "Permis de conduire" },
          ]}
        />
      </Field>
    </div>
  );
}
