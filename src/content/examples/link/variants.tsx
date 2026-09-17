import { TextLink } from "@/dsm/components/link";

export default function LinkVariants() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-ink-muted">
        Variante <TextLink href="#">default</TextLink> — pour un lien de contenu ordinaire.
      </p>
      <p className="text-sm text-ink-muted">
        Variante <TextLink href="#" variant="subtle">subtle</TextLink> — un lien discret dans un texte dense.
      </p>
      <div className="rounded-lg bg-surface-inverse p-4">
        <p className="text-sm text-ink-inverse/80">
          Variante <TextLink href="#" variant="inverse">inverse</TextLink> — sur un fond sombre.
        </p>
      </div>
    </div>
  );
}
