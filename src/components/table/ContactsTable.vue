<template>
  <div class="contacts-table">
    <div class="header">
      <h5>Avatar</h5>
      <h5>Fullname</h5>
      <h5>Birthday</h5>
      <h5>Email</h5>
      <h5>Phone</h5>
      <h5>Location</h5>
      <h5>Nationality</h5>
    </div>
    <div class="body">
      <ContactRow v-for="row in rows" :key="row.cell" :row="row" />
    </div>
  </div>
</template>

<script>
import ContactRow from "./ContactRow.vue";

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
    ContactRow,
  },
};
</script>

<style scoped>
.contacts-table {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

p {
  text-align: left;
  flex-basis: 14%;
}
</style>
