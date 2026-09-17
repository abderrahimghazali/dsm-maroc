import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code";
import { PageHeader, Section } from "@/components/docs/page-header";
import { Alert } from "@/dsm/components/alert";
import { Badge } from "@/dsm/components/badge";

export const metadata: Metadata = {
  title: "Accessibilité",
  description: "L'accessibilité n'est pas une option ajoutée en fin de projet : c'est une propriété du système, vérifiée à chaque composant. DSM vise la conformité WCAG 2.2 niveau AA, dans le cadre réglementaire national et des normes internationales applicables aux services publics numériques.",
  alternates: { canonical: "/accessibilite" },
  openGraph: { url: "/accessibilite" },
};

const guarantees = [
  ["Contraste", "Tous les jetons de texte sur leur fond prévu atteignent AA (4,5:1 pour le texte courant, 3:1 pour le grand texte), en clair comme en sombre."],
  ["Focus visible", "Un anneau de focus global (:focus-visible) est appliqué à tout élément interactif ; aucun composant ne retire l'outline sans le remplacer."],
  ["Navigation clavier", "Menus, dialogues, onglets et accordéons sont pilotés par Base UI : flèches, Échap, Tab et piège de focus fonctionnent nativement."],
  ["Sémantique", "Les primitives interactives (dialogue, infobulle, onglets, accordéon, sélecteur, menu, interrupteur, case, bouton radio, message, popover) portent les rôles et états ARIA corrects par construction."],
  ["Mouvement réduit", "prefers-reduced-motion est respecté globalement : aucune configuration à faire par page ou par composant."],
  ["Liens d'évitement", "Trois liens d'évitement (contenu, menu, pied de page) sont générés par le composant d'en-tête et ciblent des ancres réelles."],
  ["Attributs de langue", "Chaque bloc multilingue porte lang et, si besoin, dir : lecteurs d'écran et correcteurs changent de langue automatiquement."],
];

const teamDuties = [
  ["Textes alternatifs", "Chaque image porteuse de sens reçoit un alt descriptif ; les images décoratives reçoivent alt=\"\" et aria-hidden."],
  ["Ordre des titres", "Un seul h1 par page, puis une hiérarchie continue (h2, h3…) sans saut de niveau, y compris dans le contenu éditorial."],
  ["Étiquetage des formulaires", "Chaque champ a un label visible et associé (pas un simple placeholder), une aide avant le champ et une erreur après, reliée par aria-describedby."],
  ["Messages d'erreur", "Un message d'erreur nomme le champ concerné et la correction attendue ; il est annoncé (role=\"alert\") et reste visible jusqu'à correction."],
  ["Tests avec lecteur d'écran", "Chaque parcours critique (démarche, formulaire, recherche) est testé au clavier et avec au moins un lecteur d'écran avant mise en production."],
];

const pageChecklist = [
  "Un seul h1, hiérarchie de titres sans saut de niveau.",
  "Tous les contrôles atteignables et utilisables au clavier, dans un ordre logique.",
  "Chaque image porteuse de sens a un texte alternatif ; les décoratives sont masquées.",
  "Chaque champ de formulaire a un label visible, une aide et, le cas échéant, une erreur reliés par aria-describedby.",
  "Les couleurs ne sont jamais le seul vecteur d'information (icône ou texte en renfort).",
  "Le focus reste visible sur tout élément interactif, y compris personnalisé.",
  "La page reste utilisable et lisible en zoom 200 % et à 320px de large.",
  "Le contenu et les composants fonctionnent en dir=\"rtl\" sans régression visuelle.",
  "Les messages de statut et d'erreur sont annoncés (role=\"status\" ou \"alert\").",
  "Testée avec au moins un lecteur d'écran (NVDA, VoiceOver ou TalkBack) sur le parcours principal.",
];

