import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ICard } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCreatedAt(createdAt: string): string {
  const date = new Date(createdAt);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

export const calculateProgress = (
  cards: Record<string, ICard[]>,
  boardId: string
): number => {
  const boardCards = cards[boardId] || [];
  const totalCards = boardCards.length;
  const doneCards = boardCards.filter((card) => card.status === "done").length;
  const progress = totalCards > 0 ? (doneCards / totalCards) * 100 : 0;
  return Math.round(progress);
};

export const calculateTotalTasks = (
  cards: Record<string, ICard[]>,
  boardId: string
): number => {
  const boardCards = cards[boardId] || [];
  return boardCards.length;
};
