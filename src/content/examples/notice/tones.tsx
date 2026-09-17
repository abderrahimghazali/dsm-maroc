import { Notice } from "@/dsm/components/notice";

export default function NoticeTones() {
  return (
    <div className="-mx-4 flex flex-col gap-3 sm:-mx-6">
      <Notice tone="info" title="Nouveau service" description="Le renouvellement du passeport biométrique est désormais disponible en ligne." />
      <Notice tone="warning" title="Maintenance programmée" description="Le portail sera indisponible dimanche 20 septembre de 2h à 5h du matin." />
      <Notice tone="alert" title="Incident en cours" description="Le paiement en ligne des taxes est temporairement indisponible. Nos équipes interviennent." />
    </div>
  );
}
