import * as z from "zod";

export const CardSchema = z.object({
  title: z.string().min(3),
  description: z.string().max(60),
  status: z
    .enum(["Backlog", "To Do", "In Progress", "To Review", "Complete"])
    .default("Backlog"),
  priority: z.enum(["Low", "Medium", "High"]).optional(),
  type: z.enum(["Bug", "Feature", "Task"]).optional(),
});

export const BoardSchema = z.object({
  title: z.string().min(3),
  description: z.string().max(60),
});
