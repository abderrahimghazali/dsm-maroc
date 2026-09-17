import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/dsm/lib/cn";

export const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-xs font-semibold uppercase leading-4 tracking-wide [&_svg]:size-3.5",
  {
    variants: {
      tone: {
        neutral: "bg-surface-muted text-ink-muted",
        info: "bg-info-soft text-info-soft-fg",
        success: "bg-success-soft text-success-soft-fg",
        warning: "bg-warning-soft text-warning-soft-fg",
        error: "bg-error-soft text-error-soft-fg",
        rouge: "bg-rouge text-white",
        vert: "bg-vert text-white",
        ink: "bg-ink text-ink-inverse",
        outline: "ring-1 ring-inset ring-line-strong text-ink",
      },
      size: {
        sm: "text-2xs px-1.5 py-px",
        md: "",
      },
    },
    defaultVariants: { tone: "neutral", size: "md" },
  },
);

export type BadgeProps = ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    /** Prefix with a coloured status dot. */
    dot?: boolean;
  };

export function Badge({ className, tone, size, dot, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ tone, size }), className)} {...props}>
      {dot && <span aria-hidden className="size-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}
