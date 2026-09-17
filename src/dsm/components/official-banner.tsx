"use client";

import { Collapsible } from "@base-ui/react/collapsible";
import type { ComponentProps } from "react";
import { cn } from "@/dsm/lib/cn";
import { ChevronDown, Landmark, Lock } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";
import { Emblem } from "./block-mark";

export type OfficialBannerProps = ComponentProps<typeof Collapsible.Root>;

/** Thin ".gouv" identity strip above the header, with an expandable "how to know" explainer. */
export function OfficialBanner({ className, ...props }: OfficialBannerProps) {
  const t = useT();
  return (
    <Collapsible.Root className={cn("border-b border-line bg-surface-muted text-ink-muted", className)} {...props}>
      <div className="dsm-container flex h-8 items-center gap-2 text-xs">
        <Emblem className="size-4 shrink-0 rounded-[2px]" />
        <span className="truncate">{t.officialBanner}</span>
        <Collapsible.Trigger className="group/t ms-auto inline-flex shrink-0 items-center gap-1 font-medium text-ink underline decoration-1 underline-offset-2 hover:decoration-2">
          {t.howToKnow}
          <ChevronDown aria-hidden className="size-3.5 transition-transform duration-(--dsm-duration) ease-dsm group-data-panel-open/t:rotate-180" />
        </Collapsible.Trigger>
      </div>
      <Collapsible.Panel className="overflow-hidden transition-[height] duration-(--dsm-duration) ease-dsm data-starting-style:h-0 data-ending-style:h-0">
        <div className="dsm-container grid gap-4 border-t border-line py-4 text-sm sm:grid-cols-2">
          <div className="flex gap-3">
            <Landmark aria-hidden className="mt-0.5 size-5 shrink-0 text-ink-subtle" />
            <p className="leading-relaxed text-ink-muted">
              <span className="font-medium text-ink">gov.ma</span> — {t.officialDomainExplainer}
            </p>
          </div>
          <div className="flex gap-3">
            <Lock aria-hidden className="mt-0.5 size-5 shrink-0 text-ink-subtle" />
            <p className="leading-relaxed text-ink-muted">
              <span className="font-medium text-ink">{t.secure}</span> — {t.officialExplainer}
            </p>
          </div>
        </div>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}
