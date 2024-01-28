<template>
  <div class="contact-row">
    <div class="row avatar">
      <img :src="row.picture.medium" />
    </div>
    <div class="row fullname">
      {{ getFullName(row.name) }}
    </div>
    <div class="row birthday">
      {{ getFullDate(row.dob) }}
    </div>
    <div @click="copy(row)" class="row email">{{ row.email }}</div>
    <div class="row phone">{{ row.phone }}</div>
    <div class="row location">{{ row.location.country }}</div>
    <div class="row nationality">{{ row.nat }}</div>
  </div>
</template>

<script>
export default {
  props: {
    row: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {},
  methods: {
    copy({ email }) {
      this.$copyText(email).then(() => alert(`COPY: ${email}`));
    },
    getFullName({ title, first, last }) {
      return title + " " + first + " " + last;
    },
    getFullDate({ date, age }) {
      return (
        this.moment(date).format("dddd") +
        " " +
        this.moment(date).format("DD/MM/YYYY hh:mm a") +
        " " +
        "Age:" +
        age
      );
    },
  },
};
</script>

<style>
.contact-row {
  display: flex;
}
.row {
  flex-basis: 14%;
}
</style>
