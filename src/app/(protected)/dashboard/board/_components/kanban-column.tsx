"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FaEllipsisVertical } from "react-icons/fa6";

import { ICard, IColumnProps } from "@/types";
import { Database } from "@/lib/types/supabase";
import { DropIndicator } from "./drop-indicator";
import { CardBoard } from "@/app/(protected)/dashboard/board/_components/card-board";
import {
  updateCardPositions,
  updateCardStatus,
} from "@/app/(protected)/dashboard/board/[slug]/actions";

export const KanbanColumn = ({
  title,
  color,
  status,
  cards,
  setCards,
}: IColumnProps) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, card: ICard) => {
    e.dataTransfer?.setData("cardId", card.card_id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  const highlightIndicator = (e: React.DragEvent<HTMLDivElement>) => {
    const indicators = getIndicators();
    clearHighlights(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = "1";
  };

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators();
    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const getNearestIndicator = (
    e: React.DragEvent<HTMLDivElement>,
    indicators: HTMLElement[],
  ) => {
    const DISTANCE_OFFSET = 50;
    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);
        if (offset < 0 && offset > closest.offset) {
          return {
            element: child,
            offset: offset,
          };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      },
    );
    return el;
  };

  const getIndicators = (): HTMLElement[] => {
    return Array.from(
      document.querySelectorAll(`[data-column="${status}"]`),
    ) as HTMLElement[];
  };

  const handleDragLeave = () => {
    setActive(false);
    clearHighlights(getIndicators());
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    setActive(false);
    clearHighlights(getIndicators());

    const cardId = e.dataTransfer?.getData("cardId");
    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element?.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];
      let cardToTransfer = copy.find((c) => c.card_id === cardId);
      if (!cardToTransfer) return;

      if (["backlog", "todo", "doing", "reviewing", "done"].includes(status)) {
        try {
          await updateCardStatus(
            cardId,
            status as Database["public"]["Enums"]["status"],
          );

          cardToTransfer = {
            ...cardToTransfer,
            status: status as Database["public"]["Enums"]["status"],
          };
          copy = copy.filter((c) => c.card_id !== cardId);
          const moveToBack = before === "-1";
          if (moveToBack) {
            copy.push(cardToTransfer);
          } else {
            const insertAtIndex = copy.findIndex((el) => el.card_id === before);
            if (insertAtIndex === undefined) return;
            copy.splice(insertAtIndex, 0, cardToTransfer);
          }

          copy = copy.map((card, index) => ({
            ...card,
            position: index,
          }));

          setCards(copy);

          await updateCardPositions(
            copy.map((card) => ({
              card_id: card.card_id,
              position: card.position,
            })),
          );
        } catch (error) {
          console.error("Failed to update card status:", error);
        }
      } else {
        console.error("Status inválido:", status);
      }
    }
  };

  const filteredCards = cards
    .filter((c) => c.status === status)
    .sort((a, b) => a.position - b.position);

  return (
    <div
      className={`flex min-h-[70vh] w-72 shrink-0 flex-col rounded-xl px-3 py-4 transition-colors ${
        active ? `bg-muted` : `bg-background2`
      }`}
    >
      <div className="relative flex items-center gap-2">
        <div className={`bg-${color}-500 h-full w-1 rounded-xl`} />
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-muted-foreground">{title}</h3>
          <div className="flex items-center justify-center rounded-[4px] bg-foreground2 px-2 text-sm font-semibold text-muted-foreground">
            {filteredCards.length}
          </div>
        </div>
        <div className="absolute right-0 flex items-center gap-2">
          <Plus className="w-5 cursor-pointer text-muted-foreground hover:text-muted-foreground/50" />
          <FaEllipsisVertical className="w-4 cursor-pointer text-muted-foreground hover:text-muted-foreground/50" />
        </div>
      </div>
      <div
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        className="mt-2 grow"
      >
        {filteredCards.map((card) => {
          return (
            <CardBoard
              key={card.card_id}
              title={card.title}
              id={card.card_id}
              status={card.status}
              card={card}
              handleDragStart={handleDragStart}
            />
          );
        })}
        <DropIndicator beforeId="-1" column={status} />
      </div>
    </div>
  );
};
