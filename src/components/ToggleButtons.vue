<template>
  <div>
    <Button
      v-for="config in configs"
      :class="getButtonClasses(config)"
      :key="config.type"
      :title="config.title"
      @click="config.onClick"
    />
  </div>
</template>

<script>
import Button from "@/components/ui/Button";

export default {
  props: {
    type: String,
    configs: {
      type: Array,
      required: true,
    },
  },
  components: {
    Button,
  },
  methods: {
    getButtonClasses({ type }) {
      return {
        isActive: type === this.type,
      };
    },
  },
};
</script>

<style>
.isActive {
  background: #ecec;
}
</style>
