import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import OutlinePoint from './components/OutlinePoint.vue'

createApp(App)
  .use(store)
  .use(router)
  .component('outline-point', OutlinePoint)
  .mount('#app')
