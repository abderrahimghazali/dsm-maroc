import { Skeleton, SkeletonGroup } from "@/dsm/components/skeleton";

export default function SkeletonComposed() {
  return (
    <SkeletonGroup className="max-w-sm rounded-lg border border-line bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 space-y-2">
          <Skeleton variant="rect" className="h-2.5 w-24 rounded-sm" />
          <Skeleton variant="rect" className="h-4 w-4/5" />
        </div>
        <Skeleton variant="rect" className="h-6 w-16 rounded-full" />
      </div>
      <Skeleton variant="text" lines={2} className="mt-4" />
      <div className="mt-4 flex gap-2">
        <Skeleton variant="rect" className="h-9 w-28 rounded-md" />
        <Skeleton variant="rect" className="h-9 w-24 rounded-md" />
      </div>
    </SkeletonGroup>
  );
}
