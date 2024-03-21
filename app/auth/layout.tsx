const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-neutral-200">
      {children}
    </div>
  );
};

export default AuthLayout;
