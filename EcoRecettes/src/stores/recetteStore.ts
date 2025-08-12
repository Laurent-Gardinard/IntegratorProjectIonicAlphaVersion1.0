import { defineStore } from 'pinia';

export const useRecetteStore = defineStore('recettes', {
    state: () => ({
        liste: [] as Array<{ titre: string; ingredients: string[]; instructions: string }>
    }),
    actions: {
        ajouterRecette(recette: { titre: string; ingredients: string[]; instructions: string }) {
            this.liste.push(recette);
        },
        viderRecettes() {
            this.liste = [];
        }
    }
});