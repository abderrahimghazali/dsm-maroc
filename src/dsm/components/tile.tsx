import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/dsm/lib/cn";
import { ArrowForward } from "@/dsm/icons";

const tileVariants = cva(
  [
    "group/tile relative flex gap-4 rounded-lg border p-5 transition-[border-color,box-shadow] duration-(--dsm-duration) ease-dsm",
    "hover:border-line-strong hover:shadow-sm",
    "has-[a.dsm-tile-link:focus-visible]:ring-2 has-[a.dsm-tile-link:focus-visible]:ring-focus has-[a.dsm-tile-link:focus-visible]:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        default: "border-line bg-surface",
        tinted: "border-transparent bg-surface-muted",
      },
      orientation: {
        vertical: "flex-col",
        horizontal: "flex-row items-start",
      },
    },
    defaultVariants: { variant: "default", orientation: "vertical" },
  },
);

export type TileProps = Omit<ComponentProps<"div">, "title"> &
  VariantProps<typeof tileVariants> & {
    title: ReactNode;
    description?: ReactNode;
    href: string;
    icon?: ReactNode;
    image?: string;
  };

/** A linked tile with an icon or image lead-in. The whole tile is the hit area. */
export function Tile({ className, variant, orientation, title, description, href, icon, image, ...props }: TileProps) {
  return (
    <div className={cn(tileVariants({ variant, orientation }), className)} {...props}>
      {(icon || image) && (
        <div
          className={cn(
            "dsm-arch flex size-14 shrink-0 items-center justify-center overflow-hidden",
            icon ? "bg-vert-soft text-vert-soft-fg [&_svg]:size-6" : "bg-surface-sunken",
          )}
        >
          {icon}
          {!icon && image && (
            // eslint-disable-next-line @next/next/no-img-element -- portable design-system component, framework-agnostic
            <img src={image} alt="" className="size-full object-cover" />
          )}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold leading-snug tracking-tight text-balance text-ink">
          <Link
            href={href}
            className="dsm-tile-link text-inherit no-underline outline-none after:absolute after:inset-0 after:content-[''] group-hover/tile:underline group-hover/tile:decoration-1 group-hover/tile:underline-offset-4"
          >
            {title}
          </Link>
        </h3>
        {description && <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{description}</p>}
        <span className="mt-3 inline-flex items-center text-primary">
          <ArrowForward
            className="size-4 transition-transform duration-(--dsm-duration) ease-dsm group-hover/tile:translate-x-1 rtl:group-hover/tile:-translate-x-1"
            aria-hidden
          />
        </span>
      </div>
    </div>
  );
}

type TileGridColumns = 2 | 3 | 4;

const tileGridColsClass: Record<TileGridColumns, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export type TileGridProps = ComponentProps<"div"> & { columns?: TileGridColumns };

export function TileGrid({ className, columns = 3, ...props }: TileGridProps) {
  return <div className={cn("grid grid-cols-1 gap-5", tileGridColsClass[columns], className)} {...props} />;
}
