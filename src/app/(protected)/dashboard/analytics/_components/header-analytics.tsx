import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Scroll,
} from "lucide-react";

interface HeaderAnalyticsProps {
  totalBoards: number;
  totalCards: number;
  totalCardsDone: string;
  totalHighPriorityCardsNotDone: number;
  totalAccountDays: string | number;
}

export const HeaderAnalytics = ({
  totalBoards,
  totalCards,
  totalCardsDone,
  totalHighPriorityCardsNotDone,
  totalAccountDays,
}: HeaderAnalyticsProps) => {
  const analyticsData = [
    { title: totalBoards, description: "Boards", icon: ClipboardList },
    { title: totalCards, description: "Cards", icon: Scroll },
    { title: `${totalCardsDone}%`, description: "Cards Done", icon: ClipboardCheck },
    {
      title: totalHighPriorityCardsNotDone,
      description: "High Priority",
      icon: Clock,
    },
    { title: totalAccountDays, description: "Days Count", icon: Calendar },
  ];

  return (
    <div className="flex w-full items-center justify-between">
      {analyticsData.map((data, index) => {
        const Icon = data.icon;
        return (
          <Card
            key={index}
            className="w-40 rounded-[6px] border bg-background2"
          >
            <CardHeader className="flex flex-row items-center justify-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <CardTitle className="flex items-center gap-2 text-4xl">
                  {data.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-1 text-xs">
                  <Icon className="size-4" absoluteStrokeWidth />
                  {data.description}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
};
