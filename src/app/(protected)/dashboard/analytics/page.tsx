"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { differenceInDays } from "date-fns";

import { ICard } from "@/types";
import useBoardStore from "@/lib/board-store";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/user-context";
import { Changelog } from "./_components/changelog";
import { PieChartComponent } from "./_components/pie-chart";
import { BarChartComponent } from "./_components/bar-chart";
import { RadarChartComponent } from "./_components/radar-chart";
import { HeaderAnalytics } from "./_components/header-analytics";

const AnalyticsPage = () => {
  const { user } = useUser();
  const { boards, cards, isLoading, fetchBoardsAndCards } = useBoardStore();

  const [daysDifference, setDaysDifference] = useState<number | string>(0);

  useEffect(() => {
    if (user?.user_id) {
      fetchBoardsAndCards(user.user_id);
    }

    if (user?.created_at) {
      const diff = differenceInDays(new Date(), new Date(user.created_at));
      setDaysDifference(diff);
    } else {
      setDaysDifference("&");
    }
  }, [user?.user_id, fetchBoardsAndCards, user?.created_at]);

  const currentDate = new Date();
  const threeMonthsAgo = new Date(
    new Date().setMonth(currentDate.getMonth() - 3),
  );

  const userCards = Object.values(cards).flat();

  const formatCardsByDate = (cardsArray: ICard[]) => {
    const cardsByDate = cardsArray
      .filter((card) => {
        const cardDate = new Date(card.created_at);
        return cardDate >= threeMonthsAgo && cardDate <= currentDate;
      })
      .reduce(
        (acc, card) => {
          const formattedDate = new Date(card.created_at)
            .toISOString()
            .split("T")[0];
          acc[formattedDate] = (acc[formattedDate] || 0) + 1;
          return acc;
        },
        {} as Record<string, number>,
      );

    return Object.entries(cardsByDate)
      .map(([date, count]) => ({ date, cards: count }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const formatCardsByPriority = (cardsArray: ICard[]) => {
    const cardsByPriority = cardsArray.reduce(
      (acc, { priority }) => {
        acc[priority] = (acc[priority] || 0) + 1;
        return acc;
      },
      { low: 0, medium: 0, high: 0 },
    );

    return [
      { priority: "low", cards: cardsByPriority.low, fill: "var(--color-low)" },
      {
        priority: "medium",
        cards: cardsByPriority.medium,
        fill: "var(--color-medium)",
      },
      {
        priority: "high",
        cards: cardsByPriority.high,
        fill: "var(--color-high)",
      },
    ];
  };

  const formatCardsByTag = (cardsArray: ICard[]) => {
    const cardsByTag = cardsArray.reduce(
      (acc, { tag }) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(cardsByTag).map(([tag, count]) => ({
      tag,
      cards: count,
    }));
  };

  const doneCardsCount = userCards.filter(
    (card) => card.status === "done",
  ).length;
  const donePercentage =
    userCards.length > 0
      ? ((doneCardsCount / userCards.length) * 100).toFixed(0)
      : "0";

  const highPriorityNotDoneCount = userCards.filter(
    (card) => card.priority === "high" && card.status !== "done",
  ).length;

  const resultBar = formatCardsByDate(userCards);
  console.log("resultBar:", resultBar);
  const pieChartData = formatCardsByPriority(userCards);
  const radarChartData = formatCardsByTag(userCards);

  return (
    <div className="container flex min-h-[70vh] w-full max-w-[940px] flex-col justify-center gap-10">
      <div className="flex flex-col gap-10">
        <div className="flex gap-2">
          <h1 className="text-balance text-4xl leading-none tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
            Analytics
          </h1>
          <Button
            variant={"ghost"}
            className="rounded-[6px] px-2 text-muted-foreground"
          >
            <Link className="flex items-center gap-2" href={"/dashboard/board"}>
              <ChevronLeft className="w-4" /> Back
            </Link>
          </Button>
        </div>
        <HeaderAnalytics
          totalBoards={boards.length}
          totalCards={userCards.length}
          totalCardsDone={donePercentage}
          totalHighPriorityCardsNotDone={highPriorityNotDoneCount}
          totalAccountDays={daysDifference}
        />
        <div className="flex max-w-4xl flex-col gap-10">
          <BarChartComponent chartData={resultBar} />
          <div className="flex justify-between gap-4">
            <PieChartComponent chartData={pieChartData} />
            <RadarChartComponent chartData={radarChartData} />
          </div>
        </div>
      </div>
      <div className="my-12 flex flex-col gap-10">
        <h1 className="text-2xl font-semibold">Changelog</h1>
        <Changelog />
      </div>
    </div>
  );
};

export default AnalyticsPage;
