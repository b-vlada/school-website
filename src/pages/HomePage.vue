<script setup lang="ts">
import { ref } from 'vue'
import FlagDesktop from '@/assets/icons/flag-desktop.svg'
import FlagMobile from '@/assets/icons/flag-mobile.svg'
import SchoolPhoto from '@/assets/images/school-photo.png'
import DividerDots from '@/assets/icons/divider-dots.svg'
import StudentsIcon from '@/assets/icons/students-icon.svg'
import ArrowCircle from '@/assets/icons/arrow-circle.svg'
import QuestionIcon from '@/assets/icons/question-icon.svg'

const foundingYear = 1984
const currentTeacherIndex = ref(0)

interface Teacher {
  id: number
  name: string
  position: string
  subjects: string
  qualifications: string
  totalExperience: string
  specialtyExperience: string
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: 'Алексеева Татьяна Владимировна',
    position: 'Директор, учитель географии',
    subjects: 'География',
    qualifications: '2024 г "Освоение примирительных технологий в разрешении школьных конфликтов"',
    totalExperience: '34 г 7 мес',
    specialtyExperience: '14 лет 8 мес',
  },
  {
    id: 2,
    name: 'Попов Павел Алексеевич',
    position: 'Учитель физической культуры',
    subjects: 'Физическая культура, ОБЖ',
    qualifications: '2025 г "Основы физической культуры и спорта в соответствии с обновлёнными ФГОС"',
    totalExperience: '36 лет',
    specialtyExperience: '5 лет',
  },
  {
    id: 3,
    name: 'Горбачева Елена Степановна',
    position: 'Учитель технологии',
    subjects: 'Технология, ИЗО, музыка',
    qualifications: '2024 г "Освоение примирительных технологий в разрешении школьных конфликтов"',
    totalExperience: '34 года 4 мес',
    specialtyExperience: '34 года 4 мес',
  },
]

const prevTeacher = () => {
  if (currentTeacherIndex.value > 0) currentTeacherIndex.value--
}
const nextTeacher = () => {
  if (currentTeacherIndex.value < teachers.length - 1) currentTeacherIndex.value++
}
</script>

