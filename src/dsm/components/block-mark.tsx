import Link from "next/link";
import { cn } from "@/dsm/lib/cn";
import { kingdomWordmark, type Locale } from "@/dsm/i18n";

type Size = "sm" | "md" | "lg";

export type BlockMarkProps = {
  /** Institution shown beside the national mark, keyed by locale. */
  entity?: Partial<Record<Locale, string>>;
  locale?: Locale;
  href?: string;
  size?: Size;
  /** Render the mark on a dark/inverse surface. */
  inverse?: boolean;
  /** Breakpoint below which the entity text is hidden (the emblem and wordmark always show). */
  entityFrom?: "md" | "xl";
  className?: string;
};

const sizes: Record<Size, { emblem: string; ar: string; zgh: string; fr: string; entity: string; gap: string }> = {
  sm: { emblem: "size-9", ar: "text-[13px]", zgh: "text-[9px]", fr: "text-[8.5px]", entity: "text-[11px] max-w-[14rem]", gap: "gap-2.5" },
  md: { emblem: "size-12", ar: "text-[17px]", zgh: "text-[11px]", fr: "text-[10px]", entity: "text-[13px] max-w-[16rem]", gap: "gap-3" },
  lg: { emblem: "size-16", ar: "text-[22px]", zgh: "text-[14px]", fr: "text-[12.5px]", entity: "text-[15px] max-w-[22rem]", gap: "gap-4" },
};

/** The five-point star of the national flag, interlaced, on the red field. */
export function Emblem({ className, inverse }: { className?: string; inverse?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={cn("shrink-0", className)}>
      <rect width="48" height="48" rx="3" fill={inverse ? "currentColor" : "#B5202C"} />
      <path
        d="M24 9 L32.82 36.14 L9.73 19.36 L38.27 19.36 L15.18 36.14 Z"
        fill="none"
        stroke={inverse ? "var(--dsm-surface-inverse)" : "#0B6B3F"}
        strokeWidth="2.4"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function BlockMark({ entity, locale = "fr", href = "/", size = "md", inverse, entityFrom = "md", className }: BlockMarkProps) {
  const s = sizes[size];
  const entityLabel = entity?.[locale] ?? entity?.fr ?? entity?.ar ?? entity?.zgh ?? entity?.en;

  const content = (
    <span className={cn("inline-flex items-center", s.gap)}>
      <Emblem className={s.emblem} inverse={inverse} />
      <span className="flex flex-col justify-center leading-none" aria-label="Royaume du Maroc">
        {kingdomWordmark.map((line) => (
          <span
            key={line.lang}
            lang={line.lang}
            dir={line.lang === "ar" ? "rtl" : "ltr"}
            className={cn(
              "block whitespace-nowrap text-start",
              line.lang === "ar" && cn("font-arabic font-semibold leading-[1.05]", s.ar),
              line.lang === "zgh" && cn("font-tifinagh mt-[3px] leading-none tracking-wide opacity-90", s.zgh),
              line.lang === "fr" && cn("mt-[3px] font-semibold uppercase leading-none tracking-[0.14em]", s.fr),
            )}
          >
            {line.text}
          </span>
        ))}
      </span>
      {entityLabel && (
        <span
          data-entity
          className={cn(
            "ms-1 hidden border-s border-current/25 ps-3 font-semibold leading-snug text-balance",
            entityFrom === "xl" ? "xl:inline-block" : "md:inline-block",
            s.entity,
          )}
        >
          {entityLabel}
        </span>
      )}
    </span>
  );

  const classes = cn(
    "inline-flex rounded-sm text-ink no-underline",
    inverse && "text-ink-inverse",
    className,
  );

  return href ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <span className={classes}>{content}</span>
  );
}
