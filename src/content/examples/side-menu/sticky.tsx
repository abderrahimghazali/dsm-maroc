import { SideMenu } from "@/dsm/components/side-menu";

export default function SideMenuSticky() {
  return (
    <div className="relative flex h-64 gap-8 overflow-y-auto rounded-lg border border-line p-5">
      <SideMenu
        sticky
        title="Institutions"
        className="w-48 shrink-0"
        items={[
          { label: "Gouvernement", href: "#", active: true },
          { label: "Ministères", href: "#" },
          { label: "Régions", href: "#" },
          { label: "Communes", href: "#" },
        ]}
      />
      <div className="space-y-3 text-sm leading-relaxed text-ink-muted">
        <p>Faites défiler cette colonne : le menu reste ancré sous l&apos;en-tête grâce à l&apos;option sticky.</p>
        <p>Le Royaume du Maroc compte 12 régions, elles-mêmes subdivisées en préfectures et provinces.</p>
        <p>Chaque région dispose d&apos;un conseil élu et de compétences propres en matière de développement local.</p>
        <p>Les communes assurent la gestion des services de proximité : état civil, urbanisme, voirie.</p>
      </div>
    </div>
  );
}
