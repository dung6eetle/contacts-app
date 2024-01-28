<template>
  <div class="contact-row">
    <div class="row">
      <img :src="row.picture.medium" />
    </div>
    <div class="row">
      {{ getFullName(row.name) }}
    </div>
    <div class="row">
      {{ getFullDate(row.dob) }}
    </div>
    <div @click="copy(row.email)" class="row copy">{{ row.email }}</div>
    <div @click="copy(row.phone)" class="row copy">{{ row.phone }}</div>
    <div class="row">{{ row.location.country }}</div>
    <div class="row">{{ row.nat }}</div>
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
.contact-row {
  display: flex;
}
.row {
  flex-basis: 14%;
  margin-right: 5px;
}
.row:last-child {
  text-align: end;
}
.copy:hover {
  color: #277ace;
  cursor: pointer;
}
</style>
