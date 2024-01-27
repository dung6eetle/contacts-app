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
  },
  computed: {
    pages() {
      return Math.ceil(this.$store.state.contacts.length / 10);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
}
.page {
  color: black;
  border: 1px solid #e0ffff;
  padding: 5px;
  cursor: pointer;
}
.page:hover {
  border: 2px solid #0000cd;
}
.pageSelect {
  color: white;
  background: #4b0082;
}
</style>
