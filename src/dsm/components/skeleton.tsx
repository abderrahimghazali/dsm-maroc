"use client";

import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/dsm/lib/cn";
import { useT } from "@/dsm/i18n/provider";

const skeletonVariants = cva("dsm-shimmer shrink-0", {
  variants: {
    variant: {
      text: "h-3.5 w-full rounded-sm",
      rect: "rounded-md",
      circle: "rounded-full",
    },
  },
  defaultVariants: { variant: "rect" },
});

export type SkeletonProps = ComponentProps<"div"> &
  VariantProps<typeof skeletonVariants> & {
    /** Number of lines when `variant="text"`. The last line is shorter. */
    lines?: number;
  };

export function Skeleton({ className, variant = "rect", lines, ...props }: SkeletonProps) {
  if (variant === "text" && lines && lines > 1) {
    return (
      <div className="flex w-full flex-col gap-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            aria-hidden
            className={cn(skeletonVariants({ variant }), i === lines - 1 && "w-3/5", className)}
          />
        ))}
      </div>
    );
  }
  return <div aria-hidden className={cn(skeletonVariants({ variant }), className)} {...props} />;
}

export type SkeletonGroupProps = ComponentProps<"div">;

/** Wraps one or more `Skeleton`s with a polite loading announcement. */
export function SkeletonGroup({ className, children, ...props }: SkeletonGroupProps) {
  const t = useT();
  return (
    <div role="status" className={className} {...props}>
      {children}
      <span className="dsm-sr-only">{t.loading}</span>
    </div>
  );
}
