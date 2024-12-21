<script>
import { defineComponent } from "vue";
import { AuthForm, SignUp } from "@entities/user";

export default defineComponent({
  name: "SignUpFeature",

  components: {
    AuthForm,
  },

  methods: {
    async onSubmit(data) {
      await SignUp(data);

      this.$router.push({
        name: "sign-in",
      });
    },
  },
});
</script>

<template>
  <AuthForm type="sign-up" @submit="onSubmit" />
</template>

<style scoped lang="scss"></style>
