import Navigation from "@/app/(protected)/dashboard/_components/navigation";
import { NavbarDashboard } from "./_components/navbar-dashboard";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-h-screen cursor-default">
      <NavbarDashboard />
      <Navigation />
      <div className="mt-20 ml-20">{children}</div>
    </div>
  );
};

export default AuthLayout;
