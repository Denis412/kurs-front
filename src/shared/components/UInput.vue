<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UInput",

  methods: {
    validate(v) {
      return this.$refs.input.validate(v);
    },
  },
});
</script>

<template>
  <q-input ref="input" class="u-input" outlined>
    <template v-if="$slots.append" #append>
      <slot name="append"></slot>
    </template>
  </q-input>
</template>

<style scoped lang="scss">
.u-input {
  position: relative;
  border-radius: 24px;

  & :deep(.q-field__inner) {
    background-color: #fff;
    border-radius: 24px;
  }

  & :deep(.q-field__control:before) {
    border-width: 0px;
    border-radius: 24px;
  }

  & :deep(.q-field__control:after) {
    // border-width: 0px;
    border-radius: 24px;
  }
}
</style>
