import { Highlight } from "@/dsm/components/highlight";

export default function HighlightInArticle() {
  return (
    <article className="dsm-prose max-w-xl">
      <h2>La dématérialisation de l&apos;état civil</h2>
      <p>
        Depuis le lancement du registre national de l&apos;état civil, les officiers d&apos;état civil des 1 538 communes du Royaume
        saisissent directement les actes dans une base unique, interconnectée avec les ministères de la Justice et de l&apos;Intérieur.
      </p>
      <Highlight>
        Un acte de naissance demandé en ligne est aujourd&apos;hui délivré en moyenne en 48 heures, contre 8 jours ouvrés en 2022.
      </Highlight>
      <p>
        Cette accélération bénéficie en priorité aux Marocains résidant à l&apos;étranger, qui représentaient près d&apos;un tiers des
        demandes déposées sur watiqa.ma au premier semestre 2026.
      </p>
    </article>
  );
}
