import { create } from "zustand";

import { getAllBoards } from "@/actions/get-user-board";
import { getAllCards } from "@/actions/get-user-card";
import { ICard } from "@/types";

interface Board {
  board_id: string;
  title: string;
  description: string | null;
  created_at: string;
}

interface BoardState {
  boards: Board[];
  cards: Record<string, ICard[]>;
  isLoading: boolean;
  fetchBoardsAndCards: (userId: string) => Promise<void>;
}

const useBoardStore = create<BoardState>((set) => ({
  boards: [],
  cards: {},
  isLoading: true,

  fetchBoardsAndCards: async (userId: string) => {
    try {
      const fetchedBoards = await getAllBoards(userId);
      set({ boards: fetchedBoards });

      const cardPromises = fetchedBoards.map(async (board) => {
        const fetchedCards = await getAllCards(board.board_id);
        set((state) => ({
          cards: { ...state.cards, [board.board_id]: fetchedCards },
        }));
      });

      await Promise.all(cardPromises);
      set({ isLoading: false });
    } catch (error) {
      console.error("Error fetching boards and cards:", error);
      set({ isLoading: false });
    }
  },
}));

export default useBoardStore;
