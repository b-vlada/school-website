<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ArrowCircle from '@/assets/icons/arrow-circle.svg'
import TriangleIcon from '@/assets/icons/triangle-icon.svg'
import NotepadIcon from '@/assets/icons/notepad-icon.svg'
import MicroscopeIcon from '@/assets/icons/microscope-icon.svg'
import WorldIcon from '@/assets/icons/world-icon.svg'
import PeopleStudyIcon from '@/assets/icons/people-study.svg'
import AlarmClock from '@/assets/images/alarm-clock.png'
import ExamStudy from '@/assets/images/exam-study.png'
import MicrophoneImg from '@/assets/images/microphone-icon.png'

const route = useRoute()
const activeTab = ref<'resources' | 'tips'>('resources')

onMounted(() => {
  if (route.query.tab === 'tips') {
    activeTab.value = 'tips'
  }
})

interface ResourceCard {
  title: string
  desc: string
  url: string
}

interface ResourceSection {
  icon: string
  subject: string
  color: 'orange' | 'yellow'
  cards: ResourceCard[]
}

const sections: ResourceSection[] = [
  {
    icon: TriangleIcon,
    subject: 'Математика',
    color: 'orange',
    cards: [
      { title: 'Matematika.Club', desc: 'Интернет-ресурс с онлайн-тренажёрами по математике', url: 'https://matematika.club/' },
      { title: 'mathproblems.ru', desc: 'Сборник задач по математике', url: 'https://mathproblems.ru/' },
      { title: 'matburo.ru', desc: 'Сайт с пошаговыми решениями задач', url: 'https://www.matburo.ru/' },
    ],
  },
  {
    icon: NotepadIcon,
    subject: 'Русский язык',
    color: 'yellow',
    cards: [
      { title: 'Gramota.ru', desc: 'Словари, правила, проверка слов', url: 'https://gramota.ru/' },
      { title: 'textologia.ru', desc: 'Образовательный медиа-портал', url: 'https://www.textologia.ru/' },
      { title: 'vsrussian.com', desc: 'Сайт для обучения русскому языку детей онлайн', url: 'https://vsrussian.com/' },
    ],
  },
  {
    icon: MicroscopeIcon,
    subject: 'Физика и химия',
    color: 'orange',
    cards: [
      { title: 'virtulab.net', desc: 'Портал, где эксперименты можно смоделировать онлайн', url: 'http://www.virtulab.net/' },
      { title: 'Фоксфорд.Учебник', desc: 'Собственная википедия Фоксфорда', url: 'https://foxford.ru/wiki/fizika' },
      { title: 'fizika.ru', desc: 'Сборники вопросов и задач по физике', url: 'https://fizika.ru/' },
    ],
  },
  {
    icon: WorldIcon,
    subject: 'История и обществознание',
    color: 'yellow',
    cards: [
      { title: 'history.ru', desc: 'Портал с информацией об истории', url: 'https://history.ru/' },
      { title: 'shm.ru', desc: 'Сайт Государственного исторического музея', url: 'https://shm.ru/' },
      { title: 'soc-ege.sdamgia.ru', desc: 'База заданий ЕГЭ и ОГЭ по обществознанию', url: 'https://soc-ege.sdamgia.ru/' },
    ],
  },
  {
    icon: PeopleStudyIcon,
    subject: 'Для всех предметов',
    color: 'orange',
    cards: [
      { title: 'Школа Фоксфорд', desc: 'Онлайн‑школа для школьников', url: 'https://foxford.ru/' },
      { title: 'uchi.ru', desc: 'Интерактивные задания по всем предметам', url: 'https://uchi.ru' },
      { title: 'yaklass.ru', desc: 'Тренажёры и задачи по школьной программе', url: 'https://www.yaklass.ru' },
    ],
  },
]

const selfDevCards: ResourceCard[] = [
  { title: 'lifehacker.ru', desc: 'Лайфхаки для учёбы', url: 'https://lifehacker.ru/tag/ucheba/' },
  { title: 'wikium.ru', desc: 'Тренировка памяти и внимания', url: 'https://wikium.ru/' },
  { title: '4brain.ru', desc: 'Техники запоминания, саморазвитие', url: 'https://4brain.ru/' },
]

