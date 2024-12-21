<script>
import { defineComponent } from "vue";
import { UButton } from "@shared";

export default defineComponent({
  name: "DirectionCard",

  components: {
    UButton,
  },

  props: {
    direction: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<template>
  <div class="direction-card q-mb-xl">
    <q-img
      :src="`/assets/images/directions/${direction.img}.png`"
      :alt="direction.name"
      class="direction-card__img"
    />

    <div class="direction-card__info">
      <p class="text-body1 text-bold">{{ direction.name }}</p>
      <p>Курс: {{ direction.price }}Р</p>
      <UButton label="Записаться" class="green-btn text-black text-bold" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.direction-card {
  position: relative;
  display: flex;
  align-items: flex-end;
  border-radius: 16px;
  padding: 24px;
  color: #fff;
  height: 500px;
  width: 100%;
}

.direction-card__img {
  position: absolute;
  inset: 0;
  border-radius: 16px;
}

.direction-card__info {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 100;
  width: 100%;
}
</style>
