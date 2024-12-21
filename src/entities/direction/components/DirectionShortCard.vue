<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DirectionShortCard",

  props: {
    direction: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<template>
  <div class="direction-short-card">
    <q-img
      :src="`/assets/images/${direction.img}.svg`"
      :alt="direction.name"
      class="direction-short-card__img"
    />
    <p>{{ direction.name }}</p>
  </div>
</template>

<style scoped lang="scss">
.direction-short-card {
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 32px;
  background-color: $primary-dark;
  color: #fff;
  max-width: 224px;
  width: 100%;
  gap: 16px;
  height: 320px;

  transition-duration: 0.2s;

  &:hover {
    transform: scale(1.025);
  }
}

.direction-short-card__img {
  & :deep(img) {
    object-fit: contain !important;
  }
}
</style>
