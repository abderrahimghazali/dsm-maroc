import { Progress } from "@/dsm/components/progress";

export default function ProgressIndeterminate() {
  return (
    <div className="max-w-sm">
      <Progress value={null} label="Vérification de votre CNIE auprès de la DGSN" />
    </div>
  );
}
