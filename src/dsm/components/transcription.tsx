"use client";

import { Collapsible } from "@base-ui/react/collapsible";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { ChevronDown } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

export type TranscriptionProps = Omit<ComponentProps<typeof Collapsible.Root>, "children"> & {
  title?: ReactNode;
  children: ReactNode;
};

/** A collapsible transcript for audio/video content. */
export function Transcription({ className, title, children, ...props }: TranscriptionProps) {
  const t = useT();
  return (
    <Collapsible.Root className={cn("rounded-lg border border-line bg-surface", className)} {...props}>
      <div className="flex items-center justify-between gap-4 px-5 py-3.5">
        {title && <p className="text-sm font-semibold text-ink">{title}</p>}
        <Collapsible.Trigger
          className={cn(
            "group inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-primary outline-none hover:text-primary-hover",
            !title && "w-full justify-between",
          )}
        >
          <span className="group-data-panel-open:hidden">{t.showTranscript}</span>
          <span className="hidden group-data-panel-open:inline">{t.hideTranscript}</span>
          <ChevronDown
            aria-hidden
            className="size-4 shrink-0 transition-transform duration-(--dsm-duration) ease-dsm group-data-panel-open:rotate-180"
          />
        </Collapsible.Trigger>
      </div>
      <Collapsible.Panel
        className={cn(
          "h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-(--dsm-duration) ease-dsm-out",
          "data-starting-style:h-0 data-ending-style:h-0",
        )}
      >
        <div className="dsm-prose max-w-none border-t border-line px-5 py-5 text-sm">{children}</div>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}
