<script>
import { defineComponent } from "vue";
import { SearchInput } from "@features/inputs";
import { DirectionCard } from "@entities/direction";
import { SendOrderDialog, SendOrderResultDialog } from "@features/order";

export default defineComponent({
  name: "DirectionsPage",

  components: {
    SearchInput,
    DirectionCard,
    SendOrderDialog,
    SendOrderResultDialog,
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

    onEnroll(direction, done) {
      this.$api.get(`order/check/${direction.id}`).then((r) => {
        done();

        if (r.data.order_exist) {
          this.$refs.sendOrderResultDialog.show(true);
          return;
        }

        this.$refs.sendOrderDialog.show(direction, () => {
          this.$refs.sendOrderResultDialog.show(true);
        });
      });
    },
  },

  mounted() {
    this.fetchDirections();
  },
});
</script>

<template>
  <q-page class="flex flex-center q-mb-xl">
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
          @enroll="onEnroll"
        />
      </ul>
    </section>

    <SendOrderDialog ref="sendOrderDialog" />
    <SendOrderResultDialog ref="sendOrderResultDialog" />
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
