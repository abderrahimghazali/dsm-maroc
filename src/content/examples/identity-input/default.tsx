"use client";

import { useState } from "react";
import { Field } from "@/dsm/components/field";
import { IdentityInput, identityErrorMessage, type IdentityKind } from "@/dsm/components/identity-input";
import { useT } from "@/dsm/i18n/provider";

const fields: { kind: IdentityKind; label: string; hint: string }[] = [
  { kind: "cnie", label: "Numéro de CNIE", hint: "Tel qu'imprimé au recto de votre carte." },
  { kind: "ice", label: "ICE de l'entreprise", hint: "Identifiant commun de l'entreprise, 15 chiffres." },
  { kind: "rib", label: "RIB pour le remboursement", hint: "24 chiffres ; la clé est vérifiée." },
  { kind: "phone", label: "Téléphone", hint: "Numéro national à 10 chiffres." },
];

type State = Partial<Record<IdentityKind, { raw: string; valid: boolean; touched: boolean }>>;

export default function IdentityInputDefault() {
  const t = useT();
  const [state, setState] = useState<State>({});
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-6">
      {fields.map((f) => {
        const s = state[f.kind];
        const error = s?.touched && s.raw && !s.valid ? identityErrorMessage(f.kind, t) : undefined;
        return (
          <Field key={f.kind} label={f.label} hint={f.hint} error={error}>
            <IdentityInput
              kind={f.kind}
              onValueChange={(raw, check) => setState((prev) => ({ ...prev, [f.kind]: { raw, valid: check.valid, touched: prev[f.kind]?.touched ?? false } }))}
              onBlur={() => setState((prev) => ({ ...prev, [f.kind]: { raw: prev[f.kind]?.raw ?? "", valid: prev[f.kind]?.valid ?? false, touched: true } }))}
            />
          </Field>
        );
      })}
    </div>
  );
}
