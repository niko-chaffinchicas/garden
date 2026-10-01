import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: '**/*.md',
            schema: z.object({
                createdAt: z.date().describe('The date the post was created'),
                updatedAt: z.date().optional().describe('The date the post was last updated'),
                stage: z.number().default(0).describe('The stage of the post, expressed an integer'),
            }),
        }),
        book: defineCollection({
            type: 'data',
            source: 'books/*.md',
            schema: z.object({
                createdAt: z.date(),
                updatedAt: z.date().optional(),
                title: z.string(),
                order: z.number().default(0),
                readingStatus: z.enum(['finished_reading', 'started_reading', 'want_to_read']).default('want_to_read')
            }),
        }),
    },
});