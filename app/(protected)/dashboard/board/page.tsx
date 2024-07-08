"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { LoadingCard } from "@/components/loading-card";
import { getAllBoards } from "@/actions/get-user-board";
import { useUser } from "@/context/user-context";
import { SearchBar } from "@/app/(protected)/dashboard/_components/search-bar";
import { ManageSheet } from "@/app/(protected)/dashboard/_components/manage-sheet";
import { BoardForm } from "@/app/(protected)/dashboard/_components/board-form";
import { BoardItem } from "@/app/(protected)/dashboard/_components/board-item";
import useBoardStore from "@/lib/board-store";
import { calculateProgress, calculateTotalTasks } from "@/lib/utils";

const BoardPage = () => {
  const { user } = useUser();
  const { boards, cards, isLoading, fetchBoardsAndCards } = useBoardStore();

  useEffect(() => {
    if (user?.user_id) {
      fetchBoardsAndCards(user.user_id);
    }
  }, [user?.user_id, fetchBoardsAndCards]);

  return (
    <div className="container">
      <div className="flex justify-between gap-8">
        <SearchBar />
        <ManageSheet label="New board" title="Add new board" description="Create a new board to organize your tasks.">
          <BoardForm />
        </ManageSheet>
      </div>
      {isLoading ? (
        <LoadingCard />
      ) : (
        <div className="mt-12 gap-4 flex flex-wrap">
          {boards && boards.length > 0 ? (
            boards.map(({ title, description, created_at, board_id }, i) => (
              <BoardItem
                slug={board_id}
                title={title}
                description={description}
                progress={calculateProgress(cards, board_id)}
                total_tasks={calculateTotalTasks(cards, board_id)}
                key={i}
                created_at={created_at}
              />
            ))
          ) : (
            <div className="mx-auto space-y-12 w-96 text-center text-xl text-gray-500">
              <h1 className="text-white">No board created yet!</h1>
              <div className="aspect-video w-full relative">
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
