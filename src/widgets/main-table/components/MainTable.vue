<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainTable",
});
</script>

<template>
  <q-table class="main-table">
    <template v-if="$slots.header" #header="props">
      <slot name="header" v-bind="props"></slot>
    </template>

    <template v-if="$slots['header-cell']" #header-cell="props">
      <slot name="header-cell" v-bind="props"></slot>
    </template>

    <template v-if="$slots.body" #body="props">
      <slot name="body" v-bind="props"></slot>
    </template>

    <template v-if="$slots['body-cell']" #body-cell="props">
      <slot name="body-cell" v-bind="props"></slot>
    </template>
  </q-table>
</template>

<style scoped lang="scss">
.main-table {
  --even-bg: #5d5d5d;
  --nodd-bg: #505050;
  position: relative;

  & :deep(thead) {
    color: $orange-1;
    background-color: var(--even-bg);
  }

  & :deep(tbody) {
    color: #fff;
  }

  & :deep(tbody tr) {
    background-color: var(--nodd-bg);
  }

  & :deep(tbody tr:nth-child(even)) {
    background-color: var(--even-bg);
  }
}
</style>
