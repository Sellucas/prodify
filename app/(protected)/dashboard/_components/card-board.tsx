import { History, Link, MessageCircle, Tag } from "lucide-react";
import { motion } from "framer-motion";

import { CardBoardProps } from "@/types";
import { CardTag } from "@/app/(protected)/dashboard/_components/card-tag";
import { DropIndicator } from "./drop-indicator";

export const CardBoard = ({
  id,
  title,
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
        className="cursor-grab h-44 rounded-xl border-2 border-muted bg-foreground2 active:cursor-grabbing"
      >
        <div className="px-3 py-2 text-xs text-muted-foreground/75">
          Priority: <span className="text-foreground">High</span>
        </div>
        <hr className="border-muted" />
        <div className="relative p-3">
          <h1 className="first-letter:capitalize tracking-wide">{title}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Tag className="w-4 text-muted-foreground/75" absoluteStrokeWidth />
            <CardTag className="bg-yellow-700/15 text-yellow-500">Saas</CardTag>
            <CardTag className="bg-cyan-700/15 text-cyan-500">Web</CardTag>
          </div>
          <div className="flex items-center justify-between gap-2 mt-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs text-muted-foreground/75 cursor-pointer hover:text-white">
                <MessageCircle className="w-3" absoluteStrokeWidth />4
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground/75 cursor-pointer hover:text-white">
                <Link className="w-3" absoluteStrokeWidth />3
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground/75 cursor-pointer hover:text-white">
              <History className="w-3" absoluteStrokeWidth /> 4d
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
