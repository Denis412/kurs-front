export default {
  users: [
    {
      field: "name",
      name: "name",
      label: "Имя",
      align: "left",
      type: "text",
    },
    {
      field: "email",
      name: "email",
      label: "Email",
      align: "left",
      type: "text",
    },
    {
      field: "phone",
      name: "phone",
      label: "Телефон",
      align: "left",
      type: "text",
    },
    {
      field: "address",
      name: "address",
      label: "Адрес",
      align: "left",
      type: "text",
    },
  ],
  productsEditor: [
    {
      field: "price",
      name: "price",
      label: "Цена Р",
      align: "left",
      type: "text",
    },
    {
      field: "name",
      name: "name",
      label: "Название",
      align: "left",
      type: "text",
    },
    {
      field: "free_seats",
      name: "free_seats",
      label: "Количество мест",
      align: "left",
      type: "text",
    },
    {
      field: "img",
      name: "img",
      label: "Фото",
      align: "left",
      type: "image",
    },
    {
      field: "management",
      name: "management",
      label: "Управление",
      align: "left",
      type: "buttons",
    },
  ],
  orders: [
    {
      field: "name",
      name: "name",
      label: "Имя",
      align: "left",
      type: "text",
    },
    {
      field: "user_email",
      name: "user_email",
      label: "Email",
      align: "left",
      type: "text",
    },
    {
      field: "phone",
      name: "phone",
      label: "Телефон",
      align: "left",
      type: "text",
    },
    {
      field: "address",
      name: "address",
      label: "Адрес",
      align: "left",
      type: "text",
    },
    {
      field: "direction_name",
      name: "direction_name",
      label: "Название курса",
      align: "left",
      type: "text",
    },
    {
      field: "direction_price",
      name: "direction_price",
      label: "Цена",
      align: "left",
      type: "text",
    },
    {
      field: "status_name",
      name: "status_name",
      label: "Статус",
      align: "left",
      type: "text",
    },
    {
      field: "management",
      name: "management",
      label: "Управление",
      align: "left",
      type: "buttons",
    },
  ],
};

/*

    sourceTable: table,
    sourceField: field,
    name: `${table}.${field}`,
    field: `${table}.${field} as "${table}.${field}"`,
    label: label,
    align,
    type,
    visible,
    formatter: formatterFunc,

*/