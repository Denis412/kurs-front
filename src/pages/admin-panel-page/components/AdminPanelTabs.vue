<script>
import { defineComponent } from "vue";
import { adminPanelTabs } from "../constants";

export default defineComponent({
  name: "AdminPanelTabs",

  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },

  emits: {
    "update:modelValue": null,
  },

  data() {
    return {
      tab: null,
      tabs: adminPanelTabs,
    };
  },

  methods: {
    init() {
      this.tab =
        localStorage.getItem("last-admin-panel-tab") ?? adminPanelTabs[0].name;
      this.$emit("update:modelValue", this.tab);
    },
  },

  watch: {
    tab(v) {
      localStorage.setItem("last-admin-panel-tab", v);
      this.$emit("update:modelValue", v);
    },
  },

  mounted() {
    this.init();
  },
});
</script>

<template>
  <q-tabs v-model="tab">
    <q-tab
      v-for="tab in tabs"
      :key="tab.name"
      :name="tab.name"
      :label="tab.label"
      class="text-h2"
    />
  </q-tabs>
</template>

<style scoped lang="scss">
.q-tab--active {
  color: $orange-1;
}
</style>
