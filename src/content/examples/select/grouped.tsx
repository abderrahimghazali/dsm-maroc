import { Field } from "@/dsm/components/field";
import { Select } from "@/dsm/components/select";

export default function SelectGrouped() {
  return (
    <div className="mx-auto max-w-sm">
      <Field label="Commune de résidence" required>
        <Select
          placeholder="Choisir une commune"
          groups={[
            {
              label: "Région Rabat-Salé-Kénitra",
              options: [
                { value: "rabat", label: "Rabat" },
                { value: "sale", label: "Salé" },
                { value: "kenitra", label: "Kénitra" },
                { value: "temara", label: "Témara" },
              ],
            },
            {
              label: "Région Fès-Meknès",
              options: [
                { value: "fes", label: "Fès" },
                { value: "meknes", label: "Meknès" },
                { value: "sefrou", label: "Séfrou" },
              ],
            },
          ]}
        />
      </Field>
    </div>
  );
}