const statement = `<h1>Déclaration d'accessibilité</h1>

<p>[Nom de l'organisme] s'engage à rendre [nom du site ou du service] accessible conformément
au référentiel [référentiel applicable, ex. RGAA / WCAG 2.2 AA].</p>

<h2>État de conformité</h2>
<p>[Nom du site] est en conformité [totale / partielle / non conforme] avec [référentiel applicable].</p>

<h2>Résultats des tests</h2>
<p>L'audit de conformité réalisé par [nom de l'auditeur ou de l'organisme] le [date] révèle que
[pourcentage] des critères du référentiel sont respectés.</p>

<h2>Contenus non accessibles</h2>
<ul>
  <li>[Description du contenu concerné] — [raison : dérogation pour charge disproportionnée, contenu tiers, etc.]</li>
</ul>

<h2>Établissement de cette déclaration</h2>
<p>Cette déclaration a été établie le [date]. Elle a été mise à jour le [date de mise à jour].</p>

<h2>Retour d'information et contact</h2>
<p>Si vous rencontrez un défaut d'accessibilité vous empêchant d'accéder à un contenu ou à une
fonctionnalité, contactez [nom du responsable ou du service] : [adresse e-mail], [numéro de téléphone].</p>

<h2>Voies de recours</h2>
<p>Si vous constatez un défaut d'accessibilité vous empêchant d'accéder à un contenu et que vous n'obtenez
pas de réponse satisfaisante, vous pouvez adresser une réclamation à [autorité ou instance compétente].</p>`;

export default function Accessibility() {
  return (
    <article>
      <PageHeader
        eyebrow="Accessibilité"
        title="Accessibilité"
        titleAr="إمكانية الولوج"
        description="L'accessibilité n'est pas une option ajoutée en fin de projet : c'est une propriété du système, vérifiée à chaque composant. DSM vise la conformité WCAG 2.2 niveau AA, dans le cadre réglementaire national et des normes internationales applicables aux services publics numériques."
      />

      <Section id="engagement" title="Engagement">
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="success" dot>
            WCAG 2.2 — Niveau AA
          </Badge>
          <Badge tone="outline">Cadre réglementaire national</Badge>
          <Badge tone="outline">Normes internationales</Badge>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted">
          Les administrations qui construisent leurs services numériques avec DSM héritent d&apos;un socle conforme aux exigences
          WCAG 2.2 AA. Cette conformité technique du système ne dispense pas chaque équipe de vérifier son propre contenu et ses
          propres parcours : voir la section « Ce que les équipes doivent encore faire ».
        </p>
      </Section>

      <Section
        id="garanties"
        title="Ce que le système garantit"
        description="Des propriétés vérifiées une fois, au niveau des fondations et des composants, et qui s'appliquent à toute page construite avec DSM."
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {guarantees.map(([t, d]) => (
            <li key={t} className="rounded-lg border border-line bg-surface p-5">
              <p className="font-semibold">{t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="responsabilites"
        title="Ce que les équipes doivent encore faire"
        description="Le système ne peut pas deviner le contenu : ces points restent sous la responsabilité de chaque équipe produit."
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {teamDuties.map(([t, d]) => (
            <li key={t} className="rounded-lg border border-line bg-surface p-5">
              <p className="font-semibold">{t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{d}</p>
            </li>
          ))}
        </ul>
        <Alert className="mt-4" tone="warning" title="Un composant accessible peut servir un contenu inaccessible">
          Un formulaire DSM correctement balisé reste inaccessible si un champ n&apos;a pas de label, ou si un message d&apos;erreur ne
          décrit pas la correction attendue. La vérification du contenu ne se délègue pas au système de design.
        </Alert>
      </Section>

      <Section id="checklist" title="Grille de relecture d'une page">
        <ul className="space-y-2 rounded-lg border border-line bg-surface p-6 text-sm text-ink-muted">
          {pageChecklist.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-vert" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="declaration"
        title="Modèle de déclaration d'accessibilité"
        description="Un gabarit à adapter par chaque administration : remplacez les champs entre crochets par les informations réelles du service et de l'audit réalisé."
      >
        <CodeBlock lang="html" code={statement} />
      </Section>
    </article>
  );
}
