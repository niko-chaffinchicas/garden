<template>
  <ContentRenderer :value="page" />

  <hr />

  <h2>Recently Created Pages</h2>
  <ul>
    <li v-for="page in recentlyCreated" :key="page.path">
      <a :href="getLinkPath(page.path)">
        {{ page.title }}<br />
        <small>{{ format(new Date(page.createdAt), "MMM d, yyyy") }}</small>
      </a>
    </li>
  </ul>

  <h2>Recently Updated Pages</h2>
  <ul>
    <li v-for="page in recentlyUpdated" :key="page.path">
      <a :href="getLinkPath(page.path)">
        {{ page.title }}<br />
        <small>
          updated: {{ format(new Date(page.updatedAt!), "MMM d, yyyy") }}
        </small>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { ContentCollectionItem } from "@nuxt/content";
import { format } from "date-fns";

defineProps<{
  page: ContentCollectionItem;
}>();

const recentlyCreated = await queryCollection("content")
  .order("createdAt", "DESC")
  .where("archived", "=", false)
  .limit(4)
  .all();
const recentlyUpdated = await queryCollection("content")
  .where("updatedAt", "IS NOT NULL")
  .where("archived", "=", false)
  .order("updatedAt", "DESC")
  .limit(4)
  .all();
</script>
