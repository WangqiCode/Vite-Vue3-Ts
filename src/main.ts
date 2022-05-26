import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import { createPinia } from 'pinia'
import Service from './service/core/index'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import 'normalize.css'
import './styles/index.scss'

createApp(App).use(Router).use(Service).use(createPinia).mount('#app')
