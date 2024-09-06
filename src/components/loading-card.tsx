import { FaEllipsisVertical } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";

export const LoadingCard = () => {
  return (
    <div className="mt-12 flex flex-col flex-wrap gap-4 md:flex-row">
      {[...Array(2)].map((_, i) => (
        <Card
          key={i}
          className="relative h-60 w-[322px] rounded-none border-2 border-muted bg-primary-foreground transition-all duration-300 ease-in-out hover:bg-primary-foreground/50"
        >
          <div className="flex h-20 items-center justify-between p-4">
            <div className="h-2 animate-pulse rounded bg-slate-700 pr-48"></div>
            <FaEllipsisVertical className="animate-pulse text-slate-700" />
          </div>
          <hr />
          <CardContent className="mt-6">
            <div className="flex animate-pulse space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 rounded bg-slate-700"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-2 rounded bg-slate-700"></div>
                    <div className="col-span-1 h-2 rounded bg-slate-700"></div>
                  </div>
                  <div className="h-2 rounded bg-slate-700"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
