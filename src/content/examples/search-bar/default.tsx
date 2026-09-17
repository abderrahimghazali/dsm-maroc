import { SearchBar } from "@/dsm/components/search-bar";

export default function SearchBarDefault() {
  return (
    <div className="mx-auto max-w-md">
      <SearchBar defaultValue="passeport" placeholder="Rechercher une démarche, un document…" />
    </div>
  );
}
