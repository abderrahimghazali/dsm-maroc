import type { ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";

export function PageHeader({
  eyebrow,
  title,
  titleAr,
  titleEn,
  description,
  aside,
  className,
}: {
  eyebrow?: ReactNode;
  title: string;
  titleAr?: string;
  titleEn?: string;
  description?: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("mb-10 border-b border-line pb-8", className)}>
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>}
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="min-w-0">
          <h1 className="text-4xl font-semibold tracking-tight text-balance">{title}</h1>
          {(titleAr || titleEn) && (
            <p className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-lg text-ink-muted">
              {titleAr && (
                <span lang="ar" dir="rtl" className="font-arabic">
                  {titleAr}
                </span>
              )}
              {titleEn && <span lang="en">{titleEn}</span>}
            </p>
          )}
        </div>
        {aside && <div className="shrink-0">{aside}</div>}
      </div>
      {description && <div className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-muted">{description}</div>}
    </header>
  );
}

export function Section({
  id,
  title,
  description,
  children,
  className,
}: {
  id: string;
  title: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-8 first:pt-0", className)}>
      <h2 className="text-2xl font-semibold tracking-tight">
        <a href={`#${id}`} className="text-inherit no-underline hover:underline">
          {title}
        </a>
      </h2>
      {description && <p className="mt-2 max-w-3xl text-ink-muted">{description}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}
