<template>
  <ion-list>
    <RecetteCard
      v-for="(recette, index) in recettes.liste"
      :key="index"
      :recette="recette"
    />
  </ion-list>
</template>

<script setup>
import { IonList } from '@ionic/vue';
import { useRecetteStore } from '@/stores/recetteStore';
import RecetteCard from './RecetteCard.vue';

const recettes = useRecetteStore();
</script>