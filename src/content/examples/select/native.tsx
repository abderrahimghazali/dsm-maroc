import { Field } from "@/dsm/components/field";
import { NativeSelect } from "@/dsm/components/select";

export default function SelectNative() {
  return (
    <div className="mx-auto max-w-sm">
      <Field label="Langue de correspondance">
        <NativeSelect
          placeholder="Choisir une langue"
          options={[
            { value: "fr", label: "Français" },
            { value: "ar", label: "Arabe" },
            { value: "zgh", label: "Amazighe" },
          ]}
        />
      </Field>
    </div>
  );
}
