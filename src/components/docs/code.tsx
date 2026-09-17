import { codeToHtml } from "shiki";
import { cn } from "@/dsm/lib/cn";
import { CopyButton } from "./copy-button";

const themes = { light: "github-light", dark: "github-dark" } as const;

export async function CodeBlock({
  code,
  lang = "tsx",
  className,
  title,
}: {
  code: string;
  lang?: "tsx" | "ts" | "css" | "bash" | "json" | "html";
  className?: string;
  title?: string;
}) {
  const html = await codeToHtml(code.trim(), { lang, themes, defaultColor: false });
  return (
    <div className={cn("dsm-code group/code relative overflow-hidden rounded-lg border border-line bg-surface", className)}>
      {title ? (
        <div className="flex items-center justify-between gap-3 border-b border-line py-1.5 pe-1.5 ps-4 text-xs font-medium text-ink-muted">
          <span className="truncate font-mono">{title}</span>
          <CopyButton text={code.trim()} className="size-7" />
        </div>
      ) : (
        <div className="absolute end-2 top-2 z-10">
          <CopyButton text={code.trim()} />
        </div>
      )}
      <div
        className="overflow-x-auto p-4 text-[0.8125rem] leading-relaxed [&_pre]:!bg-transparent [&_code]:font-mono"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
