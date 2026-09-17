"use client";

import { useState } from "react";
import { MoroccoMap, moroccoRegions, type MoroccoRegionId } from "@/dsm/components/morocco-map";
import { Select } from "@/dsm/components/select";
import { Field } from "@/dsm/components/field";
import { useLocale } from "@/dsm/i18n/provider";

export default function MoroccoMapPicker() {
  const { locale } = useLocale();
  const [region, setRegion] = useState<MoroccoRegionId | null>("rabat-sale-kenitra");
  return (
    <div className="grid w-full max-w-3xl gap-8 md:grid-cols-[minmax(0,1fr)_16rem] md:items-start">
      <MoroccoMap value={region} onValueChange={setRegion} labels="code" className="mx-auto w-full max-w-md" />
      <Field label="Votre région" hint="La liste et la carte sont équivalentes.">
        <Select
          value={region}
          onValueChange={(v) => setRegion(v as MoroccoRegionId | null)}
          options={moroccoRegions.map((r) => ({ value: r.id, label: `${r.code} · ${r.name[locale] ?? r.name.fr}` }))}
          placeholder="Choisir une région"
        />
      </Field>
    </div>
  );
}
