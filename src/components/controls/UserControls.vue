<template>
  <div class="controls">
    <ToggleButtons :type="currentSort" :configs="sortButtonsConfig" />
    <Button title="RELOAD" @click="$emit('getContacts')" />
    <Button title="Set vision" @click="$emit('setVision')" />
  </div>
</template>

<script>
import ToggleButtons from "@/components/ToggleButtons.vue";
import Button from "@/components/ui/Button";

export default {
  props: {
    currentSort: {
      type: String,
    },
  },
  components: {
    ToggleButtons,
    Button,
  },
  computed: {
    sortButtonsConfig() {
      return [
        {
          type: "top",
          title: "Aa-Zz",
          onClick: () => this.$emit("sortTop"),
        },
        {
          type: "bottom",
          title: "Zz-Aa",
          onClick: () => this.$emit("sortBottom"),
        },
      ];
    },
  },
};
</script>
