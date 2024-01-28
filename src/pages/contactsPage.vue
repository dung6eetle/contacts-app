<template>
  <div class="contacts-page">
    <div class="controls">
      <button @click="sortTop" class="sorting">Aa-Zz</button>
      <button @click="sortBottom" class="sorting">Zz-Aa</button>
      <!-- <ModeSet/> тут будет контрол ТАБЛА/ПЛИТКА свитч или buttons -->
    </div>
    <div class="controls" v-if="isShowControls">
      <button @click="sortMale" class="filter">Male</button>
      <button @click="sortFemale" class="filter">Female</button>
      <input
        type="text"
        :value="nameFilter"
        @input="(e) => setFilteredName(e.target.value)"
        placeholder="Searh by Fullname"
      />
    </div>
    <ContactsTable
      v-if="false"
      :perPage="perPage"
      :pageNumber="pageNumber"
      :rows="rows"
    />
    <Cards v-else :perPage="perPage" :pageNumber="pageNumber" :rows="rows" />
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
      currentGender: "contacts/currentGender",
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
      sortByMale: "contacts/sortByMale",
      sortByFemale: "contacts/sortByFemale",
      sortByNameToTop: "contacts/sortByNameToTop",
      sortByNameToBottom: "contacts/sortByNameToBottom",
      reset: "contacts/reset",
      resetCurrentGender: "contacts/resetCurrentGender",
    }),
    selectPage(page) {
      this.pageNumber = page;
    },
    resetGender() {
      this.resetCurrentGender();
    },
    resetSort() {
      this.reset();
    },
    sortMale() {
      if (this.currentGender === "male") {
        this.resetGender();
        return;
      }
      this.sortByMale();
    },
    sortFemale() {
      if (this.currentGender === "female") {
        this.resetGender();
        return;
      }
      this.sortByFemale();
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
  margin-bottom: 10px;
}
.sorting {
  border: 0.5px solid grey;
  cursor: pointer;
  height: 20px;
  font-size: 16px;
  width: max-content;
}
</style>
