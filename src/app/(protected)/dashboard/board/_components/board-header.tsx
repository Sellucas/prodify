import { CardCreateForm } from "@/app/(protected)/dashboard/board/_components/card-create-form";

export const BoardHeader = ({
  boardId,
  title,
}: {
  boardId: string;
  title: string;
}) => {
  return (
    <div className="flex justify-between items-center w-full py-6 max-w-[1568px] mx-auto sticky top-14 z-10 bg-background">
      <h1 className="text-4xl font-medium leading-none tracking-tighter text-balance sm:text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h1>
      <CardCreateForm boardId={boardId} />
    </div>
  );
};
