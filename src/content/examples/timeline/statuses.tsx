import { Timeline } from "@/dsm/components/timeline";

export default function TimelineStatuses() {
  return (
    <Timeline
      className="max-w-md"
      items={[
        { date: "Étape 1", title: "Terminée", description: "Marqueur plein avec coche.", status: "completed" },
        { date: "Étape 2", title: "En cours", description: "Marqueur plein entouré d'un halo.", status: "current" },
        { date: "Étape 3", title: "À venir", description: "Marqueur creux.", status: "upcoming" },
      ]}
    />
  );
}
