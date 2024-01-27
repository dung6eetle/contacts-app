<template>
  <div class="contacts-table">
    <div class="header">
      <h5>Avatar</h5>
      <h5>Fullname <span @click="sortByName" /></h5>
      <h5>Birthday</h5>
      <h5>Email</h5>
      <h5>Phone</h5>
      <h5>Location</h5>
      <h5>Nationality</h5>
    </div>
    <div class="body">
      <ContactRow v-for="row in rows" :key="row.cell" :row="row" />
    </div>
    <div class="pagination">
      <div
        @click="selectPage(page)"
        v-for="page in pages"
        :class="{ page: true, pageSelect: page === pageNumber }"
        :key="page"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import ContactRow from "./contactRow.vue";

export default {
  props: {
    contacts: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    ContactRow,
  },
  data() {
    return {
      perPage: 10,
      pageNumber: 1,
    };
  },
  computed: {
    rows() {
      let from = (this.pageNumber - 1) * this.perPage;
      let to = from + this.perPage;
      return this.contacts.slice(from, to);
    },
    pages() {
      return Math.ceil(this.contacts.length / 10);
    },
  },
  methods: {
    selectPage(page) {
      this.pageNumber = page;
    },
    sortByName() {
      // eslint-disable-next-line vue/no-mutating-props
      this.contacts.sort((a, b) => a.name.first.localeCompare(b.name.first));
    },
  },
};
</script>

<style>
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
.header span {
  cursor: pointer;
  border: solid #4b0082;
  border-width: 0px 2px 2px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(-135deg);
}
p {
  text-align: left;
  flex-basis: 14%;
}
.pagination {
  display: flex;
}
.page {
  color: black;
  border: 1px solid #e0ffff;
  padding: 5px;
  cursor: pointer;
}
.page:hover {
  border: 2px solid #0000cd;
}
.pageSelect {
  color: white;
  background: #4b0082;
}
</style>
