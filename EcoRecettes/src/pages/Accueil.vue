<template>
  <ion-page class="fade-in">
    <AppHeader />
    <ion-content class="ion-padding">
      <h2>Bienvenue sur EcoRecettes</h2>
      <p>Gérez vos stocks et découvrez des recettes anti-gaspillage.</p>
    </ion-content>
    <AppTabs />
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppTabs from '@/components/ui/AppTabs.vue';
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>