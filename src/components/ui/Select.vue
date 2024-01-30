<template>
  <select @change="(e) => $emit('change', e.target.value)" :value="value">
    <option label="Please choose" key="1"></option>
    <option v-for="option in options" :value="option" :key="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    options: {
      type: Array,
    },
  },
};
</script>

<style></style>
