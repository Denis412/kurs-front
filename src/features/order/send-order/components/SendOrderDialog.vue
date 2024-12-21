<script>
import { defineComponent } from "vue";
import { OrderForm } from "@entities/order";

export default defineComponent({
  name: "SendOrderDialog",

  components: {
    OrderForm,
  },

  data() {
    return {
      visible: false,
      direction: null,
      submitCallback: null,
    };
  },

  methods: {
    show(direction, submitCallback) {
      this.direction = direction;
      this.submitCallback = submitCallback;
      this.visible = true;
    },

    async onSubmit(data) {
      if (!this.direction.id) {
        this.$q.notify({
          message: "Что-то сломалось",
          color: "negative",
        });
        return;
      }

      const createdData = await this.$api.post("order", {
        ...data,
        direction_id: this.direction.id,
      });

      this.submitCallback?.(createdData.data);
    },
  },
});
</script>

<template>
  <q-dialog v-model="visible">
    <q-card class="send-order">
      <OrderForm :direction="direction" @submit="onSubmit" />
    </q-card>
  </q-dialog>
</template>

<style scoped lang="scss">
.send-order {
  border-radius: 16px;
  background-color: $orange-1;
  width: 70vw;
  padding: 24px;
  color: #fff;
}
</style>
