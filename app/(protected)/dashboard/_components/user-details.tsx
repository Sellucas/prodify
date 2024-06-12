"use client";

import Link from "next/link";
import { LogOut, SlidersHorizontal, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutButton } from "@/components/logout-button";
import { useUser } from "@/context/user-context";

export const UserDetails = () => {
  const { user, loading } = useUser();

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
      <DropdownMenuContent className="p-4 mr-8 mt-1">
        <DropdownMenuLabel className="flex gap-2 mb-2">
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
            <SlidersHorizontal className="h-4 w-4 mr-2" absoluteStrokeWidth />
            Manage Account
          </Link>
        </DropdownMenuItem>
        <LogoutButton>
          <DropdownMenuItem className="cursor-pointer flex gap-2">
            <LogOut className="h-4 w-4 mr-2" absoluteStrokeWidth />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
