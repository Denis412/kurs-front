export default {
  methods: {
    required(v) {
      const errorMessage = "Поле обязательно для заполнения.";
      if (!v) {
        return errorMessage;
      }

      if (typeof v === "object") {
        return !!v.value ?? errorMessage;
      }
    },

    equalValue(v1) {
      return function (v2) {
        const errorMessage = `Значение '${v2}' не равно '${v1}'`;
        return v1 === v2 || errorMessage;
      };
    },

    equalPassword(v1) {
      return (v2) => {
        const isEqual = this.equalValue(v1)(v2);

        if (typeof isEqual === "string") {
          return "Пароли не совпадают";
        }

        return true;
      };
    },
  },
};
