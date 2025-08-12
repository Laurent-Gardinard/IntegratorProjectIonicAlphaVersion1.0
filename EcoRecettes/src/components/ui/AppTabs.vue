<template>
  <ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="accueil" href="/accueil">
        <ion-icon :icon="home" />
        <ion-label>Accueil</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="stock" href="/stock">
        <ion-icon :icon="cube" />
        <ion-label>Stock</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="recettes" href="/recettes">
        <ion-icon :icon="restaurant" />
        <ion-label>Recettes</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="profil" href="/profil">
        <ion-icon :icon="person" />
        <ion-label>Profil</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script setup>
import {
  IonTabs, IonTabBar, IonTabButton,
  IonIcon, IonLabel
} from '@ionic/vue';
import { home, cube, restaurant, person } from 'ionicons/icons';
</script>