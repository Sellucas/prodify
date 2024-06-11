import { cn } from "@/lib/utils";
import { ICardTagProps } from "@/types";

export const CardTag = ({ children, className }: ICardTagProps) => {
  return (
    <span
      className={cn(
        "flex flex-row items-center text-xs px-2 py-1 rounded-full",
        className
      )}
    >
      {children}
    </span>
  );
};
