"use client";

import { createContext, useContext, type ComponentProps, type ReactNode } from "react";
import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/dsm/lib/cn";

type TabsVariant = "underline" | "pills";
const TabsVariantContext = createContext<TabsVariant>("underline");

export type TabsProps = ComponentProps<typeof BaseTabs.Root>;

export function Tabs(props: TabsProps) {
  return <BaseTabs.Root {...props} />;
}

// Horizontal scroll (scrollbar hidden) so long labels never widen the page on small screens.
const listVariants = cva(
  "relative isolate flex items-center overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  {
    variants: {
      variant: {
        underline: "gap-1 border-b border-line",
        pills: "gap-1 rounded-full bg-surface-muted p-1",
      },
    },
    defaultVariants: { variant: "underline" },
  },
);

export type TabsListProps = ComponentProps<typeof BaseTabs.List> & VariantProps<typeof listVariants>;

export function TabsList({ className, variant = "underline", children, ...props }: TabsListProps) {
  return (
    <TabsVariantContext.Provider value={variant ?? "underline"}>
      <BaseTabs.List className={cn(listVariants({ variant }), className)} {...props}>
        {children}
        <BaseTabs.Indicator
          className={cn(
            "-z-1 absolute transition-[translate,width] duration-(--dsm-duration) ease-dsm-out",
            /* Physical left + measured pixel translate — Base UI's indicator geometry already
               reflects the RTL-mirrored tab order, so no logical/rtl override is needed here. */
            "left-0 translate-x-(--active-tab-left) w-(--active-tab-width)",
            variant === "pills" ? "inset-y-1 rounded-full bg-primary" : "bottom-0 h-0.5 rounded-full bg-primary",
          )}
        />
      </BaseTabs.List>
    </TabsVariantContext.Provider>
  );
}

const tabVariants = cva(
  "relative inline-flex h-11 items-center gap-2 whitespace-nowrap px-4 text-sm font-medium text-ink-muted outline-none transition-colors duration-(--dsm-duration-fast) ease-dsm select-none hover:text-ink data-active:text-ink data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        underline: "focus-visible:rounded-sm",
        pills: "h-9 rounded-full data-active:text-primary-fg focus-visible:rounded-full",
      },
    },
    defaultVariants: { variant: "underline" },
  },
);

export type TabProps = ComponentProps<typeof BaseTabs.Tab> & { icon?: ReactNode };

export function Tab({ className, icon, children, ...props }: TabProps) {
  const variant = useContext(TabsVariantContext);
  return (
    <BaseTabs.Tab className={cn(tabVariants({ variant }), className)} {...props}>
      {icon}
      {children}
    </BaseTabs.Tab>
  );
}

export type TabPanelProps = ComponentProps<typeof BaseTabs.Panel>;

export function TabPanel({ className, ...props }: TabPanelProps) {
  return (
    <BaseTabs.Panel
      className={cn("rounded-md pt-5 text-sm leading-relaxed text-ink-muted outline-none focus-visible:ring-2 focus-visible:ring-focus", className)}
      {...props}
    />
  );
}
