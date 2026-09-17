import { StepIndicator } from "@/dsm/components/stepper";

export default function StepperDemarcheFlow() {
  return (
    <div className="space-y-6 rounded-lg border border-line bg-surface p-6">
      <StepIndicator
        step={3}
        totalSteps={4}
        title="Choisissez votre bureau de retrait"
        nextTitle="Vérification et confirmation"
      />
      <div className="space-y-2">
        <label htmlFor="bureau" className="block text-sm font-medium text-ink">
          Bureau d&apos;arrondissement
        </label>
        <select
          id="bureau"
          className="h-11 w-full rounded-md border border-line-strong bg-surface px-3.5 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-focus"
          defaultValue="agdal"
        >
          <option value="agdal">Rabat — Agdal</option>
          <option value="maarif">Casablanca — Maârif</option>
          <option value="guéliz">Marrakech — Guéliz</option>
        </select>
      </div>
    </div>
  );
}
