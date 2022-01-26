import { createApp } from 'vue'
import mitt from 'mitt'
import App from './App.vue'

const emitter = mitt()
const app = createApp(App)

// Use the event bus to exchange data between unrelated components
app.config.globalProperties.emitter = emitter

app.mount('#app')
