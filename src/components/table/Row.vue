<template>
  <tr>
    <td>
      <img :src="row.picture.medium" />
    </td>
    <td>{{ getFullName(row.name) }}</td>
    <td>{{ getFullDate(row.dob) }}</td>
    <td class="row copy" @click="copyToClipboard(row.email)">
      {{ row.email }}
    </td>
    <td @click="copyToClipboard(row.phone)" class="row copy">
      {{ row.phone }}
    </td>
    <td>{{ row.location.country }}</td>
    <td>{{ row.nat }}</td>
  </tr>
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
    copyToClipboard(text) {
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
