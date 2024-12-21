<script>
import { defineComponent } from "vue";
import { UButton } from "@shared";

export default defineComponent({
  name: "MainFooter",
});
</script>

<template>
  <q-footer class="main-footer">
    <div class="main-footer__inner">
      <div class="main-footer__navigation">
        <p class="text-bold">Навигация</p>

        <ul class="footer-list">
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/directions">Направления</a>
          </li>
        </ul>
      </div>

      <div class="main-footer__contacts">
        <p class="text-bold">Контакты</p>

        <ul class="footer-list">
          <li>г. Москва, Авиамоторная ул., 8А</li>
          <li>
            <a href="mailto:Tigerhill@mail.ru">Tigerhill@mail.ru</a>
          </li>
          <li>
            <a href="phone:+7 (999) 999-99-99">+7 (999) 999-99-99</a>
          </li>
        </ul>
      </div>
    </div>
  </q-footer>
</template>

<style scoped lang="scss">
.main-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary-dark;
  padding-top: 64px;
  padding-bottom: 64px;
}

.main-footer__inner {
  position: relative;
  display: flex;
  gap: 64px;
}

.footer-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style-type: none;
}
</style>
