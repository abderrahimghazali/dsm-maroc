"use client";

import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/dsm/lib/cn";
import { Loader2 } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

const spinnerVariants = cva("animate-dsm-spin", {
  variants: {
    size: { sm: "size-4", md: "size-5", lg: "size-7" },
    tone: { current: "text-current", primary: "text-primary" },
  },
  defaultVariants: { size: "md", tone: "current" },
});

export type SpinnerProps = ComponentProps<"span"> &
  VariantProps<typeof spinnerVariants> & {
    /** Defaults to the localised "Loading" string. */
    label?: string;
    /** Show the label visibly instead of screen-reader only. */
    showLabel?: boolean;
  };

export function Spinner({ className, size, tone, label, showLabel, ...props }: SpinnerProps) {
  const t = useT();
  const text = label ?? t.loading;
  return (
    <span role="status" className={cn("inline-flex items-center gap-2", className)} {...props}>
      <Loader2 aria-hidden className={spinnerVariants({ size, tone })} />
      <span className={showLabel ? "text-sm text-ink-muted" : "dsm-sr-only"}>{text}</span>
    </span>
  );
}
