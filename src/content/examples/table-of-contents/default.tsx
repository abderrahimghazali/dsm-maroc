import { TableOfContents } from "@/dsm/components/table-of-contents";

export default function TableOfContentsDefault() {
  return (
    <div className="max-w-xs">
      <TableOfContents
        activeId="conditions"
        items={[
          { id: "presentation", label: "Présentation du service" },
          { id: "conditions", label: "Conditions d'éligibilité" },
          { id: "documents", label: "Pièces à fournir" },
          { id: "delais", label: "Délais de traitement" },
          { id: "contact", label: "Nous contacter" },
        ]}
      />
    </div>
  );
}
