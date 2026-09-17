import { SearchBar } from "@/dsm/components/search-bar";

export default function SearchBarSizes() {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-4">
      <SearchBar size="md" placeholder="Taille moyenne — md" />
      <SearchBar size="lg" placeholder="Rechercher un service public…" />
    </div>
  );
}
