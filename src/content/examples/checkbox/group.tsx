import { CheckboxGroup } from "@/dsm/components/checkbox";

export default function CheckboxGroupExample() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-8">
      <CheckboxGroup
        legend="Documents à joindre au dossier"
        hint="Sélectionnez tous les justificatifs que vous pouvez fournir dès à présent."
        defaultValue={["cnie"]}
        options={[
          { value: "cnie", label: "Copie de la CNIE" },
          { value: "justificatif-domicile", label: "Justificatif de domicile", hint: "Facture d'eau, d'électricité ou de téléphone de moins de 3 mois." },
          { value: "photo", label: "Photo d'identité récente" },
        ]}
      />
      <CheckboxGroup
        legend="Canaux de notification"
        orientation="row"
        defaultValue={["sms"]}
        options={[
          { value: "sms", label: "SMS" },
          { value: "email", label: "E-mail" },
          { value: "courrier", label: "Courrier postal" },
        ]}
      />
    </div>
  );
}
