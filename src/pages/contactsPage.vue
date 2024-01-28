<template>
  <div class="contacts-page">
    <div v-if="true" class="controls">
      <button @click="sortTop" class="sorting">Aa-Zz</button>
      <button @click="sortBottom" class="sorting">Zz-Aa</button>
      <!-- <button @click="sortMale" class="filter">Male</button> -->
      <!-- <button @click="sortFemale" class="filter">Female</button> -->
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
      // currentGender: "contacts/currentGender",
      processedResults: "contacts/processedResults",
      role: "user/role",
    }),
    rows() {
      const from = (this.pageNumber - 1) * this.perPage;
      const to = from + this.perPage;
      return this.processedResults.slice(from, to);
    },
    pages() {
      return Math.ceil(this.processedResults.length / 10);
    },
    isShowControls() {
      return this.role === "admin";
    },
  },
  data() {
    return {
      perPage: 10,
      pageNumber: 1,
      isShowFilters: false,
    };
  },
  methods: {
    ...mapActions({
      getContacts: "contacts/getContacts",
    }),
    ...mapMutations({
      setFilteredName: "contacts/setFilteredName",
      // sortByMale: "contacts/sortByMale",
      // sortByFemale: "contacts/sortByFemale",
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
    // sortMale() {
    //   this.sortByMale();
    // },
    // sortFemale() {
    //   this.sortByFemale();
    // },
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
  max-width: 500px;
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
