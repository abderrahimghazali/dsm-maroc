import { registry, type RegistryEntry } from "./registry.generated";
import type { ComponentCategory } from "./types";

export type { RegistryEntry };

export function getAllComponents(): RegistryEntry[] {
  return [...registry].sort((a, b) => a.meta.title.localeCompare(b.meta.title, "fr"));
}

export function getComponent(slug: string): RegistryEntry | undefined {
  return registry.find((r) => r.meta.slug === slug);
}

export function getByCategory(): Record<ComponentCategory, RegistryEntry[]> {
  const groups = {} as Record<ComponentCategory, RegistryEntry[]>;
  for (const entry of getAllComponents()) {
    (groups[entry.meta.category] ??= []).push(entry);
  }
  return groups;
}
