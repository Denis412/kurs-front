<script>
import { defineComponent } from "vue";
import { AuthForm } from "@entities/user";

export default defineComponent({
  name: "SignUpFeature",

  components: {
    AuthForm,
  },
});
</script>

<template>
  <AuthForm type="sign-up" />
</template>

<style scoped lang="scss"></style>
