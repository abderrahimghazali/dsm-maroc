import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/dsm/lib/cn";
import { ArrowForward } from "@/dsm/icons";

const cardVariants = cva(
  "group/card relative flex flex-col overflow-hidden rounded-lg transition-[box-shadow,border-color,transform] duration-(--dsm-duration) ease-dsm",
  {
    variants: {
      variant: {
        default: "bg-surface border border-line shadow-xs",
        tinted: "bg-surface-muted border border-transparent",
        outlined: "bg-transparent border border-line-strong",
        ghost: "bg-transparent",
        inverse: "bg-surface-inverse text-ink-inverse",
      },
      orientation: {
        vertical: "",
        horizontal: "sm:flex-row",
      },
      interactive: {
        true: "hover:border-line-strong hover:shadow-md has-[a.dsm-card-link:focus-visible]:ring-2 has-[a.dsm-card-link:focus-visible]:ring-focus has-[a.dsm-card-link:focus-visible]:ring-offset-2",
        false: "",
      },
    },
    defaultVariants: { variant: "default", orientation: "vertical", interactive: false },
  },
);

export type CardProps = ComponentProps<"div"> & VariantProps<typeof cardVariants>;

export function Card({ className, variant, orientation, interactive, ...props }: CardProps) {
  return <div data-orientation={orientation ?? "vertical"} className={cn(cardVariants({ variant, orientation, interactive }), className)} {...props} />;
}

export function CardMedia({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden bg-surface-sunken [&_img]:size-full [&_img]:object-cover",
        "aspect-[16/9] w-full group-data-[orientation=horizontal]/card:sm:aspect-auto group-data-[orientation=horizontal]/card:sm:w-2/5",
        className,
      )}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex flex-1 flex-col gap-3 p-5 sm:p-6", className)} {...props} />;
}

export function CardMeta({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("text-xs font-medium uppercase tracking-wide text-ink-subtle", className)} {...props} />;
}

export type CardTitleProps = ComponentProps<"h3"> & { href?: string };

/** When `href` is provided the whole card becomes the hit area (enlarged link). */
export function CardTitle({ className, href, children, ...props }: CardTitleProps) {
  return (
    <h3 className={cn("text-lg font-semibold leading-snug tracking-tight text-balance", className)} {...props}>
      {href ? (
        <Link
          href={href}
          className="dsm-card-link text-inherit no-underline outline-none after:absolute after:inset-0 after:content-[''] group-hover/card:underline group-hover/card:decoration-1 group-hover/card:underline-offset-4"
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </h3>
  );
}

export function CardText({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("text-sm leading-relaxed text-ink-muted", className)} {...props} />;
}

export function CardBadges({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex flex-wrap gap-1.5", className)} {...props} />;
}

export function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mt-auto flex items-center justify-between gap-3 pt-2", className)} {...props} />;
}

/** The arrow that slides forward on hover — used at the end of linked cards. */
export function CardArrow({ label, className }: { label?: ReactNode; className?: string }) {
  return (
    <span className={cn("ms-auto inline-flex items-center gap-2 text-sm font-medium text-primary", className)}>
      {label}
      <ArrowForward className="size-4 transition-transform duration-(--dsm-duration) ease-dsm group-hover/card:translate-x-1 rtl:group-hover/card:-translate-x-1" />
    </span>
  );
}
