"use client";

import { useState, type ComponentProps, type FormEvent, type ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { Button } from "@/dsm/components/button";
import { useT } from "@/dsm/i18n/provider";

export type FollowSocialLink = { label: string; href: string; icon: ReactNode };

export type FollowBlockProps = Omit<ComponentProps<"section">, "children"> & {
  social: FollowSocialLink[];
  onSubscribe?: (email: string) => void;
};

/** A muted band pairing a newsletter sign-up with social links. */
export function FollowBlock({ className, social, onSubscribe, ...props }: FollowBlockProps) {
  const t = useT();
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubscribe?.(email);
  }

  return (
    <section className={cn("bg-surface-muted", className)} {...props}>
      <div className="dsm-container grid gap-10 py-12 sm:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-ink">{t.newsletter}</h2>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">{t.newsletterHint}</p>
          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:max-w-md sm:flex-row">
            <label htmlFor="follow-email" className="dsm-sr-only">
              {t.email}
            </label>
            <input
              id="follow-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={t.email}
              className="h-11 flex-1 rounded-md bg-surface px-3.5 text-sm text-ink ring-1 ring-inset ring-line-strong placeholder:text-ink-subtle focus:ring-2 focus:ring-focus"
            />
            <Button type="submit">{t.subscribe}</Button>
          </form>
        </div>
        <div className="sm:justify-self-end">
          <h2 className="text-lg font-semibold tracking-tight text-ink">{t.followUs}</h2>
          <ul className="mt-4 flex items-center gap-2">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-md text-ink-muted ring-1 ring-inset ring-line transition-colors duration-(--dsm-duration-fast) ease-dsm hover:text-ink hover:ring-ink [&_svg]:size-[18px]"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
