<script>
import { defineComponent } from "vue";
import { DirectionShortCard } from "@entities/direction";
import { UButton } from "@shared";

export default defineComponent({
  name: "IndexPage",

  components: {
    DirectionShortCard,
    UButton,
  },

  data() {
    return {
      directions: [],
    };
  },

  methods: {
    init() {
      this.fetchDirections();
    },

    async fetchDirections() {
      const directionsResult = await this.$api.get("direction?index_visible=1");
      this.directions = directionsResult.data;
      return this.directions;
    },
  },

  mounted() {
    this.init();
  },
});
</script>

<template>
  <q-page class="column q-mb-xl">
    <section class="banner-section">
      <div class="banner-section__text">
        <p class="text-h1">Зарядись энергией танца вместе с нами!</p>
        <UButton
          label="Открыть направления"
          class="green-btn q-mt-xl text-bold"
          @click="$router.push({ name: 'directions' })"
        />
      </div>
      <!-- <q-img src="/assets/images/banner.png" /> -->
    </section>

    <section class="directions-section">
      <p class="directions-section__title text-h2 text-center">
        Самые разные стили и направления танцев в нашем клубе
        <span class="text-orange">Tiger hill</span>
      </p>

      <ul class="directions-list">
        <DirectionShortCard
          v-for="direction in directions"
          :key="direction.title"
          :direction="direction"
        />
      </ul>
    </section>
  </q-page>
</template>

<style scoped lang="scss">
.banner-section {
  display: flex;
  position: relative;
  background-image: url("/assets/images/banner.png");
  background-repeat: no-repeat;
  background-position: 100%;
  min-height: 459px;
  margin-top: 4px;
}

.banner-section__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 663px;
  min-height: inherit;
}

.directions-list {
  list-style-type: none;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 32px;
}

.directions-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 64px;
  margin-top: 96px;
}

.directions-section__title {
  max-width: 856px;
}
</style>
