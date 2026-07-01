<script setup lang="ts">
import ArrowOrange from '@/assets/icons/arrow-orange.svg'

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
    qualifications: '2024 г "Освоение примирительных технологий в разрешении школьных конфликтов. Медиационные практики в работе медиатора ОО"',
    totalExperience: '34 г 7 мес',
    specialtyExperience: '14 лет 8 мес',
  },
  {
    id: 2,
    name: 'Попов Павел Алексеевич',
    position: 'Учитель физической культуры',
    subjects: 'Физическая культура, ОБЖ',
    qualifications: '2025 г "Основы физической культуры и спорта для обучающихся с низкими образовательными результатами в соответствии с обновлёнными ФГОС"',
    totalExperience: '36 лет',
    specialtyExperience: '5 лет',
  },
  {
    id: 3,
    name: 'Горбачева Елена Степановна',
    position: 'Учитель технологии',
    subjects: 'Технология, ИЗО, музыка',
    qualifications: '2024 г "Освоение примирительных технологий в разрешении школьных конфликтов. Медиационные практики в работе медиатора ОО"',
    totalExperience: '34 года 4 мес',
    specialtyExperience: '34 года 4 мес',
  },
  {
    id: 4,
    name: 'Баскакова Алена Александровна',
    position: 'Учитель начальных классов',
    subjects: 'Начальные классы',
    qualifications: '-',
    totalExperience: '39 лет 5 мес',
    specialtyExperience: '39 лет 5 мес',
  },
  {
    id: 5,
    name: 'Ханыкова Татьяна Юрьевна',
    position: 'Учитель начальных классов',
    subjects: 'Начальные классы',
    qualifications: '-',
    totalExperience: '34 года 5 мес',
    specialtyExperience: '34 года 5 мес',
  },
  {
    id: 6,
    name: 'Ланская Юлия Александровна',
    position: 'Учитель начальных классов',
    subjects: 'Начальные классы',
    qualifications: '2024 г "Особенности начальной углубленной подготовки по математике в условиях реализации ФГОС НОО',
    totalExperience: '2 г 7 мес',
    specialtyExperience: '1 г 8 мес',
  },
  {
    id: 7,
    name: 'Громова Евгения Валерьевна',
    position: 'Учитель иностранного языка',
    subjects: 'Английский язык',
    qualifications: '2025 г "Актуальные вопросы преподавания английского языка в условиях реализации обновленного ФГОС ОО"',
    totalExperience: '13 лет 3 мес',
    specialtyExperience: '10 лет 3 мес',
  },
  {
    id: 8,
    name: 'Дельдюжова Ирина Николаевна',
    position: 'Учитель русского языка и литературы',
    subjects: 'Русский язык, литература',
    qualifications: '2025 г "Особенности образования детей с задержкой психического развития"',
    totalExperience: '33 года 1 мес',
    specialtyExperience: '25 лет 5 мес',
  },
  {
    id: 9,
    name: 'Михайлова Юлия Алексеевна',
    position: 'Учитель русского языка и литературы',
    subjects: 'Русский язык, литература',
    qualifications: '-',
    totalExperience: '17 лет 2 мес',
    specialtyExperience: '11 лет 2 мес',
  },
  {
    id: 10,
    name: 'Червова Екатерина Николаевна',
    position: 'Учитель математики',
    subjects: 'Алгебра, геометрия, вероятность и статистика, информатика, физика',
    qualifications: '2025 г "Технология подготовки школьников к ВПР по математике в условиях реализации ФОП ОО"',
    totalExperience: '31 год 7 мес',
    specialtyExperience: '31 год 7 мес',
  },
  {
    id: 11,
    name: 'Чеканова Нина Трофимовна',
    position: 'Учитель начальных классов',
    subjects: 'Начальные классы',
    qualifications: '-',
    totalExperience: '39 лет 5 мес',
    specialtyExperience: '39 лет 5 мес',
  },
]
</script>

<template>
  <div class="teachers-page">
    <div class="container">

      <div class="teachers-page__header">
        <h1 class="teachers-page__title">Наши педагоги</h1>
        <ArrowOrange
          style="width: 100px; height: 71px; flex-shrink: 0; display: block; overflow: visible;"
        />
      </div>

      <div class="teachers-grid">
        <div
          v-for="teacher in teachers"
          :key="teacher.id"
          class="teacher-card"
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
              <span class="teacher-card__label">Сведения о повышении квалификации (за последние 3 года):</span>
              <span class="teacher-card__value">{{ teacher.qualifications }}</span>
            </div>
            <div class="teacher-card__item">
              <span class="teacher-card__label">Общий стаж работы:</span>
              <span class="teacher-card__value">{{ teacher.totalExperience }}</span>
            </div>
            <div class="teacher-card__item">
              <span class="teacher-card__label">Стаж работы по специальности:</span>
              <span class="teacher-card__value">{{ teacher.specialtyExperience }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.teachers-page {
  padding-bottom: 80px;
}

.teachers-page__header {
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 60px;
  margin-bottom: 60px;
}

.teachers-page__title {
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
  line-height: 1;
}

.teachers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
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
  margin: 0 auto
}

.teacher-card__content {
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
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

@media (max-width: 1024px) {
  .teachers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .teachers-page__header {
    padding-top: 32px;
    margin-bottom: 45px;
    gap: 8px;
  }

  .teachers-page__title {
    font-size: 24px;
  }

  .teachers-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .teacher-card__name {
    font-size: 18px;
    padding: 20px 16px 0;
  }

  .teacher-card__content {
    padding: 20px 16px;
    gap: 14px;
  }

  .teacher-card__label,
  .teacher-card__value {
    font-size: 14px;
  }
}
</style>