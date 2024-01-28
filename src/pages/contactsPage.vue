<template>
  <div class="contacts-page">
    <div class="controls">
      <span @click="sortByNameTop" class="sorting">Aa-Zz</span>
      <span @click="sortByNameBottom" class="sorting">Zz-Aa</span>
      <input type="text" v-model="name" placeholder="Searh By Name" />
      <!-- <ModeSet/> тут будет контрол ТАБЛА/ПЛИТКА свитч или buttons -->
    </div>
    <ContactsTable :perPage="perPage" :pageNumber="pageNumber" :rows="rows" />
    <Cards
      v-if="false"
      :perPage="perPage"
      :pageNumber="pageNumber"
      :rows="rows"
    />
    <Pagination @selectPage="selectPage" :pageNumber="pageNumber" />
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
    ...mapGetters(["contacts"]),
    rows() {
      const from = (this.pageNumber - 1) * this.perPage;
      const to = from + this.perPage;
      return this.contacts.slice(from, to);
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
    ...mapActions(["getContacts"]),
    ...mapMutations(["sortByNameToTop", "sortByNameToBottom"]),
    sortByNameBottom() {
      this.sortByNameToBottom();
    },
    sortByNameTop() {
      this.sortByNameToTop();
    },
    selectPage(page) {
      this.pageNumber = page;
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
