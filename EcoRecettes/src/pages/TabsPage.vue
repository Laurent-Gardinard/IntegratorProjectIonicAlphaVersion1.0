<template>
  <ion-tabs>
    <!-- ✅ Le router-outlet DOIT avoir le nom 'tabs' -->
    <ion-router-outlet id="main" name="tabs"></ion-router-outlet>

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