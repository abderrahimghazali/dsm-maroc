import { Field } from "@/dsm/components/field";
import { Textarea, PasswordInput } from "@/dsm/components/input";

export default function InputTextareaPassword() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-6">
      <Field label="Motif de la demande" hint="Décrivez brièvement l'objet de votre requête.">
        <Textarea maxLength={280} placeholder="Ex : Demande de duplicata suite à perte de la carte grise…" />
      </Field>
      <Field label="Mot de passe" required>
        <PasswordInput placeholder="8 caractères minimum" />
      </Field>
    </div>
  );
}
