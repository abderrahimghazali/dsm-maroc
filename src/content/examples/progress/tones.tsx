import { Progress } from "@/dsm/components/progress";

export default function ProgressTones() {
  return (
    <div className="max-w-sm space-y-5">
      <Progress tone="default" value={40} label="Pièces reçues" showValue />
      <Progress tone="success" value={100} label="Dossier complet" showValue />
      <Progress tone="warning" value={70} label="Espace de stockage utilisé" showValue />
      <Progress tone="error" value={18} label="Échec partiel de l'envoi" showValue />
    </div>
  );
}
