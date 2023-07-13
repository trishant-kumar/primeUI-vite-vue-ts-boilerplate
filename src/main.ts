import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

import PrimeVue from 'primevue/config';

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons
import '/node_modules/primeflex/primeflex.css'; // PrimeFlex

import Button from 'primevue/button'  // import Button component

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component("Button", Button)
app.mount('#app')