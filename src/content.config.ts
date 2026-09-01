import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const kalenderBatch = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/kalender-batch" }),
  schema: z.object({
    month: z.string(), // e.g. "Maret"
    year: z.number(),
    intakeDates: z.array(z.string()), // e.g. ["10 Maret", "25 Maret"]
    program: z.string(),
    status: z.enum(["tersedia", "hampir-penuh", "penuh"]),
    highlight: z.string().optional(),
  }),
});

const alumni = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/alumni" }),
  schema: z.object({
    name: z.string(), // e.g. "Alumni Bootcamp 3 Bulan" or "HR Manager, Program Instansi"
    track: z.enum(["offline", "online", "rombongan"]),
    scoreType: z.enum(["toefl", "ielts"]).optional(),
    scoreBefore: z.number().optional(),
    scoreAfter: z.number().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { "kalender-batch": kalenderBatch, alumni };
