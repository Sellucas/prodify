import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CardDetailsProps {
  title: string;
  description: string;
  content: React.ReactNode;
  footer: string;
}

export const CardDetails = ({
  title,
  description,
  content,
  footer,
}: CardDetailsProps) => {
  return (
    <Card className="h-44 w-[550px] py-4">
      <CardContent className="flex flex-row items-center justify-between">
        <div className="h-16 space-y-2">
          <h1>{title}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div>{content}</div>
      </CardContent>
      <Separator />
      <CardFooter className="pb-0 pt-6">
        <p className="text-xs text-muted-foreground">{footer}</p>
      </CardFooter>
    </Card>
  );
};
