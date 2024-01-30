<template>
  <input
    type="text"
    :value="value"
    @input="(e) => $emit('input', e.target.value)"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
};
</script>

<style></style>
