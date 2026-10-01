<template>
  <PageHeader :page="page" />
  <ContentRenderer :value="page" />
</template>

<script setup lang="ts">
import type { ContentCollectionItem } from "@nuxt/content";

defineProps<{
  page: ContentCollectionItem;
}>();
</script>
