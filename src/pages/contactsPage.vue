<template>
  <div>
    <h2>contacts:</h2>
    <ContactsTable :contacts="CONTACTS" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ContactsTable from "@/components/contactsTable/contactsTable.vue";
export default {
  components: {
    ContactsTable,
  },
  computed: {
    ...mapGetters(["CONTACTS"]),
  },
  methods: {
    ...mapActions(["GET_CONTACTS"]),
  },
  mounted() {
    this.GET_CONTACTS();
  },
};
</script>

<style></style>
