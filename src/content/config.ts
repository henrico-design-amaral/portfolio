import { defineCollection, z } from 'astro:content';

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['pt', 'en']),
    caseSlug: z.string(),
    title: z.string(),
    client: z.string(),
    system: z.string(),
    sector: z.string(),
    type: z.string(),
    role: z.string(),
    scope: z.string(),
    platform: z.string(),
    order: z.number(),
    heroImage: z.string(),
    description: z.string(),
    lead: z.string(),
    domain: z.string(),
    users: z.string(),
    outcome: z.string(),
    evidence: z.string(),
    stats: z.array(z.object({
      value: z.string(),
      unit: z.string(),
      description: z.string(),
    })),
    prevCase: z.object({ slug: z.string(), name: z.string() }).optional(),
    nextCase: z.object({ slug: z.string(), name: z.string() }).optional(),
  }),
});

export const collections = { cases };
