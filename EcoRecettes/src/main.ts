import { createApp } from 'vue';
import App from './App.vue';

// 🧭 Routeur Ionic Vue
import router from './router';

// ⚙️ Ionic Vue + Pinia (store)
import { IonicVue } from '@ionic/vue';
import { createPinia } from 'pinia';

/* 🎨 CSS de base requis pour Ionic */
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* 🧰 Utilitaires CSS optionnels */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* 🌙 Mode sombre basé sur le système */
import '@ionic/vue/css/palettes/dark.system.css';

/* 🎨 Variables de thème personnalisées */
import './theme/variables.css';

// 🚀 Création de l'application Vue
const app = createApp(App)
  .use(IonicVue)       // Intégration du framework Ionic
  .use(createPinia())  // Activation du store Pinia
  .use(router);        // Activation du routeur

// ⏳ Attente que le routeur soit prêt avant le montage
router.isReady().then(() => {
  app.mount('#app');
});