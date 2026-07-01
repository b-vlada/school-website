<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__info">
        <p class="footer__name">МБОУ Зареченская ООШ им. А.И. Отставнова</p>
        <p class="footer__address">
          601246, Владимирская область, Собинский район,<br />
          с. Заречное, ул. Парковая, д. 9
        </p>
        <p class="footer__director">Директор: Алексеева Татьяна Владимировна</p>
      </div>

      <nav class="footer__nav">
        <RouterLink to="/about" class="footer__link">О школе</RouterLink>
        <RouterLink to="/teachers" class="footer__link">Педагоги</RouterLink>
        <RouterLink to="/students" class="footer__link">Ученикам</RouterLink>
        <RouterLink to="/contact" class="footer__link">Написать нам</RouterLink>
        <RouterLink to="/contacts" class="footer__link">Контакты</RouterLink>
      </nav>
    </div>

    <div class="container footer__bottom">
      <p class="footer__copyright">© {{ currentYear }} МБОУ Зареченская ООШ им. А.И. Отставнова</p>
      <span class="footer__policy">Политика конфиденциальности</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-text);
  color: var(--color-bg);
  padding-top: 48px;
}

.footer__inner {
  display: flex;
  gap: 64px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(246, 242, 241, 0.15);
}

.footer__info {
  flex: 1;
}

.footer__name {
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  margin-bottom: 12px;
}

.footer__address,
.footer__director {
  font-size: 14px;
  font-weight: var(--font-weight-regular);
  color: rgba(246, 242, 241, 0.7);
  line-height: 1.6;
  margin-top: 8px;
}

.footer__nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__link {
  font-size: 14px;
  font-weight: var(--font-weight-medium);
  color: rgba(246, 242, 241, 0.8);
  transition: color 0.2s ease;
}

.footer__link:hover {
  color: var(--color-orange);
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 24px;
}

.footer__copyright,
.footer__policy {
  font-size: 13px;
  color: rgba(246, 242, 241, 0.5);
}

@media (max-width: 768px) {
  .footer__inner {
    flex-direction: column;
    gap: 32px;
  }

  .footer__bottom {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
}
</style>