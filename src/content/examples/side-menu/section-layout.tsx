import { SideMenu } from "@/dsm/components/side-menu";

export default function SideMenuSectionLayout() {
  return (
    <div className="grid gap-8 sm:grid-cols-[14rem_1fr]">
      <SideMenu
        title="État civil"
        items={[
          { label: "Vue d'ensemble", href: "#" },
          {
            label: "Actes de naissance",
            items: [
              { label: "Demander un extrait", href: "#", active: true },
              { label: "Rectifier une erreur", href: "#" },
            ],
          },
          { label: "Actes de mariage", href: "#" },
          { label: "Actes de décès", href: "#" },
        ]}
      />
      <article className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-ink">Demander un extrait d&apos;acte de naissance</h2>
        <p className="text-sm leading-relaxed text-ink-muted">
          L&apos;extrait d&apos;acte de naissance peut être demandé en ligne pour toute personne née au Maroc, sur présentation d&apos;une pièce
          d&apos;identité. Le document est livré au format PDF, signé électroniquement, et a la même valeur que l&apos;original papier.
        </p>
        <p className="text-sm leading-relaxed text-ink-muted">Délai de traitement : 48 heures ouvrées. Service entièrement gratuit.</p>
      </article>
    </div>
  );
}
