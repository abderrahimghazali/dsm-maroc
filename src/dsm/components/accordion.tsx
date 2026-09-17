"use client";

import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { createContext, useContext, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { ChevronDown } from "@/dsm/icons";

type AccordionVariant = "default" | "separated";

const AccordionVariantContext = createContext<AccordionVariant>("default");

export type AccordionProps = ComponentProps<typeof BaseAccordion.Root> & {
  variant?: AccordionVariant;
};

/** A set of collapsible panels. `variant="default"` renders divided rows; `"separated"` renders spaced bordered cards. */
export function Accordion({ className, variant = "default", children, ...props }: AccordionProps) {
  return (
    <AccordionVariantContext.Provider value={variant}>
      <BaseAccordion.Root
        className={cn("flex flex-col", variant === "default" ? "border-t border-line" : "gap-3", className)}
        {...props}
      >
        {children}
      </BaseAccordion.Root>
    </AccordionVariantContext.Provider>
  );
}

export type AccordionItemProps = ComponentProps<typeof BaseAccordion.Item> & {
  title: ReactNode;
  children: ReactNode;
};

export function AccordionItem({ className, title, children, ...props }: AccordionItemProps) {
  const variant = useContext(AccordionVariantContext);
  return (
    <BaseAccordion.Item
      className={cn(
        variant === "default" ? "border-b border-line" : "overflow-hidden rounded-lg border border-line bg-surface",
        className,
      )}
      {...props}
    >
      <BaseAccordion.Header>
        <BaseAccordion.Trigger
          className={cn(
            "group flex w-full items-center justify-between gap-4 py-4 text-start text-[0.9375rem] font-medium text-ink",
            "transition-colors duration-(--dsm-duration-fast) ease-dsm hover:text-primary",
            "data-disabled:pointer-events-none data-disabled:opacity-50",
            variant === "separated" && "px-5",
          )}
        >
          <span className="text-balance">{title}</span>
          <ChevronDown
            aria-hidden
            className="size-5 shrink-0 text-ink-subtle transition-transform duration-(--dsm-duration) ease-dsm group-data-panel-open:rotate-180 group-data-panel-open:text-primary"
          />
        </BaseAccordion.Trigger>
      </BaseAccordion.Header>
      <BaseAccordion.Panel
        className={cn(
          "h-(--accordion-panel-height) overflow-hidden text-sm leading-relaxed text-ink-muted",
          "transition-[height] duration-(--dsm-duration) ease-dsm-out data-starting-style:h-0 data-ending-style:h-0",
        )}
      >
        <div className={cn("pb-4", variant === "separated" && "px-5")}>{children}</div>
      </BaseAccordion.Panel>
    </BaseAccordion.Item>
  );
}
