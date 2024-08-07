import { motion } from "framer-motion";
import { formatDistanceToNow, parseISO } from "date-fns";
import { History, MessageCircle, Tag } from "lucide-react";

import { CardBoardProps } from "@/types";
import { CardTag } from "@/app/(protected)/dashboard/board/_components/card-tag";
import CardUpdateForm from "@/app/(protected)/dashboard/board/_components/card-update-form";
import { DropIndicator } from "@/app/(protected)/dashboard/board/_components/drop-indicator";
import { DialogDeleteCard } from "@/app/(protected)/dashboard/board/_components/card-delete-dialog";

export const CardBoard = ({
  id,
  title,
  status,
  card,
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
            card,
          )
        }
        className="h-44 cursor-grab rounded-xl border-2 border-muted bg-foreground2 active:cursor-grabbing"
      >
        <div className="flex items-center justify-between px-3 py-1 text-xs text-muted-foreground/75">
          <p>
            Priority:{" "}
            <span className="capitalize text-foreground">{card.priority}</span>
          </p>
          <p>
            <CardUpdateForm card={card} />
          </p>
        </div>
        <hr className="border-muted" />
        <div className="relative h-32 p-3">
          <h1 className="tracking-wide first-letter:capitalize">
            {title.length > 26 ? `${title.slice(0, 26)}...` : title}
          </h1>
          <div className="mt-4 flex items-center gap-2">
            <Tag className="w-4 text-muted-foreground/75" absoluteStrokeWidth />
            <CardTag name={card.tag} />
          </div>
          <div className="absolute bottom-0 flex w-60 items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="flex cursor-not-allowed items-center gap-1 text-xs text-muted-foreground/75 hover:text-white">
                <MessageCircle className="w-3" absoluteStrokeWidth />
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
