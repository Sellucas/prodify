import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <div className="flex flex-row">
      <Card className="flex flex-row p-4 drop-shadow-2xl">
        <section className="my-auto">
          <CardHeader className="space-y-8">
            <div className="space-y-2">
              <CardTitle className="text-4xl">{headerLabel}</CardTitle>
              <CardDescription className="text-gray-500 text-sm">
                {headerDescription}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </section>
        <section className="hidden lg:block">
          <video width="420" preload="none" loop autoPlay muted>
            <source src="/prodify-login2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      </Card>
    </div>
  );
};
