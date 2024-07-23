"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { addBoard } from "@/actions/add-board";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/user-context";
import { Textarea } from "@/components/ui/textarea";
import { ManageSheet } from "@/app/(protected)/dashboard/_components/manage-sheet";

export const BoardForm = () => {
  const { user, loading } = useUser();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const form = useForm<z.infer<typeof BoardSchema>>({
    resolver: zodResolver(BoardSchema),
    defaultValues: {
      title: "",
      description: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof BoardSchema>) => {
    try {
      if (!user) {
        throw new Error("User not found");
      }

      const boardData = {
        ...values,
        user_id: user.user_id,
      };

      await addBoard(boardData);

      form.reset();
      setIsSheetOpen(false);
    } catch (error) {
      console.error("Error inserting the board:", error);
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
