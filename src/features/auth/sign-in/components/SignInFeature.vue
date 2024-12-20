<script>
import { defineComponent } from "vue";
import { AuthForm } from "@entities/user";

export default defineComponent({
  name: "SignInFeature",

  components: {
    AuthForm,
  },

  methods: {
    onSubmit(data) {
      console.log("data", data);

      localStorage.setItem("token", "1");
      this.$router.push({
        name: "index",
      });
    },
  },
});
</script>

<template>
  <AuthForm type="sign-in" @submit="onSubmit" />
</template>

<style scoped lang="scss"></style>
