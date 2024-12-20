<script>
import { defineComponent } from "vue";
import { UButton } from "@shared";

export default defineComponent({
  name: "MainPageContainer",

  components: {
    UButton,
  },

  methods: {
    redirectToAdminPanel() {
      this.$router.push({
        name: "admin-panel",
      });
    },

    redirectToDirections() {
      this.$router.push({
        name: "directions",
      });
    },

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
  <q-header>
    <div class="main-header__actions">
      <UButton label="Панель администрирования" @click="redirectToAdminPanel" />
      <UButton label="Направления" @click="redirectToDirections" />
      <UButton label="Выход" @click="logOut" />
    </div>
  </q-header>
</template>

<style scoped lang="scss">
.main-header__actions {
  position: relative;
}
</style>
