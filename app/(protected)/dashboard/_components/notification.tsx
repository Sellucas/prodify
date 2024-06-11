import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
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
      <DropdownMenuContent className="mr-2 mt-2 p-4 min-h-64 min-w-64">
        <DropdownMenuLabel className="text-lg font-medium">Notifications</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
