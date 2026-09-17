import { RadioGroup } from "@/dsm/components/radio";

export default function RadioCard() {
  return (
    <div className="mx-auto max-w-xl">
      <RadioGroup
        legend="Mode de retrait de votre passeport"
        variant="card"
        orientation="row"
        defaultValue="guichet"
        options={[
          { value: "guichet", label: "Retrait au guichet", hint: "Disponible sous 5 jours ouvrés à l'agence choisie." },
          { value: "postal", label: "Envoi postal recommandé", hint: "Compter 7 à 10 jours ouvrés, frais d'envoi à votre charge." },
        ]}
      />
    </div>
  );
}
