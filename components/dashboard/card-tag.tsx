import { cn } from "@/lib/utils";
import { CardTagProps } from "@/types";

export const CardTag = ({ option, className }: CardTagProps) => {
  return (
    <span className={cn("text-sm px-2 py-1 rounded", className)}>{option}</span>
  );
};
