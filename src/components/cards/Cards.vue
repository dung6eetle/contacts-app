<template>
  <div class="cards">
    <Card v-for="row in rows" :key="row.cell" :row="row" />
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
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
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
  margin: 2vh auto;
}
</style>
