import { createI18n } from 'vue-i18n'

import deLocale from './de.json'
import enLocale from './en.json'

const i18n = createI18n({
  locale: 'en', // Set locale
  fallbackLocale: 'de', // Set fallback locale
  messages: {
    de: deLocale,
    en: enLocale
  }
})

export { i18n }
