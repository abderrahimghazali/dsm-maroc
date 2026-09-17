import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/dsm/lib/cn";

const highlightVariants = cva("text-balance border-s-4 border-vert font-medium leading-relaxed text-ink", {
  variants: {
    size: {
      sm: "ps-3.5 text-sm",
      md: "ps-4 text-base",
      lg: "ps-5 text-lg",
    },
  },
  defaultVariants: { size: "md" },
});

export type HighlightProps = ComponentProps<"p"> & VariantProps<typeof highlightVariants>;

/** Highlights a paragraph to make it stand out ("mettre en exergue"). */
export function Highlight({ className, size, ...props }: HighlightProps) {
  return <p className={cn(highlightVariants({ size }), className)} {...props} />;
}
