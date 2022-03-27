import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'  //SÓ FAZ ISTO PK O HOME É EAGERLY LOADED

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView   //EAGERLY LOADED
  },
  {
    path: '/bugsentry',
    name: 'bugsentry',
    component: () => import(/* webpackChunkName: "signup" */ '../views/BugsEntryView.vue')   //LAZY LOADED
  },
  {
    path: '/bugslist',
    name: 'bugslist',
    component: () => import(/* webpackChunkName: "signup" */ '../views/BugsListView.vue')   //LAZY LOADED
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

  //Talvez mudar o About para Polinator Gardens
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "signup" */ '../views/AboutView.vue')   //LAZY LOADED
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "signup" */ '../views/ContactView.vue')   //LAZY LOADED
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../views/ErrorView.vue'),   //LAZY LOADED
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
