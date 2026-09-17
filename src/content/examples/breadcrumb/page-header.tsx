import { Breadcrumb } from "@/dsm/components/breadcrumb";
import { Badge } from "@/dsm/components/badge";

export default function BreadcrumbPageHeader() {
  return (
    <header className="space-y-3">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "#" },
          { label: "Identité & passeport", href: "#" },
          { label: "Renouveler ma Carte Nationale d'Identité Électronique" },
        ]}
      />
      <div className="flex flex-wrap items-center gap-2.5">
        <Badge tone="success" dot>
          En ligne
        </Badge>
        <Badge tone="outline">Délai : 10 jours ouvrés</Badge>
      </div>
      <h1 className="text-2xl font-semibold tracking-tight text-balance text-ink sm:text-3xl">
        Renouveler ma Carte Nationale d&apos;Identité Électronique
      </h1>
      <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
        Direction Générale de la Sûreté Nationale — dossier en ligne, retrait au bureau d&apos;arrondissement de votre choix.
      </p>
    </header>
  );
}
