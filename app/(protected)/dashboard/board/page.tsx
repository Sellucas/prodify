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
import { CardSheet } from "../../_components/card-sheet";
import { SearchBar } from "../../_components/search-bar";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const BoardPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-16 pr-4">
      <div className="flex justify-between gap-24">
        <SearchBar />
        <CardSheet />
      </div>
      <div className="mt-12 gap-4 flex flex-wrap">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="w-full max-w-96 border-gray-300">
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle>Notifications</CardTitle>
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
              <CardDescription>You have 3 unread messages.</CardDescription>
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
                04/2024
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BoardPage;
