import { TableOfContents } from "@/dsm/components/table-of-contents";

export default function TableOfContentsTwoLevels() {
  return (
    <div className="max-w-xs">
      <TableOfContents
        title="Dans cette fiche"
        activeId="salariés"
        items={[
          { id: "presentation", label: "Qu'est-ce que l'AMO ?" },
          { id: "beneficiaires", label: "Bénéficiaires" },
          { id: "salariés", label: "Salariés du secteur privé", level: 2 },
          { id: "independants", label: "Travailleurs indépendants", level: 2 },
          { id: "remboursement", label: "Remboursement des soins" },
        ]}
      />
    </div>
  );
}
