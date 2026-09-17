import { Steps } from "@/dsm/components/stepper";

export default function StepperStepsHorizontal() {
  return (
    <Steps
      current={3}
      steps={[
        { label: "Informations personnelles" },
        { label: "Pièces justificatives" },
        { label: "Choix du bureau" },
        { label: "Confirmation" },
      ]}
    />
  );
}
