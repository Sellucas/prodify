import { ManageSheet } from "@/app/(protected)/dashboard/_components/manage-sheet";
import { CardForm } from "./card-form";

export const BoardHeader = ({
  boardId,
  title,
}: {
  boardId: string;
  title: string;
}) => {
  return (
    <div className="flex justify-between items-center w-full pb-6 lg:px-12 px-4 max-w-[1660px]">
      <h1 className="text-4xl font-medium leading-none tracking-tighter text-balance sm:text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h1>
      <ManageSheet label={"New card"} title={"Add new card"}>
        <CardForm boardId={boardId} />
      </ManageSheet>
    </div>
  );
};
