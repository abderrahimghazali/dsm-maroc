import { Pagination } from "@/dsm/components/pagination";

export default function PaginationDefault() {
  return <Pagination page={5} pageCount={24} hrefFor="#page-{page}" />;
}
