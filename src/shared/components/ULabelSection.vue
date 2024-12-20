<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ULabelSection",

  props: {
    tag: {
      type: String,
      default: "div",
    },
    label: {
      type: String,
      default: "",
    },
  },
});
</script>

<template>
  <component :is="tag" class="u-label-section">
    <div v-if="label || $slots.header" class="u-label-section__header">
      <slot name="header">
        <p>{{ label }}</p>
      </slot>
    </div>

    <div class="u-label-section__body">
      <slot></slot>
    </div>
  </component>
</template>

<style scoped lang="scss">
.u-label-section {
  position: relative;
}
</style>
