import { Callout } from "@/dsm/components/callout";
import { Info } from "@/dsm/icons";

export default function CalloutCompact() {
  return (
    <aside className="max-w-xs space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-subtle">Dans cette rubrique</p>
      <Callout tone="bleu" size="compact" icon={<Info />}>
        Le numéro d&apos;assuré CNSS figure sur votre attestation d&apos;affiliation, disponible dans votre espace assuré.ma.
      </Callout>
    </aside>
  );
}
