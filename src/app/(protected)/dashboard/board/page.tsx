"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js";

import {
  calculateProgress,
  calculateTotalTasks,
} from "@/utils/calculate-tasks";
import { IBoard } from "@/types";
import useBoardStore from "@/lib/board-store";
import { useUser } from "@/context/user-context";
import { LoadingCard } from "@/components/loading-card";
import { subscribeToBoardChanges } from "@/lib/subscribe-board-changes";
import { SearchBar } from "@/app/(protected)/dashboard/board/_components/search-bar";
import { BoardForm } from "@/app/(protected)/dashboard/board/_components/board-form";
import { BoardItem } from "@/app/(protected)/dashboard/board/_components/board-item";

const BoardPage = () => {
  const { user } = useUser();
  const {
    boards,
    cards,
    isLoading,
    fetchBoardsAndCards,
    addBoard,
    updateBoard,
    removeBoard,
  } = useBoardStore();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (user?.user_id) {
      fetchBoardsAndCards(user.user_id);

      const handleBoardChange = (
        payload: RealtimePostgresChangesPayload<IBoard>,
      ) => {
        const { eventType, new: newBoard, old: oldBoard } = payload;

        if (eventType === "INSERT" && newBoard) {
          addBoard(newBoard);
        } else if (eventType === "UPDATE" && newBoard) {
          updateBoard(newBoard);
        } else if (eventType === "DELETE") {
          const boardToDelete = oldBoard || newBoard;
          if (boardToDelete?.board_id) {
            removeBoard(boardToDelete.board_id);
          }
        }
      };

      const subscription = subscribeToBoardChanges(
        user.user_id,
        handleBoardChange,
      );

      return () => {
        subscription.unsubscribe();
      };
    }
  }, [user?.user_id, fetchBoardsAndCards, addBoard, updateBoard, removeBoard]);

  const filteredBoards = boards.filter((board) =>
    board.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container">
      <div className="flex justify-between gap-8 pt-6">
        <SearchBar onSearch={(term) => setSearchTerm(term)} />
        <BoardForm />
      </div>
      {isLoading ? (
        <LoadingCard />
      ) : (
        <div className="mt-12 flex flex-wrap gap-4">
          {filteredBoards && filteredBoards.length > 0 ? (
            filteredBoards.map(
              ({ title, description, created_at, board_id }, i) => (
                <BoardItem
                  slug={board_id}
                  title={title}
                  description={description}
                  progress={calculateProgress(cards, board_id)}
                  total_tasks={calculateTotalTasks(cards, board_id)}
                  key={i}
                  created_at={created_at}
                  boardId={board_id}
                />
              ),
            )
          ) : boards.length > 0 ? (
            <div className="mx-auto w-96 space-y-12 text-center text-xl text-gray-500">
              <h1 className="text-white">No board found!</h1>
              <div className="relative aspect-video w-full">
                <Image
                  src="/no-data.svg"
                  alt="UI Representation of Dashboard Prodify"
                  fill
                  priority
                />
              </div>
            </div>
          ) : (
            <div className="mx-auto w-96 space-y-12 text-center text-xl text-gray-500">
              <h1 className="text-white">No board created yet!</h1>
              <div className="relative aspect-video w-full">
                <Image
                  src="/no-data.svg"
                  alt="UI Representation of Dashboard Prodify"
                  fill
                  priority
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BoardPage;
