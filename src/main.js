//main.js開啟網頁的預設值
import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';

import'bootstrap'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';


const pinia = createPinia();
const app = createApp(App)

app.use(pinia)
app.use(router)
// Use plugin with optional defaults
app.use(VCalendar, {})

app.mount('#app')
