import { Share } from "@/dsm/components/share";

export default function ShareInArticle() {
  return (
    <article className="dsm-prose max-w-xl">
      <h2>Le portail Chikaya.ma dépasse le million de réclamations traitées</h2>
      <p>
        Lancée en 2018, la plateforme nationale des réclamations a permis d&apos;instruire plus d&apos;un million de doléances
        déposées par les citoyens à l&apos;encontre des administrations et établissements publics, avec un délai moyen de
        réponse ramené à 12 jours ouvrés en 2026.
      </p>
      <div className="mt-8 border-t border-line pt-6">
        <Share title="Partager ce communiqué" url="https://www.chikaya.ma/actualites/million-reclamations" />
      </div>
    </article>
  );
}
