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

    acceptOrder(order) {
      this.$api.patch(`order/${order.id}/accept`).then(() => {
        this.fetchOrders();
      });
    },

    cancelOrder(order) {
      this.$api.patch(`order/${order.id}/cancel`).then(() => {
        this.fetchOrders();
      });
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
            <UButton
              v-if="
                props.row['status_name'] === 'Заявка' ||
                props.row['status_name'] === 'Отказ'
              "
              class="green-btn text-black"
              icon="check"
              @click="acceptOrder(props.row)"
            />
            <UButton
              v-if="
                props.row['status_name'] === 'Заявка' ||
                props.row['status_name'] === 'Оплачено'
              "
              class="orange-btn text-black"
              icon="close"
              @click="cancelOrder(props.row)"
            />
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
