import { BoardHeader } from "./board-header";

export const Board = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BoardHeader />
      <div className="flex w-full gap-8 overflow-scroll p-12 no-scrollbar">
        {children}
      </div>
    </>
  );
};
