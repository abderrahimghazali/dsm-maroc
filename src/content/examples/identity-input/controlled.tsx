"use client";

import { useState } from "react";
import { Badge } from "@/dsm/components/badge";
import { Field } from "@/dsm/components/field";
import { IdentityInput, identityErrorMessage } from "@/dsm/components/identity-input";
import { toInternationalPhone, validateIdentity } from "@/dsm/lib/identity";
import { useT } from "@/dsm/i18n/provider";

export default function IdentityInputControlled() {
  const t = useT();
  const [rib, setRib] = useState("007780000123456789012396");
  const [phone, setPhone] = useState("0612345678");
  const [touched, setTouched] = useState({ rib: false, phone: false });
  const ribCheck = validateIdentity("rib", rib);
  const phoneCheck = validateIdentity("phone", phone);
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-6">
      <Field label="RIB" hint="Modifiez le dernier chiffre pour invalider la clé." error={touched.rib && rib && !ribCheck.valid ? identityErrorMessage("rib", t) : undefined}>
        <IdentityInput kind="rib" value={rib} onValueChange={setRib} onBlur={() => setTouched((s) => ({ ...s, rib: true }))} />
      </Field>
      <Field label="Téléphone" error={touched.phone && phone && !phoneCheck.valid ? identityErrorMessage("phone", t) : undefined}>
        <IdentityInput kind="phone" value={phone} onValueChange={setPhone} onBlur={() => setTouched((s) => ({ ...s, phone: true }))} />
      </Field>
      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
        <dt className="text-ink-muted">RIB</dt>
        <dd className="flex items-center gap-2 font-mono text-xs" dir="ltr">
          {rib || "—"} <Badge size="sm" tone={ribCheck.valid ? "success" : ribCheck.complete ? "error" : "neutral"}>{ribCheck.valid ? "clé OK" : ribCheck.complete ? "clé KO" : `${rib.length}/24`}</Badge>
        </dd>
        <dt className="text-ink-muted">E.164</dt>
        <dd className="font-mono text-xs" dir="ltr">
          {phoneCheck.valid ? toInternationalPhone(phone) : "—"}
        </dd>
      </dl>
    </div>
  );
}
