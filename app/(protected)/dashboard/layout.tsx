import Navigation from "@/app/(protected)/_components/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-h-screen bg-white">
      <Navigation />
      <div className="mt-12 ml-20">{children}</div>
    </div>
  );
};

export default AuthLayout;