<template>
  <div class="home">

    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__content">
          <h1 class="hero__title">
            <span class="hero__title-nowrap">МБОУ Зареченская ООШ</span><br>
            имени А.И. Отставнова
          </h1>
          <FlagDesktop class="hero__flag-desktop" />
          <FlagMobile class="hero__flag-mobile" />
          <div class="hero__photo-mobile">
            <img :src="SchoolPhoto" alt="Школа" class="hero__photo" />
            <address class="hero__address-mobile">
              601246, Владимирская область, Собинский район,<br>
              с. Заречное, ул. Парковая, д. 9
            </address>
          </div>
          <RouterLink to="/about" class="btn hero__cta">Узнать о школе</RouterLink>
        </div>
        <div class="hero__photo-wrap">
          <img :src="SchoolPhoto" alt="Школа" class="hero__photo" />
        </div>
      </div>
    </section>

    <div class="hero-address-wrap">
      <div class="container">
        <address class="hero__address">
          601246, Владимирская область, Собинский район,<br>
          с. Заречное, ул. Парковая, д. 9
        </address>
      </div>
    </div>

    <div class="divider">
      <DividerDots class="divider__svg" />
    </div>

    <section class="stats">
      <div class="container stats__inner">
        <span class="stats__text">Школа основана в</span>
        <span class="stats__year">{{ foundingYear }}</span>
        <span class="stats__text">году</span>
      </div>
    </section>

    <section class="about-preview">
      <div class="container">
        <p class="about-preview__text">
          Зареченская основная общеобразовательная школа находится в с. Заречное
          Собинского района Владимирской области и мы гордимся своей историей и традициями.
        </p>
        <RouterLink to="/about" class="btn about-preview__btn">Подробнее об истории →</RouterLink>
      </div>
    </section>

    <section class="teachers-preview">
      <div class="container">
        <h2 class="section-title">Наши педагоги</h2>
        <div class="teachers-grid">
          <div
            v-for="(teacher, index) in teachers"
            :key="teacher.id"
            class="teacher-card"
            :class="{ 'teacher-card--hidden': index !== currentTeacherIndex }"
          >
            <h3 class="teacher-card__name">{{ teacher.name }}</h3>
            <div class="teacher-card__content">
              <div class="teacher-card__item">
                <span class="teacher-card__label">Должность:</span>
                <span class="teacher-card__value">{{ teacher.position }}</span>
              </div>
              <div class="teacher-card__item">
                <span class="teacher-card__label">Преподаваемые дисциплины:</span>
                <span class="teacher-card__value">{{ teacher.subjects }}</span>
              </div>
              <div class="teacher-card__item">
                <span class="teacher-card__label">Повышение квалификации (за 3 года):</span>
                <span class="teacher-card__value">{{ teacher.qualifications }}</span>
              </div>
              <div class="teacher-card__item">
                <span class="teacher-card__label">Общий стаж работы:</span>
                <span class="teacher-card__value">{{ teacher.totalExperience }}</span>
              </div>
              <div class="teacher-card__item">
                <span class="teacher-card__label">Стаж по специальности:</span>
                <span class="teacher-card__value">{{ teacher.specialtyExperience }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="teachers-mobile-nav">
          <button class="teachers-nav-btn" :disabled="currentTeacherIndex === 0" @click="prevTeacher" aria-label="Предыдущий">←</button>
          <span class="teachers-nav-counter">{{ currentTeacherIndex + 1 }} / {{ teachers.length }}</span>
          <button class="teachers-nav-btn" :disabled="currentTeacherIndex === teachers.length - 1" @click="nextTeacher" aria-label="Следующий">→</button>
        </div>

        <RouterLink to="/teachers" class="btn teachers-preview__more">Весь педагогический состав →</RouterLink>
      </div>
    </section>

    <section class="students-preview">
      <div class="container">
        <div class="students-header">
          <h2 class="section-title students-header__title">Для учеников</h2>
          <StudentsIcon class="students-header__icon" />
        </div>
        <div class="students-grid">
          <RouterLink to="/students" class="students-card">
            <h3 class="students-card__title">Полезные ресурсы</h3>
            <p class="students-card__text">
              Лучшие сайты для подготовки по математике, русскому, физике,
              истории и другим предметам — проверенные и бесплатные
            </p>
            <ArrowCircle class="students-card__arrow" />
          </RouterLink>
          <RouterLink to="/students?tab=tips" class="students-card students-card--orange">
            <h3 class="students-card__title">Советы</h3>
            <p class="students-card__text">
              Как готовиться к экзаменам, не бояться выступлений
              и всё успевать — короткие и честные советы
            </p>
            <ArrowCircle class="students-card__arrow students-card__arrow--white" />
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="contact-mini">
      <div class="container">
        <div class="contact-mini__header">
          <QuestionIcon class="contact-mini__icon" />
          <h2 class="contact-mini__title">Есть вопрос? Напишите нам</h2>
        </div>
        <form class="contact-mini__form" @submit.prevent>
          <input type="text" placeholder="Имя" class="contact-mini__input" required />
          <input type="email" placeholder="Email" class="contact-mini__input" required />
          <textarea placeholder="Сообщение..." class="contact-mini__input contact-mini__textarea" required></textarea>
          <button type="submit" class="btn contact-mini__btn">Отправить</button>
        </form>
      </div>
    </section>

  </div>
</template>

<style scoped>
.hero { padding: 40px 0; }

.hero__inner {
  display: flex;
  align-items: flex-start;
  gap: 30px;
}

.hero__content {
  flex: 1;
  padding-top: 40px;
  padding-bottom: 40px;
}

.hero__title {
  font-size: 55px;
  font-weight: var(--font-weight-semibold);
  line-height: 1.1;
  margin-bottom: 32px;
}

.hero__title-nowrap { white-space: nowrap; }

.hero__flag-desktop {
  width: 636px;
  height: 141px;
  display: block;
  overflow: visible;
  margin-bottom: 20px;
}

.hero__flag-mobile { display: none; }

.hero__photo-mobile { display: none; }

.hero__photo-wrap {
  flex-shrink: 0;
  width: 617px;
  margin-left: auto;
  margin-right: 40px;
}

.hero__photo {
  width: 100%;
  height: auto;
  display: block;
}

.hero__address {
  font-size: 22px;
  line-height: 1.5;
  font-style: normal;
  margin-top: -180px;
  margin-bottom: 100px;
}

.hero__address-mobile { display: none; }

.divider {
  width: 100%;
  line-height: 0;
  display: flex;
  justify-content: center;
}

.divider__svg {
  width: auto;
  height: auto;
  display: block;
  overflow: visible;
}

.stats { padding: 28px 0 0; }

.stats__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.stats__text {
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
}

.stats__year {
  font-size: 100px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-orange);
  line-height: 1;
}

