export interface ICard {
  board_id: string;
  card_id: string;
  title: string;
  description: string;
  status: "backlog" | "todo" | "doing" | "reviewing" | "done";
  position: number;
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
  tags?: ICardTagProps[];
  handleDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    card: ICard
  ) => void;
};

export interface ICardTagProps {
  children: React.ReactNode;
  className?: string;
}

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
