import { UserProvider } from "@/context/user-context";
import { Navigation } from "@/app/(protected)/dashboard/_components/navigation";
import { NavbarDashboard } from "@/app/(protected)/dashboard/_components/navbar-dashboard";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <div className="max-h-screen w-full cursor-default">
        <NavbarDashboard />
        <Navigation />
        <div className="ml-20 pt-14">{children}</div>
      </div>
    </UserProvider>
  );
};

export default AuthLayout;
