import { Switch } from "@/dsm/components/switch";

export default function SwitchDefault() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-4">
      <Switch defaultChecked label="Recevoir un SMS de suivi de dossier" hint="Un message est envoyé à chaque étape clé de votre demande." />
      <Switch label="Partager mon dossier avec la commune de résidence" />
      <Switch disabled defaultChecked label="Authentification à deux facteurs" hint="Activée par votre administration, non modifiable ici." />
    </div>
  );
}
