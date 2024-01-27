<template>
  <div class="contact-row">
    <div class="row avatar">
      <img :src="row.picture.medium" />
    </div>
    <div class="row fullname">
      {{ getFullName(row.name) }}
    </div>
    <div class="row birthday">{{ row.dob.date }}</div>
    <div class="row email">{{ row.email }}</div>
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
  methods: {
    getFullName({ title, first, last }) {
      return title + " " + first + " " + last;
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