interface TipPoint {
  num: number
  title: string
  text: string
}

interface Tip {
  id: number
  title: string
  bordered: boolean
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  imageLeft: boolean
  points: TipPoint[]
}

const tips: Tip[] = [
  {
    id: 1,
    title: 'Как всё успевать?',
    bordered: true,
    image: AlarmClock,
    imageAlt: 'Будильник',
    imageWidth: 493,
    imageHeight: 516,
    imageLeft: false,
    points: [
      {
        num: 1,
        title: 'Записывай дела — не держи в голове',
        text: 'Блокнот или приложение — неважно. Таким образом все дела будут выполнены.',
      },
      {
        num: 2,
        title: 'Телефон — главный враг времени',
        text: 'Убери его в другую комнату, когда делаешь уроки. Серьёзно, это меняет всё.',
      },
      {
        num: 3,
        title: 'Отдых — это не лень',
        text: 'Важно уметь разгружаться и пополнять запас энергии. Прогулка, качественный сон — твои друзья.',
      },
    ],
  },
  {
    id: 2,
    title: 'Как готовиться к экзаменам',
    bordered: false,
    image: ExamStudy,
    imageAlt: 'Подготовка к экзамену',
    imageWidth: 546,
    imageHeight: 546,
    imageLeft: false,
    points: [
      {
        num: 1,
        title: 'Решай варианты, а не читай учебник',
        text: 'Пассивное чтение создаёт иллюзию знания. Реальное знание проверяется практикой.',
      },
      {
        num: 2,
        title: 'Объясняй материал вслух',
        text: 'Если не можешь объяснить тему простыми словами — значит, не понял её.',
      },
      {
        num: 3,
        title: 'Спи перед экзаменом',
        text: 'Невыспавшийся мозг работает на 40% хуже. Сон важнее последней повторённой темы.',
      },
    ],
  },
  {
    id: 3,
    title: 'Как не бояться выступлений',
    bordered: false,
    image: MicrophoneImg,
    imageAlt: 'Выступление',
    imageWidth: 463,
    imageHeight: 589,
    imageLeft: true,
    points: [
      {
        num: 1,
        title: 'Говори медленнее, чем кажется нужным',
        text: 'Когда волнуешься, речь ускоряется в 2 раза. Замедлись — и тебя будут понимать.',
      },
      {
        num: 2,
        title: 'Смотри на людей, которые кивают',
        text: 'Всегда есть те, кто слушает внимательно. Найди их глазами и говори им.',
      },
      {
        num: 3,
        title: 'Ошибки — не конец света',
        text: 'Никто не запоминает твои запинки. Все думают о себе.',
      },
    ],
  },
]
</script>

