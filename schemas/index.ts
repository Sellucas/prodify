import * as z from "zod";

export const CardSchema = z.object({
  title: z.string().min(3),
  description: z.string().max(60),
  status: z
    .enum(["backlog", "todo", "doing", "reviewing", "done"])
    .default("backlog"),
  position: z.number().default(999),
});

export const BoardSchema = z.object({
  title: z.string().min(3),
  description: z.string().max(60).optional(),
});
