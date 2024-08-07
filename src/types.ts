export interface ICard {
  board_id: string;
  card_id: string;
  created_at: string;
  description: string;
  position: number;
  status: "backlog" | "todo" | "doing" | "reviewing" | "done";
  title: string;
  user_id: string;
  tag:
    | "code"
    | "design"
    | "code review"
    | "research"
    | "bug"
    | "enchantment"
    | "documentation"
    | "testing"
    | "discussion"
    | "implementation"
    | "feedback"
    | "refactoring";
  priority: "high" | "medium" | "low";
}

export interface IColumnProps {
  title: string;
  color: string;
  status: "backlog" | "todo" | "doing" | "reviewing" | "done";
  cards: ICard[];
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>;
}

export type CardBoardProps = {
  title: string;
  id: string;
  status: "backlog" | "todo" | "doing" | "reviewing" | "done";
  card: ICard;
  handleDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    card: ICard,
  ) => void;
};

export interface IDropIndicatorProps {
  beforeId: string;
  column: string;
}

export interface IUserProfile {
  created_at: string;
  display_name: string | null;
  email: string;
  image_url: string | null;
  user_id: string;
}

export interface BoardItemProps {
  title: string;
  description: string | null;
  progress: number;
  created_at: string;
  slug: string;
  total_tasks: number;
  boardId: string;
}

export interface IBoard {
  board_id: string;
  created_at: string;
  description: string | null;
  title: string;
  user_id: string;
}
