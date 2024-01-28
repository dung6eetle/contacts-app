<template>
  <div class="card">
    <div class="row avatar">
      <img :src="row.picture.medium" />
    </div>
    <div class="row fullname">
      {{ getFullName(row.name) }}
    </div>
    <div @click="copy(row)" class="row email">{{ row.email }}</div>
    <div class="row phone">{{ row.phone }}</div>
    <div class="row location">{{ row.location.country }}</div>
    <div class="row nationality">{{ row.nat }}</div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    row: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    copy({ email }) {
      this.$copyText(email).then(() => alert(`COPY: ${email}`));
    },
    getFullName({ title, first, last }) {
      return title + " " + first + " " + last;
    },
    getFullDate({ date, age }) {
      return (
        moment(date).format("dddd") +
        " " +
        moment(date).format("DD/MM/YYYY hh:mm a") +
        " " +
        "Age:" +
        age
      );
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
