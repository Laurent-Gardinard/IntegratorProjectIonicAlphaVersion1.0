import { defineStore } from 'pinia';

export const useStockStore = defineStore('stock', {
    state: () => ({
        produits: [] as Array<{ id: number; nom: string; quantite: number; peremption: string }>
    }),
    actions: {
        ajouterProduit(produit: { id: number; nom: string; quantite: number; peremption: string }) {
            this.produits.push(produit);
        },
        supprimerProduit(id: number) {
            this.produits = this.produits.filter(p => p.id !== id);
        },
        modifierProduit(id: number, data: Partial<{ nom: string; quantite: number; peremption: string }>) {
            const produit = this.produits.find(p => p.id === id);
            if (produit) Object.assign(produit, data);
        }
    }
});