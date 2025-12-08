<template>
  <pre>{{ page.createdAt }} ({{ displayStage }})</pre>
</template>

<script setup lang="ts">
import type { ContentCollectionItem } from "@nuxt/content";

const { page } = defineProps<{
  page: ContentCollectionItem;
}>();

const stages = ["scribble", "draft", "review", "published", "archived"];
const displayStage = computed(() => {
  return stages[(page.stage || 0) as number];
});
</script>
