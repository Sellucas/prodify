import { FaEllipsisVertical } from "react-icons/fa6";
import { motion } from "framer-motion";

import { CardBoardProps } from "@/types";
import { CardTag } from "@/app/(protected)/dashboard/_components/card-tag";
import { DropIndicator } from "./drop-indicator";

export const CardBoard = ({
  id,
  title,
  description,
  status,
  card,
  tags,
  handleDragStart,
}: CardBoardProps) => {
  return (
    <>
      <DropIndicator beforeId={card.card_id} column={status} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(event) =>
          handleDragStart(
            event as unknown as React.DragEvent<HTMLDivElement>,
            card
          )
        }
        className="cursor-grab h-32 border-y drop-shadow-md rounded-lg border-2 border-neutral-200 bg-white p-3 active:cursor-grabbing"
      >
        <div className="flex items-center justify-between my-1">
          <h1 className="font-semibold">{title}</h1>
          <FaEllipsisVertical className="cursor-pointer" />
        </div>
        <p className="text-sm py-1">{description}</p>
        <div className="flex gap-2 my-3">
          {tags &&
            tags.map((tag, index) => (
              <CardTag
                key={index}
                option={tag.option}
                className={tag.className}
              />
            ))}
        </div>
      </motion.div>
    </>
  );
};
