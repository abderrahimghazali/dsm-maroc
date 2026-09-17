import { Steps } from "@/dsm/components/stepper";

export default function StepperStepsVertical() {
  return (
    <div className="max-w-xs">
      <Steps
        orientation="vertical"
        current={2}
        steps={[
          { label: "Dossier reçu", description: "Reçu le 3 septembre 2026" },
          { label: "En cours d'instruction", description: "Vérification des pièces par la DGSN" },
          { label: "Carte en fabrication" },
          { label: "Disponible au retrait" },
        ]}
      />
    </div>
  );
}
