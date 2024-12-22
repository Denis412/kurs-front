<script>
import { defineComponent } from "vue";
import { MainTable } from "@widgets/main-table";
import { UButton } from "@shared";

import { columnsConfig } from "../constants";

export default defineComponent({
  name: "OrdersTable",

  components: {
    MainTable,
    UButton,
  },

  data() {
    return {
      columns: columnsConfig.orders,
      rows: [],
    };
  },

  methods: {
    async fetchOrders() {
      const ordersResult = await this.$api.get("order/admin");
      this.rows = ordersResult.data;
    },
  },

  mounted() {
    this.fetchOrders();
  },
});
</script>

<template>
  <MainTable :columns="columns" :rows="rows">
    <template #body="props">
      <q-tr :props="props">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          <div v-if="col.type === 'buttons'" class="q-gutter-x-xs">
            <UButton class="green-btn text-black" icon="check" />
            <UButton class="orange-btn text-black" icon="close" />
          </div>

          <div v-else>
            {{ props.row[col.name] }}
          </div>
        </q-td>
      </q-tr>
    </template>
  </MainTable>
</template>

<style scoped lang="scss"></style>
