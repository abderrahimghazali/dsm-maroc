import { Skeleton, SkeletonGroup } from "@/dsm/components/skeleton";

export default function SkeletonVariants() {
  return (
    <SkeletonGroup className="flex max-w-sm items-center gap-4">
      <Skeleton variant="circle" className="size-12" />
      <div className="flex-1 space-y-2">
        <Skeleton variant="rect" className="h-3.5 w-2/3" />
        <Skeleton variant="rect" className="h-3 w-1/2" />
      </div>
    </SkeletonGroup>
  );
}
