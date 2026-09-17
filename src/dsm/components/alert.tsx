"use client";

import { useState, type ComponentProps, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/dsm/lib/cn";
import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

const alertVariants = cva(
  "relative flex gap-3 rounded-md border border-s-4 ps-4 pe-4 py-3.5 text-sm leading-relaxed text-ink",
  {
    variants: {
      tone: {
        info: "border-line border-s-info bg-info-soft/60 [&>svg]:text-info",
        success: "border-line border-s-success bg-success-soft/60 [&>svg]:text-success",
        warning: "border-line border-s-warning bg-warning-soft/70 [&>svg]:text-warning",
        error: "border-line border-s-error bg-error-soft/60 [&>svg]:text-error",
      },
      size: {
        sm: "py-2.5 text-[0.8125rem] [&>svg]:size-4",
        md: "[&>svg]:size-5",
      },
    },
    defaultVariants: { tone: "info", size: "md" },
  },
);

const icons = { info: Info, success: CircleCheck, warning: TriangleAlert, error: CircleAlert };

export type AlertProps = Omit<ComponentProps<"div">, "title"> &
  VariantProps<typeof alertVariants> & {
    title?: ReactNode;
    closable?: boolean;
    onClose?: () => void;
  };

export function Alert({ className, tone = "info", size, title, closable, onClose, children, ...props }: AlertProps) {
  const [open, setOpen] = useState(true);
  const t = useT();
  const Icon = icons[tone ?? "info"];
  if (!open) return null;
  return (
    <div
      role={tone === "error" || tone === "warning" ? "alert" : "status"}
      className={cn(alertVariants({ tone, size }), className)}
      {...props}
    >
      <Icon aria-hidden className="mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1">
        {title && <p className="font-semibold text-ink">{title}</p>}
        {children && <div className={cn("text-ink-muted", title && "mt-1")}>{children}</div>}
      </div>
      {closable && (
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            onClose?.();
          }}
          aria-label={t.close}
          className="-me-1 -mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-sm text-ink-muted hover:bg-ink/5 hover:text-ink"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}
