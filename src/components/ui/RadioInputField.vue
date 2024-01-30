<template>
  <div class="wrapper">
    <input
      class="radio"
      type="radio"
      :value="value"
      :id="value"
      :checked="checked"
      @change="(e) => $emit('change', e.target.value)"
    />
    <label :for="value">{{ value }}</label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    checked: {
      type: Boolean,
    },
  },
};
</script>

<style></style>
