/** Shared popup styles for Menu-based components (theme toggle, language switcher, dropdowns). */
export const menuPositionerClass = "z-50 outline-none";

export const menuPopupClass =
  "min-w-44 origin-(--transform-origin) rounded-lg border border-line bg-surface p-1.5 text-ink shadow-lg outline-none " +
  "transition-[opacity,transform] duration-(--dsm-duration-fast) ease-dsm-out " +
  "data-starting-style:scale-[0.97] data-starting-style:opacity-0 data-ending-style:scale-[0.97] data-ending-style:opacity-0";

export const menuItemClass =
  "flex cursor-default select-none items-center gap-2.5 rounded-md px-2.5 py-2 text-sm leading-none text-ink outline-none " +
  "data-highlighted:bg-surface-muted data-disabled:opacity-50 [&_svg]:shrink-0";

export const menuSeparatorClass = "mx-1 my-1.5 h-px bg-line";

export const menuGroupLabelClass = "px-2.5 pb-1 pt-2 text-2xs font-semibold uppercase tracking-wider text-ink-subtle";
