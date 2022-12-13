import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from './HomePage.vue'

const AboutPage = () => import('./AboutPage.vue')

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/about', component: AboutPage, name: 'About' }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})

export { router }
