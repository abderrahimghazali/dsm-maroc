"use client";

import { useState, type ComponentProps } from "react";
import { cn } from "@/dsm/lib/cn";
import { useT } from "@/dsm/i18n/provider";
import { Button, ButtonGroup } from "./button";

export type ConsentBannerProps = Omit<ComponentProps<"div">, "title" | "children"> & {
  open?: boolean;
  defaultOpen?: boolean;
  onAccept?: () => void;
  onRefuse?: () => void;
  onCustomise?: () => void;
};

/** Cookie-consent banner — fixed to the viewport bottom, dismissed by any of the three actions. */
export function ConsentBanner({ open: openProp, defaultOpen = true, onAccept, onRefuse, onCustomise, className, ...props }: ConsentBannerProps) {
  const t = useT();
  const [openState, setOpenState] = useState(defaultOpen);
  const open = openProp ?? openState;
  const isControlled = openProp !== undefined;

  if (!open) return null;

  const close = () => {
    if (!isControlled) setOpenState(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="dsm-consent-title"
      className={cn(
        "fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl animate-dsm-up rounded-lg border border-line bg-surface p-5 text-ink shadow-lg sm:inset-x-auto sm:end-6",
        className,
      )}
      {...props}
    >
      <h2 id="dsm-consent-title" className="text-base font-semibold tracking-tight">
        {t.consentTitle}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.consentBody}</p>
      <ButtonGroup className="mt-4">
        <Button
          size="sm"
          variant="primary"
          onClick={() => {
            onAccept?.();
            close();
          }}
        >
          {t.acceptAll}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            onRefuse?.();
            close();
          }}
        >
          {t.refuseAll}
        </Button>
        <Button size="sm" variant="tertiary" onClick={() => onCustomise?.()}>
          {t.customise}
        </Button>
      </ButtonGroup>
    </div>
  );
}
