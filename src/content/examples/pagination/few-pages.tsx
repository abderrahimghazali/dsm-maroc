import { Pagination } from "@/dsm/components/pagination";

export default function PaginationFewPages() {
  return <Pagination page={2} pageCount={4} hrefFor="#page-{page}" />;
}
