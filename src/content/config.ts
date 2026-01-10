import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      date: z.date(),
      category: z.string(),
      tags: z.array(z.string()).optional(),
      excerpt: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
  }),

  categories: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      color: z.string().optional(),
    }),
  }),

  tags: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      color: z.string().optional(),
    }),
  }),
};
