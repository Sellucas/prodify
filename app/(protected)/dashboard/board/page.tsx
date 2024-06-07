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

const BoardPage = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [boards, setBoards] = useState<any[] | null>(null);
  const { user } = useUser();

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        if (user?.user_id) {
          const fetchedBoards = await getAllBoards(user.user_id);
          setBoards(fetchedBoards);
          setIsLoading(false);
        } else {
          console.error("User ID is undefined");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user boards:", error);
        setIsLoading(false);
      }
    };

    fetchBoards();
  }, [user?.user_id]);

  return (
    <div className="mt-16 max-w-7xl mx-auto pr-4">
      <div className="flex justify-between gap-8">
        <SearchBar />
        <ManageSheet label="Add board" title="Add new board">
          <BoardForm />
        </ManageSheet>
      </div>
      {isLoading ? (
        <LoadingCard />
      ) : (
        <div className="mt-12 gap-4 flex flex-wrap">
          {boards && boards.length > 0 ? (
            boards.map(
              ({ title, description, created_at, board_id }, i) => (
                <BoardItem
                  slug={board_id}
                  title={title}
                  description={description}
                  progress={75}
                  key={i}
                  created_at={created_at}
                />
              )
            )
          ) : (
            <div className="mx-auto space-y-12 w-96 text-center text-xl text-gray-500">
              <h1>No board created yet!</h1>
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
