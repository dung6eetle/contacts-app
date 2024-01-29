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
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 1.5rem;
  width: 100%;
  max-width: 1400px;
  margin: 2vh auto;
}
</style>