<template>
  <div class="students-page">
    <div class="container">

      <!-- ВКЛАДКИ -->
      <div class="tabs">
        <button
          class="tabs__btn"
          :class="{ 'tabs__btn--active': activeTab === 'resources' }"
          @click="activeTab = 'resources'"
        >
          Полезные ресурсы
        </button>
        <button
          class="tabs__btn"
          :class="{ 'tabs__btn--active': activeTab === 'tips' }"
          @click="activeTab = 'tips'"
        >
          Советы
        </button>
      </div>

      <!-- ===== ВКЛАДКА: ПОЛЕЗНЫЕ РЕСУРСЫ ===== -->
      <div v-if="activeTab === 'resources'" class="resources">

        <h1 class="resources__title">Полезные ресурсы</h1>

        <!-- ПРЕДМЕТНЫЕ СЕКЦИИ -->
        <div
          v-for="section in sections"
          :key="section.subject"
          class="resources__section"
        >
          <div class="resources__section-heading">
            <component
              :is="section.icon"
              class="resources__section-icon"
            />
            <h2 class="resources__section-title">{{ section.subject }}</h2>
          </div>

          <div class="resources__cards">
            <a
              v-for="card in section.cards"
              :key="card.url"
              :href="card.url"
              target="_blank"
              rel="noopener noreferrer"
              class="resource-card"
              :class="[`resource-card--${section.color}`]"
            >
              <div class="resource-card__body">
                <span class="resource-card__title">{{ card.title }}</span>
                <span class="resource-card__desc">{{ card.desc }}</span>
              </div>
              <ArrowCircle 
                class="resource-card__arrow"
                :class="{ 'resource-card__arrow--white': section.color === 'orange' }"
              />
            </a>
          </div>
        </div>

        <!-- САМОРАЗВИТИЕ -->
        <div class="resources__section">
          <h2 class="resources__selfdev-title">Саморазвитие</h2>
          <div class="resources__cards">
            <a
              v-for="card in selfDevCards"
              :key="card.url"
              :href="card.url"
              target="_blank"
              rel="noopener noreferrer"
              class="resource-card resource-card--outline"
            >
              <div class="resource-card__body">
                <span class="resource-card__title">{{ card.title }}</span>
                <span class="resource-card__desc">{{ card.desc }}</span>
              </div>
              <ArrowCircle class="resource-card__arrow"
              />
            </a>
          </div>
        </div>

      </div>

      <!-- ===== ВКЛАДКА: СОВЕТЫ ===== -->
      <div v-if="activeTab === 'tips'" class="tips">

        <h1 class="tips__title">Советы</h1>

        <div
          v-for="tip in tips"
          :key="tip.id"
          class="tip"
          :class="{
            'tip--bordered': tip.bordered,
            'tip--image-left': tip.imageLeft
          }"
        >
          <!-- Текстовая часть -->
          <div class="tip__content">
            <h2 class="tip__title">{{ tip.title }}</h2>
            <div class="tip__points">
              <div
                v-for="point in tip.points"
                :key="point.num"
                class="tip__point"
              >
                <div class="tip__point-header">
                  <span class="tip__point-num">{{ point.num }}.</span>
                  <span class="tip__point-title">{{ point.title }}</span>
                </div>
                <p class="tip__point-text">{{ point.text }}</p>
              </div>
            </div>
          </div>

          <!-- Изображение -->
          <div class="tip__image-wrap">
            <img
              :src="tip.image"
              :alt="tip.imageAlt"
              class="tip__image"
              :width="tip.imageWidth"
              :height="tip.imageHeight"
            />
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.students-page {
  padding-bottom: 80px;
}

/* ===== ВКЛАДКИ ===== */
.tabs {
  display: flex;
  gap: 0;
  padding-top: 48px;
  margin-bottom: 56px;
  border-bottom: 2px solid rgba(34, 34, 34, 0.12);
}

