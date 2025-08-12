<template>
  <ion-tabs>
    <!-- Zone où les pages enfants seront rendues -->
    <ion-router-outlet />

    <!-- Barre d'onglets en bas -->
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="accueil" href="/tabs/accueil">
        <ion-icon :icon="homeOutline" />
        <ion-label>Accueil</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="stock" href="/tabs/stock">
        <ion-icon :icon="cubeOutline" />
        <ion-label>Stock</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="recettes" href="/tabs/recettes">
        <ion-icon :icon="restaurantOutline" />
        <ion-label>Recettes</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="profil" href="/tabs/profil">
        <ion-icon :icon="personOutline" />
        <ion-label>Profil</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script setup>
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/vue';

import {
  homeOutline,
  cubeOutline,
  restaurantOutline,
  personOutline
} from 'ionicons/icons';
</script>

<style scoped>
/* Tu peux ajouter ici des styles personnalisés pour la barre d'onglets si besoin */
</style>