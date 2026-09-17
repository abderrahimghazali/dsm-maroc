import { Skeleton, SkeletonGroup } from "@/dsm/components/skeleton";

export default function SkeletonDefault() {
  return (
    <SkeletonGroup className="max-w-sm">
      <Skeleton variant="text" lines={3} />
    </SkeletonGroup>
  );
}
