<template>
  <Select
    :value="nationality"
    :options="countries"
    @change="(value) => $emit('change', value)"
  />
</template>

<script>
import Select from "@/components/ui/Select";
import { mapGetters } from "vuex";
export default {
  props: {
    nationality: {
      type: String,
    },
  },
  components: {
    Select,
  },
  computed: {
    ...mapGetters({ countries: "contacts/countries" }),
  },
};
</script>

<style></style>
