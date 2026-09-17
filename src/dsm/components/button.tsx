"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { Loader2 } from "@/dsm/icons";

export const buttonVariants = cva(
  [
    "group/btn relative inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium",
    "transition-[background-color,color,box-shadow,transform,border-color] duration-(--dsm-duration-fast) ease-dsm",
    "active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:size-[1.15em] [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-fg hover:bg-primary-hover",
        secondary: "bg-surface text-ink ring-1 ring-inset ring-line-strong hover:bg-surface-muted hover:ring-ink",
        tertiary: "text-ink underline decoration-line-strong decoration-1 underline-offset-[5px] hover:bg-surface-muted hover:decoration-ink",
        ghost: "text-ink hover:bg-surface-muted",
        danger: "bg-rouge text-white hover:bg-rouge-hover",
        accent: "bg-ink text-ink-inverse hover:bg-ink/85",
        inverse: "bg-canvas text-ink hover:bg-surface-muted",
        link: "h-auto rounded-none p-0 text-link underline decoration-1 underline-offset-4 hover:text-link-hover hover:decoration-2",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-11 px-5 text-[0.9375rem]",
        lg: "h-13 px-6 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonProps = ComponentProps<typeof BaseButton> &
  VariantProps<typeof buttonVariants> & {
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    loading?: boolean;
  };

export function Button({ className, variant, size, iconStart, iconEnd, loading, children, disabled, render, nativeButton, ...props }: ButtonProps) {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size }), loading && "cursor-progress", className)}
      disabled={disabled || loading}
      focusableWhenDisabled={loading}
      aria-busy={loading || undefined}
      render={render}
      // When rendered as a link (or any non-<button>), tell Base UI so it keeps the right semantics.
      nativeButton={nativeButton ?? render === undefined}
      {...props}
    >
      {loading ? <Loader2 className="animate-dsm-spin" aria-hidden /> : iconStart}
      {children}
      {iconEnd}
    </BaseButton>
  );
}

/** Horizontal group of buttons that wraps gracefully. */
export function ButtonGroup({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex flex-wrap items-center gap-3", className)} {...props} />;
}
