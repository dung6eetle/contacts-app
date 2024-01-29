<template>
  <div class="contacts-page">
    <div class="controls">
      <button @click="sortTop" class="sorting">Aa-Zz</button>
      <button @click="sortBottom" class="sorting">Zz-Aa</button>
      <button @click="getContacts">RELOAD</button>
      <button @click="setVision()">Set vision</button>

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
      <select @change="(e) => setNat(e.target.value)" :value="nationality">
        <option label="Please choose" key="1"></option>
        <option v-for="country in countries" :value="country" :key="country">
          {{ country }}
        </option>
      </select>
    </div>
    <ContactsTable
      v-if="!isGrid"
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
    <div class="statistics">
      <div class="statistics-item">
        Collection size: {{ statistics.collectionSize }}
      </div>
      <div class="statistics-item">
        Males: {{ statistics.maleCount }}, Females:
        {{ statistics.femaleCount }}, Netuda-Nesuda:
        {{ statistics.undecidedCount }}
      </div>
      <div class="statistics-item">
        More by gender: {{ statistics.moreCommonGender }}
      </div>
      <div class="statistics-item">
        Contacts by nationality:
        <ul>
          <li
            v-for="(count, nationality) in statistics.nationalityCounts"
            :key="nationality"
          >
            {{ nationality }}: {{ count }}
          </li>
        </ul>
      </div>
    </div>
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
      statistics: "contacts/statistics",
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
    // isShowTable() {
    //   console.log("is show table", this.isTable);
    //   return this.isTable;
    // },
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
    sortMale() {
      this.setCurrentGender("male");
    },
    sortFemale() {
      // if (this.currentGender === "female") {
      //   this.resetGender();
      //   return;
      // }
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
  max-width: 400px;
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
.statistics {
  margin-top: 30px;
  padding: 15px 15px;
  border-top: 2px solid grey;
}
</style>
