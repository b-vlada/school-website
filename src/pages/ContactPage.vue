<script setup lang="ts">
import { ref } from 'vue'
import QuestionIcon from '@/assets/icons/question-icon.svg'

interface FormData {
  topic: string
  name: string
  email: string
  phone: string
  message: string
}

const topics = [
  'Общий вопрос',
  'Написать учителю',
  'Записать ребёнка в школу',
  'Предложение / идея',
  'Жалоба / проблема',
  'Другое',
]

const form = ref<FormData>({
  topic: '',
  name: '',
  email: '',
  phone: '',
  message: '',
})

const submitted = ref(false)
const loading = ref(false)

async function handleSubmit() {
  loading.value = true

  const subject = encodeURIComponent(`[Сайт школы] ${form.value.topic || 'Обращение'}`)
  const body = encodeURIComponent(
    `Тема: ${form.value.topic}\n` +
    `Имя: ${form.value.name}\n` +
    `Email: ${form.value.email}\n` +
    `Телефон: ${form.value.phone || 'не указан'}\n\n` +
    `Сообщение:\n${form.value.message}`
  )
  window.location.href = `mailto:zarsosh@mail.ru?subject=${subject}&body=${body}`
  loading.value = false
  submitted.value = true
}

function resetForm() {
  form.value = { topic: '', name: '', email: '', phone: '', message: '' }
  submitted.value = false
}
</script>

<template>
  <div class="contact-page">
    <div class="container">

      <div class="contact-page__header">
        <QuestionIcon class="contact-page__icon" />
        <h1 class="contact-page__title">Написать нам</h1>
      </div>

      <p class="contact-page__desc">
        Заполните форму — мы ответим в течение 1–2 рабочих дней.<br>
        Или напишите напрямую:
        <a href="mailto:zarsosh@mail.ru" class="contact-page__email">zarsosh@mail.ru</a>
      </p>

      <div v-if="submitted" class="contact-success">
        <div class="contact-success__icon">✓</div>
        <h2 class="contact-success__title">Сообщение отправлено!</h2>
        <p class="contact-success__text">
          Откроется ваш почтовый клиент с заполненным письмом.<br>
          Отправьте его — и мы ответим в течение 1–2 рабочих дней.
        </p>
        <button class="btn" @click="resetForm">Отправить ещё</button>
      </div>

      <form v-else class="contact-form" @submit.prevent="handleSubmit">

        <div class="contact-form__field">
          <label class="contact-form__label">Тема обращения</label>
          <div class="contact-form__select-wrap">
            <select v-model="form.topic" class="contact-form__select" required>
              <option value="" disabled>Выберите тему...</option>
              <option v-for="t in topics" :key="t" :value="t">{{ t }}</option>
            </select>
          </div>
        </div>

        <div class="contact-form__field">
          <label class="contact-form__label">Ваше имя <span class="contact-form__required">*</span></label>
          <input
            v-model="form.name"
            type="text"
            class="contact-form__input"
            placeholder="Иванова Мария Петровна"
            required
          />
        </div>

        <div class="contact-form__row">
          <div class="contact-form__field">
            <label class="contact-form__label">Email <span class="contact-form__required">*</span></label>
            <input
              v-model="form.email"
              type="email"
              class="contact-form__input"
              placeholder="example@mail.ru"
              required
            />
          </div>
          <div class="contact-form__field">
            <label class="contact-form__label">Телефон</label>
            <input
              v-model="form.phone"
              type="tel"
              class="contact-form__input"
              placeholder="+7 (999) 000-00-00"
            />
          </div>
        </div>

        <div class="contact-form__field">
          <label class="contact-form__label">Сообщение <span class="contact-form__required">*</span></label>
          <textarea
            v-model="form.message"
            class="contact-form__input contact-form__textarea"
            placeholder="Напишите ваш вопрос или сообщение..."
            required
          ></textarea>
        </div>

        <div class="contact-form__footer">
          <p class="contact-form__note">
            * — обязательные поля. Нажимая кнопку, вы соглашаетесь<br>
            с политикой конфиденциальности.
          </p>
          <button type="submit" class="btn" :disabled="loading">
            {{ loading ? 'Отправка...' : 'Отправить' }}
          </button>
        </div>

      </form>

    </div>
  </div>
</template>

<style scoped>
.contact-page {
  padding-bottom: 80px;
}

.contact-page__header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 60px;
  margin-bottom: 20px;
}

.contact-page__icon {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  overflow: visible;
  display: block;
}

.contact-page__title {
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
  line-height: 1;
}

.contact-page__desc {
  font-size: 20px;
  font-weight: var(--font-weight-medium);
  color: rgba(34, 34, 34, 0.7);
  line-height: 1.6;
  margin-bottom: 48px;
}

.contact-page__email {
  color: var(--color-orange);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.contact-page__email:hover {
  opacity: 0.75;
}

.contact-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 64px 0;
  gap: 20px;
}

.contact-success__icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: var(--color-yellow);
  border: 2px solid var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: var(--font-weight-semibold);
}

.contact-success__title {
  font-size: 32px;
  font-weight: var(--font-weight-semibold);
}

.contact-success__text {
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  color: rgba(34, 34, 34, 0.7);
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 800px;
}

.contact-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.contact-form__field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-form__label {
  font-size: 18px;
  font-weight: var(--font-weight-semibold);
}

.contact-form__required {
  color: var(--color-orange);
}

.contact-form__input {
  border: 2px solid #4F4F4F;
  border-radius: 16px;
  padding: 14px 18px;
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  font-family: inherit;
  background-color: transparent;
  color: var(--color-text);
  transition: border-color 0.2s ease;
  width: 100%;
}

.contact-form__input::placeholder {
  color: #A0A0A0;
}

.contact-form__input:focus {
  outline: none;
  border-color: var(--color-orange);
}

.contact-form__select-wrap {
  position: relative;
}

.contact-form__select {
  appearance: none;
  width: 100%;
  border: 2px solid #4F4F4F;
  border-radius: 16px;
  padding: 14px 18px;
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  font-family: inherit;
  background-color: var(--color-bg);
  color: var(--color-text);
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.contact-form__select:focus {
  outline: none;
  border-color: var(--color-orange);
}

.contact-form__select-wrap::after {
  content: '▾';
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 18px;
  color: var(--color-text);
}

.contact-form__textarea {
  min-height: 160px;
  resize: vertical;
}

.contact-form__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.contact-form__note {
  font-size: 14px;
  font-weight: var(--font-weight-regular);
  color: rgba(34, 34, 34, 0.5);
  line-height: 1.5;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

@media (max-width: 768px) {
  .contact-page__header {
    padding-top: 32px;
    gap: 12px;
    margin-bottom: 16px;
  }

  .contact-page__icon {
    width: 40px;
    height: 40px;
  }

  .contact-page__title { font-size: 28px; }

  .contact-page__desc {
    font-size: 16px;
    margin-bottom: 32px;
  }

  .contact-form { gap: 20px; }

  .contact-form__row {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .contact-form__label { font-size: 16px; }

  .contact-form__input,
  .contact-form__select {
    font-size: 16px;
    padding: 12px 14px;
  }

  .contact-form__footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .contact-form__footer .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>