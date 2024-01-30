<template>
  <table class="contacts-table">
    <thead>
      <th>Avatar</th>
      <th>Fullname</th>
      <th>Birthday</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Location</th>
      <th>Nationality</th>
    </thead>
    <tbody>
      <Row v-for="row in rows" :key="row.cell" :row="row" />
    </tbody>
  </table>
</template>

<script>
import Row from "./Row.vue";

export default {
  props: {
    perPage: {
      type: Number,
    },
    pageNumber: {
      type: Number,
    },
    rows: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    Row,
  },
};
</script>
