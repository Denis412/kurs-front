<script>
import { defineComponent, ref } from "vue";
import { MainPageContainer } from "@widgets/main-page-container";

export default defineComponent({
  name: "AuthLayout",

  components: {
    MainPageContainer,
  },
});
</script>

<template>
  <q-layout view="lHh Lpr lFf" class="base-layout">
    <MainPageContainer />
  </q-layout>
</template>
