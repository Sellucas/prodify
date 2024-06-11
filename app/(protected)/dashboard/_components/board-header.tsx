import { ManageSheet } from "@/app/(protected)/dashboard/_components/manage-sheet";
import { CardForm } from "./card-form";

export const BoardHeader = ({ boardId }: { boardId: string }) => {
  return (
    <div className="flex justify-between items-center w-full pb-6 lg:px-12 px-4 max-w-[1660px]">
      <h1 className="font-medium text-2xl lg:text-3xl">Daily Tasks</h1>
      <ManageSheet label={"New card"} title={"Add new card"}>
        <CardForm boardId={boardId} />
      </ManageSheet>
    </div>
  );
};
