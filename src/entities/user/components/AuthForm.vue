<script>
import { defineComponent } from "vue";
import { UInput, ULabelSection, UButton, formValidateMixin } from "@shared";

export default defineComponent({
  name: "AuthForm",

  mixins: [formValidateMixin],

  components: {
    UInput,
    UButton,
    ULabelSection,
  },

  props: {
    type: {
      type: String,
      default: "sign-in",
    },
  },

  emits: {
    submit: null,
  },

  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },

  computed: {
    isSignIn() {
      return this.type === "sign-in";
    },

    formTitle() {
      return this.isSignIn ? "Авторизация" : "Регистрация";
    },

    submitBtnLabel() {
      return this.isSignIn ? "Авторизоваться" : "Зарегистрироваться";
    },

    redirectBtnLabel() {
      return this.isSignIn ? "Зарегистрироваться" : "Авторизоваться";
    },

    passwordRules() {
      const rules = this.getPasswordRules("password");
      return rules;
    },

    confirmPasswordRules() {
      const rules = this.getPasswordRules("confirm");
      return rules;
    },
  },

  methods: {
    submit() {
      this.$emit("submit", {
        email: this.email,
        password: this.password,
      });
    },

    redirect() {
      this.$router.push({
        name: this.isSignIn ? "sign-up" : "sign-in",
      });
    },

    updatePassword() {
      if (this.type === "sign-in") return;

      this.$nextTick(() => {
        if (!this.password.trim() || !this.confirmPassword.trim()) return;

        this.$refs.password.validate();
        this.$refs.confirmPassword.validate();
      });
    },

    getPasswordRules(passwordType) {
      const rules = [this.required];

      if (this.type === "sign-up") {
        rules.push(
          this.equalPassword(
            passwordType === "password" ? this.confirmPassword : this.password
          )
        );
      }

      return rules;
    },
  },
});
</script>

<template>
  <q-form class="auth-form" @submit.prevent="submit">
    <div class="auth-form__header">
      <h2 class="text-h2 text-center">{{ formTitle }}</h2>
    </div>

    <div class="auth-form__body">
      <ULabelSection tag="label" label="Email:">
        <UInput v-model="email" type="email" :rules="[required]" lazy-rules />
      </ULabelSection>

      <ULabelSection tag="label" label="Пароль:">
        <UInput
          ref="password"
          v-model="password"
          type="password"
          :rules="passwordRules"
          @update:model-value="updatePassword"
          lazy-rules
        />
      </ULabelSection>

      <ULabelSection v-if="!isSignIn" tag="label" label="Повторить пароль:">
        <UInput
          ref="confirmPassword"
          v-model="confirmPassword"
          type="password"
          :rules="confirmPasswordRules"
          @update:model-value="updatePassword"
          lazy-rules
        />
      </ULabelSection>

      <p v-if="!isSignIn" class="text-center q-mt-md">
        Вы принимаете условия Политики конфиденциальности и даёте своё Согласие
        на обработку персональных данных после нажатия кнопки.
      </p>
    </div>

    <div class="auth-form__controls q-mt-md">
      <UButton
        :label="submitBtnLabel"
        type="submit"
        class="green-btn text-bold"
      />
      <UButton
        :label="redirectBtnLabel"
        class="orange-btn text-bold"
        @click="redirect"
      />
    </div>
  </q-form>
</template>

<style scoped lang="scss">
.auth-form {
  position: relative;
  max-width: 676px;
  width: 100%;
  padding-inline: 20px;
}

.auth-form__body {
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
}

.auth-form__controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
</style>
