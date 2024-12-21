<script>
import { defineComponent } from "vue";
import { SignUpFeature } from "@features/auth";

export default defineComponent({
  name: "SignUpPage",

  components: {
    SignUpFeature,
  },
});
</script>

<template>
  <q-page class="flex justify-center">
    <SignUpFeature class="q-mt-xl" />
  </q-page>
</template>

<style scoped lang="scss"></style>
