import { BlockMark } from "@/dsm/components/block-mark";

export default function BlockMarkSizes() {
  return (
    <div className="flex flex-wrap items-end gap-10">
      <BlockMark size="sm" />
      <BlockMark size="md" />
      <BlockMark size="lg" />
    </div>
  );
}
