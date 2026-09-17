import { Switch } from "@/dsm/components/switch";

export default function SwitchLabelPosition() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-4">
      <Switch label="Libellé après le rail (par défaut)" defaultChecked />
      <Switch labelPosition="start" label="Libellé avant le rail" defaultChecked />
    </div>
  );
}
