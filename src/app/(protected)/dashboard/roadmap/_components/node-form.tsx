"use client";

import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ManageSheet } from "@/app/(protected)/dashboard/board/_components/manage-sheet";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { NodeSchema } from "@/schemas";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type NodeFormValues = z.infer<typeof NodeSchema>;

interface NodeFormProps {
  onAddNode: (node: {
    id: string;
    data: { label: string };
    type: string;
    position: { x: number; y: number };
  }) => void;
}

export const NodeForm: React.FC<NodeFormProps> = ({ onAddNode }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const form = useForm<NodeFormValues>({
    resolver: zodResolver(NodeSchema),
    defaultValues: {
      label: "",
      type: "rectangle",
      x: 0,
      y: 0,
    },
  });

  const onSubmit: SubmitHandler<NodeFormValues> = (values) => {
    try {
      const newNode = {
        id: getNodeId(),
        data: { label: values.label },
        type: values.type,
        position: { x: values.x, y: values.y },
      };

      onAddNode(newNode);
      form.reset();
      setIsSheetOpen(false);
    } catch (error) {
      console.error("Error adding node:", error);
    }
  };

  const handleOpen = () => setIsSheetOpen(true);
  const handleClose = () => setIsSheetOpen(false);

  return (
    <ManageSheet
      label="New Node"
      title="Add New Node"
      description="Create a new node for your flow."
      isUpdate={false}
      isOpen={isSheetOpen}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="label"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Label</FormLabel>
                <FormControl>
                  <Input placeholder="Type node label" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rectangle">Rectangle</SelectItem>
                      <SelectItem value="ellipse">Ellipse</SelectItem>
                      <SelectItem value="parallelogram">
                        Parallelogram
                      </SelectItem>
                      <SelectItem value="circle">Circle</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add Node</Button>
        </form>
      </Form>
    </ManageSheet>
  );
};

const getNodeId = () => `node_${+new Date()}`;
