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

<style scoped>
/* .contacts-table {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
} */

/* .header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 5px 0px;
  height: 50px;
} */

/* p {
  text-align: left;
  flex-basis: 14%;
} */
</style>