.tabs__btn {
  padding: 12px 32px;
  font-size: 20px;
  font-weight: var(--font-weight-semibold);
  font-family: inherit;
  color: rgba(34, 34, 34, 0.5);
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  margin-bottom: -2px;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.tabs__btn--active {
  color: var(--color-text);
  border-bottom-color: var(--color-orange);
}

.tabs__btn:hover:not(.tabs__btn--active) {
  color: rgba(34, 34, 34, 0.8);
}

/* ===== ПОЛЕЗНЫЕ РЕСУРСЫ ===== */
.resources__title {
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
  margin-bottom: 65px;
}

.resources__section {
  margin-bottom: 50px;
}

.resources__section-heading {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.resources__section-icon {
  flex-shrink: 0;
  display: block;
  width: 30px;
  height: 30px;
}

.resources__section-title {
  font-size: 32px;
  font-weight: var(--font-weight-semibold);
}

.resources__selfdev-title {
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
  margin-bottom: 24px;
}

/* КАРТОЧКИ РЕСУРСОВ */
.resources__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.resource-card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 35px 40px 35px 40px;
  border-radius: 16px;
  text-decoration: none;
  min-height: 220px;
  transition: transform 0.2s ease, opacity 0.2s ease;
  position: relative;
}

.resource-card:hover {
  transform: translateY(-2px);
  opacity: 0.92;
}

.resource-card--orange {
  background-color: var(--color-orange);
  color: #fff;
}

.resource-card--yellow {
  background-color: var(--color-yellow);
  color: var(--color-text);
}

.resource-card--outline {
  background-color: transparent;
  border: 5px solid var(--color-orange);
  color: var(--color-text);
}

.resource-card__body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.resource-card__title {
  font-size: 28px;
  font-weight: var(--font-weight-semibold);
  line-height: 1.2;
}

.resource-card__desc {
  font-size: 28px;
  font-weight: var(--font-weight-medium);
  line-height: 1.3;
}

.resource-card__arrow {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  align-self: flex-start;
  display: block;
  overflow: visible;
}

.resource-card__arrow--white {
  filter: brightness(0) invert(1);
}
/* ===== СОВЕТЫ ===== */
.tips__title {
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
  margin-bottom: 35px;
}

.tip {
  display: flex;
  align-items: flex-start;
  gap: 60px;
  margin-bottom: 60px;
}

.tip--bordered {
  border: 5px solid var(--color-orange);
  border-radius: 20px;
  padding: 45px;
}

.tip--image-left {
  flex-direction: row-reverse;
}

.tip__content {
  flex: 1;
}

.tip__title {
  font-size: 32px;
  font-weight: var(--font-weight-semibold);
  margin-bottom: 35px;
}

.tip__points {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.tip__point-header {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 10px;
}

.tip__point-num {
  font-size: 28px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-orange);
  flex-shrink: 0;
}

.tip__point-title {
  font-size: 28px;
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
}

.tip__point-text {
  font-size: 28px;
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
  color: rgba(34, 34, 34, 0.75);
  padding-left: 28px;
}

.tip__image-wrap {
  flex-shrink: 0;
  align-self: flex-start;
}

.tip__image {
  display: block;
  width: auto;
  height: auto;
  max-width: 493px;
  object-fit: contain;
}

/* ===== АДАПТИВ ===== */
@media (max-width: 1200px) {
  .resources__cards { grid-template-columns: repeat(2, 1fr); }
  .tip__image { max-width: 360px; }
}

@media (max-width: 1024px) {
  .tip { gap: 40px; }
  .resource-card__title,
  .resource-card__desc { font-size: 22px; }
}

@media (max-width: 768px) {
  .tabs { padding-top: 28px; margin-bottom: 32px; overflow-x: auto; }
  .tabs__btn { padding: 10px 20px; font-size: 16px; white-space: nowrap; }

  /* РЕСУРСЫ мобилка */
  .resources__title { font-size: 28px; margin-bottom: 36px; }
  .resources__section { margin-bottom: 36px; }
  .resources__section-title { font-size: 22px; }
  .resources__selfdev-title { font-size: 28px; }

  .resources__cards { grid-template-columns: 1fr; gap: 14px; }

  .resource-card {
    min-height: auto;
    padding: 20px;
    overflow: hidden;
  }

  .resource-card__title { font-size: 18px; }
  .resource-card__desc { font-size: 15px; }
  .resource-card__arrow { width: 28px; height: 28px; }

  @media (max-width: 768px) {
  .resource-card__arrow {
    width: 35px;
    height: 35px;
    flex-shrink: 0;;
  }
}

  /* СОВЕТЫ мобилка */
  .tips__title { font-size: 28px; margin-bottom: 24px; }

  .tip {
    flex-direction: column !important;
    gap: 24px;
    margin-bottom: 40px;
  }

  .tip--bordered { padding: 24px; }

  .tip__title { font-size: 22px; margin-bottom: 20px; }

  .tip__points { gap: 18px; }

  .tip__point-num { font-size: 20px; }
  .tip__point-title { font-size: 18px; }
  .tip__point-text { font-size: 16px; padding-left: 20px; }

  .tip__image-wrap { width: 100%; display: flex; justify-content: center; }

  .tip__image { max-width: 100%; width: 260px; }
}
</style>