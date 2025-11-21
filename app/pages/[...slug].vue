<template>
  <pre v-if="page">{{ page.meta.date }}</pre>
  <ContentRenderer v-if="page" :value="page" />
  <div v-else>page not found</div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(() =>
  queryCollection("content").path(route.path).first()
);

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});
</script>
