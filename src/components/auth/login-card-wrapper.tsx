interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  headerDescription: string;
}

export const LoginCardWrapper = ({
  children,
  headerLabel,
  headerDescription,
}: CardWrapperProps) => {
  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-center text-4xl font-medium leading-none tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl z-10">
            {headerLabel}
          </h1>
          <p className="text-sm tracking-tight text-gray-400 md:text-base">
            {headerDescription}
          </p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
