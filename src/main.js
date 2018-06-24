
import Vue from 'vue'
import routers from './routers'
import Resource from 'vue-resource'
import VueRouter from 'vue-router'

import Vuex from 'vuex'
import store from './vuex/store'

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'


import App from './App'

Vue.use(Resource)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: routers
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
