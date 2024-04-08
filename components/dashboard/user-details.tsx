"use client";

import { LogOut, SlidersHorizontal, User } from "lucide-react";

import useCurrentUser from "@/hooks/use-current-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutButton } from "@/components/dashboard/logout-button";
import Link from "next/link";

export const UserDetails = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex flex-row">
        <Avatar>
          <AvatarImage src={user?.image_url || ""} alt="user" />
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-4">
        <DropdownMenuLabel className="flex gap-2 mb-2">
          <Avatar>
            <AvatarImage src={user?.image_url || ""} alt="user" />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-medium">{user?.display_name}</h2>
            <p className="text-xs font-light">{user?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <Link href={"/dashboard/settings"} className="flex gap-2">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Manage Account
          </Link>
        </DropdownMenuItem>
        <LogoutButton>
          <DropdownMenuItem className="cursor-pointer flex gap-2">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
