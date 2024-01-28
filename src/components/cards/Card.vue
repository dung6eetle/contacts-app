<template>
  <div class="card">
    <div class="row avatar">
      <img :src="row.picture.medium" />
    </div>
    <div class="row fullname">
      {{ getFullName(row.name) }}
    </div>
    <div @click="copy(row.email)" class="row email">{{ row.email }}</div>
    <div @click="copy(row.phone)" class="row phone">{{ row.phone }}</div>
    <div class="row location">{{ row.location.country }}</div>
    <div class="row nationality">{{ row.nat }}</div>
  </div>
</template>

<script>
import { getFullName } from "@/helpers/getFullName";
import { getFullDate } from "@/helpers/getFullDate";

export default {
  props: {
    row: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    copy(text) {
      this.$copyText(text).then(() => alert(`COPY: ${text}`));
    },
    getFullName({ title, first, last }) {
      return getFullName({ first, last }, title);
    },
    getFullDate({ date, age }) {
      return getFullDate({ date, age });
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 16px;
  border: 1px solid #4133b7;
  box-shadow: 0 30px 30px -25px rgba(#4133b7, 0.25);
  max-width: 300px;
  padding: 20px 15px;
}
</style>
