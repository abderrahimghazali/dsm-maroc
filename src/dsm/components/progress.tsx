"use client";

import { Progress as BaseProgress } from "@base-ui/react/progress";
import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/dsm/lib/cn";

const trackVariants = cva("relative w-full overflow-hidden rounded-full bg-surface-sunken", {
  variants: {
    size: { sm: "h-1.5", md: "h-2.5" },
  },
  defaultVariants: { size: "md" },
});

const indicatorToneClass: Record<"default" | "success" | "warning" | "error", string> = {
  default: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
};

export type ProgressProps = Omit<ComponentProps<typeof BaseProgress.Root>, "children"> &
  VariantProps<typeof trackVariants> & {
    label?: ReactNode;
    /** Show the formatted value ("42 %") next to the label. */
    showValue?: boolean;
    tone?: "default" | "success" | "warning" | "error";
  };

export function Progress({ value, label, showValue, tone = "default", size, className, ...props }: ProgressProps) {
  return (
    <BaseProgress.Root value={value} className={cn("w-full", className)} {...props}>
      {(label || showValue) && (
        <div className="mb-1.5 flex items-center justify-between gap-2 text-sm">
          {label && <BaseProgress.Label className="font-medium text-ink">{label}</BaseProgress.Label>}
          {showValue && (
            <BaseProgress.Value className="tabular-nums text-ink-muted">
              {(_, v) => (v == null ? null : `${Math.round(v)} %`)}
            </BaseProgress.Value>
          )}
        </div>
      )}
      <BaseProgress.Track className={trackVariants({ size })}>
        <BaseProgress.Indicator
          className={cn(
            "h-full rounded-full transition-[width] duration-(--dsm-duration-slow) ease-dsm-out",
            indicatorToneClass[tone],
            "data-indeterminate:dsm-shimmer data-indeterminate:w-full!",
          )}
        />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}
