<template>
  <div class="pagination">
    <div
      @click="$emit('selectPage', page)"
      v-for="page in pages"
      :class="{ page: true, pageSelect: page === pageNumber }"
      :key="page"
    >
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageNumber: {
      type: Number,
      default: 1,
    },
    pages: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style scoped>
.pagination {
  margin-top: 10px;
  display: flex;
}
.page {
  color: black;
  border: 1px solid #e0ffff;
  padding: 5px;
  cursor: pointer;
}
.page:hover {
  border: 1px solid #277ace;
}
.pageSelect {
  color: white;
  background: #4b0082;
}
</style>
