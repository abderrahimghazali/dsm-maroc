import { Field } from "@/dsm/components/field";
import { Input } from "@/dsm/components/input";

export default function FieldDefault() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-6">
      <Field label="Numéro de CNIE" hint="Tel qu'il apparaît sur votre carte d'identité nationale." required>
        <Input placeholder="AB123456" />
      </Field>
      <Field label="Adresse e-mail" optional>
        <Input type="email" placeholder="prenom.nom@exemple.ma" />
      </Field>
    </div>
  );
}
