<script setup lang="ts">
import LocationIcon from '@/assets/icons/location-icon.svg'
import DirectorIcon from '@/assets/icons/director-icon.svg'
import PhoneIcon from '@/assets/icons/phone-icon.svg'
import EmailIcon from '@/assets/icons/email-icon.svg'
</script>

<template>
  <div class="contacts-page">
    <div class="container">

      <!-- ЗАГОЛОВОК -->
      <h1 class="contacts-page__title">Контакты</h1>

      <!-- НАЗВАНИЕ ОРГАНИЗАЦИИ -->
      <p class="contacts-page__org">
        Муниципальное бюджетное общеобразовательное учреждение
        Зареченская основная общеобразовательная школа имени
        Героя Советского Союза Алексея Ивановича Отставнова
      </p>

      <!-- БЛОКИ КОНТАКТОВ -->
      <div class="contacts-list">

        <!-- АДРЕС -->
        <div class="contacts-item">
          <div class="contacts-item__heading">
            <LocationIcon
              style="width: 30px; height: 36px; flex-shrink: 0; display: block; overflow: visible;"
            />
            <h2 class="contacts-item__title">Адрес</h2>
          </div>
          <p class="contacts-item__value">
            601246, Россия, Владимирская область, Собинский район,
            село Заречное, улица Парковая, д. 9
          </p>
        </div>

        <!-- ДИРЕКТОР -->
        <div class="contacts-item">
          <div class="contacts-item__heading">
            <DirectorIcon
              style="width: 35px; height: 30px; flex-shrink: 0; display: block; overflow: visible;"
            />
            <h2 class="contacts-item__title">Директор</h2>
          </div>
          <p class="contacts-item__value">Алексеева Татьяна Владимировна</p>
        </div>

        <!-- ТЕЛЕФОН -->
        <div class="contacts-item">
          <div class="contacts-item__heading">
            <PhoneIcon
              style="width: 30px; height: 28px; flex-shrink: 0; display: block; overflow: visible;"
            />
            <h2 class="contacts-item__title">Телефон</h2>
          </div>
          <a href="tel:+74924269142" class="contacts-item__value contacts-item__link">
            8 (4924) 26-91-42
          </a>
        </div>

        <!-- ПОЧТА -->
        <div class="contacts-item">
          <div class="contacts-item__heading">
            <EmailIcon
              style="width: 30px; height: 23px; flex-shrink: 0; display: block; overflow: visible;"
            />
            <h2 class="contacts-item__title">Почта</h2>
          </div>
          <a href="mailto:zarsosh@mail.ru" class="contacts-item__value contacts-item__link">
            zarsosh@mail.ru
          </a>
        </div>

      </div>
    </div>

    <div class="contacts-map">
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=39.913154%2C55.941627&z=16&pt=39.913154%2C55.941627%2Cpm2rdm&l=map"
        class="contacts-map__iframe"
        allowfullscreen
        loading="lazy"
        title="Карта — МБОУ Зареченская ООШ"
      ></iframe>
    </div>

  </div>
</template>

<style scoped>
.contacts-page { padding-bottom: 0; }

.contacts-page__title {
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
  padding-top: 60px;
  margin-bottom: 50px;
}

.contacts-page__org {
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
  margin-bottom: 60px;
  max-width: 1100px;
}

.contacts-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.contacts-item { padding-bottom: 35px; }

.contacts-item__heading {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.contacts-item__icon {
  flex-shrink: 0;
  display: block;
  object-fit: contain;
}

.contacts-item__title {
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
  line-height: 1;
}

.contacts-item__value {
  font-size: 25px;
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
  color: var(--color-text);
}

.contacts-item__link {
  text-decoration: none;
  transition: color 0.2s ease;
}

.contacts-item__link:hover { color: var(--color-orange); }

.contacts-map { width: 100%; height: 600px; }

.contacts-map__iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
  display: block;
}

@media (max-width: 1024px) {
  .contacts-page__org { font-size: 28px; }
  .contacts-item__title { font-size: 28px; }
  .contacts-item__value { font-size: 18px; }
}

@media (max-width: 768px) {
  .contacts-page__title { font-size: 28px; padding-top: 32px; margin-bottom: 24px; }
  .contacts-page__org { font-size: 16px; margin-bottom: 32px; line-height: 1.5; }
  .contacts-item { padding-bottom: 20px; }
  .contacts-item__heading { gap: 10px; margin-bottom: 8px; }
  .contacts-item__title { font-size: 22px; }
  .contacts-item__value { font-size: 15px; }
  .contacts-map { height: 360px; }
  .contacts-map__iframe { border-radius: 12px; }
}
</style>