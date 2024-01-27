<template>
  <div class="contacts-page">
    <h2>contacts:</h2>
    <ContactsTable
      :perPage="perPage"
      :pageNumber="pageNumber"
      :contacts="CONTACTS"
    />
    <PaginationComponent @selectPage="selectPage" :pageNumber="pageNumber" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ContactsTable from "@/components/contactsTable/contactsTable.vue";
import PaginationComponent from "@/components/pagination/pagination-component.vue";

export default {
  components: {
    ContactsTable,
    PaginationComponent,
  },
  computed: {
    ...mapGetters(["CONTACTS"]),
  },
  data() {
    return {
      perPage: 10,
      pageNumber: 1,
    };
  },
  methods: {
    ...mapActions(["GET_CONTACTS"]),
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
</style>
