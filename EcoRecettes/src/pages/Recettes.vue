<template>
  <ion-page>
    <AppHeader />
    <ion-content class="ion-padding">
      <RecetteList />
    </ion-content>
    <AppTabs />
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppTabs from '@/components/ui/AppTabs.vue';
import RecetteList from '@/components/recettes/RecetteList.vue';
</script>