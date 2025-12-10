<template>
  <nav>
    <ul>
      <li v-for="link of navigation" :key="link.path">
        <a :href="getLinkPath(link.path)">{{ link.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
// Get the app baseURL setting
const { data: navigation } = await useAsyncData(() =>
  queryCollectionNavigation("content")
);
</script>
