"use client";

import { useEffect, useState, useTransition } from "react";
import { User } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/user-context";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { updateUser } from "./actions";
import { formatCreatedAt } from "@/utils/format-created-at";

const SettingsPage = () => {
  const { user } = useUser();
  const [displayName, setDisplayName] = useState("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (user?.display_name) {
      setDisplayName(user.display_name);
    }
  }, [user?.display_name]);

  const handleSave = () => {
    startTransition(() => {
      if (user) {
        updateUser(user.user_id, { display_name: displayName });
      } else {
        console.error("User not found");
      }
    });
  };

  const userCreatedAt = formatCreatedAt(user?.created_at || "");

  return (
    <div className="container flex flex-row gap-12 pt-6">
      <div className="flex flex-col gap-12">
        <Card className="h-52 w-[620px] py-4">
          <CardContent className="flex h-3/4 flex-row items-center justify-between">
            <div className="space-y-2">
              <h1>User Profile</h1>
              <p className="text-sm text-muted-foreground">
                This image represents your profile across the platform.
              </p>
            </div>
            <Avatar className="size-16">
              <AvatarImage src={user?.image_url || ""} alt="user" />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
          </CardContent>
          <CardFooter className="border-t-2 py-6">
            <p className="text-xs text-muted-foreground">
              An avatar is optional but strongly recommended.
            </p>
          </CardFooter>
        </Card>

        <Card className="h-52 w-[620px] py-4">
          <CardContent className="flex h-3/4 flex-col items-start justify-between">
            <div className="space-y-2">
              <h1>User Name</h1>
              <p className="text-sm text-muted-foreground">
                This is the name that will be visible to others within Prodify.
              </p>
            </div>
            <Input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-64"
            />
          </CardContent>
          <CardFooter className="justify-between border-t-2 py-3">
            <p className="text-xs text-muted-foreground">
              Please use a maximum of 32 characters.
            </p>
            <Button
              className="rounded"
              size={"sm"}
              onClick={handleSave}
              disabled={isPending}
            >
              {isPending ? (
                <div className="flex items-center gap-2">
                  <div
                    className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  />
                  <span>Loading...</span>
                </div>
              ) : (
                "Save"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex flex-col gap-12">
        <Card className="h-52 w-[620px] py-4">
          <CardContent className="flex h-3/4 flex-col items-start justify-between">
            <div className="space-y-2">
              <h1>User Email</h1>
              <p className="text-sm text-muted-foreground">
                The email associated with your account.
              </p>
            </div>
            <Input value={user?.email} className="w-64" disabled />
          </CardContent>
          <CardFooter className="justify-between border-t-2 py-6">
            <p className="text-xs text-muted-foreground">
              This email cannot be changed.
            </p>
          </CardFooter>
        </Card>

        <Card className="h-52 w-[620px] py-4">
          <CardContent className="flex h-3/4 flex-col items-start justify-between">
            <div className="space-y-2">
              <h1>Account Creation Date</h1>
              <p className="text-sm text-muted-foreground">
                The date when your account was created. This is for your
                reference only.
              </p>
            </div>
            <Input value={userCreatedAt} className="w-64" disabled />
          </CardContent>
          <CardFooter className="border-t-2"></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
