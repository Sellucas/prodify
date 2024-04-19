"use client";

import { FaEllipsisVertical } from "react-icons/fa6";
import { Settings, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardSheet } from "@/app/(protected)/_components/manage-sheet";
import { SearchBar } from "@/app/(protected)/_components/search-bar";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useUserBoards from "@/hooks/use-user-boards";
import { formatCreatedAt } from "@/utils/formatCreatedAt ";
import Image from "next/image";
import { LoadingCard } from "@/components/loading-card";
import { BoardForm } from "../../_components/board-form";

const BoardPage = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const boards = useUserBoards();

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (boards !== null) {
      setIsLoading(false);
    }
  }, [boards]);

  return (
    <div className="mt-16 max-w-7xl mx-auto pr-4">
      <div className="flex justify-between gap-8">
        <SearchBar />
        <CardSheet label={"Add board"} title={"Add new board"}>
          <BoardForm />
        </CardSheet>
      </div>
      {isLoading ? (
        <LoadingCard />
      ) : (
        <div className="mt-12 gap-4 flex flex-wrap">
          {boards && boards.length > 0 ? (
            boards.map(({ title, description, created_at }, i) => (
              <Card key={i} className="w-full max-w-96 border-gray-300">
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
            ))
          ) : (
            <div className="mx-auto space-y-12 w-96 text-center text-xl text-gray-500">
              <h1>No board created yet!</h1>
              <div className="aspect-video w-full relative">
                <Image
                  src={"/no-data.svg"}
                  alt="UI Representation of Dashboard Prodify"
                  fill
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BoardPage;
