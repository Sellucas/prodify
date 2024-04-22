"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { BoardSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useAddBoard from "@/hooks/use-add-board";
import useCurrentUser from "@/hooks/use-current-user";

export const BoardForm = () => {
  const currentUser = useCurrentUser();

  const form = useForm<z.infer<typeof BoardSchema>>({
    resolver: zodResolver(BoardSchema),
    defaultValues: {
      title: "",
      description: undefined,
    },
  });

  const { insertNewBoard } = useAddBoard();

  const onSubmit = async (values: z.infer<typeof BoardSchema>) => {
    try {
      if (!currentUser) {
        throw new Error("User not found");
      }
      const boardData = {
        ...values,
        user_id: currentUser.user_id,
      };
      await insertNewBoard(boardData);
      form.reset();
      window.location.reload();
    } catch (error) {
      console.error("Error inserting the board:");
    }
  };

  return (
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
                <Textarea placeholder="Type your description here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
