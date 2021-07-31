import { createApp } from 'vue'
import App from './App.vue'
import BigDecimal from 'js-big-decimal'
import ElementUI from 'element-plus'

// import './assets/themeSrc/number1/index.css'
import './assets/theme/leis1/index.css'
import './assets/theme/leis2/index.css'


window.BigDecimal = BigDecimal

const app = createApp(App)

app.use(ElementUI)
app.mount('#app')
