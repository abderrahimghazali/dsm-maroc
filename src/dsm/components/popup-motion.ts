/**
 * Shared enter/exit motion for anchored popups (tooltip, popover):
 * fade + zoom to 95 % + a 4px slide from the trigger's side, driven by Base UI's
 * `data-starting-style` / `data-ending-style` / `data-side` attributes.
 */
export const popupMotionClass =
  "origin-(--transform-origin) transition-[opacity,translate,scale] duration-(--dsm-duration-fast) ease-dsm-out data-instant:transition-none " +
  "data-starting-style:opacity-0 data-starting-style:scale-95 data-ending-style:opacity-0 data-ending-style:scale-95 " +
  "data-starting-style:data-[side=top]:translate-y-1 data-starting-style:data-[side=bottom]:-translate-y-1 " +
  "data-starting-style:data-[side=left]:translate-x-1 data-starting-style:data-[side=right]:-translate-x-1 " +
  "data-starting-style:data-[side=inline-start]:translate-x-1 data-starting-style:data-[side=inline-end]:-translate-x-1 " +
  "rtl:data-starting-style:data-[side=inline-start]:-translate-x-1 rtl:data-starting-style:data-[side=inline-end]:translate-x-1";
