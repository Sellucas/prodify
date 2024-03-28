"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { supabaseClient } from "@/utils/supabase/client";

export const AuthForm = () => {
  const params = useSearchParams();
  const next = params.get("next");

  const handleLoginWithOAuth = (provider: "github" | "google") => {
    const supabase = supabaseClient();
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + "/auth/callback?next=" + next,
      },
    });
  };

  return (
    <div className="flex flex-col gap-4 py-4">
      <Button
        variant={"outline"}
        className="space-x-4 w-full transition duration-300 ease-in-out hover:drop-shadow-xl"
        onClick={() => handleLoginWithOAuth("github")}
      >
        <FaGithub className="h-8 w-8" />
        <span>Continue with Github</span>
      </Button>
      <Button
        variant={"outline"}
        className="space-x-4 w-full transition duration-300 ease-in-out hover:drop-shadow-xl"
        onClick={() => handleLoginWithOAuth("google")}
      >
        <FcGoogle className="h-8 w-8" />
        <span>Continue with Google</span>
      </Button>
    </div>
  );
};
