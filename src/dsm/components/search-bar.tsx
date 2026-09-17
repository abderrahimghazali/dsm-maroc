"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { cn } from "@/dsm/lib/cn";
import { Loader2, Search, X } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

export type SearchBarProps = {
  size?: "md" | "lg";
  placeholder?: string;
  defaultValue?: string;
  action?: string;
  loading?: boolean;
  onSearch?: (query: string) => void;
  className?: string;
};

/** Standalone search form with a submit action and a clear button once there's text. */
export function SearchBar({ size = "md", placeholder, defaultValue = "", action, loading, onSearch, className }: SearchBarProps) {
  const t = useT();
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(defaultValue);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch?.(query);
  }

  return (
    <form
      role="search"
      action={action}
      onSubmit={handleSubmit}
      className={cn(
        "group/search flex items-stretch overflow-hidden rounded-md bg-surface ring-1 ring-inset ring-line-strong transition-shadow duration-(--dsm-duration-fast) ease-dsm",
        "focus-within:ring-2 focus-within:ring-focus hover:ring-ink focus-within:hover:ring-focus",
        size === "lg" ? "h-13" : "h-11",
        className,
      )}
    >
      <label htmlFor={id} className="dsm-sr-only">
        {t.search}
      </label>
      <input
        ref={inputRef}
        id={id}
        type="search"
        name="q"
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        placeholder={placeholder ?? t.searchPlaceholder}
        className="min-w-0 flex-1 bg-transparent px-3.5 text-[0.9375rem] text-ink outline-none placeholder:text-ink-subtle"
      />
      {query && (
        <button
          type="button"
          aria-label={t.clear}
          onClick={() => {
            setQuery("");
            inputRef.current?.focus();
          }}
          className="flex shrink-0 items-center px-2.5 text-ink-subtle hover:text-ink"
        >
          <X className="size-4" aria-hidden />
        </button>
      )}
      <button
        type="submit"
        aria-label={t.search}
        disabled={loading}
        className="inline-flex w-11 shrink-0 items-center justify-center bg-ink text-ink-inverse transition-colors hover:bg-primary disabled:cursor-progress disabled:opacity-70 disabled:hover:bg-ink"
      >
        {loading ? <Loader2 className="size-[18px] animate-dsm-spin" aria-hidden /> : <Search className="size-[18px]" aria-hidden />}
      </button>
    </form>
  );
}
