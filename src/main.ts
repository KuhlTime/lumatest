import 'normalize.css'
import { createApp } from 'vue'

import App from '@/App.vue'
import { i18n } from '@locales/i18n'
import { router } from '@pages/router'
import { pinia } from '@store/pinia'
import '@styles/global.scss'

const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.use(router)

app.mount('#app')
