"use client";

import Link from "next/link";
import { useState, type ComponentProps, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/dsm/lib/cn";
import { CircleAlert, Info, TriangleAlert, X } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

const noticeVariants = cva("relative w-full border-b border-line", {
  variants: {
    tone: {
      info: "bg-info-soft/60 [&_.dsm-notice-icon]:text-info",
      warning: "bg-warning-soft/70 [&_.dsm-notice-icon]:text-warning",
      alert: "bg-error-soft/60 [&_.dsm-notice-icon]:text-error",
    },
  },
  defaultVariants: { tone: "info" },
});

const icons = { info: Info, warning: TriangleAlert, alert: CircleAlert };

export type NoticeProps = Omit<ComponentProps<"div">, "title"> &
  VariantProps<typeof noticeVariants> & {
    title?: ReactNode;
    description?: ReactNode;
    link?: { label: string; href: string };
    dismissible?: boolean;
    onDismiss?: () => void;
  };

/** Site-wide status banner, placed directly under the header. */
export function Notice({ className, tone = "info", title, description, link, dismissible, onDismiss, children, ...props }: NoticeProps) {
  const t = useT();
  const [open, setOpen] = useState(true);
  const Icon = icons[tone ?? "info"];
  if (!open) return null;

  return (
    <div role={tone === "alert" ? "alert" : "status"} className={cn(noticeVariants({ tone }), "text-ink", className)} {...props}>
      <div className="dsm-container flex items-start gap-3 py-3">
        <Icon aria-hidden className="dsm-notice-icon mt-0.5 size-5 shrink-0" />
        <div className="min-w-0 flex-1 text-sm leading-relaxed">
          {title && <span className="font-semibold">{title}</span>}
          {description && <span className={cn(title && "ms-1.5", "text-ink-muted")}>{description}</span>}
          {children}
          {link && (
            <Link
              href={link.href}
              className="ms-1.5 inline-flex items-center font-medium text-link underline decoration-1 underline-offset-4 hover:text-link-hover hover:decoration-2"
            >
              {link.label}
            </Link>
          )}
        </div>
        {dismissible && (
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onDismiss?.();
            }}
            aria-label={t.dismiss}
            className="-me-1 -mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-sm text-ink-muted hover:bg-ink/5 hover:text-ink"
          >
            <X aria-hidden className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}
