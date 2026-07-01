<script setup lang="ts">
import AlekseyPhoto from '@/assets/images/Alekseyivanovich-photo.png'
import ShabanovPhoto from '@/assets/images/Shabanovconstantin-photo.png'
import TimukovaPhoto from '@/assets/images/TimukovaGalina-photo.png'
import ChernyshevaPhoto from '@/assets/images/Chernyshevanatoliy-photo.png'
import MaximovaPhoto from '@/assets/images/Maximovatatiana-photo.png'
import DeldyuzkhovaPhoto from '@/assets/images/Deldyuzhovairina-photo.png'
import AlekseevaPhoto from '@/assets/images/AlekseevaTatyana-photo.png'

interface Director {
  id: number
  name: string
  photo: string
  photoWidth: number
  photoHeight: number
  bio: string[]
}

const directors: Director[] = [
  {
    id: 1,
    name: 'Шабанов Константин Дмитриевич',
    photo: ShabanovPhoto,
    photoWidth: 320,
    photoHeight: 373,
    bio: [
      'Первый директор школы.',
      'Родился в деревне Цепелево в 1910 году.',
      'В октябре 1941 г ушел на фронт.',
      'Войну закончил в Венгрии в 1944 году.',
    ],
  },
  {
    id: 2,
    name: 'Тимукова Галина Яковлевна',
    photo: TimukovaPhoto,
    photoWidth: 320,
    photoHeight: 363,
    bio: [
      'Родилась 30.04.1940 года в Московской области.',
      'Закончила Великолукский Государственный Педагогический Институт по профессии учитель физики и математики.',
      'С 1984 года по 1995 год занимала должность директора школы.',
    ],
  },
  {
    id: 3,
    name: 'Чернышев Анатолий Валентинович',
    photo: ChernyshevaPhoto,
    photoWidth: 320,
    photoHeight: 330,
    bio: [
      'Родился 15.09.1948 года.',
      'Закончил Московский Государственный Университет по специальности педагог истории и обществознания.',
      'С 1973 года по 1994 год работал учителем истории на Украине.',
      'С 1994 года работает в Зареченской школе, с 1995 года по 2006 год занимал должность директора.',
    ],
  },
  {
    id: 4,
    name: 'Максимова Татьяна Павловна',
    photo: MaximovaPhoto,
    photoWidth: 320,
    photoHeight: 337,
    bio: [
      'Четвёртый директор школы.',
      'Родилась 01.05.1965 года.',
      'Закончила Владимирский Государственный Педагогический Университет по специальности учитель русского языка и литературы.',
      'Занимала пост директора школы с 2006 по 2017 год.',
    ],
  },
  {
    id: 5,
    name: 'Дельдюжова Ирина Николаевна',
    photo: DeldyuzkhovaPhoto,
    photoWidth: 320,
    photoHeight: 385,
    bio: [
      'Пятый директор школы.',
      'Родилась 29.11.1972 г.',
      'Учитель русского языка и литературы.',
      'Занимала пост директора с 2019 года по 2020 год.',
    ],
  },
  {
    id: 6,
    name: 'Алексеева Татьяна Владимировна',
    photo: AlekseevaPhoto,
    photoWidth: 320,
    photoHeight: 352,
    bio: [
      'Шестой директор школы.',
      'Родилась 27.12.1973 г.',
      'Юрист. Учитель географии.',
      'Занимает пост директора школы с 14 января 2021 года по настоящее время.',
    ],
  },
]
</script>

