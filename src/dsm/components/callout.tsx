import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/dsm/lib/cn";

const calloutVariants = cva("relative flex gap-4 rounded-md border border-s-4", {
  variants: {
    tone: {
      neutral: "border-line border-s-line-strong bg-surface-muted",
      vert: "border-line border-s-vert bg-vert-soft",
      rouge: "border-line border-s-rouge bg-rouge-soft",
      bleu: "border-line border-s-bleu bg-bleu-soft",
      safran: "border-line border-s-safran bg-safran-soft",
    },
    size: {
      default: "ps-5 pe-5 py-5",
      compact: "gap-3 ps-4 pe-4 py-3.5",
    },
  },
  defaultVariants: { tone: "neutral", size: "default" },
});

const iconToneClass = {
  neutral: "text-ink-muted",
  vert: "text-vert",
  rouge: "text-rouge",
  bleu: "text-bleu",
  safran: "text-safran",
} as const;

export type CalloutTone = keyof typeof iconToneClass;

export type CalloutProps = Omit<ComponentProps<"div">, "title"> &
  VariantProps<typeof calloutVariants> & {
    title?: ReactNode;
    icon?: ReactNode;
    action?: ReactNode;
  };

/** A framed block used to highlight a piece of content ("mettre en exergue"). */
export function Callout({ className, tone = "neutral", size, title, icon, action, children, ...props }: CalloutProps) {
  const resolvedTone = tone ?? "neutral";
  return (
    <div className={cn(calloutVariants({ tone, size }), className)} {...props}>
      {icon && <div className={cn("mt-0.5 shrink-0 [&_svg]:size-5", iconToneClass[resolvedTone])}>{icon}</div>}
      <div className="min-w-0 flex-1 space-y-2">
        {title && <p className={cn("font-semibold text-ink", size === "compact" && "text-sm")}>{title}</p>}
        {children && (
          <div className={cn("leading-relaxed text-ink-muted", size === "compact" ? "text-[0.8125rem]" : "text-sm")}>
            {children}
          </div>
        )}
        {action && <div className="pt-1">{action}</div>}
      </div>
    </div>
  );
}
