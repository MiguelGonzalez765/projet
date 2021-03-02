/*  Le plugin Vue-routeur pour pouvoir naviguer à travers lescomposants. */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Accueil from '../views/Accueil.vue';
import Contact from '../views/Contact.vue';
import Projet from '../views/Projet.vue';

Vue.use(VueRouter)
/*  Ici les routes pour le menu */
const routes = [
  {
    path: '/Accueil',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
},
  
  {
    path: '/Projet',
    name: 'Projet',
    component: Projet
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router