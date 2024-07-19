"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js";

import { ICard } from "@/types";
import { subscribeToCardChanges } from "@/lib/subscribe-card-changes";
import { Column } from "@/app/(protected)/dashboard/_components/column";
import { BoardHeader } from "@/app/(protected)/dashboard/_components/board-header";
import { getAllCards } from "@/actions/get-user-card";

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
        console.error("Error fetching user cards:", error);
      }
    };

    fetchCards();
  }, [params.slug]);

  useEffect(() => {
    const handleCardChange = (
      payload: RealtimePostgresChangesPayload<ICard>
    ) => {
      const { eventType, new: newCard, old: oldCard } = payload;

      if (eventType === "INSERT" && newCard) {
        setCards((prevCards) => [...prevCards, newCard]);
      } else if (eventType === "UPDATE" && newCard) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.card_id === newCard.card_id ? newCard : card
          )
        );
      } else if (eventType === "DELETE") {
        const cardToDelete = oldCard || newCard;
        if (cardToDelete) {
          setCards((prevCards) =>
            prevCards.filter((card) => card.card_id !== cardToDelete.card_id)
          );
        }
      }
    };

    const subscription = subscribeToCardChanges(params.slug, handleCardChange);

    return () => {
      subscription.unsubscribe();
    };
  }, [params.slug]);

  return (
    <>
      <BoardHeader boardId={params.slug} title={title as string} />
      <div className="flex flex-row  w-full h-full gap-8 overflow-x-scroll max-w-[1568px] mx-auto no-scrollbar">
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
