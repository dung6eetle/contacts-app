<template>
  <div class="statistics">
    <div>Collection size: {{ statistics.collectionSize }}</div>
    <div>
      Males: {{ statistics.maleCount }}, Females: {{ statistics.femaleCount }},
      Netuda-Nesuda:
      {{ statistics.undecidedCount }}
    </div>
    <div>More by gender: {{ statistics.moreCommonGender }}</div>
    <div>
      Contacts by nationality:
      <ul>
        <li
          v-for="(count, nationality) in statistics.nationalityCounts"
          :key="nationality"
        >
          {{ nationality }}: {{ count }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      statistics: "contacts/statistics",
    }),
  },
};
</script>

<style scoped>
.statistics {
  margin-top: 30px;
  padding: 15px 15px;
  border-top: 2px solid grey;
}
</style>
