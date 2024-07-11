import { cn } from "@/lib/utils";
import { ICardTag } from "@/types";

const tagClasses: { [key: number]: string } = {
  1: "bg-yellow-700/15 text-yellow-500",
  2: "bg-cyan-700/15 text-cyan-500",
  3: "bg-blue-700/15 text-blue-500",
  4: "bg-purple-700/15 text-purple-500",
  5: "bg-pink-700/15 text-pink-500",
  6: "bg-red-700/15 text-red-500",
  7: "bg-green-700/15 text-green-500",
  8: "bg-gray-700/15 text-gray-500",
  9: "bg-orange-700/15 text-orange-500",
  10: "bg-lime-700/15 text-lime-500",
  11: "bg-sky-700/15 text-sky-500",
  12: "bg-emerald-700/15 text-emerald-500",
};

export const CardTag = ({ name, tag_id }: ICardTag) => {
  return (
    <span
      className={cn(
        "flex flex-row items-center text-xs px-2 py-1 rounded-full capitalize",
        tagClasses[tag_id] || null
      )}
      id={tag_id.toString()}
    >
      {name}
    </span>
  );
};
