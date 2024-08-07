"use client";

import * as z from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { BoardSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/user-context";
import { Textarea } from "@/components/ui/textarea";
import { addBoard } from "@/app/(protected)/dashboard/board/actions";
import { ManageSheet } from "@/app/(protected)/dashboard/board/_components/manage-sheet";

export const BoardForm = () => {
  const { user } = useUser();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const form = useForm<z.infer<typeof BoardSchema>>({
    resolver: zodResolver(BoardSchema),
    defaultValues: {
      title: "",
      description: undefined,
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof BoardSchema>> = async (
    values,
  ) => {
    try {
      if (!user) {
        throw new Error("User not found");
      }

      const boardData = {
        ...values,
        user_id: user.user_id,
      };

      console.log("Submitting board data:", boardData);

      const result = await addBoard(boardData);

      if (result.error) {
        console.error("Add board error:", result.error);
        throw new Error(result.error);
      }

      form.reset();
      setIsSheetOpen(false);
      toast.success("Board created successfully");
    } catch (error) {
      console.error("Error inserting the board:", error);
      toast.error("Failed to create board");
    }
  };

  const handleOpen = () => setIsSheetOpen(true);
  const handleClose = () => setIsSheetOpen(false);

  return (
    <ManageSheet
      label="New board"
      title="Add new board"
      description="Create a new board to organize your tasks."
      isUpdate={false}
      isOpen={isSheetOpen}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 md:space-y-8"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Type your title here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your description here"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </ManageSheet>
  );
};
