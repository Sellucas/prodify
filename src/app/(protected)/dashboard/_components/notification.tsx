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
      <DropdownMenuTrigger className="flex size-8 items-center justify-center rounded-full border-2 p-1 hover:bg-foreground2 hover:text-white">
        <Bell className="w-4 text-muted-foreground/75" absoluteStrokeWidth />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-8 mt-2 min-h-96 min-w-80 rounded-[6px]">
        <DropdownMenuLabel className="flex w-full items-center justify-between">
          <span>Notifications</span>
          <span className="cursor-pointer text-xs text-blue-500 hover:text-blue-600">
            View all
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="mt-32 flex h-full items-center justify-center text-center text-sm text-muted-foreground">
          No unread notifications.
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
