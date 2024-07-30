import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

export const LoadingAuthForm = () => {
  return (
    <div className="flex flex-col gap-4 py-4 animate-pulse">
      <Button
        variant={"outline"}
        className="p-6 space-x-4 w-full cursor-default"
      >
        <FaGithub className="h-8 w-8" />
        <span>Continue with Github</span>
      </Button>
      <Button
        variant={"outline"}
        className="p-6 space-x-4 w-full cursor-default"
      >
        <FcGoogle className="h-8 w-8" />
        <span>Continue with Google</span>
      </Button>
    </div>
  );
};
