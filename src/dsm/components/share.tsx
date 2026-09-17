"use client";

import { useEffect, useState, useSyncExternalStore, type ComponentProps } from "react";
import { cn } from "@/dsm/lib/cn";
import { Check, LinkIcon, Mail, SocialFacebook, SocialLinkedin, SocialX } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

export type ShareProps = Omit<ComponentProps<"div">, "title"> & {
  title?: string;
  /** Defaults to the current page URL on the client. */
  url?: string;
};

function subscribeNoop() {
  return () => {};
}
function getLocationHref() {
  return window.location.href;
}
function getServerHref() {
  return "";
}

const iconButtonClass =
  "inline-flex size-10 items-center justify-center rounded-md text-ink-muted ring-1 ring-inset ring-line " +
  "transition-colors duration-(--dsm-duration-fast) ease-dsm hover:text-ink hover:ring-ink";

/** Share links for X, Facebook, LinkedIn and e-mail, plus a copy-link action. */
export function Share({ className, title, url, ...props }: ShareProps) {
  const t = useT();
  const currentHref = useSyncExternalStore(subscribeNoop, getLocationHref, getServerHref);
  const shareUrl = url ?? currentHref;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
    } catch {
      // Clipboard access denied or unavailable — no-op.
    }
  }

  const encodedUrl = encodeURIComponent(shareUrl);
  const links = [
    { label: "X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}`, icon: <SocialX className="size-[18px]" /> },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <SocialFacebook className="size-[18px]" />,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <SocialLinkedin className="size-[18px]" />,
    },
  ];

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)} {...props}>
      <span className="text-sm font-semibold text-ink">{title ?? t.share}</span>
      <ul className="flex flex-wrap items-center gap-2">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`${t.shareOn} ${l.label}`} className={iconButtonClass}>
              {l.icon}
            </a>
          </li>
        ))}
        <li>
          <a href={`mailto:?body=${encodedUrl}`} aria-label={t.shareByEmail} className={iconButtonClass}>
            <Mail className="size-[18px]" aria-hidden />
          </a>
        </li>
        <li className="relative">
          <button type="button" onClick={handleCopy} aria-label={copied ? t.linkCopied : t.copyLink} className={iconButtonClass}>
            {copied ? <Check className="size-[18px]" aria-hidden /> : <LinkIcon className="size-[18px]" aria-hidden />}
          </button>
          <span
            role="status"
            className={cn(
              "pointer-events-none absolute top-full start-1/2 z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-ink px-2 py-1 text-2xs font-medium text-ink-inverse",
              "transition-opacity duration-(--dsm-duration) ease-dsm",
              copied ? "opacity-100" : "opacity-0",
            )}
          >
            {copied ? t.linkCopied : ""}
          </span>
        </li>
      </ul>
    </div>
  );
}
