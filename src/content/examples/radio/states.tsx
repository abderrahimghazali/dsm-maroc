import { RadioGroup } from "@/dsm/components/radio";

export default function RadioStates() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-8">
      <RadioGroup
        legend="Mode de paiement des droits de timbre"
        error="Veuillez choisir un mode de paiement."
        options={[
          { value: "carte", label: "Carte bancaire" },
          { value: "especes", label: "Espèces au guichet" },
          { value: "virement", label: "Virement bancaire", disabled: true },
        ]}
      />
    </div>
  );
}
