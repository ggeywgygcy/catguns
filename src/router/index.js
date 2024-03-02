import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Addjob from '@/components/Addjob.vue'
import ListStuff from '@/views/ListStuff.vue'
import JodEdit from '@/views/JodEdit.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addjob',
    name: 'addjob',
    component: Addjob
  },
  {
    path: '/liststuff',
    name: 'liststuff',
    component: ListStuff
  },
  {
    path: '/edit:/nic',
    name: 'edit',
    props: 'true',
    component: JodEdit
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
