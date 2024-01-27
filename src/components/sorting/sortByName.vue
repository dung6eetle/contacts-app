<template>
  <span @click="sort" class="sorting">
    {{ title }}
  </span>
</template>

<script>
export default {
  props: {
    sort: {
      type: Function,
      default: () => {},
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.sorting {
  border: 0.5px solid grey;
  cursor: pointer;
}
</style>
