import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = z.object({
  title: z.string(),
  location: z.string(),
  area: z.string(),
  date: z.string(),
  year: z.number(),
  sort: z.number(),
  order: z.number(),
  folder: z.string(),
  category: z.string(),
  summary: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: work,
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: work,
});

export const collections = { projects, gallery };
