<template>
  <template v-if="page">
    <PageHeader :page="page" />
    <ContentRenderer :value="page" />
  </template>
  <div v-else>
    page not found for {{ route.path }}<br>
    did you mean to query for {{ route.path.split('/').pop() }}?
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const page = await queryCollection("content").path(route.path).first();

useSeoMeta({
  title: page?.title,
  description: page?.description,
});
</script>
