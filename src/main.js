
import Vue from 'vue'
import routers from './routers'
import Resource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(Resource)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: routers
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
