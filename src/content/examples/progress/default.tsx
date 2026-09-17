import { Progress } from "@/dsm/components/progress";

export default function ProgressDefault() {
  return (
    <div className="max-w-sm">
      <Progress value={62} label="Instruction du dossier n° 2026-114872" showValue />
    </div>
  );
}
