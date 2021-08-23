import { createRouter, createWebHistory } from 'vue-router'
const menuPage = () => import('../pages/MenuPage')
const cartPage = () => import('../pages/CartPage')

const routes = [
  {
    path: '/',
    name: 'menuLayout',
    component: menuPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: cartPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
