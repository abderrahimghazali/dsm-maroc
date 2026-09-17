import { StepIndicator } from "@/dsm/components/stepper";

export default function StepperStepIndicator() {
  return (
    <StepIndicator
      step={2}
      totalSteps={4}
      title="Téléversez vos pièces justificatives"
      nextTitle="Choisissez votre bureau de retrait"
    />
  );
}
