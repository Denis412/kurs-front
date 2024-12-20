<script>
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";

import { MainHeader } from "@widgets/main-header";
import { MainPageContainer } from "@widgets/main-page-container";
import { useUserStore } from "src/stores";

const { fetchUser } = useUserStore();
const { loading } = storeToRefs(useUserStore());

export default defineComponent({
  name: "MainLayout",

  components: {
    MainHeader,
    MainPageContainer,
  },

  data() {
    return {
      leftDrawerOpen: false,
    };
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },

  mounted() {
    fetchUser();
  },
});
</script>

<template>
  <q-layout view="lHh Lpr lFf" class="base-layout">
    <p v-if="loading">Loading...</p>

    <template v-else>
      <MainHeader />

      <MainPageContainer />
    </template>
  </q-layout>
</template>
