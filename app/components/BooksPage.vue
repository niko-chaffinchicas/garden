<template>
  <h1>Books</h1>

  <template v-for="list in lists" :key="list.title">
    <h2>Want to Read</h2>
    <ul>
      <li v-for="book in wantToRead" :key="book.path">
        <a :href="book.path">
          {{ book.title }}
          <span v-if="book.author">by {{ book.author }}</span>
        </a>
      </li>
    </ul>
  </template>

  <!--

  <h2>Currently Reading</h2>
  <ul>
    <li v-for="book in startedReading" :key="book.path">
      <a :href="book.path">
        {{ book.title }}
        <span v-if="book.author">by {{ book.author }}</span>
      </a>
    </li>
  </ul>

  <h2>Finished Reading</h2>
  <ul>
    <li v-for="book in finishedReading" :key="book.path">
      <a :href="book.path">
        {{ book.title }}
        <span v-if="book.author">by {{ book.author }}</span>
      </a>
    </li>
  </ul>
  -->
</template>

<script setup lang="ts">
const books = await queryCollection("book").all();

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
  { title: 'Want to Read', books: wantToRead },
  { title: 'Currently Reading', books: startedReading },
  { title: 'Finished Reading', books: finishedReading },
];
</script>
