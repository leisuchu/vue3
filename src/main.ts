import { createApp } from 'vue'
import App from './App.vue'
import BigDecimal from 'js-big-decimal'

window.BigDecimal = BigDecimal

createApp(App).mount('#app')