<template>
  <div class="about">
    <div class="container">

      <!-- МИССИЯ -->
      <section class="mission">
        <h1 class="mission__title">Миссия и ценности</h1>
        <p class="mission__subtitle">
          Наша школа — часть истории Собинского района.<br>
          Более 40 лет мы воспитываем и обучаем детей,<br>
          сохраняя память о людях, прославивших нашу землю.
        </p>
      </section>

      <!-- ИСТОРИЯ -->
      <section class="history">
        <p class="history__text">
          Зареченская средняя школа была образована
          <span class="history__accent">1 сентября 1984 года</span>
          в связи с закрытием Копнинской средней школы в деревне Цепелево.
          Весь контингент учителей был назначен в порядке перевода на работу
          в Зареченскую среднюю школу.
        </p>
      </section>

      <!-- ОТСТАВНОВ -->
      <section class="hero-person">
        <img
          :src="AlekseyPhoto"
          alt="Алексей Иванович Отставнов"
          class="hero-person__photo"
          width="400"
          height="520"
        />
        <div class="hero-person__info">
          <div class="hero-person__heading">
            <h2 class="hero-person__name">Алексей Иванович Отставнов</h2>
          </div>
          <p class="hero-person__bio">
            Герой Советского Союза, участник Великой Отечественной войны.
            Наша школа с гордостью носит его имя, помня о подвиге
            защитников Родины.
          </p>
        </div>
      </section>

      <!-- ИСТОРИЯ В ЛИЦАХ -->
      <section class="directors">
        <h2 class="directors__title">История в лицах</h2>

        <div
          v-for="director in directors"
          :key="director.id"
          class="director"
        >
          <img
            :src="director.photo"
            :alt="director.name"
            class="director__photo"
            :width="director.photoWidth"
            :height="director.photoHeight"
          />
          <div class="director__info">
            <h3 class="director__name">{{ director.name }}</h3>
            <p
              v-for="(line, i) in director.bio"
              :key="i"
              class="director__bio-line"
            >
              {{ line }}
            </p>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
.mission { padding-top: 60px; }

.mission__title {
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
  margin-bottom: 16px;
}

.mission__subtitle {
  font-size: 25px;
  font-weight: var(--font-weight-medium);
  line-height: 1.6;
}

.history { margin-top: 55px; }

.history__text {
  font-size: 25px;
  font-weight: var(--font-weight-medium);
  line-height: 1.6;
  text-align: center;
}

.history__accent {
  font-weight: var(--font-weight-semibold);
  color: var(--color-orange);
}

.hero-person {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-top: 100px;
}

.hero-person__photo {
  flex-shrink: 0;
  width: 400px;
  height: 520px;
  object-fit: cover;
  display: block;
}

.hero-person__info { padding-top: 40px; }

.hero-person__heading {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.hero-person__name {
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
  line-height: 1.2;
}

.hero-person__bio {
  font-size: 28px;
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

.directors {
  margin-top: 60px;
  padding-bottom: 80px;
}

.directors__title {
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
  margin-bottom: 28px;
}

.director {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 16px;
}

.director:last-child { margin-bottom: 0; }

.director__photo {
  flex-shrink: 0;
  width: 320px;
  height: auto;
  object-fit: contain;
  display: block;
}

.director__name {
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
  line-height: 1.2;
  margin-bottom: 16px;
}

.director__bio-line {
  font-size: 25px;
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .hero-person__name { font-size: 32px; }
  .hero-person__bio { font-size: 22px; }
  .director__name { font-size: 30px; }
  .director__bio-line { font-size: 20px; }
}

@media (max-width: 768px) {
  .mission { padding-top: 40px; }
  .mission__title { font-size: 24px; }
  .mission__subtitle { font-size: 16px; }
  .history { margin-top: 32px; }
  .history__text { font-size: 16px; }

  .hero-person {
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    gap: 20px;
  }

  .hero-person__photo { width: 100%; max-width: 280px; height: auto; }
  .hero-person__info { padding-top: 0; }
  .hero-person__heading { gap: 8px; }
  .hero-person__star { width: 36px; height: 33px; }
  .hero-person__name { font-size: 22px; }
  .hero-person__bio { font-size: 16px; }

  .directors { margin-top: 40px; padding-bottom: 48px; }
  .directors__title { font-size: 24px; margin-bottom: 20px; }

  .director {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 36px;
  }

  .director__photo { width: 100%; max-width: 260px; }
  .director__name { font-size: 20px; text-align: center; margin-bottom: 10px; }
  .director__bio-line { font-size: 15px; line-height: 1.6; text-align: center; }
}
</style>