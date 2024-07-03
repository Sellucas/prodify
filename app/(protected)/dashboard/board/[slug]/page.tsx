"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Column } from "@/app/(protected)/dashboard/_components/column";
import { getAllCards } from "@/actions/get-user-card";
import { ICard } from "@/types";
import { BoardHeader } from "../../_components/board-header";

const KanbanPage = ({ params }: { params: { slug: string } }) => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const fetchedCards = await getAllCards(params.slug);
        setCards(fetchedCards);
      } catch (error) {
        console.error("Error fetching user boards:", error);
      }
    };

    fetchCards();
  }, [params.slug]);

  return (
    <>
      <BoardHeader boardId={params.slug} title={title as string} />
      <div className="flex flex-row w-full h-full gap-8 overflow-x-scroll max-w-[1660px] mx-auto no-scrollbar">
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

export default KanbanPage;
