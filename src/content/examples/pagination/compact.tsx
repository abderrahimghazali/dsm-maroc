import { Pagination } from "@/dsm/components/pagination";

export default function PaginationCompact() {
  return (
    <div className="max-w-xs">
      <Pagination variant="compact" page={3} pageCount={12} hrefFor="#page-{page}" />
    </div>
  );
}
