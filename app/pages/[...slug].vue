<template>
  <template v-if="page">
    <IndexPage v-if="route.path === '/'" :page="page"></IndexPage>
    <BooksPage v-if="route.path === '/books/'" :page="page"></BooksPage>
    <ContentPage v-else :page="page" />
  </template>
  <div v-else>
    page not found for {{ route.path }}<br />
    did you mean to query for {{ route.path.split("/").pop() }}?
  </div>
</template>

<script setup lang="ts">
import IndexPage from "~/components/IndexPage.vue";

const route = useRoute();
const collection = route.path.startsWith("/books/") ? "book" : "content";
const page = await queryCollection(collection).path(route.path).first();

useSeoMeta({
  title: page?.title,
  description: page?.description,
});
</script>
