<template>
  <PageHeader v-if="page" :page="page" />
  <ContentRenderer v-if="page" :value="page" />
  <div v-else>page not found</div>
</template>

<script setup lang="ts">
const route = useRoute();
const page = await queryCollection("content").path(route.path).first();

useSeoMeta({
  title: page?.title,
  description: page?.description,
});
</script>
