<template>
  <ion-item>
    <ion-label>
      <h2>{{ produit.nom }}</h2>
      <p>Quantité : {{ produit.quantite }} | Péremption : {{ produit.peremption }}</p>
    </ion-label>
    <ion-button color="danger" @click="$emit('supprimer', produit.id)">Supprimer</ion-button>
  </ion-item>
</template>

<script setup>
import { IonItem, IonLabel, IonButton } from '@ionic/vue';

defineProps({
  produit: {
    type: Object,
    required: true
  }
});

defineEmits(['supprimer']);
</script>

<style scoped>
ion-item {
  margin-bottom: 12px;
}
</style>