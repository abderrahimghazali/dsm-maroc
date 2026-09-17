import { Header } from "@/dsm/components/header";

const entity = {
  fr: "Direction Générale de la Sûreté Nationale",
  ar: "المديرية العامة للأمن الوطني",
  zgh: "ⵜⴰⵏⵎⵀⵍⴰ ⵜⴰⵎⴰⵜⴰⵢⵜ ⵏ ⵜⴰⴳⴷⵓⴷⴰ ⵜⴰⵏⴰⵎⵓⵔⵜ",
  en: "National Police Directorate General",
};

export default function HeaderDefault() {
  return (
    <Header
      entity={entity}
      service={{ title: "Portail des démarches DGSN", tagline: "CNIE, passeport et carte grise en ligne" }}
      localeLinks={{ fr: "#fr", ar: "#ar", zgh: "#zgh" }}
      search={{ action: "/recherche" }}
      login={{ href: "#connexion" }}
      nav={[
        { label: "Accueil", href: "#", active: true },
        {
          label: "Démarches",
          children: [
            { label: "Carte nationale d'identité", href: "#", description: "Première demande, renouvellement, duplicata" },
            { label: "Passeport biométrique", href: "#", description: "Nouvelle demande et suivi de fabrication" },
            { label: "Carte grise", href: "#", description: "Immatriculation et changement de propriétaire" },
            { label: "Permis de conduire", href: "#", description: "Renouvellement et duplicata" },
          ],
          featured: {
            title: "Renouveler votre CNIE en ligne",
            text: "Déposez votre dossier et suivez son avancement en 3 étapes, sans vous déplacer.",
            href: "#",
            cta: "Commencer la démarche",
          },
        },
        { label: "Points d'accueil", href: "#" },
        { label: "Actualités", href: "#" },
        { label: "Aide", href: "#" },
      ]}
    />
  );
}
