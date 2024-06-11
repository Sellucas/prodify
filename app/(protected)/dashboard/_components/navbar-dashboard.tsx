import { Logo } from "@/components/logo";
import { UserDetails } from "@/app/(protected)/dashboard/_components/user-details";
import { Notification } from "./notification";

export const NavbarDashboard = () => {
  return (
    <div className="fixed top-0 z-50 border-b border-muted h-14 w-full bg-background2">
      <div className="px-4 flex justify-between items-center h-full">
        <Logo />
        <div className="flex items-center gap-4">
          <Notification />
          <UserDetails />
        </div>
      </div>
    </div>
  );
};
