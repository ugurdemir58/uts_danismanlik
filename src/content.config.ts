import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const duyurular = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/duyurular' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().default('Duyurular'),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { duyurular };
