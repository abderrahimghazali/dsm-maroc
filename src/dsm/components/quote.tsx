import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/dsm/lib/cn";
import { Quote as QuoteIcon } from "@/dsm/icons";

const quoteVariants = cva("relative border-s border-line-strong", {
  variants: {
    size: {
      md: "ps-5",
      lg: "ps-6",
    },
  },
  defaultVariants: { size: "md" },
});

export type QuoteProps = Omit<ComponentProps<"figure">, "role"> &
  VariantProps<typeof quoteVariants> & {
    children: ReactNode;
    author: ReactNode;
    role?: ReactNode;
    image?: string;
  };

/** A pull quote with an optional author portrait. */
export function Quote({ className, size = "md", children, author, role, image, ...props }: QuoteProps) {
  return (
    <figure className={cn(quoteVariants({ size }), className)} {...props}>
      <QuoteIcon aria-hidden className={cn("mb-2 text-vert", size === "lg" ? "size-9" : "size-7")} />
      <blockquote
        className={cn(
          "text-balance font-semibold tracking-tight text-ink",
          size === "lg" ? "text-2xl leading-snug" : "text-lg leading-snug",
        )}
      >
        {children}
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        {image && (
          // eslint-disable-next-line @next/next/no-img-element -- portable design-system component, framework-agnostic
          <img src={image} alt="" className="size-11 shrink-0 rounded-full object-cover" />
        )}
        <div>
          <p className="text-sm font-semibold text-ink">{author}</p>
          {role && <p className="text-xs text-ink-muted">{role}</p>}
        </div>
      </figcaption>
    </figure>
  );
}
