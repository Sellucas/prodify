import { Logo } from "@/components/logo";
import { UserDetails } from "@/app/(protected)/dashboard/_components/user-details";
import { Notification } from "@/app/(protected)/dashboard/_components/notification";

export const NavbarDashboard = () => {
  return (
    <div className="fixed top-0 z-50 h-14 w-full border-b border-muted bg-background2">
      <div className="flex h-full items-center justify-between px-4">
        <Logo />
        <div className="flex items-center gap-4">
          <Notification />
          <UserDetails />
        </div>
      </div>
    </div>
  );
};
