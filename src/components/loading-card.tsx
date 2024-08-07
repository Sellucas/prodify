import { FaEllipsisVertical } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";

export const LoadingCard = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-12">
      {[...Array(2)].map((_, i) => (
        <Card
          key={i}
          className="w-[322px] h-60 border-2 border-muted bg-primary-foreground hover:bg-primary-foreground/50 relative transition-all ease-in-out duration-300"
        >
          <div className="h-20 p-4 flex justify-between items-center">
            <div className="animate-pulse h-2 bg-slate-700 rounded pr-48"></div>
            <FaEllipsisVertical className="text-slate-700 animate-pulse" />
          </div>
          <hr />
          <CardContent className="mt-6">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
