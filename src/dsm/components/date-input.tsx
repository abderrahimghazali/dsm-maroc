"use client";

import { useState, type ChangeEvent, type ReactNode } from "react";
import { Calendar } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";
import { cn } from "@/dsm/lib/cn";
import { Field } from "./field";
import { Input } from "./input";

/** Formats raw typing into `JJ/MM/AAAA`, inserting the separators as digits arrive. */
export function formatDateMask(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 8);
  const parts = [digits.slice(0, 2), digits.slice(2, 4), digits.slice(4, 8)].filter(Boolean);
  return parts.join("/");
}

/** Parses a masked value into numbers; returns null when incomplete or impossible. */
export function parseDateMask(value: string): { day: number; month: number; year: number } | null {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (!m) return null;
  const [day, month, year] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const d = new Date(year, month - 1, day);
  if (d.getFullYear() !== year || d.getMonth() !== month - 1 || d.getDate() !== day) return null;
  return { day, month, year };
}

export type DateInputProps = {
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  optional?: boolean;
  invalid?: boolean;
  /** Masked value, e.g. "12/05/1990". */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  autoComplete?: string;
  className?: string;
};

/** Single masked date field (JJ/MM/AAAA) — simpler to type and to read than three separate boxes. */
export function DateInput({
  label,
  hint,
  error,
  required,
  optional,
  invalid,
  value,
  defaultValue = "",
  onChange,
  placeholder,
  disabled,
  name,
  id,
  autoComplete = "bday",
  className,
}: DateInputProps) {
  const t = useT();
  const [internal, setInternal] = useState(formatDateMask(defaultValue));
  const current = value !== undefined ? formatDateMask(value) : internal;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const next = formatDateMask(event.target.value);
    if (value === undefined) setInternal(next);
    onChange?.(next);
  }

  return (
    <Field label={label} hint={hint ?? t.dateHint} error={error} required={required} optional={optional} id={id} className={className}>
      <Input
        name={name}
        value={current}
        onChange={handleChange}
        placeholder={placeholder ?? t.datePlaceholder}
        inputMode="numeric"
        autoComplete={autoComplete}
        maxLength={10}
        disabled={disabled}
        invalid={invalid}
        dir="ltr"
        iconEnd={<Calendar aria-hidden />}
        className={cn("max-w-[13rem] tabular-nums", disabled && "opacity-60")}
      />
    </Field>
  );
}
