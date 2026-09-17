"use client";

import { useState } from "react";
import { Check, Copy } from "@/dsm/icons";
import { cn } from "@/dsm/lib/cn";

export function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      aria-label={copied ? "Copié" : "Copier le code"}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        } catch {}
      }}
      className={cn(
        "inline-flex size-8 items-center justify-center rounded-md border border-line bg-surface text-ink-muted shadow-xs transition-colors hover:border-line-strong hover:text-ink",
        copied && "border-success text-success",
        className,
      )}
    >
      {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
    </button>
  );
}
