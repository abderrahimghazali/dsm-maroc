import { Input } from "@/dsm/components/input";

export default function InputSizes() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-3">
      <Input size="sm" placeholder="Petit — sm" />
      <Input size="md" placeholder="Moyen — md (par défaut)" />
      <Input size="lg" placeholder="Grand — lg" />
    </div>
  );
}
