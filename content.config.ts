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
                stage: z.number().optional().describe('The stage of the post, expressed an integer').default(0),
            }),
        }),
    },
});