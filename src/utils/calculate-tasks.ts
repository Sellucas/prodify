import { ICard } from "@/types";

export const calculateProgress = (
  cards: Record<string, ICard[]>,
  boardId: string
): number => {
  const boardCards = cards[boardId] || [];
  const completedTasks = boardCards.filter(
    (card) => card.status === "done"
  ).length;
  const progress = (completedTasks / boardCards.length) * 100;
  return Math.round(progress);
};

export const calculateTotalTasks = (
  cards: Record<string, ICard[]>,
  boardId: string
): number => {
  const boardCards = cards[boardId] || [];
  return boardCards.length;
};
