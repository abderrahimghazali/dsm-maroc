"use client";

import type { ComponentProps } from "react";
import { Select as BaseSelect } from "@base-ui/react/select";
import { cn } from "@/dsm/lib/cn";
import { Check, ChevronDown, ChevronsUpDown } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";
import type { ControlSize } from "./input";
import { menuPopupClass, menuPositionerClass } from "./menu-styles";
import { useFieldControl } from "./field";

export type SelectOption = {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
};

export type SelectGroup = {
  label: string;
  options: SelectOption[];
};

const sizeClasses: Record<ControlSize, string> = {
  sm: "h-9 text-sm px-3",
  md: "h-11 text-[0.9375rem] px-3.5",
  lg: "h-13 text-base px-3.5",
};

export type SelectProps = {
  options?: SelectOption[];
  groups?: SelectGroup[];
  placeholder?: string;
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
  name?: string;
  size?: ControlSize;
  invalid?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
  "aria-describedby"?: string;
};

function renderOption(option: SelectOption) {
  return (
    <BaseSelect.Item key={option.value} value={option.value} disabled={option.disabled} className={cn(itemClass)}>
      <span className="flex min-w-0 flex-1 flex-col">
        <BaseSelect.ItemText className="truncate">{option.label}</BaseSelect.ItemText>
        {option.description && <span className="truncate text-xs text-ink-subtle">{option.description}</span>}
      </span>
      <BaseSelect.ItemIndicator className="shrink-0">
        <Check className="size-4 text-primary" aria-hidden />
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  );
}

const itemClass =
  "flex cursor-default select-none items-center gap-2.5 rounded-md px-2.5 py-2 text-sm leading-snug text-ink outline-none " +
  "data-highlighted:bg-surface-muted data-disabled:opacity-50";

/** Base UI Select styled as a DSM control, with optional grouped options and descriptions. */
export function Select({
  options,
  groups,
  placeholder,
  value,
  defaultValue,
  onValueChange,
  name,
  size = "md",
  invalid,
  disabled,
  className,
  id,
  "aria-describedby": ariaDescribedby,
}: SelectProps) {
  const t = useT();
  const field = useFieldControl({ id, invalid, "aria-describedby": ariaDescribedby });
  const flatItems = (groups ? groups.flatMap((g) => g.options) : (options ?? [])).map((o) => ({
    label: o.label,
    value: o.value,
  }));

  return (
    <BaseSelect.Root
      items={flatItems}
      value={value}
      defaultValue={defaultValue}
      onValueChange={(v) => onValueChange?.(v as string | null)}
      name={name}
      disabled={disabled}
      id={field.id}
    >
      <BaseSelect.Trigger
        aria-invalid={field["aria-invalid"]}
        aria-describedby={field["aria-describedby"]}
        className={cn(
          "flex w-full items-center justify-between gap-2 rounded-md bg-surface text-start text-ink ring-1 ring-inset ring-line-strong transition-shadow duration-(--dsm-duration-fast) ease-dsm",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
          !disabled && (field.invalid ? "hover:ring-error" : "hover:ring-ink"),
          field.invalid && "ring-error",
          disabled && "cursor-not-allowed bg-surface-muted opacity-60",
          sizeClasses[size],
          className,
        )}
      >
        <BaseSelect.Value placeholder={placeholder ?? t.selectPlaceholder} className="truncate data-placeholder:text-ink-subtle" />
        <ChevronsUpDown aria-hidden className="size-4 shrink-0 text-ink-subtle" />
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner className={menuPositionerClass} sideOffset={6}>
          <BaseSelect.Popup className={cn(menuPopupClass, "w-(--anchor-width) max-h-(--available-height) overflow-y-auto")}>
            {groups
              ? groups.map((group) => (
                  <BaseSelect.Group key={group.label}>
                    <BaseSelect.GroupLabel className="px-2.5 pb-1 pt-2 text-2xs font-semibold uppercase tracking-wider text-ink-subtle">
                      {group.label}
                    </BaseSelect.GroupLabel>
                    {group.options.map(renderOption)}
                  </BaseSelect.Group>
                ))
              : options?.map(renderOption)}
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}

export type NativeSelectOption = { value: string; label: string; disabled?: boolean };

export type NativeSelectProps = Omit<ComponentProps<"select">, "size"> & {
  options: NativeSelectOption[];
  size?: ControlSize;
  invalid?: boolean;
  placeholder?: string;
};

/** Plain `<select>` for simple cases that don't need rich options or descriptions. */
export function NativeSelect({
  className,
  options,
  size = "md",
  invalid,
  disabled,
  placeholder,
  id,
  value,
  defaultValue,
  "aria-describedby": ariaDescribedby,
  ...props
}: NativeSelectProps) {
  const resolvedDefaultValue = value === undefined ? (defaultValue ?? (placeholder ? "" : undefined)) : undefined;
  const field = useFieldControl({ id, invalid, "aria-describedby": ariaDescribedby });
  return (
    <div
      className={cn(
        "relative flex items-stretch rounded-md bg-surface text-ink ring-1 ring-inset ring-line-strong transition-shadow duration-(--dsm-duration-fast) ease-dsm",
        "has-[select:focus-visible]:ring-2 has-[select:focus-visible]:ring-focus",
        !disabled && (field.invalid ? "hover:ring-error" : "hover:ring-ink"),
        field.invalid && "ring-error",
        disabled && "bg-surface-muted opacity-60",
        sizeClasses[size],
        className,
      )}
    >
      <select
        id={field.id}
        disabled={disabled}
        aria-invalid={field["aria-invalid"]}
        aria-describedby={field["aria-describedby"]}
        value={value}
        defaultValue={resolvedDefaultValue}
        className="w-full min-w-0 flex-1 appearance-none bg-transparent pe-6 text-inherit outline-none disabled:cursor-not-allowed"
        {...props}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((o) => (
          <option key={o.value} value={o.value} disabled={o.disabled}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown aria-hidden className="pointer-events-none absolute end-3 top-1/2 size-4 -translate-y-1/2 text-ink-subtle" />
    </div>
  );
}
