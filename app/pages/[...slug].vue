<template>
  <ContentPage v-if="page" :page="page" />
  <div v-else>
    page not found for {{ route.path }}<br />
    did you mean to query for {{ route.path.split("/").pop() }}?
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const collection = route.path.startsWith("/books/") ? "book" : "content";
const page = await queryCollection(collection).path(route.path).first();

useSeoMeta({
  title: page?.title,
  description: page?.description,
});
</script>
