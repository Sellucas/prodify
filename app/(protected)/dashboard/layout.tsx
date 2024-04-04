import { Header } from "@/components/dashboard/header";
import Navigation from "@/components/dashboard/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen">
      <Header />
      <Navigation />
      <div className="ml-20">{children}</div>
    </div>
  );
};

export default AuthLayout;
