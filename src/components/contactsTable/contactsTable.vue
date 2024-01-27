<template>
  <div class="contacts-table">
    <div class="header">
      <h5>Avatar</h5>
      <h5>
        Fullname
        <SortByName title="Aa-Zz" :sort="sortByNameTop" />
        <SortByName title="Zz-Aa" :sort="sortByNameBottom" />
        <input type="text" v-model="name" placeholder="Searh By Name" />
      </h5>
      <h5>Birthday</h5>
      <h5>Email</h5>
      <h5>Phone</h5>
      <h5>Location</h5>
      <h5>Nationality</h5>
    </div>
    <div class="body">
      <ContactRow v-for="row in rows" :key="row.cell" :row="row" />
    </div>
  </div>
</template>

<script>
import ContactRow from "./contactRow.vue";
import { mapMutations } from "vuex";
import SortByName from "../sorting/sortByName.vue";

export default {
  props: {
    perPage: {
      type: Number,
    },
    pageNumber: {
      type: Number,
    },
    contacts: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    ContactRow,
    SortByName,
    // PaginationComponent,
  },
  data() {
    return {
      name: "",
    };
  },
  computed: {
    rows() {
      let from = (this.pageNumber - 1) * this.perPage;
      let to = from + this.perPage;
      return this.contacts.slice(from, to);
    },
  },
  methods: {
    ...mapMutations(["SORT_BY_NAME_TO_TOP", "SORT_BY_NAME_TO_BOTTOM"]),

    sortByNameBottom() {
      this.SORT_BY_NAME_TO_BOTTOM();
    },
    sortByNameTop() {
      this.SORT_BY_NAME_TO_TOP();
    },
  },
};
</script>

<style scoped>
.contacts-table {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

p {
  text-align: left;
  flex-basis: 14%;
}
</style>
