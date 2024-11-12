import { defineCollection, z } from "astro:content";

export const sessionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  date: z.object({
    from: z.string(),
    to: z.string().optional(),
  }),
  resources: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    }),
  ),
});

export const daySchema = z.object({
  session: z.string(),
  date: z.date(),
  title: z.string(),
  mindmap: z.string().optional(),
  references: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    }),
  ),
  homework: z.array(z.string()).optional(),
  future: z.boolean().optional(),
});

const session = defineCollection({
  type: "data",
  schema: sessionSchema,
});

const day = defineCollection({
  type: "content",
  schema: daySchema,
});

export const collections = {
  day,
  session,
};
