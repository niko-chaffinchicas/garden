<template>
  <NuxtLayout>
    <NavBar />
    <NuxtPage />
  </NuxtLayout>

  <hr />

  <p>
    <small>Pages: {{ pages }}</small>
  </p>
  <p>
    <small>Books: {{ books }}</small>
  </p>
</template>

<script setup lang="ts">
const pages = await queryCollection("content")
  .where("archived", "=", false)
  .select("path")
  .all();
const books = await queryCollection("book")
  .where("archived", "=", false)
  .select("path")
  .all();

// Pre-renders all of the routes for the content collection items
prerenderRoutes([...pages, ...books].map((p) => getLinkPath(p.path)));
</script>
