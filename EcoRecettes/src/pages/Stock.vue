<template>
  <ion-page>
    <AppHeader />
    <ion-content class="ion-padding">
      <StockManager />
    </ion-content>
    <AppTabs />
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import AppHeader from '@/components/ui/AppHeader.vue';
import AppTabs from '@/components/ui/AppTabs.vue';
import StockManager from '@/components/stock/StockManager.vue';
</script>