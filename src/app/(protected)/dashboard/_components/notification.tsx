import { Bell } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Notification = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative">
        <span className="absolute right-0 top-0 flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
        </span>
        <Bell className="w-5 text-muted-foreground/75" absoluteStrokeWidth />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-8 mt-2 min-h-24 min-w-64">
        <DropdownMenuLabel className="flex w-full items-center justify-between">
          <span>Notifications</span>
          <span className="cursor-pointer text-xs text-blue-500 hover:text-blue-600">
            View all
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="mt-4 text-center text-sm">No unread notifications.</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
