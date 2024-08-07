import { Logo } from "@/components/logo";
import { UserDetails } from "@/app/(protected)/dashboard/_components/user-details";

export const Header = () => {
  return (
    <div className="relative z-20 flex h-14 w-full items-center justify-between border-b-2 border-solid border-gray-300 bg-white px-6 py-2">
      <Logo />
      <div className="flex items-center">
        <UserDetails />
      </div>
    </div>
  );
};
