"use client";

import Link from "next/link";
import { LogOut, SlidersHorizontal, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/context/user-context";
import { LogoutButton } from "@/components/logout-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserDetails = () => {
  const { user } = useUser();

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
      <DropdownMenuContent className="mr-8 mt-1 p-4">
        <DropdownMenuLabel className="mb-2 flex gap-2">
          <Avatar>
            <AvatarImage src={user?.image_url || ""} alt="user" />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg">{user?.display_name}</h2>
            <p className="text-xs font-light">{user?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <Link href={"/dashboard/settings"} className="flex gap-2">
            <SlidersHorizontal className="mr-2 h-4 w-4" absoluteStrokeWidth />
            Manage Account
          </Link>
        </DropdownMenuItem>
        <LogoutButton>
          <DropdownMenuItem className="flex cursor-pointer gap-2">
            <LogOut className="mr-2 h-4 w-4" absoluteStrokeWidth />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
