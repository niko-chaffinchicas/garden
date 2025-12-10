<template>
  <nav>
    <ul>
      <li v-for="link of navigation" :key="link.path">
        <a :href="link.path">{{ link.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const { data: navigation } = await useAsyncData(() =>
  queryCollectionNavigation("content")
);
</script>
