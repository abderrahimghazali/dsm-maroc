"use client";

import Link from "next/link";
import { cva } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { Check, X } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

const tagVariants = cva(
  "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full font-medium transition-colors duration-(--dsm-duration-fast) ease-dsm [&_svg]:shrink-0",
  {
    variants: {
      size: {
        sm: "h-6 px-2.5 text-xs [&_svg]:size-3",
        md: "h-8 px-3.5 text-sm [&_svg]:size-3.5",
      },
    },
    defaultVariants: { size: "md" },
  },
);

export type TagProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  size?: "sm" | "md";
  icon?: ReactNode;
  href?: string;
  selectable?: boolean;
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  dismissible?: boolean;
  onDismiss?: () => void;
};

/** Small filterable/dismissible label — plain, linked, selectable (toggle) or dismissible. */
export function Tag({ children, className, id, size, icon, href, selectable, pressed = false, onPressedChange, dismissible, onDismiss }: TagProps) {
  const t = useT();
  const toneClass = pressed ? "bg-vert-soft text-vert-soft-fg" : "bg-surface-muted text-ink-muted ring-1 ring-inset ring-line";
  const hoverClass = !pressed && "hover:bg-surface-sunken hover:text-ink";

  const inner = (
    <>
      {pressed ? <Check aria-hidden /> : icon}
      <span className="truncate">{children}</span>
    </>
  );

  if (dismissible) {
    return (
      <span id={id} className={cn(tagVariants({ size }), toneClass, hoverClass, "pe-1.5", className)}>
        {inner}
        <button
          type="button"
          onClick={() => onDismiss?.()}
          aria-label={t.remove}
          className="-me-1 ms-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full text-current/70 hover:bg-ink/10 hover:text-current focus-visible:ring-2 focus-visible:ring-focus"
        >
          <X aria-hidden className="size-3" />
        </button>
      </span>
    );
  }

  if (selectable) {
    return (
      <button
        type="button"
        id={id}
        aria-pressed={pressed}
        onClick={() => onPressedChange?.(!pressed)}
        className={cn(tagVariants({ size }), toneClass, hoverClass, "cursor-pointer focus-visible:ring-2 focus-visible:ring-focus", className)}
      >
        {inner}
      </button>
    );
  }

  if (href) {
    return (
      <Link id={id} href={href} className={cn(tagVariants({ size }), toneClass, hoverClass, "no-underline", className)}>
        {inner}
      </Link>
    );
  }

  return (
    <span id={id} className={cn(tagVariants({ size }), toneClass, hoverClass, className)}>
      {inner}
    </span>
  );
}

export function TagGroup({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex flex-wrap items-center gap-2", className)} {...props} />;
}
