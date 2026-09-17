import { BackToTop } from "@/dsm/components/back-to-top";

export default function BackToTopDefault() {
  return (
    <div className="relative h-32 rounded-lg border border-dashed border-line-strong p-4">
      <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
        Aperçu contenu dans un cadre pour ne pas recouvrir le reste de la page — en usage réel, le bouton est fixé au coin de la fenêtre.
      </p>
      <BackToTop threshold={0} className="absolute" />
    </div>
  );
}
