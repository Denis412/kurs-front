<script>
import { defineComponent } from "vue";
import { SignInFeature } from "@features/auth";

export default defineComponent({
  name: "SignInPage",

  components: {
    SignInFeature,
  },
});
</script>

<template>
  <q-page>
    <SignInFeature />
  </q-page>
</template>

<style scoped lang="scss"></style>
