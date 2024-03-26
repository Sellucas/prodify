import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BackButton } from "./back-button";
import { FaChartSimple } from "react-icons/fa6";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  headerDescription: string;
}

export const LoginCardWrapper = ({
  children,
  backButtonHref,
  backButtonLabel,
  headerLabel,
  headerDescription,
}: CardWrapperProps) => {
  return (
    <div className="flex flex-row">
      <Card className="flex flex-row p-4 drop-shadow-2xl">
        <section>
          <CardHeader className="space-y-10">
            <div className="flex flex-row gap-2">
              <FaChartSimple className="h-6 w-6 text-blue-500" />
              <h1 className="text-xl font-semibold">Profidy</h1>
            </div>
            <div className="space-y-2">
              <CardTitle className="text-4xl">{headerLabel}</CardTitle>
              <CardDescription className="text-gray-500 text-sm">
                {headerDescription}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>{children}</CardContent>
          <CardFooter>
            <BackButton href={backButtonHref} label={backButtonLabel} />
          </CardFooter>
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
