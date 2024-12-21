<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainPageContainer",
});
</script>

<template>
  <q-page-container class="main-page-container">
    <router-view />
  </q-page-container>
</template>

<style scoped lang="scss"></style>
