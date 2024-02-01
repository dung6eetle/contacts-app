<template>
  <button class="btn" @click="click">{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>
<style scoped>
.btn {
  border-radius: 5px;
  padding: 5px;
  font-size: 1em;
  cursor: pointer;
}
.btn:hover {
  color: #545151;
}
</style>
