<script>
import { defineComponent, ref } from "vue";
import { MainHeader } from "@widgets/main-header";
import { MainPageContainer } from "@widgets/main-page-container";

export default defineComponent({
  name: "AuthLayout",

  components: {
    MainHeader,
    MainPageContainer,
  },
});
</script>

<template>
  <q-layout view="lHh Lpr lFf" class="base-layout container">
    <MainHeader layout="auth" />
    <MainPageContainer />
  </q-layout>
</template>
