import Link from "next/link";
import { Info } from "@/dsm/icons";

/** Persistent strip above the demo portal: this is an independent demonstration, not a government site. */
export function DemoNotice({ text, linkLabel }: { text: string; linkLabel: string }) {
  return (
    <div role="note" className="bg-ink text-ink-inverse">
      <div className="dsm-container flex items-start gap-2 py-2 text-xs leading-relaxed sm:items-center">
        <Info aria-hidden className="mt-0.5 size-4 shrink-0 sm:mt-0" />
        <p className="flex-1">{text}</p>
        <Link href="/" className="shrink-0 font-semibold text-ink-inverse underline underline-offset-2 hover:decoration-2">
          {linkLabel}
        </Link>
      </div>
    </div>
  );
}
