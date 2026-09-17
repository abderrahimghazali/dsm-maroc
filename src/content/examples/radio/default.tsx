import { RadioGroup } from "@/dsm/components/radio";

export default function RadioDefault() {
  return (
    <div className="mx-auto max-w-sm">
      <RadioGroup
        legend="Situation familiale"
        defaultValue="celibataire"
        options={[
          { value: "celibataire", label: "Célibataire" },
          { value: "marie", label: "Marié(e)" },
          { value: "divorce", label: "Divorcé(e)" },
          { value: "veuf", label: "Veuf/Veuve" },
        ]}
      />
    </div>
  );
}
