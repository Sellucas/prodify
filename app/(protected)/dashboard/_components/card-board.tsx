import { motion } from "framer-motion";
import { formatDistanceToNow, parseISO } from "date-fns";
import { History, MessageCircle, Tag } from "lucide-react";

import { CardBoardProps } from "@/types";
import { CardTag } from "@/app/(protected)/dashboard/_components/card-tag";
import CardUpdateForm from "@/app/(protected)/dashboard/_components/card-update-form";
import { DropIndicator } from "@/app/(protected)/dashboard/_components/drop-indicator";
import { DialogDeleteCard } from "@/app/(protected)/dashboard/_components/card-delete-dialog";

export const CardBoard = ({
  id,
  title,
  status,
  card,
  tags,
  handleDragStart,
}: CardBoardProps) => {
  const timeAgo = formatDistanceToNow(parseISO(card.created_at));

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
        <div className="flex justify-between px-3 items-center text-xs text-muted-foreground/75">
          <p>
            Priority: <span className="text-foreground">High</span>
          </p>
          <p>
            <CardUpdateForm card={card} />
          </p>
        </div>
        <hr className="border-muted" />
        <div className="relative p-3">
          <h1 className="first-letter:capitalize tracking-wide">
            {title.length > 26 ? `${title.slice(0, 26)}...` : title}
          </h1>
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
              <DialogDeleteCard card={card} />
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground/75">
              <History className="w-3" absoluteStrokeWidth /> {timeAgo}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
