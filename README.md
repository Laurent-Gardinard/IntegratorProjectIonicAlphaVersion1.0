# IntegratorProjectIonicAlphaVersion1.0
### 🍽️ EcoRecettes ###

**EcoRecettes** est une application mobile développée avec **Ionic Vue** qui aide à lutter contre le gaspillage alimentaire en gérant intelligemment les stocks domestiques et en générant des recettes personnalisées grâce à l’intelligence artificielle.

---

## 📱 Objectif

Réduire le gaspillage alimentaire à la maison en proposant des recettes adaptées aux ingrédients disponibles, tout en facilitant la gestion des stocks alimentaires.

---

## 🚀 Fonctionnalités principales

### 🧊 Gestion des stocks
- Ajout, modification et suppression de produits alimentaires
- Suivi des quantités, dates d’achat et de péremption
- Catégorisation des aliments (frais, sec, surgelé…)
- Notifications pour les produits à consommer bientôt

### 🤖 Générateur de recettes IA
- Recettes personnalisées selon les ingrédients disponibles
- Prise en compte des préférences alimentaires (végétarien, sans lactose…)
- Filtres par temps de préparation, difficulté, type de plat

### 🧼 Anti-gaspillage
- Recettes « vide-frigo » avec produits proches de la péremption
- Statistiques sur les produits consommés ou gaspillés

### 👥 Comptes et données utilisateur
- Création de compte (email ou réseaux sociaux)
- Historique des recettes et des stocks
- Inventaire partagé entre membres d’un foyer

---

## ⚙️ Technologies utilisées

- **Ionic Framework** (Vue 3)
- **Capacitor** pour les fonctionnalités natives
- **OpenAI API** pour la génération de recettes
- **Pinia** pour la gestion d’état
- **IndexedDB / SQLite** pour le mode hors-ligne
- **Firebase / Supabase** (optionnel) pour l’authentification et la base de données

---

## 📦 Installation

```bash
git clone https://github.com/ton-utilisateur/EcoRecettes.git
cd EcoRecettes
npm install
ionic serve
