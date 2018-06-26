import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
    state: {
        loadingState: false
    },
    mutations :{
        setLoadingState(bool){
            loadingState = bool
        }
    }
})

// this.$store.commit('setLoadingState',true)

export default store