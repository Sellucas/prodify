import { cn } from "@/lib/utils";
import { ICardTagProps } from "@/types";

export const CardTag = ({ option, className }: ICardTagProps) => {
  return (
    <span
      className={cn(
        "flex flex-row items-center text-sm px-2 py-1 rounded font-medium",
        className
      )}
    >
      {option}
    </span>
  );
};
