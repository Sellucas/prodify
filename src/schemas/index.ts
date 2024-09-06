import * as z from "zod";

export const CardSchema = z.object({
  title: z.string().min(3),
  description: z.string().max(60),
  status: z
    .enum(["backlog", "todo", "doing", "reviewing", "done"])
    .default("backlog"),
  tag: z
    .enum([
      "code",
      "design",
      "code review",
      "research",
      "bug",
      "enchantment",
      "documentation",
      "testing",
      "discussion",
      "implementation",
      "feedback",
      "refactoring",
    ])
    .default("code"),
  priority: z.enum(["high", "medium", "low"]).default("medium"),
  position: z.number().default(999),
});

export const BoardSchema = z.object({
  title: z.string().min(3),
  description: z.string().max(60).optional(),
});

export const NodeSchema = z.object({
  label: z.string().min(1, "Label is required"),
  type: z
    .enum(["circle", "ellipse", "rectangle", "parallelogram"])
    .default("rectangle"),
  x: z.number().int(),
  y: z.number().int(),
});
