<script>
import { defineComponent } from "vue";
import { MainTable } from "@widgets/main-table";

import {
  OrdersTable,
  UsersTable,
  ProductsEditorTable,
  StatisticsGraphics,
} from "./tables";
import { AdminPanelTabs } from "./components";
import { useUserStore } from "src/stores";

export default defineComponent({
  name: "AdminPanelPage",

  components: {
    AdminPanelTabs,
    OrdersTable,
    UsersTable,
    ProductsEditorTable,
    StatisticsGraphics,
  },

  data() {
    return {
      panelTab: null,
      userStore: useUserStore(),
    };
  },

  computed: {
    isAdmin() {
      return this.userStore.user.role === "admin";
    },
  },
});
</script>

<template>
  <q-page class="flex justify-center q-my-xl">
    <section class="admin-panels-section">
      <AdminPanelTabs v-model="panelTab" />

      <q-tab-panels v-model="panelTab" class="tab-panels-container">
        <q-tab-panel name="users">
          <UsersTable />
        </q-tab-panel>

        <q-tab-panel name="products-editor">
          <ProductsEditorTable />
        </q-tab-panel>

        <q-tab-panel name="orders">
          <OrdersTable />
        </q-tab-panel>

        <q-tab-panel v-if="isAdmin" name="statistics">
          <StatisticsGraphics />
        </q-tab-panel>
      </q-tab-panels>
    </section>
  </q-page>
</template>

<style scoped lang="scss">
.admin-panels-section {
  width: 100%;
}

.tab-panels-container {
  margin-top: 16px;
  background: transparent;
}
</style>