.about-preview { padding: 40px 0 60px; }

.about-preview__text {
  font-size: 25px;
  font-weight: var(--font-weight-medium);
  line-height: 1.7;
  max-width: 720px;
  margin-bottom: 20px;
}

.section-title {
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
  margin-bottom: 40px;
}

.teachers-preview { padding: 0 0 50px; }

.teachers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 5px;
}

.teacher-card {
  border: 5px solid var(--color-orange);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}

.teacher-card__name {
  max-width: 350px;
  font-size: 25px;
  font-weight: var(--font-weight-semibold);
  text-align: center;
  padding: 30px 20px 0;
  line-height: 1.3;
  margin: 0 auto;
}

.teacher-card__content {
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.teacher-card__item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.teacher-card__label {
  font-size: 20px;
  font-weight: var(--font-weight-semibold);
}

.teacher-card__value {
  font-size: 20px;
  font-weight: var(--font-weight-medium);
  line-height: 1.4;
}

.teachers-mobile-nav { display: none; }

.teachers-preview__more { margin-top: 16px; }

.students-preview { padding: 16px 0 0; }

.students-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 45px;
}

.students-header__title { margin-bottom: 0; }

.students-header__icon {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: block;
  overflow: visible;
  transform: translateY(-20px);
}

.students-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.students-card {
  display: flex;
  flex-direction: column;
  padding: 35px 40px;
  border-radius: 16px;
  background-color: var(--color-yellow);
  color: var(--color-text);
  text-decoration: none;
  min-height: 275px;
  position: relative;
  transition: transform 0.2s ease;
}

.students-card:hover { transform: translateY(-2px); }

.students-card--orange {
  background-color: var(--color-orange);
  color: #fff;
}

.students-card__title {
  font-size: 28px;
  font-weight: var(--font-weight-semibold);
  margin-bottom: 20px;
}

.students-card__text {
  font-size: 25px;
  font-weight: var(--font-weight-medium);
  line-height: 1.4;
  flex: 1;
}

.students-card__arrow {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: block;
  overflow: visible;
}

.students-card__arrow--white {
  filter: brightness(0) invert(1);
}

.contact-mini { padding: 60px 0 56px; }

.contact-mini__header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 36px;
}

.contact-mini__icon {
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  display: block;
  overflow: visible;
}

.contact-mini__title {
  font-size: 28px;
  font-weight: var(--font-weight-semibold);
}

.contact-mini__form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-mini__input {
  border: 2px solid #4F4F4F;
  border-radius: 20px;
  padding: 12px 16px;
  font-size: 22px;
  font-weight: var(--font-weight-medium);
  font-family: inherit;
  background-color: transparent;
  color: var(--color-text);
  transition: border-color 0.2s ease;
}

