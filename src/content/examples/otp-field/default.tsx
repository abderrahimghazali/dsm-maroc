import { OtpField } from "@/dsm/components/otp-field";

export default function OtpFieldDefault() {
  return (
    <div className="mx-auto max-w-sm">
      <OtpField label="Code de vérification" hint="Saisissez le code à 6 chiffres envoyé au 06 12 34 56 78." />
    </div>
  );
}
