import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/free.css'
import '@/assets/css/common.css'
import '@/assets/css/minireset.css'
import '@/assets/css/iconfont.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
