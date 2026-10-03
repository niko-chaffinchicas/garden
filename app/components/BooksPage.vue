<template>
  <h1>Books</h1>

  <div v-for="list in lists" :key="list.title">
    <h2>{{ list.title }}</h2>
    <ul>
      <li v-for="book in list.books" :key="book.path">
        <a :href="book.path">
          {{ book.title }}
          <span v-if="book.author">by {{ book.author }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const books = await queryCollection("book").order('order').all();

const wantToRead = books.filter(
  (book) => book.readingStatus === "want_to_read",
);
const startedReading = books.filter(
  (book) => book.readingStatus === "started_reading",
);
const finishedReading = books.filter(
  (book) => book.readingStatus === "finished_reading",
);

const lists = [
  { title: 'Currently Reading', books: startedReading },
  { title: 'Want to Read', books: wantToRead },
  { title: 'Finished Reading', books: finishedReading },
];
</script>
