<template>
  <nav>
    <ul>
      <li v-for="link of navLinks" :key="link.path">
        <a :href="link.path">{{ link.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
// Get the app baseURL setting
const { data: navigation } = await useAsyncData(() =>
  queryCollectionNavigation("content")
);

const navLinks = computed(() => {
  return (navigation.value || []).map((link) => ({
    ...link,
    path: getLinkPath(link.path),
  }));
});

for (const link of navLinks.value) {
  prerenderRoutes(link.path);
}
</script>
