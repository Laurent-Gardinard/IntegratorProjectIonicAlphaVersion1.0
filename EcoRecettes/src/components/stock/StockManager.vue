<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Ajouter un produit</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-input v-model="nom" label="Nom du produit" fill="outline" />
      <ion-input v-model.number="quantite" label="Quantité" type="number" fill="outline" />
      <ion-input v-model="peremption" label="Date de péremption" type="date" fill="outline" />
      <ion-button expand="block" @click="ajouter">Ajouter</ion-button>
    </ion-card-content>
  </ion-card>

  <ion-list>
    <StockItem
      v-for="produit in stock.produits"
      :key="produit.id"
      :produit="produit"
      @supprimer="stock.supprimerProduit"
    />
  </ion-list>
</template>

<script setup>
import { ref } from 'vue';
import { useStockStore } from '@/stores/stockStore';
import StockItem from './StockItem.vue';
import {
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonInput, IonButton, IonList
} from '@ionic/vue';

const stock = useStockStore();
const nom = ref('');
const quantite = ref(1);
const peremption = ref('');

function ajouter() {
  if (!nom.value || !peremption.value) return;
  stock.ajouterProduit({
    id: Date.now(),
    nom: nom.value,
    quantite: quantite.value,
    peremption: peremption.value
  });
  nom.value = '';
  quantite.value = 1;
  peremption.value = '';
}
</script>