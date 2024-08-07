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
      <Card className="w-[322px] h-60 border-2 border-muted bg-primary-foreground hover:bg-primary-foreground/50 relative transition-all ease-in-out duration-300">
        <CardHeader className="h-20 py-4">
          <div className="flex justify-between items-center">
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
                className="hover:bg-muted p-2 rounded-full"
                onClick={(e) => e.stopPropagation()}
              >
                <FaEllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent onClick={(e) => e.stopPropagation()}>
                <DropdownMenuLabel className="flex items-center gap-2 cursor-not-allowed">
                  <Settings className="w-4 h-4" /> Settings
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
            <p className="flex justify-between text-sm mb-2">
              <span>{progress}% Completed</span>
              <span>{total_tasks} tasks</span>
            </p>
            <Progress value={progress} className="w-[100%]" />
          </div>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground flex items-center absolute bottom-0">
          Created at:{" "}
          <span className="ml-1 bg-muted rounded-xl px-2 py-1">
            {formatCreatedAt(created_at)}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};
