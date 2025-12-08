<template>
  <pre>{{ page.meta.date }}</pre>
  <pre>{{ stages[page.meta.stage as number] }}</pre>
</template>

<script setup lang="ts">
import type { ContentCollectionItem } from "@nuxt/content";

const { page } = defineProps<{
  page: ContentCollectionItem;
}>();

const stages = ["scribble", "draft", "review", "published", "archived"];
</script>
