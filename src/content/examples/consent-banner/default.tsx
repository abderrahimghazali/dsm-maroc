import { ConsentBanner } from "@/dsm/components/consent-banner";

export default function ConsentBannerDefault() {
  return (
    <div className="relative h-56 rounded-lg border border-dashed border-line-strong p-4">
      <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
        Aperçu contenu dans un cadre pour ne pas recouvrir le reste de la page — en usage réel, le bandeau est fixé au coin de la fenêtre.
      </p>
      <ConsentBanner className="absolute" />
    </div>
  );
}
