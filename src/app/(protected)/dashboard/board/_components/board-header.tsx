import { CardCreateForm } from "@/app/(protected)/dashboard/board/_components/card-create-form";

export const BoardHeader = ({
  boardId,
  title,
}: {
  boardId: string;
  title: string;
}) => {
  return (
    <div className="sticky top-14 z-10 mx-auto flex w-full max-w-[1568px] items-center justify-between bg-background py-6">
      <h1 className="text-balance text-4xl font-medium leading-none tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h1>
      <CardCreateForm boardId={boardId} />
    </div>
  );
};
