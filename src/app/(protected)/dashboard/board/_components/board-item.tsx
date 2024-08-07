import Link from "next/link";
import { Settings } from "lucide-react";
import { FaEllipsisVertical } from "react-icons/fa6";

import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BoardItemProps } from "@/types";
import { Progress } from "@/components/ui/progress";
import { formatCreatedAt } from "@/utils/format-created-at";
import { DialogDeleteBoard } from "@/app/(protected)/dashboard/board/_components/board-delete-dialog";

export const BoardItem = ({
  title,
  created_at,
  description,
  progress,
  slug,
  total_tasks,
  boardId,
}: BoardItemProps) => {
  const url = `/dashboard/board/${slug}?title=${encodeURIComponent(title)}`;

  return (
    <Link href={url}>
      <Card className="relative h-60 w-[322px] border-2 border-muted bg-primary-foreground transition-all duration-300 ease-in-out hover:bg-primary-foreground/50">
        <CardHeader className="h-20 py-4">
          <div className="flex items-center justify-between">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <CardTitle className="capitalize">
                    {title.length > 13 ? `${title.slice(0, 13)}...` : title}
                  </CardTitle>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm text-muted-foreground">{title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DropdownMenu>
              <DropdownMenuTrigger
                className="rounded-full p-2 hover:bg-muted"
                onClick={(e) => e.stopPropagation()}
              >
                <FaEllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent onClick={(e) => e.stopPropagation()}>
                <DropdownMenuLabel className="flex cursor-not-allowed items-center gap-2">
                  <Settings className="h-4 w-4" /> Settings
                </DropdownMenuLabel>
                <DropdownMenuLabel className="flex items-center gap-2">
                  <DialogDeleteBoard boardId={boardId} />
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <CardDescription className="text-xs">{description}</CardDescription>
        </CardHeader>
        <hr />
        <CardContent className="mt-6">
          <div>
            <p className="mb-2 flex justify-between text-sm">
              <span>{progress}% Completed</span>
              <span>{total_tasks} tasks</span>
            </p>
            <Progress value={progress} className="w-[100%]" />
          </div>
        </CardContent>
        <CardFooter className="absolute bottom-0 flex items-center text-xs text-muted-foreground">
          Created at:{" "}
          <span className="ml-1 rounded-xl bg-muted px-2 py-1">
            {formatCreatedAt(created_at)}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};
