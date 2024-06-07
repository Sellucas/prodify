import Link from "next/link";
import { Settings, Trash2 } from "lucide-react";
import { FaEllipsisVertical } from "react-icons/fa6";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { formatCreatedAt } from "@/utils/formatCreatedAt ";

interface BoardItemProps {
  title: string;
  description: string;
  progress: number;
  created_at: string;
  slug: string;
}

export const BoardItem = ({
  title,
  created_at,
  description,
  progress,
  slug,
}: BoardItemProps) => {
  const url = `/dashboard/board/${slug}`;

  return (
    <Link href={url}>
      <Card className="w-full max-w-96 border-gray-300">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>{title}</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <FaEllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="flex items-center gap-2">
                  <Trash2 className="w-4 h-4" /> Delete
                </DropdownMenuLabel>
                <DropdownMenuLabel className="flex items-center gap-2">
                  <Settings className="w-4 h-4" /> Settings
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <p className="flex justify-between text-sm mb-2">
              <span>50% Completed</span>
              <span>1/2 tasks</span>
            </p>
            <Progress value={progress} className="w-[100%]" />
          </div>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground flex items-center">
          Created at:{" "}
          <span className="ml-2 bg-gray-300 rounded-xl px-2 py-1">
            {formatCreatedAt(created_at)}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};
