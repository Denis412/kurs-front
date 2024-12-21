<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UButton",
});
</script>

<template>
  <q-btn class="u-button" no-caps flat />
</template>

<style lang="scss">
.green-btn {
  border-radius: 80px;
  background-color: $green-1;
}

.orange-btn {
  border-radius: 80px;
  background-color: $orange-1;
}
</style>

<style scoped lang="scss">
.u-button {
  position: relative;
  width: fit-content;
}
</style>
