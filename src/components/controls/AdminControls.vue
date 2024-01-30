<template>
  <div class="controls">
    <ToggleButtons :type="currentGender" :configs="filterGenderConfig" />
    <input
      type="text"
      :value="nameFilter"
      @input="(e) => $emit('setFilteredName', e.target.value)"
      placeholder="Searh by Fullname"
    />
    <Input
      placeholder="search..."
      :value="nameFilter"
      @input="(value) => $emit('setFilteredName', value)"
    />
    <CountrySelect
      :value="countries"
      @change="(value) => $emit('setNat', value)"
    />
  </div>
</template>

<script>
import ToggleButtons from "@/components/ToggleButtons.vue";
import CountrySelect from "../CountrySelect.vue";
import Input from "@/components/ui/Input";

export default {
  props: {
    currentGender: {
      type: String,
    },
    nameFilter: {
      type: String,
    },
    nationality: {
      type: String,
    },
    countries: {
      type: Array,
    },
  },
  components: {
    ToggleButtons,
    CountrySelect,
    Input,
  },
  computed: {
    filterGenderConfig() {
      return [
        {
          type: "male",
          title: "male",
          onClick: () => this.$emit("filtredMale"),
        },
        {
          type: "female",
          title: "female",
          onClick: () => this.$emit("filtredFemale"),
        },
      ];
    },
  },
};
</script>
