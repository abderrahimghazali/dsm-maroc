"use client";

import { useState } from "react";
import { Drawer } from "@/dsm/components/drawer";
import { Button } from "@/dsm/components/button";
import { Bell, CircleCheck, TriangleAlert } from "@/dsm/icons";

export default function DrawerDefault() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      trigger={<Button variant="secondary" iconStart={<Bell />}>Notifications</Button>}
      title="Notifications"
    >
      <ul className="space-y-3">
        <li className="flex gap-3 rounded-md border border-line p-3">
          <CircleCheck className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
          <p className="text-sm text-ink">Votre carte grise a été validée et sera livrée sous 5 jours.</p>
        </li>
        <li className="flex gap-3 rounded-md border border-line p-3">
          <TriangleAlert className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden />
          <p className="text-sm text-ink">Votre attestation CNSS expire dans 10 jours.</p>
        </li>
      </ul>
    </Drawer>
  );
}
