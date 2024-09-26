import './assets/main.css'
import './assets/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import router from './router'
import 'primevue/resources/themes/aura-light-green/theme.css'
import AnimateOnScroll from 'primevue/animateonscroll';

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.directive('animateonscroll', AnimateOnScroll);


app.mount('#app')
