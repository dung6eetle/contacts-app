<template>
  <div class="contacts-page">
    <div class="controls">
      <SortByName title="Aa-Zz" :sort="sortByNameTop" />
      <SortByName title="Zz-Aa" :sort="sortByNameBottom" />
      <input type="text" v-model="name" placeholder="Searh By Name" />
      <!-- <ModeSet/> тут будет контрол ТАБЛА/ПЛИТКА свитч или buttons -->
    </div>
    <ContactsTable :perPage="perPage" :pageNumber="pageNumber" :rows="rows" />
    <Pagination @selectPage="selectPage" :pageNumber="pageNumber" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import ContactsTable from "@/components/contactsTable/ContactsTable.vue";
import Pagination from "@/components/pagination/Pagination.vue";
import SortByName from "@/components/sorting/SortByName.vue";

export default {
  components: {
    ContactsTable,
    Pagination,
    SortByName,
  },
  computed: {
    ...mapGetters(["CONTACTS"]),
    rows() {
      let from = (this.pageNumber - 1) * this.perPage;
      let to = from + this.perPage;
      return this.CONTACTS.slice(from, to);
    },
  },
  data() {
    return {
      perPage: 10,
      pageNumber: 1,
      name: "",
    };
  },
  methods: {
    ...mapActions(["GET_CONTACTS"]),
    ...mapMutations(["SORT_BY_NAME_TO_TOP", "SORT_BY_NAME_TO_BOTTOM"]),
    sortByNameBottom() {
      this.SORT_BY_NAME_TO_BOTTOM();
    },
    sortByNameTop() {
      this.SORT_BY_NAME_TO_TOP();
    },
    selectPage(page) {
      this.pageNumber = page;
    },
  },
  mounted() {
    this.GET_CONTACTS();
  },
};
</script>

<style scoped>
.contacts-page {
  max-width: 900px;
  margin: 0 auto;
}
.controls {
  max-width: 300px;
  display: flex;
  flex-flow: row nowrap;
  grid-gap: 5px;
  justify-content: flex-start;
}
</style>
