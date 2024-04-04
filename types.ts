// Board Interfaces
export interface ColumnProps {
  title: string;
  color: string;
  column: string;
  cards: CardBoardProps[];
  setCards: React.Dispatch<React.SetStateAction<CardBoardProps[]>>;
}

export interface CardBoardProps {
  title: string;
  id: string;
  column: string;
  description: string;
  tags?: CardTagProps[];
  handleDragStart: () => void;
}

export interface CardTagProps {
  option: string;
  className?: string;
}

export interface DropIndicatorProps {
  beforeId: string;
  column: string;
}
