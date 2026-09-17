import { OtpField } from "@/dsm/components/otp-field";

export default function OtpFieldStates() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-8">
      <OtpField label="Code de vérification" error="Code incorrect ou expiré. Demandez un nouveau code." defaultValue="204" />
      <OtpField label="Code de vérification" hint="Un nouveau code peut être demandé dans 45 secondes." disabled defaultValue="7" />
    </div>
  );
}
