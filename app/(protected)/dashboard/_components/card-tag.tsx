import { cn } from "@/lib/utils";

const tagClasses: { [key: string]: string } = {
  code: "bg-yellow-700/15 text-yellow-500",
  design: "bg-cyan-700/15 text-cyan-500",
  "code review": "bg-blue-700/15 text-blue-500",
  research: "bg-purple-700/15 text-purple-500",
  bug: "bg-pink-700/15 text-pink-500",
  enchantment: "bg-red-700/15 text-red-500",
  documentation: "bg-green-700/15 text-green-500",
  testing: "bg-gray-700/15 text-gray-500",
  discussion: "bg-orange-700/15 text-orange-500",
  implementation: "bg-lime-700/15 text-lime-500",
  feedback: "bg-sky-700/15 text-sky-500",
  refactoring: "bg-emerald-700/15 text-emerald-500",
};

type CardTagProps = {
  name: string;
};

export const CardTag = ({ name }: CardTagProps) => {
  return (
    <span
      className={cn(
        "flex flex-row items-center text-xs px-2 py-1 rounded-full capitalize",
        name ? tagClasses[name] : null
      )}
    >
      {name}
    </span>
  );
};
