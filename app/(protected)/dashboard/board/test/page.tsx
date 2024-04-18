"use client";

import { useState } from "react";

import { DEFAULT_CARDS } from "@/constants";
import { Column } from "@/app/(protected)/_components/column";
import { Board } from "@/app/(protected)/_components/board";

const TestPage = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <Board>
      <Column
        title="Backlog"
        column="backlog"
        color="neutral"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="To Do"
        column="todo"
        color="red"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In Progress"
        column="doing"
        color="blue"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="To Review"
        column="reviewing"
        color="amber"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        color="green"
        cards={cards}
        setCards={setCards}
      />
    </Board>
  );
};

export default TestPage;
