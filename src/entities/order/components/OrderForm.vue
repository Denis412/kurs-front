<script>
import { defineComponent } from "vue";
import { ULabelSection, UInput, UButton, formValidateMixin } from "@shared";

export default defineComponent({
  name: "OrderForm",

  mixins: [formValidateMixin],

  components: {
    ULabelSection,
    UInput,
    UButton,
  },

  props: {
    direction: {
      type: Object,
      default: () => ({}),
    },
  },

  emits: {
    submit: null,
  },

  data() {
    return {
      name: "",
      phone: "",
      address: "",
    };
  },

  methods: {
    onSubmit() {
      this.$emit("submit", {
        name: this.name,
        phone: this.phone,
        address: this.address,
      });
    },
  },
});
</script>

<template>
  <q-form class="order-form" @submit.prevent="onSubmit">
    <div class="order-form__header text-center">
      <p class="text-h2">
        <span style="display: block">Запись</span>
        <span>{{ direction.name }}</span>
      </p>

      <p>Курс: {{ direction.price }}Р</p>
    </div>

    <div class="order-form__body q-gutter-y-md">
      <ULabelSection tag="label" label="Имя">
        <UInput v-model="name" placeholder="Введите имя" :rules="[required]" />
      </ULabelSection>

      <ULabelSection tag="label" label="Телефон">
        <UInput
          v-model="phone"
          placeholder="+7 (966) 666 66 66"
          mask="+7 (###) ### ## ##"
          :rules="[required]"
        />
      </ULabelSection>

      <ULabelSection tag="label" label="Адрес">
        <UInput
          v-model="address"
          placeholder="Введите адрес"
          :rules="[required]"
        />
      </ULabelSection>
    </div>

    <div class="order-form__controls flex justify-center">
      <UButton
        class="green-btn text-bold text-black q-mt-md"
        type="submit"
        label="Отправить"
      />
    </div>
  </q-form>
</template>

<style scoped lang="scss">
.order-form {
  position: relative;
}

.order-form__controls {
  position: relative;
}
</style>
