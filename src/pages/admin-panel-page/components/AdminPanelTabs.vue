<script>
import { defineComponent } from "vue";
import { adminPanelTabs } from "../constants";
import { useUserStore } from "src/stores";

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
      userStore: useUserStore(),
    };
  },

  computed: {
    isModerator() {
      return this.userStore.user.role === "moderator";
    },
    isAdmin() {
      return this.userStore.user.role === "admin";
    },
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
    <template v-for="tab in tabs" :key="tab.name">
      <q-tab
        v-if="tab.onlyAdmin ? isAdmin : isModerator || isAdmin"
        :name="tab.name"
        :label="tab.label"
        class="text-h2"
      />
    </template>
  </q-tabs>
</template>

<style scoped lang="scss">
.q-tab--active {
  color: $orange-1;
}
</style>
