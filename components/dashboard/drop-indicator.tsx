import { DropIndicatorProps } from "@/types";

export const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-1 h-1 w-full rounded-full bg-blue-600 opacity-0"
    />
  );
};
