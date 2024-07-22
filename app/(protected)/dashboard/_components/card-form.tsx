import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CardSchema } from "@/schemas";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type CardFormProps = {
  onSubmit: (values: z.infer<typeof CardSchema>) => void;
  defaultValues?: z.infer<typeof CardSchema>;
};

const CardForm = ({ onSubmit, defaultValues }: CardFormProps) => {
  const form = useForm<z.infer<typeof CardSchema>>({
    resolver: zodResolver(CardSchema),
    defaultValues: defaultValues || {
      title: "",
      description: "",
      status: "backlog",
      tag: "code",
      priority: "medium",
    },
  });

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
        <div className="flex flex-col items-left gap-4 md:flex-row md:items-center md:gap-0 w-full justify-between">
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="backlog">Backlog</SelectItem>
                      <SelectItem value="todo">To Do</SelectItem>
                      <SelectItem value="doing">In Progress</SelectItem>
                      <SelectItem value="reviewing">To Review</SelectItem>
                      <SelectItem value="done">Complete</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tag"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Tags" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="code">Code</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="code review">Code Review</SelectItem>
                      <SelectItem value="research">Research</SelectItem>
                      <SelectItem value="bug">Bug</SelectItem>
                      <SelectItem value="enchantment">Enchantment</SelectItem>
                      <SelectItem value="documentation">
                        Documentation
                      </SelectItem>
                      <SelectItem value="testing">Testing</SelectItem>
                      <SelectItem value="discussion">Discussion</SelectItem>
                      <SelectItem value="implementation">
                        Implementation
                      </SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="refactoring">Refactoring</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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

export default CardForm;
