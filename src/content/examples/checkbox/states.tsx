import { CheckboxGroup } from "@/dsm/components/checkbox";

export default function CheckboxStates() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-8">
      <CheckboxGroup
        legend="Pièces justificatives requises"
        error="Sélectionnez au moins un document avant de continuer."
        options={[
          { value: "cnie", label: "Copie de la CNIE" },
          { value: "acte-naissance", label: "Extrait d'acte de naissance" },
        ]}
      />
      <CheckboxGroup
        legend="Options de livraison"
        hint="Ces options sont fixées par votre commune de résidence."
        disabled
        defaultValue={["guichet"]}
        options={[
          { value: "guichet", label: "Retrait au guichet" },
          { value: "postal", label: "Envoi postal" },
        ]}
      />
    </div>
  );
}
