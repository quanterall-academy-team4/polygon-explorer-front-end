import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blocks from '../views/Blocks.vue'
import Accounts from '../views/Accounts.vue'
import Transactions from '../views/Transactions.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blocks/:arg?',
    name: 'Blocks',
    component: Blocks
  },
 
  {
    path: '/accounts',
    name: 'Accounts',
    component: Accounts
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
