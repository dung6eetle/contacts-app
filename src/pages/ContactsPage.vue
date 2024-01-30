<template>
  <div class="contacts-page">
    <UserControls
      :currentSort="currentSort"
      @getContacts="getContacts"
      @sortTop="sortTop"
      @sortBottom="sortBottom"
      @setVision="setVision"
    />
    <AdminControls
      v-if="isShowControls"
      :currentGender="currentGender"
      :nameFilter="nameFilter"
      :nationality="nationality"
      :countries="countries"
      @setFilteredName="setFilteredName"
      @setNat="setNat"
      @filtredMale="filtredMale"
      @filtredFemale="filtredFemale"
    />
    <Table
      v-if="!isGrid"
      :perPage="perPage"
      :pageNumber="pageNumber"
      :rows="rows"
    />
    <Cards v-else :perPage="perPage" :pageNumber="pageNumber" :rows="rows" />
    <Pagination
      :pageNumber="pageNumber"
      :pages="pages"
      @selectPage="selectPage"
    />
    <Statistics />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Table from "@/components/table/Table";
import Cards from "@/components/cards/Cards";
import Pagination from "@/components/pagination/Pagination";
import Statistics from "@/components/statistics/Statistics";
import UserControls from "@/components/controls/UserControls";
import AdminControls from "@/components/controls/AdminControls";

export default {
  components: {
    Table,
    Cards,
    Pagination,
    Statistics,
    AdminControls,
    UserControls,
  },
  computed: {
    ...mapGetters({
      nationality: "contacts/nationality",
      countries: "contacts/countries",
      nameFilter: "contacts/nameFilter",
      currentSort: "contacts/currentSort",
      currentGender: "contacts/currentGender",
      processedResults: "contacts/processedResults",
      role: "user/role",
      isGrid: "user/isGrid",
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
    };
  },
  methods: {
    ...mapActions({
      getContacts: "contacts/getContacts",
    }),
    ...mapMutations({
      setVision: "user/setVision",
      setCurrentGender: "contacts/setCurrentGender",
      setFilteredName: "contacts/setFilteredName",
      setNat: "contacts/setNat",
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
    filtredMale() {
      this.setCurrentGender("male");
    },
    filtredFemale() {
      this.setCurrentGender("female");
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
  max-width: 1200px;
  margin: 0 auto;
}
.controls {
  max-width: 600px;
  display: flex;
  flex-flow: row nowrap;
  grid-gap: 5px;
  justify-content: flex-start;
  margin-bottom: 10px;
}
</style>
