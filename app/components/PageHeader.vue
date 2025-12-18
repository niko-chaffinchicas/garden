<template>
  <div class="page-header">
    <Badge title="Created at" leadingIcon="uil:clock-two">
      {{ displayCreatedAt }}
    </Badge>
    <Badge title="Stage of development">
      <template #leading>
        <code>{{ page.stage }}</code>
      </template>
      {{ displayStage }}
    </Badge>
  </div>
</template>

<script setup lang="ts">
import type { ContentCollectionItem } from "@nuxt/content";
import { format } from "date-fns";

const { page } = defineProps<{
  page: ContentCollectionItem;
}>();

const stages = ["scribble", "draft", "review", "published", "archived"];
const displayStage = computed(() => {
  return stages[(page.stage || 0) as number];
});
const displayCreatedAt = computed(() => {
  return format(new Date(page.createdAt), "MMM d, yyyy");
});
</script>

<style scoped>
.page-header {
  display: flex;
  align-items: center;
  margin-bottom: var(--space-2);
  color: #555;
}
</style>
