"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js";

import { ICard } from "@/types";
import { subscribeToCardChanges } from "@/lib/subscribe-card-changes";
import { getAllCards } from "@/app/(protected)/dashboard/board/[slug]/actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListTab } from "@/app/(protected)/dashboard/board/_components/list-tab";
import { columns } from "@/app/(protected)/dashboard/board/_components/list-column";
import { KanbanColumn } from "@/app/(protected)/dashboard/board/_components/kanban-column";
import { CardCreateForm } from "@/app/(protected)/dashboard/board/_components/card-create-form";

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
      payload: RealtimePostgresChangesPayload<ICard>,
    ) => {
      const { eventType, new: newCard, old: oldCard } = payload;

      if (eventType === "INSERT" && newCard) {
        setCards((prevCards) => [...prevCards, newCard]);
      } else if (eventType === "UPDATE" && newCard) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.card_id === newCard.card_id ? newCard : card,
          ),
        );
      } else if (eventType === "DELETE") {
        const cardToDelete = oldCard || newCard;
        if (cardToDelete) {
          setCards((prevCards) =>
            prevCards.filter((card) => card.card_id !== cardToDelete.card_id),
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
    <Tabs defaultValue="board">
      <div className="sticky top-14 z-10 mx-auto flex w-full max-w-[1568px] items-center justify-between bg-background py-4">
        <h1 className="text-balance text-4xl leading-none tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
          {title}
        </h1>
        <div className="flex items-center gap-4">
          <TabsList className="rounded-[10px]">
            <TabsTrigger value="board" className="rounded-[10px]">
              Board
            </TabsTrigger>
            <TabsTrigger value="list" className="rounded-[10px]">
              List
            </TabsTrigger>
          </TabsList>
          <CardCreateForm boardId={params.slug} />
        </div>
      </div>
      <TabsContent
        value="board"
        className="no-scrollbar mx-auto flex h-full w-full max-w-[1568px] flex-row gap-8 overflow-x-scroll"
      >
        <KanbanColumn
          title="Backlog"
          status="backlog"
          color="neutral"
          cards={cards}
          setCards={setCards}
        />
        <KanbanColumn
          title="To Do"
          status="todo"
          color="red"
          cards={cards}
          setCards={setCards}
        />
        <KanbanColumn
          title="In Progress"
          status="doing"
          color="blue"
          cards={cards}
          setCards={setCards}
        />
        <KanbanColumn
          title="To Review"
          status="reviewing"
          color="amber"
          cards={cards}
          setCards={setCards}
        />
        <KanbanColumn
          title="Completed"
          status="done"
          color="green"
          cards={cards}
          setCards={setCards}
        />
      </TabsContent>
      <TabsContent
        value="list"
        className="no-scrollbar mx-auto flex h-full w-full max-w-[1568px] flex-row overflow-x-scroll"
      >
        <ListTab columns={columns} data={cards} />
      </TabsContent>
    </Tabs>
  );
};

export default KanbanPage;
