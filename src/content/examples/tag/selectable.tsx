"use client";

import { useState } from "react";
import { Tag, TagGroup } from "@/dsm/components/tag";

const categories = ["État civil", "Identité", "Véhicules", "Santé", "Impôts"];

export default function TagSelectable() {
  const [active, setActive] = useState<string[]>(["Identité"]);

  return (
    <TagGroup>
      {categories.map((label) => (
        <Tag
          key={label}
          selectable
          pressed={active.includes(label)}
          onPressedChange={(pressed) =>
            setActive((prev) => (pressed ? [...prev, label] : prev.filter((l) => l !== label)))
          }
        >
          {label}
        </Tag>
      ))}
    </TagGroup>
  );
}
