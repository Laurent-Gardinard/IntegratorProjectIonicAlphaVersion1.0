<template>
  <ion-page>
    <AppHeader />
    <ion-content class="ion-padding">
      <h2>Profil utilisateur</h2>
      <p>Fonctionnalités à venir : préférences alimentaires, historique, compte partagé…</p>
    </ion-content>
    <AppTabs />
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppTabs from '@/components/ui/AppTabs.vue';
</script>