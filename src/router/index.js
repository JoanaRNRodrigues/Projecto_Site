import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'  //SÓ FAZ ISTO PK O HOME É EAGERLY LOADED

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView   //EAGERLY LOADED
  },
  {
    path: '/error',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../views/ErrorView.vue'),   //LAZY LOADED
    props: true
  },
  {
    path: '/bugsentry',
    name: 'bugsentry',
    component: () => import(/* webpackChunkName: "signup" */ '../views/BugsEntryView.vue')   //LAZY LOADED
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUpView.vue')   //LAZY LOADED
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignInView.vue')   //LAZY LOADED
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
