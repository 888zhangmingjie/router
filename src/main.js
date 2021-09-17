import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/reset.css'
import Banner from '@/components/Banner'
import ContentBox from '@/components/ContentBox'

Vue.component('Banner', Banner)
Vue.component('ContentBox', ContentBox)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
