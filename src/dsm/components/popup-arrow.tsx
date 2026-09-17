import { cn } from "@/dsm/lib/cn";

/**
 * Pointer for anchored popups (tooltip, popover). Rendered inside Base UI's `*.Arrow`,
 * which positions the element; these classes flip it per `data-side`.
 */
export const popupArrowClass =
  "absolute data-[side=bottom]:top-[-8px] data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180 " +
  "data-[side=left]:right-[-12px] data-[side=left]:rotate-90 data-[side=right]:left-[-12px] data-[side=right]:-rotate-90 " +
  "data-[side=inline-start]:right-[-12px] data-[side=inline-start]:rotate-90 data-[side=inline-end]:left-[-12px] data-[side=inline-end]:-rotate-90 " +
  "rtl:data-[side=inline-start]:right-auto rtl:data-[side=inline-start]:left-[-12px] rtl:data-[side=inline-start]:-rotate-90 " +
  "rtl:data-[side=inline-end]:left-auto rtl:data-[side=inline-end]:right-[-12px] rtl:data-[side=inline-end]:rotate-90";

export function PopupArrow({ fill = "fill-surface", edge = "fill-line", className }: { fill?: string; edge?: string; className?: string }) {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden className={cn("block", className)}>
      {/* body — same colour as the popup */}
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V12H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className={fill}
      />
      {/* 1px edge along the two slanted sides */}
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className={edge}
      />
    </svg>
  );
}
