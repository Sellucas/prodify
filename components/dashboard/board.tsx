import { BoardHeader } from "@/components/dashboard/board-header";

export const Board = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BoardHeader />
      <div className="flex flex-row w-full h-full gap-8 overflow-scroll px-6 lg:px-12 pt-6 no-scrollbar">
        {children}
      </div>
    </>
  );
};
