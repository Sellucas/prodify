import { BoardHeader } from "@/app/(protected)/_components/board-header";

export const Board = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BoardHeader />
      <div className="flex flex-row w-full h-full gap-8 overflow-scroll lg:px-12 px-4 pt-6 no-scrollbar">
        {children}
      </div>
    </>
  );
};