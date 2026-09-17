"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/dsm/lib/cn";
import { Download, FileText } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

export type DownloadCardProps = Omit<ComponentProps<"div">, "title"> & {
  title: string;
  description?: string;
  href: string;
  /** e.g. "PDF" */
  format: string;
  /** e.g. "1,2 Mo" */
  size: string;
  /** File language, set as `hrefLang` on the link (e.g. "fr"). */
  lang?: string;
  updatedAt?: string;
};

/** A clickable card for a downloadable document, with format/size/date metadata. */
export function DownloadCard({
  className,
  title,
  description,
  href,
  format,
  size,
  lang,
  updatedAt,
  ...props
}: DownloadCardProps) {
  const t = useT();
  const meta = [format, size, updatedAt && `${t.lastUpdated} ${updatedAt}`].filter(Boolean).join(" – ");

  return (
    <div
      className={cn(
        "group/dl relative flex items-start gap-4 rounded-lg border border-line bg-surface p-5",
        "transition-[border-color,box-shadow] duration-(--dsm-duration) ease-dsm hover:border-line-strong hover:shadow-sm",
        "has-[a.dsm-dl-link:focus-visible]:ring-2 has-[a.dsm-dl-link:focus-visible]:ring-focus has-[a.dsm-dl-link:focus-visible]:ring-offset-2",
        className,
      )}
      {...props}
    >
      <div className="flex size-14 shrink-0 items-center justify-center rounded-md bg-surface-muted text-ink-subtle">
        <FileText className="size-6" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold leading-snug text-balance text-ink">
          <Link
            href={href}
            hrefLang={lang}
            className="dsm-dl-link text-inherit no-underline outline-none after:absolute after:inset-0 after:content-[''] group-hover/dl:underline group-hover/dl:decoration-1 group-hover/dl:underline-offset-4"
          >
            {title}
          </Link>
        </h3>
        {description && <p className="mt-1 text-sm leading-relaxed text-ink-muted">{description}</p>}
        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ink-subtle">{meta}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          <Download className="size-4" aria-hidden />
          {t.download}
        </span>
      </div>
    </div>
  );
}
