import { create } from "zustand";

import { ICard, IBoard } from "@/types";
import { getAllBoards } from "@/app/(protected)/dashboard/board/actions";
import { getAllCards } from "@/app/(protected)/dashboard/board/[slug]/actions";

interface BoardState {
  boards: IBoard[];
  cards: Record<string, ICard[]>;
  isLoading: boolean;
  fetchBoardsAndCards: (userId: string) => Promise<void>;
  addBoard: (board: IBoard) => void;
  updateBoard: (board: IBoard) => void;
  removeBoard: (boardId: string) => void;
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

  addBoard: (board) => set((state) => ({ boards: [...state.boards, board] })),

  updateBoard: (board) =>
    set((state) => ({
      boards: state.boards.map((b) =>
        b.board_id === board.board_id ? board : b,
      ),
    })),

  removeBoard: (boardId) =>
    set((state) => ({
      boards: state.boards.filter((b) => b.board_id !== boardId),
      cards: Object.fromEntries(
        Object.entries(state.cards).filter(([key]) => key !== boardId),
      ),
    })),
}));

export default useBoardStore;
