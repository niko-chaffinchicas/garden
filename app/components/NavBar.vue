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
// const { data: navigation } = await useAsyncData(() =>
//   queryCollectionNavigation("content")
// );

// const navLinks = computed(() => {
//   return (navigation.value || [])
//     // filter down to links to stems/groups
//     .filter((link) => !!link.stem)
//     .map((link) => ({
//       ...link,
//       path: getLinkPath(link.path),
//     })
//     // put the index link first, then sort alpha after that
//     // .sort((a, b) => {
//     //   if (a.stem === 'index' || a > b) { return -1; }
//     //   if (b.stem === 'index' || b > a) { return 1; }
//     //   return 0;
//     // }),
//   );
// });

const navLinks = computed(() => {
  return [
    { title: "Garden Gate", path: getLinkPath("/") },
    { title: "Books", path: getLinkPath("/books") },
  ];
});

// Makes sure that the nav routes are pre-rendered
for (const link of navLinks.value) {
  prerenderRoutes(link.path);
}
</script>
