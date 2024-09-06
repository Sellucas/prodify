import { ReactFlowProvider } from "@xyflow/react";
import Flow from "./_components/flow";

const RoadmapPage = () => {
  return (
    <div className="h-[94vh]">
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </div>
  );
};

export default RoadmapPage;
