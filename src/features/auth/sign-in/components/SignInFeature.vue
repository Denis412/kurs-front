<script>
import { defineComponent } from "vue";
import { AuthForm, SignIn } from "@entities/user";

export default defineComponent({
  name: "SignInFeature",

  components: {
    AuthForm,
  },

  methods: {
    async onSubmit(data) {
      try {
        const loginResult = await SignIn(data);

        if (!loginResult || !loginResult.data?.access_token) {
          this.$q.notify({
            message: "Что-то пошло не так",
            color: "negative",
          });
          return;
        }

        localStorage.setItem("token", loginResult.data?.access_token);
        localStorage.setItem("token_type", loginResult.data?.token_type);

        this.$router.push({
          name: "index",
        });
      } catch (e) {
        const loginError = e.response?.data.message;

        if (loginError) {
          this.$q.notify({
            message: loginError,
            color: "negative",
          });
        }
      }
    },
  },
});
</script>

<template>
  <AuthForm type="sign-in" @submit="onSubmit" />
</template>

<style scoped lang="scss"></style>
