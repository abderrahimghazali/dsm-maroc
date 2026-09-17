import { Footer } from "@/dsm/components/footer";
import { SocialFacebook, SocialInstagram, SocialLinkedin, SocialX, SocialYoutube } from "@/dsm/icons";

const entity = {
  fr: "Ministère de l'Intérieur",
  ar: "وزارة الداخلية",
  zgh: "ⵜⴰⵎⴰⵡⴰⵙⵜ ⵏ ⵓⴳⵏⵙⵓ",
  en: "Ministry of the Interior",
};

export default function FooterDefault() {
  return (
    <Footer
      entity={entity}
      description="Le portail national des démarches administratives vous permet de réaliser vos formalités en ligne, en toute sécurité, dans les langues officielles du Royaume."
      ecosystem={[
        { label: "maroc.ma", href: "https://www.maroc.ma", external: true },
        { label: "idarati.ma", href: "https://www.idarati.ma", external: true },
        { label: "chikaya.ma", href: "https://www.chikaya.ma", external: true },
      ]}
      columns={[
        {
          title: "Démarches",
          links: [
            { label: "État civil", href: "#" },
            { label: "Identité & passeport", href: "#" },
            { label: "Véhicules & permis", href: "#" },
          ],
        },
        {
          title: "Institutions",
          links: [
            { label: "Gouvernement", href: "#" },
            { label: "Régions et communes", href: "#" },
            { label: "Établissements publics", href: "#" },
          ],
        },
        {
          title: "Aide",
          links: [
            { label: "Questions fréquentes", href: "#" },
            { label: "Nous contacter", href: "#" },
            { label: "Signaler un problème", href: "#" },
          ],
        },
      ]}
      bottomLinks={[
        { label: "Plan du site", href: "#" },
        { label: "Accessibilité : partiellement conforme", href: "#" },
        { label: "Mentions légales", href: "#" },
        { label: "Données personnelles", href: "#" },
      ]}
      social={[
        { label: "X", href: "#", icon: <SocialX /> },
        { label: "Facebook", href: "#", icon: <SocialFacebook /> },
        { label: "Instagram", href: "#", icon: <SocialInstagram /> },
        { label: "YouTube", href: "#", icon: <SocialYoutube /> },
        { label: "LinkedIn", href: "#", icon: <SocialLinkedin /> },
      ]}
      license="Sauf mention contraire, tous les contenus de ce site sont proposés sous licence ouverte. © Royaume du Maroc"
    />
  );
}
