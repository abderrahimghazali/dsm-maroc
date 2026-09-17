"use client";

import { useState } from "react";
import { Drawer } from "@/dsm/components/drawer";
import { Button } from "@/dsm/components/button";
import { Menu } from "@/dsm/icons";

const links = ["État civil", "Identité & passeport", "Véhicules & permis", "Impôts & taxes", "Santé"];

export default function DrawerStartSide() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer
      side="start"
      open={open}
      onOpenChange={setOpen}
      trigger={<Button variant="secondary" iconStart={<Menu />}>Menu des démarches</Button>}
      title="Démarches"
    >
      <ul className="-mx-1 flex flex-col">
        {links.map((label) => (
          <li key={label}>
            <a href="#" className="block rounded-md px-3 py-2.5 text-sm font-medium text-ink no-underline hover:bg-surface-muted">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </Drawer>
  );
}
