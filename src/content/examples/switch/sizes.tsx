import { Switch } from "@/dsm/components/switch";

export default function SwitchSizes() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-4">
      <Switch size="sm" defaultChecked label="Taille compacte (sm)" />
      <Switch size="md" defaultChecked label="Taille par défaut (md)" />
    </div>
  );
}
