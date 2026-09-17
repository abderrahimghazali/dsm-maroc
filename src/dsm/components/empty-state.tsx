import type { ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";

const sizeClass = {
  sm: { wrap: "gap-3 py-8", title: "text-base", desc: "text-sm" },
  md: { wrap: "gap-4 py-14", title: "text-lg", desc: "text-sm" },
} as const;

export type EmptyStateProps = {
  icon: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  size?: "sm" | "md";
  /** Show a subtle khatam pattern behind the content. */
  pattern?: boolean;
  className?: string;
};

export function EmptyState({
  icon,
  title,
  description,
  action,
  size = "md",
  pattern = true,
  className,
}: EmptyStateProps) {
  const s = sizeClass[size];
  return (
    <div className={cn("relative isolate flex flex-col items-center overflow-hidden text-center", s.wrap, className)}>
      {pattern && (
        <div aria-hidden className="dsm-khatam-fade-radial pointer-events-none absolute inset-0 -z-10 text-ink opacity-[0.06]" />
      )}
      <div className="dsm-arch flex size-16 items-center justify-center bg-surface-muted text-ink-subtle [&_svg]:size-7">
        {icon}
      </div>
      <div className="max-w-sm space-y-1.5">
        <p className={cn("font-semibold tracking-tight text-ink", s.title)}>{title}</p>
        {description && <p className={cn("leading-relaxed text-ink-muted", s.desc)}>{description}</p>}
      </div>
      {action && <div className="mt-1">{action}</div>}
    </div>
  );
}
