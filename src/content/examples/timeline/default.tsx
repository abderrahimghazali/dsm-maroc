import { Timeline } from "@/dsm/components/timeline";

export default function TimelineDefault() {
  return (
    <Timeline
      className="max-w-md"
      items={[
        { date: "12 mars 2026", title: "Dossier déposé", description: "Dépôt en ligne sur watiqa.ma.", status: "completed" },
        { date: "15 mars 2026", title: "Dossier en instruction", description: "Vérification des pièces justificatives.", status: "current" },
        { date: "Estimation : 19 mars 2026", title: "Carte prête au retrait", status: "upcoming" },
      ]}
    />
  );
}
