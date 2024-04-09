import { Header } from "@/app/(protected)/_components/header";
import Navigation from "@/app/(protected)/_components/navigation";

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
