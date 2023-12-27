import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'





import App from './App.vue'
import router from './router'
import store from './store'


import * as echarts from 'echarts'
import * as XLSX from 'xlsx';

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)



app.config.globalProperties.$echarts = echarts

app.use({
    install: (app: any) => {
        app.config.globalProperties.$XLSX = XLSX;
    }
});

app.mount('#app')

