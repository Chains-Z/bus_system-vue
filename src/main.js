import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import VueAxios from "vue-axios"
import qs from 'qs'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.config.globalProperties.$log = console.log
app.config.globalProperties.qs = qs
axios.defaults.baseURL = 'api'
app.use(VueAxios,axios).use(router).mount('#app')
