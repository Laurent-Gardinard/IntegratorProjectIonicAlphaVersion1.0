import { createRouter, createWebHistory } from '@ionic/vue-router';

import TabsPage from '../pages/TabsPage.vue';
import Accueil from '../pages/Accueil.vue';
import Stock from '../pages/Stock.vue';
import Recettes from '../pages/Recettes.vue';
import Profil from '../pages/Profil.vue';
import { Route } from 'cypress/types/net-stubbing';
import { RouteRecord, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/tabs/accueil'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/accueil'
      },
      {
        path: 'accueil',
        component: Accueil,
        name: 'accueil',
        meta: { tab: 'accueil' }
      },
      {
        path: 'stock',
        component: Stock,
        name: 'stock',
        meta: { tab: 'stock' }
      },
      {
        path: 'recettes',
        component: Recettes,
        name: 'recettes',
        meta: { tab: 'recettes' }
      },
      {
        path: 'profil',
        component: Profil,
        name: 'profil',
        meta: { tab: 'profil' }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'), // Remplace BASE_URL si non reconnu
  routes
});

export default router;