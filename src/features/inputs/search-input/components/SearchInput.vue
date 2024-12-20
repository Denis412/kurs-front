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
  <UInput class="search-input" />
</template>

<style scoped lang="scss">
.search-input {
  position: relative;
}
</style>
