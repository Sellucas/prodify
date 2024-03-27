import Navigation from "@/components/dashboard/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen bg-neutral-200">
      <Navigation />
      <div className="ml-24 pt-6">{children}</div>
    </div>
  );
};

export default AuthLayout;
