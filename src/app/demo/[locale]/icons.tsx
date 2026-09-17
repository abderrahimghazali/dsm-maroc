import type { ComponentType } from "react";
import type { DemoIcon } from "@/content/demo/types";
import {
  Baby, Briefcase, Building2, Car, FileText, Fingerprint, GraduationCap, HeartHandshake, Home, Landmark, Plane, Scale,
  Stethoscope, Tractor, Vote, Wallet, type IconProps,
} from "@/dsm/icons";

export const demoIcons: Record<DemoIcon, ComponentType<IconProps>> = {
  FileText, Fingerprint, Car, Wallet, Stethoscope, GraduationCap, Briefcase, Home, Baby, Scale, Tractor, Plane, Building2, Landmark, HeartHandshake, Vote,
};

export function DemoIconGlyph({ name, className }: { name: DemoIcon; className?: string }) {
  const Icon = demoIcons[name] ?? FileText;
  return <Icon className={className} aria-hidden />;
}
