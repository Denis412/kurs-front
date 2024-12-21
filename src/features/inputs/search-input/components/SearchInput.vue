<script>
import { defineComponent } from "vue";
import { UInput } from "@shared";

export default defineComponent({
  name: "SearchInput",

  components: {
    UInput,
  },
});
</script>

<template>
  <UInput class="search-input" type="search" placeholder="Поиск...">
    <template #append>
      <q-icon name="search" />
    </template>
  </UInput>
</template>

<style scoped lang="scss">
.search-input {
  position: relative;
  border-radius: 12px;
  background-color: $primary-dark;
  color: #fff;

  & :deep(.q-field__inner) {
    background-color: $primary-dark;
  }

  & :deep(input) {
    color: #fff;
  }

  & :deep(.q-field__control) {
    height: 48px;
  }

  & :deep(.q-field__marginal) {
    height: 100%;
    color: #fff;
  }

  & :deep(.q-field__control:before) {
    border-width: 0px;
    border-radius: 12px;
  }

  & :deep(.q-field__control:after) {
    // border-width: 0px;
    border-radius: 12px;
  }
}
</style>
