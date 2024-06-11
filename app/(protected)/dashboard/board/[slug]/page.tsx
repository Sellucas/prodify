"use client";

import { useEffect, useState } from "react";

import { Column } from "@/app/(protected)/dashboard/_components/column";
import { getAllCards } from "@/actions/get-user-card";
import { ICard } from "@/types";
import { BoardHeader } from "../../_components/board-header";

const TestPage = ({ params }: { params: { slug: string } }) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const fetchedBoards = await getAllCards(params.slug);
        setCards(fetchedBoards);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user boards:", error);
        setIsLoading(false);
      }
    };

    fetchCards();
  }, [params.slug]);

  return (
    <>
      <BoardHeader boardId={params.slug} />
      <div className="flex flex-row w-full h-full gap-8 overflow-x-scroll lg:px-12 px-4 no-scrollbar">
        <Column
          title="Backlog"
          status="backlog"
          color="neutral"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="To Do"
          status="todo"
          color="red"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="In Progress"
          status="doing"
          color="blue"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="To Review"
          status="reviewing"
          color="amber"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="Complete"
          status="done"
          color="green"
          cards={cards}
          setCards={setCards}
        />
      </div>
    </>
  );
};

export default TestPage;
