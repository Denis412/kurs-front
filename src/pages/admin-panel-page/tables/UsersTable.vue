<script>
import { defineComponent } from "vue";
import { MainTable } from "@widgets/main-table";

import { columnsConfig } from "../constants";

export default defineComponent({
  name: "UsersTable",

  components: {
    MainTable,
  },

  data() {
    return {
      columns: columnsConfig.users,
      rows: [],
    };
  },

  methods: {
    async fetchUsers() {
      const usersResult = await this.$api.get("user/admin");
      this.rows = usersResult.data;
    },
  },

  mounted() {
    this.fetchUsers();
  },
});
</script>

<template>
  <MainTable :columns="columns" :rows="rows" />
</template>

<style scoped lang="scss"></style>
