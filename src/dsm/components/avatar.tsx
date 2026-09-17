"use client";

import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { Children, cloneElement, isValidElement, type ComponentProps, type ReactElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/dsm/lib/cn";
import { User } from "@/dsm/icons";

const avatarVariants = cva(
  "relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-surface-muted font-semibold text-ink-muted",
  {
    variants: {
      size: {
        xs: "size-6 text-2xs",
        sm: "size-8 text-xs",
        md: "size-10 text-sm",
        lg: "size-12 text-base",
        xl: "size-16 text-lg",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md",
      },
    },
    defaultVariants: { size: "md", shape: "circle" },
  },
);

const palette = ["vert", "bleu", "safran", "rouge"] as const;
const paletteClass: Record<(typeof palette)[number], string> = {
  vert: "bg-vert-soft text-vert-soft-fg",
  bleu: "bg-bleu-soft text-bleu-soft-fg",
  safran: "bg-safran-soft text-safran-soft-fg",
  rouge: "bg-rouge-soft text-rouge-soft-fg",
};

function hashName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  return palette[hash % palette.length];
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export type AvatarProps = ComponentProps<typeof BaseAvatar.Root> &
  VariantProps<typeof avatarVariants> & {
    src?: string;
    alt?: string;
    /** Used to derive initials and a deterministic soft colour when no image loads. */
    name?: string;
  };

export function Avatar({ className, size, shape, src, alt, name, ...props }: AvatarProps) {
  const initials = name ? getInitials(name) : undefined;
  const tone = name ? paletteClass[hashName(name)] : undefined;
  return (
    <BaseAvatar.Root className={cn(avatarVariants({ size, shape }), tone, className)} {...props}>
      {src && <BaseAvatar.Image src={src} alt={alt ?? name ?? ""} className="size-full object-cover" />}
      <BaseAvatar.Fallback delay={src ? 400 : 0} className="flex size-full items-center justify-center">
        {initials || <User aria-hidden className="size-[55%]" />}
      </BaseAvatar.Fallback>
    </BaseAvatar.Root>
  );
}

export type AvatarGroupProps = ComponentProps<"div"> & {
  /** Maximum avatars shown before collapsing the rest into a "+N" badge. */
  max?: number;
  size?: VariantProps<typeof avatarVariants>["size"];
  children: ReactElement<AvatarProps> | ReactElement<AvatarProps>[];
};

export function AvatarGroup({ max, size = "md", children, className, ...props }: AvatarGroupProps) {
  const items = Children.toArray(children).filter(isValidElement) as ReactElement<AvatarProps>[];
  const visible = max ? items.slice(0, max) : items;
  const overflow = max ? items.length - max : 0;

  return (
    <div className={cn("flex items-center", className)} {...props}>
      {visible.map((child, i) =>
        cloneElement(child, {
          key: child.key ?? i,
          size,
          className: cn("ring-2 ring-surface", i > 0 && "-ms-2.5", child.props.className),
          style: { zIndex: visible.length - i, ...child.props.style },
        }),
      )}
      {overflow > 0 && (
        <span
          className={cn(avatarVariants({ size, shape: "circle" }), "-ms-2.5 bg-surface-sunken text-ink-muted ring-2 ring-surface")}
          style={{ zIndex: 0 }}
        >
          +{overflow}
        </span>
      )}
    </div>
  );
}
