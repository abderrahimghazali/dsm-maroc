import { Checkbox } from "@/dsm/components/checkbox";

export default function CheckboxDefault() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-4">
      <Checkbox
        defaultChecked
        label="Je souhaite recevoir le récépissé par e-mail"
        hint="Un exemplaire papier reste disponible au guichet."
      />
      <Checkbox indeterminate label="Sélectionner tous les documents" hint="2 documents sur 3 sont actuellement sélectionnés." />
      <Checkbox size="sm" label="Case de petite taille" />
    </div>
  );
}
