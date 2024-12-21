<script>
import { defineComponent } from "vue";
import { UButton } from "@shared";
import { useUserStore } from "src/stores";

export default defineComponent({
  name: "MainHeader",

  components: {
    UButton,
  },

  props: {
    layout: {
      type: String,
      default: "main",
    },
  },

  data() {
    return {
      userStore: useUserStore(),
    };
  },

  methods: {
    logOut() {
      localStorage.removeItem("token");
      this.$router.push({
        name: "sign-in",
      });
    },
  },
});
</script>

<template>
  <q-header
    class="main-header container flex items-center"
    :class="{
      'justify-between': layout === 'main',
      'justify-center': layout === 'auth',
    }"
  >
    <q-img
      src="/assets/images/logo.svg"
      width="204px"
      class="cursor-pointer"
      @click="$router.push({ name: 'index' })"
    />

    <div v-if="layout === 'main'" class="main-header__actions">
      <UButton
        v-if="userStore.user?.role === 'admin'"
        label="Панель администрирования"
        @click="$router.push({ name: 'admin-panel' })"
        :class="{
          'text-orange': $route.name === 'admin-panel',
        }"
      />
      <UButton
        label="Направления"
        @click="$router.push({ name: 'directions' })"
        :class="{
          'text-orange': $route.name === 'directions',
        }"
      />
      <UButton label="Выход" @click="logOut" />
    </div>
  </q-header>
</template>

<style scoped lang="scss">
.main-header {
  margin-left: 72px;
  margin-right: 72px;
  padding-bottom: 16px;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
  background-color: $primary-dark;
}

.main-header__actions {
  position: relative;
}
</style>
