import { Header } from "@/dsm/components/header";
import { Footer } from "@/dsm/components/footer";
import { headerNav } from "@/content/nav";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header
        service={{ title: "Système de Design du Maroc", tagline: "DSM · composants pour les services publics numériques", href: "/" }}
        nav={headerNav}
        search={false}
        sticky
      />
      {children}
      <Footer
        description="DSM est un système de design ouvert pour concevoir des services publics numériques marocains cohérents, accessibles et trilingues. Projet indépendant, non affilié à une administration."
        columns={[
          {
            title: "Documentation",
            links: [
              { label: "Prise en main", href: "/prise-en-main" },
              { label: "Fondations", href: "/fondations/couleurs" },
              { label: "Composants", href: "/composants" },
              { label: "Modèles", href: "/modeles" },
            ],
          },
          {
            title: "Démonstration",
            links: [
              { label: "Portail national (FR)", href: "/demo/fr" },
              { label: "البوابة الوطنية (AR)", href: "/demo/ar" },
              { label: "ⵜⴰⴱⴱⵓⵔⵜ ⵜⴰⵏⴰⵎⵓⵔⵜ (ZGH)", href: "/demo/zgh" },
            ],
          },
          {
            title: "Ressources",
            links: [
              { label: "Accessibilité", href: "/accessibilite" },
              { label: "Langues & RTL", href: "/fondations/langues" },
              { label: "Journal des versions", href: "/prise-en-main#versions" },
            ],
          },
        ]}
        bottomLinks={[
          { label: "Plan du site", href: "/composants" },
          { label: "Accessibilité : conforme", href: "/accessibilite" },
          { label: "Licence MIT", href: "/prise-en-main#licence" },
        ]}
        license="DSM v0.1 — Système de Design du Maroc. Code sous licence MIT. Les symboles nationaux restent la propriété du Royaume du Maroc."
      />
    </>
  );
}