.contact-mini__input::placeholder { color: #7A7A7A; }
.contact-mini__input:focus { outline: none; border-color: var(--color-orange); }
.contact-mini__textarea { min-height: 100px; resize: vertical; }
.contact-mini__btn { align-self: flex-end; }

@media (max-width: 1200px) {
  .hero__photo-wrap { width: 460px; }
  .stats__year { font-size: 72px; }
  .stats__text { font-size: 32px; }
}

@media (max-width: 1024px) {
  .hero__inner { flex-direction: column; }
  .hero__photo-wrap { width: 100%; max-width: 540px; margin: 0 auto; }
  .hero__title { font-size: 44px; }
  .teachers-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .hero { padding: 24px 0 0; }

  .hero__inner {
    flex-direction: column;
    gap: 0;
    align-items: stretch;
  }

  .hero__content {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  .hero__title {
    font-size: 28px;
    margin-bottom: 16px;
    text-align: center;
    width: 100%;
  }

  .hero__title-nowrap { white-space: normal; }

  .hero__flag-desktop { display: none; }

  .hero__flag-mobile {
    display: block;
    max-width: 360px;
    width: 100%;
    height: auto;
    overflow: visible;
    margin: 0 auto 16px auto;
  }

  .hero__photo-wrap { display: none; }

  .hero__photo-mobile {
    display: block;
    width: 100%;
    margin-bottom: 16px;
  }

  .hero__photo {
    width: 100%;
    height: auto;
    border-radius: 16px;
    display: block;
  }

  .hero__address-mobile {
    display: block;
    font-size: 13px;
    font-style: normal;
    text-align: center;
    color: rgba(34, 34, 34, 0.65);
    line-height: 1.6;
    margin-top: 10px;
  }

  .hero-address-wrap { display: none; }

  .hero__cta {
    width: 100%;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 0;
  }

  .divider { margin: 32px 0; }

  .stats { padding: 0 0 40px; }

  .stats__inner {
    flex-direction: column;
    gap: 0;
    text-align: center;
  }

  .stats__text { font-size: 20px; }
  .stats__year { font-size: 64px; }

  .about-preview { padding: 0 0 40px; }

  .about-preview__text {
    font-size: 16px;
    line-height: 1.6;
    text-align: center;
    max-width: 100%;
    margin-bottom: 0;
  }

  .about-preview__btn {
    width: 100%;
    justify-content: center;
    margin-top: 20px;
  }

  .teachers-preview { padding: 40px 0; }

  .section-title {
    font-size: 22px;
    margin-bottom: 20px;
    text-align: center;
  }

  .teachers-grid { grid-template-columns: 1fr; }
  .teacher-card--hidden { display: none; }
  .teacher-card__name { font-size: 18px; padding: 20px 16px 0; }
  .teacher-card__content { padding: 20px 16px; gap: 14px; }
  .teacher-card__label, .teacher-card__value { font-size: 14px; }

  .teachers-mobile-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 16px 0 20px;
  }

  .teachers-nav-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid var(--color-orange);
    background: none;
    font-size: 18px;
    color: var(--color-orange);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .teachers-nav-btn:hover:not(:disabled) {
    background-color: var(--color-orange);
    color: #fff;
  }

  .teachers-nav-btn:disabled { opacity: 0.3; cursor: not-allowed; }

  .teachers-nav-counter {
    font-size: 16px;
    font-weight: var(--font-weight-medium);
    color: rgba(34, 34, 34, 0.6);
    min-width: 48px;
    text-align: center;
  }

  .teachers-preview__more {
    width: 100%;
    justify-content: center;
  }

  .students-preview { padding: 40px 0 0; }

  .students-header {
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
  }

  .students-header__title {
    font-size: 22px;
    margin-bottom: 0;
    text-align: center;
  }

  .students-header__icon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }

  .students-grid { grid-template-columns: 1fr; gap: 16px; }

  .students-card {
    min-height: auto;
    padding: 20px;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .students-card__title {
    font-size: 18px;
    margin-bottom: 10px;
    padding-right: 44px;
  }

  .students-card__text { font-size: 15px; }

  .students-card__arrow {
    width: 28px;
    height: 28px;
    top: 12px;
    right: 35px
  }

  .contact-mini { padding: 40px 0 48px; }

  .contact-mini__header {
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
  }

  .contact-mini__icon {
    width: 50px;
    height: 50px;
   flex-shrink: 0;
  }

  .contact-mini__icon :deep(svg) {
    width: 100% !important;
    height: 100% !important;
    max-width: 28px !important;
    max-height: 28px !important;
    display: block;
}

  .contact-mini__title { font-size: 18px; line-height: 1.3; }
  .contact-mini__input { font-size: 16px; padding: 10px 14px; }
  .contact-mini__btn { width: 100%; align-self: center; justify-content: center; }
}
</style>