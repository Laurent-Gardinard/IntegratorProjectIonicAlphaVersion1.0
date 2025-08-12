<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ recette.titre }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <strong>Ingrédients :</strong>
      <ul>
        <li v-for="(ingredient, index) in recette.ingredients" :key="index">
          {{ ingredient }}
        </li>
      </ul>
      <strong>Instructions :</strong>
      <p>{{ recette.instructions }}</p>
    </ion-card-content>
  </ion-card>
</template>

<script setup>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
defineProps({
  recette: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
ion-card {
  margin-bottom: 16px;
}
</style>