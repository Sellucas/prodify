"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import {
  Panel,
  addEdge,
  MiniMap,
  Controls,
  ReactFlow,
  type Node,
  type Edge,
  Background,
  useReactFlow,
  type OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
  type OnNodesChange,
  type OnEdgesChange,
  ReactFlowInstance,
} from "@xyflow/react";

import "~/tailwind.config";
import "@xyflow/react/dist/style.css";

import Circle from "./circle";
import Ellipse from "./ellipse";
import Rectangle from "./rectangle";
import { nodeColor } from "./node-color";
import Parallelogram from "./parallelogram";
import { Button } from "@/components/ui/button";
import { NodeForm } from "./node-form";
import { getFlow, saveFlow } from "../actions";
import { useUser } from "@/context/user-context";

const nodeTypes = {
  circle: Circle,
  ellipse: Ellipse,
  rectangle: Rectangle,
  parallelogram: Parallelogram,
};

const flowKey = "prodify-flow";
const proOptions = { hideAttribution: true };

const Flow = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [hasChanges, setHasChanges] = useState(false);
  const [rfInstance, setRfInstance] = useState<ReactFlowInstance | null>(null);
  const { setViewport } = useReactFlow();
  const router = useRouter();
  const { user } = useUser();

  const onNodesChange: OnNodesChange = useCallback((changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
    setHasChanges(true);
  }, []);
  const onEdgesChange: OnEdgesChange = useCallback((changes) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
    setHasChanges(true);
  }, []);
  const onConnect: OnConnect = useCallback((params) => {
    setEdges((eds) => addEdge(params, eds));
    setHasChanges(true);
  }, []);

  const onSave = useCallback(async () => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      const flowStringify = JSON.stringify(flow);
      const flowData = {
        metadata: JSON.parse(flowStringify),
        user_id: user?.user_id,
      };

      try {
        await saveFlow(flowData);
      } catch (error) {
        console.error("Error saving flow:", error);
      }
      setHasChanges(false);
    }
  }, [rfInstance, user?.user_id]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      try {
        const flowData = await getFlow(user?.user_id!);

        if (flowData && flowData.length > 0) {
          const storedFlow = flowData[0].metadata as any;
          console.log("storedFlow", storedFlow);

          if (storedFlow) {
            const { x = 0, y = 0, zoom = 1 } = storedFlow.viewport;

            setNodes(storedFlow.nodes || []);
            setEdges(storedFlow.edges || []);
            setViewport({ x, y, zoom });
          } else {
            console.error("Stored flow is not a valid JSON object");
          }
        }
      } catch (error) {
        console.error("Error restoring flow:", error);
      }
    };

    restoreFlow();
  }, [setViewport, user?.user_id]);

  const handleAddNode = useCallback(
    (newNode: Node) => {
      setNodes((nds) => nds.concat(newNode));
      setHasChanges(true);
    },
    [setNodes],
  );

  useEffect(() => {
    onRestore();
  }, [onRestore]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (
        hasChanges &&
        !confirm(
          "You have unsaved changes. Are you sure you want to exit?",
        )
      ) {
        throw new Error("Route change aborted");
      }
    };

    const originalPush = router.push;
    router.push = (...args) => {
      handleRouteChange(args[0] as string);
      return originalPush(...args);
    };

    return () => {
      router.push = originalPush;
    };
  }, [hasChanges, router]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (hasChanges) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasChanges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={setRfInstance}
      proOptions={proOptions}
      fitView
      className="text-black"
    >
      <MiniMap
        nodeColor={nodeColor}
        maskColor="rgba(53, 53, 57, 0.378)"
        zoomable
        pannable
        className="bg-background2"
      />
      <Background />
      <Controls className="bg-black text-black" />
      <Panel className="flex gap-1" position="top-right">
        <Button
          onClick={onSave}
          size={"sm"}
          variant={"secondary"}
          className="h-10 rounded-[6px] px-5"
        >
          Save
        </Button>
        <NodeForm onAddNode={handleAddNode} />
      </Panel>
    </ReactFlow>
  );
};

export default Flow;
