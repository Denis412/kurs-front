<script>
import { defineComponent } from "vue";
import { UButton } from "@shared";

export default defineComponent({
  name: "SendOrderResultDialog",

  components: {
    UButton,
  },

  data() {
    return {
      visible: false,
      title: "",
      description: "",
    };
  },

  methods: {
    show(isSuccess) {
      if (isSuccess) {
        this.title = "Запись успешно оформлена!";
        this.description = "Чек придёт на вашу электронную почту";
      }

      this.visible = true;
    },
  },
});
</script>

<template>
  <q-dialog v-model="visible">
    <q-card class="send-order-result text-center q-gutter-y-md">
      <p>{{ title }}</p>
      <p>{{ description }}</p>

      <UButton
        label="Ок"
        class="green-btn text-bold text-black"
        v-close-popup
      />
    </q-card>
  </q-dialog>
</template>

<style scoped lang="scss">
.send-order-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background-color: $orange-1;
  padding: 24px;
  color: #fff;
  max-width: 416px;
}
</style>
