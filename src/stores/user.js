import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useUserStore = defineStore("user", {
  state() {
    return {
      user: null,
      loading: false,
    };
  },

  actions: {
    async fetchUser() {
      try {
        this.loading = true;
        const getResult = await api.get("user/current");
        this.user = getResult.data;
        this.loading = false;
        return this.user;
      } catch (e) {
        this.router.push({
          name: "sign-in",
        });
      }
    },
  },
});
