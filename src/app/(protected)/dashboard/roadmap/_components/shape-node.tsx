import { memo } from "react";
import { cn } from "@/lib/utils";
import { Handle, Position } from "@xyflow/react";
import { CustomNodeProps, ShapeType } from "@/types";

const shapeClasses: Record<ShapeType, string> = {
  rectangle:
    "flex h-[45px] w-[90px] items-center justify-center border-2 px-4 border-blue-600 bg-blue-500",
  parallelogram:
    "flex h-[45px] w-[90px] skew-x-[20deg] items-center justify-center border-2 px-4 border-orange-500 bg-orange-400",
  circle:
    "flex size-[90px] items-center justify-center text-center rounded-full border-2 p-4 border-green-500 bg-green-400",
  ellipse:
    "flex h-[45px] w-[90px] rounded-[50%_/_50%] items-center justify-center border-2 px-4 border-purple-500 bg-purple-400",
};

function ShapeNode({ data, shape }: CustomNodeProps) {
  const shapeClass = shapeClasses[shape];

  return (
    <div className={cn(shapeClass)}>
      <div className={shape === "parallelogram" ? "-skew-x-[20deg]" : ""}>
        <label
          htmlFor="text"
          className="text-xs font-medium leading-none tracking-tight text-white/90"
        >
          {data.label}
        </label>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        id="a"
        className="size-2 bg-white"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        className="size-2 bg-white"
      />
    </div>
  );
}

export default memo(ShapeNode);
