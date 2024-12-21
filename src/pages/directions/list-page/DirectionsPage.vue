<script>
import { defineComponent } from "vue";
import { SearchInput } from "@features/inputs";
import { DirectionCard } from "@entities/direction";

export default defineComponent({
  name: "DirectionsPage",

  components: {
    SearchInput,
    DirectionCard,
  },

  data() {
    return {
      searchValue: "",
      directions: [],
      loading: false,
    };
  },

  methods: {
    async fetchDirections() {
      this.loading = true;
      const directionsResult = await this.$api.get(
        `direction${this.searchValue ? `?name=${this.searchValue}` : ""}`
      );
      this.directions = directionsResult.data;
      this.loading = false;
    },
    onUpdateSearchValue(v) {
      this.fetchDirections();
    },
  },

  mounted() {
    this.fetchDirections();
  },
});
</script>

<template>
  <q-page class="flex flex-center">
    <section class="directions-section">
      <div class="directions-section__header">
        <h2 class="text-h2">Направления</h2>
        <SearchInput
          v-model="searchValue"
          @update:model-value="onUpdateSearchValue"
          style="width: 100%"
        />
      </div>

      <div v-if="loading">Загрузка...</div>
      <div v-else-if="!directions.length">Ничего не найдено...</div>
      <ul v-else class="directions-list">
        <DirectionCard
          v-for="direction in directions"
          :key="direction.name"
          :direction="direction"
        />
      </ul>
    </section>
  </q-page>
</template>

<style scoped lang="scss">
.directions-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.directions-section__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 585px;
  width: 100%;
}

.directions-list {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  margin-top: 32px;
}
</style>
