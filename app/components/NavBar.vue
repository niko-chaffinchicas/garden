<template>
  <nav>
    <ul>
      <li v-for="link of navigation" :key="link.path">
        <NuxtLink :to="link.path">{{ link.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const { data: navigation } = await useAsyncData(() =>
  queryCollectionNavigation("content")
);
</script>
