"use client";

import { TableOfContents } from "@/dsm/components/table-of-contents";

const sections = [
  { id: "toc-presentation", label: "Présentation", body: "L'Assurance Maladie Obligatoire couvre les frais de soins de santé des assurés et de leurs ayants droit." },
  { id: "toc-conditions", label: "Conditions", body: "Toute personne exerçant une activité professionnelle déclarée peut y adhérer, ainsi que les membres de sa famille à charge." },
  { id: "toc-documents", label: "Documents", body: "Carte nationale d'identité électronique, attestation de travail ou registre de commerce, et un relevé d'identité bancaire." },
  { id: "toc-remboursement", label: "Remboursement", body: "Les demandes de remboursement se déposent en ligne sur damancom.ma, dans un délai de 6 mois suivant les soins." },
];

export default function TableOfContentsWithObserve() {
  return (
    <div className="grid gap-6 sm:grid-cols-[12rem_1fr]">
      <TableOfContents
        observe
        title="Sommaire"
        items={sections.map((s) => ({ id: s.id, label: s.label }))}
      />
      <div className="h-56 space-y-8 overflow-y-auto pe-2">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="space-y-1.5">
            <h3 className="text-base font-semibold text-ink">{s.label}</h3>
            <p className="text-sm leading-relaxed text-ink-muted">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
