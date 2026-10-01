<template>
  <template v-if="page">
    <IndexPage v-if="route.path === '/'" :page="page"></IndexPage>
    <ContentPage v-else :page="page" />
  </template>
  <BooksPage v-else-if="route.path === '/books/'"></BooksPage>
  <div v-else>
    page not found for {{ route.path }}<br />
    did you mean to query for {{ route.path.split("/").pop() }}?
  </div>
</template>

<script setup lang="ts">
import type { ContentCollectionItem } from "@nuxt/content";
import IndexPage from "~/components/IndexPage.vue";

const route = useRoute();
let page: ContentCollectionItem | null = null;

if (route.path === "/books/") {
  useSeoMeta({
    title: "Books",
  });
} else {
  const collection = route.path.startsWith("/books/") ? "book" : "content";
  page = await queryCollection(collection).path(route.path).first();

  useSeoMeta({
    title: page?.title,
    description: page?.description,
  });
}
</script>
