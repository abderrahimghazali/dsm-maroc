"use client";

import { useState } from "react";
import { SearchBar } from "@/dsm/components/search-bar";

export default function SearchBarLoading() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="mx-auto max-w-md">
      <SearchBar
        defaultValue="attestation de résidence"
        loading={loading}
        onSearch={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 1500);
        }}
      />
    </div>
  );
}
