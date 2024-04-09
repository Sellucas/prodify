"use client";

import { useState } from "react";

import { CardBoardProps, ColumnProps } from "@/types";
import { CardBoard } from "@/app/(protected)/_components/card-board";
import { DropIndicator } from "./drop-indicator";

export const Column = ({
  title,
  color,
  column,
  cards,
  setCards,
}: ColumnProps) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: DragEvent, card: CardBoardProps) => {
    e.dataTransfer?.setData("cardId", card.id);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  const highlightIndicator = (e: DragEvent) => {
    const indicators = getIndicators();
    clearHighlights(indicators as HTMLElement[]);
    const el = getNearestIndicator(e, indicators as HTMLElement[]);
    el.element.style.opacity = "1";
  };

  const clearHighlights = (els: HTMLElement[]) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]) => {
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
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    setActive(false);
    clearHighlights();
  };

  const handleDragEnd = (e: DragEvent) => {
    setActive(false);
    clearHighlights();

    const cardId = e.dataTransfer?.getData("cardId");
    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;

      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);

        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-72 shrink-0 rounded-t">
      <div
        className={`flex items-center gap-2 border-solid border-b-4 pb-1 border-${color}-600`}
      >
        <h3 className="font-semibold text-gray-700">{title}</h3>
        <span className="rounded-full text-sm bg-neutral-200 h-5 w-5 flex items-center justify-center font-semibold">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        className={`flex flex-col h-full w-full p-2 rounded-lg transition-colors ${
          active ? `bg-gray-600/10` : `bg-white`
        }`}
      >
        {filteredCards.map((card) => {
          return (
            <CardBoard
              key={card.id}
              {...card}
              handleDragStart={handleDragStart}
            />
          );
        })}
        <DropIndicator beforeId="-1" column={column} />
      </div>
    </div>
  );
};
