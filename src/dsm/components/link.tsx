"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/dsm/lib/cn";
import { Download, ExternalLink } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

const textLinkVariants = cva(
  "inline-flex items-center gap-1 underline decoration-1 underline-offset-4 transition-colors duration-(--dsm-duration-fast) ease-dsm [&_svg]:size-[0.9em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "text-link hover:text-link-hover hover:decoration-2",
        subtle: "text-ink decoration-line-strong hover:text-primary hover:decoration-current",
        inverse: "text-ink-inverse decoration-ink-inverse/40 hover:decoration-ink-inverse",
      },
      size: {
        inherit: "text-inherit",
        sm: "text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "inherit" },
  },
);

export type TextLinkProps = Omit<ComponentProps<"a">, "href"> &
  VariantProps<typeof textLinkVariants> & {
    href: string;
    /** Force internal/external handling. Auto-detected from an http(s) href when omitted. */
    external?: boolean;
  };

/** Inline content link — renders `next/link` for internal paths, a plain anchor (new tab) for external URLs. */
export function TextLink({ href, external, variant, size, className, children, ...props }: TextLinkProps) {
  const t = useT();
  const isExternal = external ?? /^https?:\/\//.test(href);
  const linkClassName = cn(textLinkVariants({ variant, size }), className);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClassName} {...props}>
        {children}
        <ExternalLink aria-hidden />
        <span className="dsm-sr-only"> ({t.newTab})</span>
      </a>
    );
  }

  return (
    <Link href={href} className={linkClassName} {...props}>
      {children}
    </Link>
  );
}

export type DownloadLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  label: ReactNode;
  /** File format shown in the meta line, e.g. "PDF". */
  format: string;
  /** File size shown in the meta line, e.g. "1,2 Mo". */
  size: string;
  lang?: string;
};

/** Document download link with a file-type chip and a "format – size" meta line. */
export function DownloadLink({ href, label, format, size, lang, className, ...props }: DownloadLinkProps) {
  const t = useT();
  return (
    <a
      href={href}
      download
      lang={lang}
      className={cn("group/dl inline-flex items-start gap-3 rounded-md py-1.5 text-start no-underline", className)}
      {...props}
    >
      <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-surface-muted text-ink-muted transition-colors duration-(--dsm-duration-fast) ease-dsm group-hover/dl:bg-vert-soft group-hover/dl:text-vert-soft-fg">
        <Download aria-hidden className="size-4" />
      </span>
      <span>
        <span className="block font-medium text-ink underline decoration-1 underline-offset-4 transition-colors duration-(--dsm-duration-fast) ease-dsm group-hover/dl:text-link group-hover/dl:decoration-2">
          {label}
          <span className="dsm-sr-only"> ({t.download})</span>
        </span>
        <span className="block text-xs text-ink-subtle">
          {format} – {size}
        </span>
      </span>
    </a>
  );
}
