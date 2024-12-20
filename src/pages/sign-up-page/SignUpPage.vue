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
  <q-page>
    <SignUpFeature />
  </q-page>
</template>

<style scoped lang="scss"></style>
