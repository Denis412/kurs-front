<script>
import { defineComponent, ref } from "vue";

import { MainHeader } from "@widgets/main-header";
import { MainPageContainer } from "@widgets/main-page-container";
import { MainFooter } from "@widgets/main-footer";
import { useUserStore } from "src/stores";

export default defineComponent({
  name: "MainLayout",

  components: {
    MainHeader,
    MainPageContainer,
    MainFooter,
  },

  data() {
    return {
      leftDrawerOpen: false,
      userStore: useUserStore(),
    };
  },

  computed: {
    userLoading() {
      return this.userStore.loading;
    },
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },

  mounted() {
    this.userStore.fetchUser();
  },
});
</script>

<template>
  <q-layout view="lHh Lpr lff" class="base-layout container">
    <p v-if="userLoading">Loading...</p>

    <template v-else>
      <MainHeader />
      <MainPageContainer />
      <MainFooter />
    </template>
  </q-layout>
</template>
