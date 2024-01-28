<template>
  <div class="contacts-page">
    <div class="controls">
      <button @click="sortTop" class="sorting">Aa-Zz</button>
      <button @click="sortBottom" class="sorting">Zz-Aa</button>

      <input
        type="text"
        :value="nameFilter"
        @input="(e) => setFilteredName(e.target.value)"
        placeholder="Searh By Name"
      />
      <!-- <ModeSet/> тут будет контрол ТАБЛА/ПЛИТКА свитч или buttons -->
    </div>
    <ContactsTable :perPage="perPage" :pageNumber="pageNumber" :rows="rows" />
    <Cards
      v-if="false"
      :perPage="perPage"
      :pageNumber="pageNumber"
      :rows="rows"
    />
    <Pagination
      @selectPage="selectPage"
      :pageNumber="pageNumber"
      :pages="pages"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import ContactsTable from "@/components/table/ContactsTable";
import Cards from "@/components/cards/Cards";
import Pagination from "@/components/pagination/Pagination";

export default {
  components: {
    ContactsTable,
    Cards,
    Pagination,
  },
  computed: {
    ...mapGetters({
      nameFilter: "contacts/nameFilter",
      currentSort: "contacts/currentSort",
      processedResults: "contacts/processedResults",
    }),
    rows() {
      const from = (this.pageNumber - 1) * this.perPage;
      const to = from + this.perPage;
      return this.processedResults.slice(from, to);
    },
    pages() {
      return Math.ceil(this.processedResults.length / 10);
    },
  },
  data() {
    return {
      perPage: 10,
      pageNumber: 1,
      name: "",
      // currentSort: "",
    };
  },
  watch: {
    name(next) {
      console.log(next, "name");
      // this.filterByName(next);
    },
  },
  methods: {
    ...mapActions({
      // filterByName: "contacts/filterByName",
      getContacts: "contacts/getContacts",
    }),
    ...mapMutations({
      setFilteredName: "contacts/setFilteredName",
      sortByNameToTop: "contacts/sortByNameToTop",
      sortByNameToBottom: "contacts/sortByNameToBottom",
      reset: "contacts/reset",
    }),
    selectPage(page) {
      this.pageNumber = page;
    },
    resetSort() {
      this.reset();
    },
    sortTop() {
      if (this.currentSort === "top") {
        this.resetSort();
        return;
      }

      this.sortByNameToTop();
    },
    sortBottom() {
      if (this.currentSort === "bottom") {
        this.resetSort();
        return;
      }

      this.sortByNameToBottom();
    },
  },
  mounted() {
    this.getContacts();
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
.sorting {
  border: 0.5px solid grey;
  cursor: pointer;
  height: 20px;
  font-size: 16px;
  width: max-content;
}
</style>
