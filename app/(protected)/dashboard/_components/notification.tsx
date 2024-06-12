import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";

export const Notification = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative">
        <span className="absolute top-0 right-0 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
        </span>
        <Bell className="w-5 text-muted-foreground/75" absoluteStrokeWidth />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-8 mt-2 min-h-24 min-w-64">
        <DropdownMenuLabel className="flex w-full justify-between items-center">
          <span>Notifications</span>
          <span className="text-xs text-blue-500 hover:text-blue-600 cursor-pointer">
            View all
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="text-sm text-center mt-4">No unread notifications.</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
