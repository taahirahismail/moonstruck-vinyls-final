import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import sweet from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(store).use(router).use(sweet).mount('#app')
