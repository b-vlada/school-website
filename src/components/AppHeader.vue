<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import LogoIcon from '@/assets/icons/logo.svg'

const route = useRoute()
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'О школе', to: '/about' },
  { name: 'Педагоги', to: '/teachers' },
  { name: 'Ученикам', to: '/students' },
  { name: 'Контакты', to: '/contacts' }
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <RouterLink to="/" class="header__logo" @click="closeMenu">
        <LogoIcon class="header__logo-icon" />
        <span class="header__logo-text">
          МБОУ Зареченская ООШ<br />
          <span class="header__logo-sub">им. А.И. Отставнова</span>
        </span>
      </RouterLink>

      <nav class="header__nav" aria-label="Основная навигация">
        <ul class="header__nav-list">
          <li
            v-for="link in navLinks"
            :key="link.to"
            class="header__nav-item"
          >
            <RouterLink
              :to="link.to"
              class="header__nav-link"
              :class="{ 'header__nav-link--active': route.path === link.to }"
            >
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <RouterLink to="/contact" class="btn header__cta">
        Написать нам
      </RouterLink>

      <button
        class="header__burger"
        :class="{ 'header__burger--open': isMenuOpen }"
        @click="toggleMenu"
        aria-label="Меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div
      class="header__mobile-menu"
      :class="{ 'header__mobile-menu--open': isMenuOpen }"
    >
      <ul class="header__mobile-list">
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="header__mobile-link"
            :class="{ 'header__mobile-link--active': route.path === link.to }"
            @click="closeMenu"
          >
            {{ link.name }}
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="btn header__mobile-cta" @click="closeMenu">
            Написать нам
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-bg);
  border-bottom: 1px solid rgba(34, 34, 34, 0.1);
}

.header__inner {
  display: flex;
  align-items: center;
  gap: 32px;
  height: 72px;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.header__logo-icon {
  width: 30px;
  height: 30px;
}

.header__logo-text {
  font-size: 12px;
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
}

.header__logo-sub {
  font-weight: var(--font-weight-regular);
  color: rgba(34, 34, 34, 0.6);
}

.header__nav {
  flex: 1;
}

.header__nav-list {
  display: flex;
  align-items: center;
}

.header__nav-item {
  position: relative;
}

.header__nav-item + .header__nav-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 16px;
  background-color: var(--color-orange);
}

.header__nav-link {
  display: block;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  position: relative;
  transition: color 0.2s ease;
}

.header__nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 20px;
  right: 20px;
  height: 2px;
  background-color: var(--color-orange);
  transform: scaleX(0);
  transition: transform 0.2s ease;
}

.header__nav-link:hover::after,
.header__nav-link--active::after {
  transform: scaleX(1);
}

.header__cta {
  flex-shrink: 0;
  padding: 10px 22px;
  font-size: 16px;
}

.header__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  margin-left: auto;
}

.header__burger span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-text);
  transition: transform 0.25s ease, opacity 0.25s ease;
  transform-origin: center;
}

.header__burger--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.header__burger--open span:nth-child(2) {
  opacity: 0;
}

.header__burger--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.header__mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--color-bg);
  border-bottom: 1px solid rgba(34, 34, 34, 0.1);
  padding: 16px 0 24px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.header__mobile-menu--open {
  opacity: 1;
  pointer-events: auto;
}

.header__mobile-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 var(--container-padding-mobile);
}

.header__mobile-link {
  display: block;
  padding: 12px 0;
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  border-bottom: 1px solid rgba(34, 34, 34, 0.08);
}

.header__mobile-link--active {
  color: var(--color-orange);
}

.header__mobile-cta {
  margin-top: 16px;
  width: 100%;
}

@media (max-width: 1024px) {
  .header__nav,
  .header__cta {
    display: none;
  }

  .header__burger {
    display: flex;
  }

  .header__mobile-menu {
    display: block;
  }
}
</style>