import { UserDetails } from "@/app/(protected)/dashboard/_components/user-details";
import { Notification } from "@/app/(protected)/dashboard/_components/notification";

export const NavbarDashboard = () => {
  return (
    <div className="fixed top-0 z-50 mt-4 w-full px-4">
      <div className="flex h-full w-full items-center justify-end gap-4">
        <Notification />
        <UserDetails />
      </div>
    </div>
  );
};
