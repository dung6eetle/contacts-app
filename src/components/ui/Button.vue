<template>
  <button @click="click">{{ title }}</button>
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
